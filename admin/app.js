/* Baril Group — content overview & editor.
   Browses every umbrella page (read-only, no login), lists ALL text, images and
   links with badges (editable / external source / external link), and — with a
   GitHub fine-grained token — commits edits straight to the source file. */
(() => {
  'use strict';

  const REPO = 'tduijghuisen/baril-group-site';
  const BRANCH = 'main';
  const SITE_BASE = location.href.replace(/\/admin\/[^/]*$/, '/');
  const MEDIA = /\.(jpe?g|png|webp|gif|svg|mp4|webm|avif)(\?.*)?$/i;

  const PAGES = [
    { key:'group',     label:'Baril Group (home)',        path:'index.html',                         dir:'' },
    { key:'coatings',  label:'Baril Coatings (home)',     path:'barilcoatings/index.html',           dir:'barilcoatings' },
    { key:'aquaran',   label:'Coatings · Aquaran',        path:'barilcoatings/aquaran/index.html',   dir:'barilcoatings/aquaran' },
    { key:'dualcure',  label:'Coatings · DualCure',       path:'barilcoatings/dualcure/index.html',  dir:'barilcoatings/dualcure' },
    { key:'steelkote', label:'Coatings · SteelKote',      path:'barilcoatings/steelkote/index.html', dir:'barilcoatings/steelkote' },
    { key:'bariline',  label:'Coatings · Bariline',       path:'barilcoatings/bariline/index.html',  dir:'barilcoatings/bariline' },
    { key:'products',  label:'Coatings · Productcatalogus', path:'barilcoatings/products/index.html', dir:'barilcoatings/products',
      note:'De producten zelf komen uit products.json (apart databestand) en verschijnen hier niet.' },
    { key:'nixol',     label:'Nixol',                     path:'nixol/index.html',                   dir:'nixol' },
    { key:'tintlab',   label:'TintLab',                   path:'tintlab/index.html',                 dir:'tintlab' },
    { key:'copperant', label:'Copperant',                 path:'copperant/index.html',               dir:'copperant' },
    { key:'fairf',     label:'Fairf',                     path:'fairf/index.html',                   dir:'fairf' }
  ];

  // Images mirrored from the brands' own websites.
  const EXTERNAL_ASSETS = {
    'fairf/assets/img/hero.jpg':'fairf.eu',
    'fairf/assets/img/fairf-black.png':'fairf.eu',
    'fairf/assets/img/fairf-white.png':'fairf.eu',
    'fairf/assets/img/favicon.png':'fairf.eu',
    'copperant/assets/img/copperant-black.svg':'copperant.com',
    'copperant/assets/img/copperant-white.svg':'copperant.com',
    'copperant/assets/img/hero-painter.jpg':'copperant.com'
  };
  const EXT_DOMAINS = ['barilcoatings.com','barilcoatings.us','data.barilcoatings.com','copperant.com','fairf.eu','karwei','linkedin.com','facebook.com','instagram.com','youtube','google.'];

  // ---------- auth / github ----------
  const tokenKey = 'cms-gh-token';
  const getToken = () => { try { return localStorage.getItem(tokenKey) || ''; } catch(e){ return ''; } };
  const setToken = t => { try { t ? localStorage.setItem(tokenKey,t) : localStorage.removeItem(tokenKey); } catch(e){} };
  const ghHeaders = () => { const h={ 'Accept':'application/vnd.github+json' }; const t=getToken(); if(t) h.Authorization='Bearer '+t; return h; };
  const b64enc = s => btoa(unescape(encodeURIComponent(s)));
  const b64dec = s => decodeURIComponent(escape(atob(String(s).replace(/\n/g,''))));

  async function ghGet(path){
    const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`, { headers: ghHeaders() });
    if(!r.ok) throw new Error('GitHub GET '+r.status+' '+(await r.text()).slice(0,120));
    const j = await r.json();
    return { sha:j.sha, text:b64dec(j.content) };
  }
  async function ghPut(path, text, sha, message){
    const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}`, {
      method:'PUT', headers:{ ...ghHeaders(), 'Content-Type':'application/json' },
      body: JSON.stringify({ message, content:b64enc(text), sha, branch:BRANCH })
    });
    if(!r.ok){ let m; try{ m=(await r.json()).message; }catch(e){ m=r.status; } throw new Error('GitHub PUT mislukt: '+m); }
    return r.json();
  }

  // ---------- scanning ----------
  function repoPathOf(page, val){
    if(/^(https?:)?\/\//i.test(val) || val.startsWith('data:') || val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('tel:')) return null;
    try { const u = new URL(val, 'http://x/'+(page.dir?page.dir+'/':'')); return u.pathname.replace(/^\//,''); } catch(e){ return null; }
  }
  const isExtDomain = v => /^(https?:)?\/\//i.test(v) && EXT_DOMAINS.some(d => v.includes(d));

  function tokenize(html, page){
    const items = [];
    const counts = { text:0, image:0, link:0 };
    const reTok = /<(script|style)\b[\s\S]*?<\/\1>|<!--[\s\S]*?-->|<[^>]*>|[^<]+/gi;
    let m;
    // text runs
    while((m = reTok.exec(html))){
      const tok = m[0];
      if(tok[0] !== '<'){
        if(tok.trim().length && !/^\s+$/.test(tok)){
          items.push({ cat:'text', value:tok, start:m.index, end:m.index+tok.length, ord:counts.text++, badge:'edit', external:false });
        }
      }
    }
    // attributes: src / href
    const reAttr = /\b(src|href)\s*=\s*"([^"]*)"/gi;
    while((m = reAttr.exec(html))){
      const attr = m[1].toLowerCase(), val = m[2];
      const vStart = m.index + m[0].indexOf('"') + 1, vEnd = vStart + val.length;
      if(!val || val.startsWith('data:')) continue;
      if(MEDIA.test(val)){
        const rp = repoPathOf(page, val);
        const src = (/^(https?:)?\/\//i.test(val) && (EXT_DOMAINS.find(d=>val.includes(d))||'extern')) || (rp && EXTERNAL_ASSETS[rp]);
        items.push({ cat:'image', value:val, start:vStart, end:vEnd, ord:counts.image++, badge: src?'ext':'edit', external:!!src, source: src||'' });
      } else if(attr === 'href'){
        if(val.endsWith('.css') || val.startsWith('#') ) continue;
        const ext = isExtDomain(val);
        const src = ext ? (EXT_DOMAINS.find(d=>val.includes(d))||'extern') : '';
        items.push({ cat:'link', value:val, start:vStart, end:vEnd, ord:counts.link++, badge: ext?'ext':'link', external:ext, source:src });
      }
    }
    return items;
  }

  function absUrl(page, val){
    if(/^(https?:)?\/\//i.test(val)) return val.startsWith('//')?'https:'+val:val;
    try { return new URL(val, SITE_BASE + (page.dir?page.dir+'/':'')).href; } catch(e){ return val; }
  }

  // ---------- state ----------
  const store = {}; // key -> {page, items, error}
  let filterCat = 'all', q = '', extOnly = false;

  // ---------- rendering ----------
  const $ = s => document.querySelector(s);
  const content = $('#content'), pageNav = $('#pageNav'), summary = $('#summary');

  function badgeHTML(it){
    if(it.cat==='image') return it.external ? `<span class="badge ext">Externe bron: ${it.source}</span>` : `<span class="badge edit">Bewerkbaar</span>`;
    if(it.cat==='link')  return it.external ? `<span class="badge ext">Externe link: ${it.source}</span>` : `<span class="badge link">Interne link</span>`;
    return `<span class="badge edit">Bewerkbaar</span>`;
  }
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  function itemHTML(pkey, it, idx){
    const id = `${pkey}|${it.cat}|${it.ord}`;
    let thumb = '';
    if(it.cat==='image'){ const u = absUrl(store[pkey].page, it.value); thumb = `<div class="thumb" style="background-image:url('${u.replace(/'/g,"%27")}')"></div>`; }
    else thumb = `<div class="thumb" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:var(--mono);font-size:11px">${it.cat==='link'?'LINK':'TXT'}</div>`;
    const valCls = it.cat==='text' ? 'val' : 'val code';
    return `<div class="item" data-id="${id}">
      ${thumb}
      <div class="body">
        <div class="badges">${badgeHTML(it)}<span class="badge kind">${it.cat}</span></div>
        <div class="${valCls}">${esc(it.value)}</div>
        <div class="editrow">
          ${it.cat==='text' ? `<textarea>${esc(it.value)}</textarea>` : `<input type="text" value="${esc(it.value).replace(/"/g,'&quot;')}">`}
          <div class="row-msg"></div>
        </div>
      </div>
      <div class="actions">
        <button class="tinybtn edit-toggle">Bewerken</button>
        <button class="tinybtn save" hidden>Opslaan</button>
        <button class="tinybtn cancel ghost" hidden>Sluit</button>
      </div>
    </div>`;
  }

  function matches(it){
    if(filterCat!=='all' && it.cat!==filterCat) return false;
    if(extOnly && !it.external) return false;
    if(q && !(it.value.toLowerCase().includes(q) || (it.source||'').toLowerCase().includes(q))) return false;
    return true;
  }

  function render(){
    let total=0, shown=0;
    const secs = PAGES.map(p => {
      const st = store[p.key]; if(!st) return '';
      if(st.error) return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label}</h2><p class="pgnote err" style="color:var(--red)">Kon pagina niet laden: ${esc(st.error)}</p></section>`;
      const cats = [['text','Teksten'],['image','Afbeeldingen'],['link','Links']];
      let body='';
      for(const [c,clabel] of cats){
        const list = st.items.filter(it=>it.cat===c);
        const vis = list.filter(matches);
        total += list.length; shown += vis.length;
        if(!vis.length) continue;
        body += `<div class="grp">${clabel} · ${vis.length}</div>` + vis.map((it,i)=>itemHTML(p.key,it,i)).join('');
      }
      if(!body) return '';
      const note = p.note ? `<p class="pgnote">${p.note}</p>` : '';
      return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label} <a href="${SITE_BASE}${p.path}" target="_blank" rel="noopener">live ↗</a></h2>${note}${body}</section>`;
    }).join('');
    content.innerHTML = secs || `<p class="hint">Niets gevonden voor deze filter.</p>`;
    summary.textContent = `${shown} van ${total} items`;
  }

  function buildNav(){
    pageNav.innerHTML = PAGES.map(p=>`<a href="#sec-${p.key}">${p.label}</a>`).join('');
  }

  // ---------- editing ----------
  content.addEventListener('click', async e => {
    const item = e.target.closest('.item'); if(!item) return;
    const [pkey,cat,ord] = item.dataset.id.split('|');
    if(e.target.classList.contains('edit-toggle')){
      if(!getToken()){ openModal('Log eerst in met een GitHub-token om te bewerken.'); return; }
      item.classList.add('editing');
      item.querySelector('.edit-toggle').hidden = true;
      item.querySelector('.save').hidden = false;
      item.querySelector('.cancel').hidden = false;
    }
    if(e.target.classList.contains('cancel')){ closeEdit(item); }
    if(e.target.classList.contains('save')){
      const field = item.querySelector('textarea,input');
      const msg = item.querySelector('.row-msg');
      const st = store[pkey]; const it = st.items.find(x=>x.cat===cat && String(x.ord)===ord);
      const newVal = field.value;
      if(newVal === it.value){ closeEdit(item); return; }
      e.target.disabled = true; msg.textContent='Opslaan…'; msg.className='row-msg';
      try {
        await saveItem(st.page, it, newVal);
        it.value = newVal;
        item.querySelector('.val').innerHTML = esc(newVal);
        if(cat==='image'){ const u=absUrl(st.page,newVal); item.querySelector('.thumb').style.backgroundImage=`url('${u.replace(/'/g,"%27")}')`; }
        msg.textContent='Opgeslagen ✓ — live over ~1–2 min.'; msg.className='row-msg ok';
        setTimeout(()=>closeEdit(item), 900);
      } catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
      e.target.disabled = false;
    }
  });
  function closeEdit(item){
    item.classList.remove('editing');
    item.querySelector('.edit-toggle').hidden=false;
    item.querySelector('.save').hidden=true;
    item.querySelector('.cancel').hidden=true;
    const f=item.querySelector('textarea,input'); const v=item.querySelector('.val').textContent; if(f) f.value=v;
    item.querySelector('.row-msg').textContent='';
  }

  // Re-fetch the raw source, locate the same item by category+ordinal, replace exact slice, commit.
  async function saveItem(page, it, newVal){
    const { sha, text } = await ghGet(page.path);
    const fresh = tokenize(text, page).filter(x=>x.cat===it.cat);
    const tgt = fresh[it.ord];
    if(!tgt || tgt.value !== it.value) throw new Error('Bron is gewijzigd sinds laden — herlaad de pagina.');
    const updated = text.slice(0, tgt.start) + newVal + text.slice(tgt.end);
    await ghPut(page.path, updated, sha, `CMS: ${page.key} — ${it.cat} bijgewerkt`);
  }

  // ---------- load ----------
  async function loadAll(){
    await Promise.all(PAGES.map(async p => {
      try { const r = await fetch(SITE_BASE + p.path, { cache:'no-cache' }); const html = await r.text();
            store[p.key] = { page:p, items: tokenize(html, p) }; }
      catch(err){ store[p.key] = { page:p, error: err.message }; }
    }));
    buildNav(); render();
  }

  // ---------- controls ----------
  $('#search').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); render(); });
  $('#extOnly').addEventListener('change', e => { extOnly = e.target.checked; render(); });
  const catWrap = $('#catFilters');
  [['all','Alles'],['text','Teksten'],['image','Afbeeldingen'],['link','Links']].forEach(([c,l])=>{
    const b=document.createElement('button'); b.className='chip'+(c==='all'?' active':''); b.textContent=l; b.dataset.cat=c;
    b.addEventListener('click',()=>{ filterCat=c; [...catWrap.children].forEach(x=>x.classList.toggle('active',x===b)); render(); });
    catWrap.appendChild(b);
  });

  // ---------- auth UI ----------
  const modal=$('#authModal');
  const openModal = (m)=>{ $('#tokenMsg').textContent=m||''; $('#tokenMsg').className='msg'; $('#tokenInput').value=getToken(); modal.hidden=false; };
  $('#authBtn').addEventListener('click',()=>openModal());
  $('#tokenCancel').addEventListener('click',()=>modal.hidden=true);
  $('#logoutBtn').addEventListener('click',()=>{ setToken(''); reflectAuth(); modal.hidden=true; });
  $('#tokenSave').addEventListener('click', async ()=>{
    const t=$('#tokenInput').value.trim(); if(!t){ return; }
    setToken(t); const msg=$('#tokenMsg'); msg.textContent='Token controleren…'; msg.className='msg';
    try { const r=await fetch(`https://api.github.com/repos/${REPO}`,{headers:ghHeaders()}); if(!r.ok) throw new Error('geen toegang ('+r.status+')');
      const j=await r.json(); if(!j.permissions || !j.permissions.push) msg.textContent='Let op: token heeft geen schrijfrechten — opslaan zal falen.';
      else { msg.textContent='Gelukt ✓'; msg.className='msg ok'; }
      reflectAuth(); setTimeout(()=>{ if(modal && (j.permissions&&j.permissions.push)) modal.hidden=true; }, 700);
    } catch(err){ msg.textContent='Token werkt niet: '+err.message; msg.className='msg err'; setToken(''); reflectAuth(); }
  });
  function reflectAuth(){
    const on=!!getToken(); const s=$('#authState');
    s.textContent = on ? 'Ingelogd · kan bewerken' : 'Niet ingelogd · alleen-lezen';
    s.classList.toggle('ok', on);
    $('#authBtn').textContent = on ? 'Token wijzigen' : 'Inloggen met GitHub-token';
  }

  reflectAuth();
  loadAll();
})();
