/* Baril Group — content overview & editor.
   Lists ALL text, images, links AND translations (NL/PL/RO) across the umbrella,
   with badges (editable / external source / external link). Browses read-only
   without login; with a GitHub fine-grained token it commits edits — and can
   replace/upload images — straight to the source files via the Contents API. */
(() => {
  'use strict';

  const REPO = 'tduijghuisen/baril-group-site';
  const BRANCH = 'main';
  const SITE_BASE = location.href.replace(/\/admin\/[^/]*$/, '/');
  const MEDIA = /\.(jpe?g|png|webp|gif|svg|mp4|webm|avif)(\?.*)?$/i;

  const PAGES = [
    { key:'group',     label:'Baril Group (home)',          path:'index.html',                         dir:'',                     i18n:'js/i18n.js' },
    { key:'coatings',  label:'Baril Coatings (home)',       path:'barilcoatings/index.html',           dir:'barilcoatings',        i18n:'barilcoatings/js/i18n.js' },
    { key:'aquaran',   label:'Coatings · Aquaran',          path:'barilcoatings/aquaran/index.html',   dir:'barilcoatings/aquaran' },
    { key:'dualcure',  label:'Coatings · DualCure',         path:'barilcoatings/dualcure/index.html',  dir:'barilcoatings/dualcure' },
    { key:'steelkote', label:'Coatings · SteelKote',        path:'barilcoatings/steelkote/index.html', dir:'barilcoatings/steelkote' },
    { key:'bariline',  label:'Coatings · Bariline',         path:'barilcoatings/bariline/index.html',  dir:'barilcoatings/bariline' },
    { key:'lines-i18n',label:'Coatings productlijnen · vertalingen (gedeeld)', i18nOnly:true, dir:'barilcoatings', i18n:'barilcoatings/js/brand-i18n.js' },
    { key:'products',  label:'Coatings · Productcatalogus', path:'barilcoatings/products/index.html',  dir:'barilcoatings/products',
      note:'De producten zelf komen uit products.json (apart databestand) en verschijnen hier niet.' },
    { key:'nixol',     label:'Nixol',                       path:'nixol/index.html',                   dir:'nixol',     i18n:'nixol/js/i18n.js' },
    { key:'tintlab',   label:'TintLab',                     path:'tintlab/index.html',                 dir:'tintlab',   i18n:'tintlab/js/i18n.js' },
    { key:'copperant', label:'Copperant',                   path:'copperant/index.html',               dir:'copperant', i18n:'copperant/js/i18n.js' },
    { key:'fairf',     label:'Fairf',                       path:'fairf/index.html',                   dir:'fairf',     i18n:'fairf/js/i18n.js' }
  ];

  const EXTERNAL_ASSETS = {
    'fairf/assets/img/hero.jpg':'fairf.eu', 'fairf/assets/img/fairf-black.png':'fairf.eu',
    'fairf/assets/img/fairf-white.png':'fairf.eu', 'fairf/assets/img/favicon.png':'fairf.eu',
    'copperant/assets/img/copperant-black.svg':'copperant.com', 'copperant/assets/img/copperant-white.svg':'copperant.com',
    'copperant/assets/img/hero-painter.jpg':'copperant.com'
  };
  const EXT_DOMAINS = ['barilcoatings.com','barilcoatings.us','data.barilcoatings.com','copperant.com','fairf.eu','karwei','linkedin.com','facebook.com','instagram.com','youtube','google.'];

  // ---------- auth / github ----------
  const tokenKey = 'cms-gh-token';
  const getToken = () => { try { return localStorage.getItem(tokenKey)||''; } catch(e){ return ''; } };
  const setToken = t => { try { t?localStorage.setItem(tokenKey,t):localStorage.removeItem(tokenKey); } catch(e){} };
  const ghHeaders = () => { const h={ 'Accept':'application/vnd.github+json' }; const t=getToken(); if(t) h.Authorization='Bearer '+t; return h; };
  const b64enc = s => btoa(unescape(encodeURIComponent(s)));
  const b64dec = s => decodeURIComponent(escape(atob(String(s).replace(/\n/g,''))));

  async function ghGet(path){
    const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`, { headers: ghHeaders() });
    if(!r.ok) throw new Error('GitHub GET '+r.status);
    const j = await r.json(); return { sha:j.sha, text:b64dec(j.content) };
  }
  async function ghGetSha(path){
    const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`, { headers: ghHeaders() });
    if(r.status===404) return null; if(!r.ok) throw new Error('GitHub GET '+r.status);
    return (await r.json()).sha;
  }
  async function ghPut(path, b64content, sha, message){
    const body = { message, content:b64content, branch:BRANCH }; if(sha) body.sha=sha;
    const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}`, {
      method:'PUT', headers:{ ...ghHeaders(), 'Content-Type':'application/json' }, body: JSON.stringify(body) });
    if(!r.ok){ let m; try{ m=(await r.json()).message; }catch(e){ m=r.status; } throw new Error('PUT mislukt: '+m); }
    return r.json();
  }
  const putText = (path,text,sha,msg) => ghPut(path, b64enc(text), sha, msg);

  // ---------- helpers ----------
  function repoPathOf(page, val){
    if(/^(https?:)?\/\//i.test(val) || /^(data:|#|mailto:|tel:)/.test(val)) return null;
    try { return new URL(val, 'http://x/'+(page.dir?page.dir+'/':'')).pathname.replace(/^\//,''); } catch(e){ return null; }
  }
  const isExtDomain = v => /^(https?:)?\/\//i.test(v) && EXT_DOMAINS.some(d => v.includes(d));
  function absUrl(page, val){
    if(/^(https?:)?\/\//i.test(val)) return val.startsWith('//')?'https:'+val:val;
    try { return new URL(val, SITE_BASE + (page.dir?page.dir+'/':'')).href; } catch(e){ return val; }
  }
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  // ---------- HTML tokenizer ----------
  function tokenizeHTML(html, page){
    const items=[]; const c={text:0,image:0,link:0}; const re=/<(script|style)\b[\s\S]*?<\/\1>|<!--[\s\S]*?-->|<[^>]*>|[^<]+/gi; let m;
    while((m=re.exec(html))){ const t=m[0];
      if(t[0]!=='<' && t.trim().length && !/^\s+$/.test(t))
        items.push({ cat:'text', value:t, start:m.index, end:m.index+t.length, ord:c.text++, external:false, page, file:page.path });
    }
    const ra=/\b(src|href)\s*=\s*"([^"]*)"/gi;
    while((m=ra.exec(html))){ const attr=m[1].toLowerCase(), val=m[2]; if(!val||val.startsWith('data:')) continue;
      const vs=m.index+m[0].indexOf('"')+1, ve=vs+val.length;
      if(MEDIA.test(val)){ const rp=repoPathOf(page,val);
        const src=(/^(https?:)?\/\//i.test(val)&&(EXT_DOMAINS.find(d=>val.includes(d))||'extern'))||(rp&&EXTERNAL_ASSETS[rp]);
        items.push({ cat:'image', value:val, start:vs, end:ve, ord:c.image++, external:!!src, source:src||'', page, file:page.path });
      } else if(attr==='href'){ if(val.endsWith('.css')||val.startsWith('#')) continue;
        const ext=isExtDomain(val); items.push({ cat:'link', value:val, start:vs, end:ve, ord:c.link++, external:ext, source: ext?(EXT_DOMAINS.find(d=>val.includes(d))||'extern'):'', page, file:page.path });
      }
    }
    return items;
  }

  // ---------- i18n (translations) tokenizer ----------
  function readString(js, i){ const q=js[i]; let j=i+1; while(j<js.length){ const ch=js[j]; if(ch==='\\'){ j+=2; continue; } if(ch===q) return { innerStart:i+1, innerEnd:j, end:j+1, value:js.slice(i+1,j) }; j++; } return null; }
  function tokenizeI18n(js, page){
    const items=[]; const c={nl:0,pl:0,ro:0}; const re=/\b(nl|pl|ro)\s*:\s*/g; let m;
    while((m=re.exec(js))){ const lang=m[1]; let i=re.lastIndex; while(i<js.length&&/\s/.test(js[i])) i++;
      const ch=js[i];
      if(ch==='"'||ch==="'"){ const r=readString(js,i); if(r){ items.push(mk(lang,r)); re.lastIndex=r.end; } }
      else if(ch==='['){ let j=i+1; while(j<js.length){ while(j<js.length&&/[\s,]/.test(js[j])) j++; if(js[j]===']'){ j++; break; }
        if(js[j]==='"'||js[j]==="'"){ const r=readString(js,j); if(!r) break; items.push(mk(lang,r)); j=r.end; } else j++; } re.lastIndex=j; }
    }
    function mk(lang,r){ return { cat:'i18n', lang, value:r.value, start:r.innerStart, end:r.innerEnd, ord:c[lang]++, external:false, page, file:page.i18n }; }
    return items;
  }

  // ---------- state ----------
  const store={}; let filterCat='all', q='', extOnly=false;
  const $ = s => document.querySelector(s);
  const content=$('#content'), pageNav=$('#pageNav'), summary=$('#summary');

  function badgeHTML(it){
    if(it.cat==='image') return it.external?`<span class="badge ext">Externe bron: ${it.source}</span>`:`<span class="badge edit">Bewerkbaar</span>`;
    if(it.cat==='link')  return it.external?`<span class="badge ext">Externe link: ${it.source}</span>`:`<span class="badge link">Interne link</span>`;
    if(it.cat==='i18n')  return `<span class="badge edit">Bewerkbaar</span><span class="badge kind">Vertaling ${it.lang.toUpperCase()}</span>`;
    return `<span class="badge edit">Bewerkbaar</span>`;
  }
  function itemHTML(pkey, it){
    const id=`${pkey}|${it.cat}|${it.lang||'-'}|${it.ord}`;
    let thumb;
    if(it.cat==='image'){ const u=absUrl(it.page,it.value); thumb=`<div class="thumb" style="background-image:url('${u.replace(/'/g,'%27')}')"></div>`; }
    else { const lbl=it.cat==='link'?'LINK':(it.cat==='i18n'?it.lang.toUpperCase():'TXT'); thumb=`<div class="thumb" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:var(--mono);font-size:11px">${lbl}</div>`; }
    const valCls=(it.cat==='text'||it.cat==='i18n')?'val':'val code';
    const multiline=(it.cat==='text'||it.cat==='i18n');
    const editField=multiline?`<textarea>${esc(it.value)}</textarea>`:`<input type="text" value="${esc(it.value).replace(/"/g,'&quot;')}">`;
    const uploadBtn=(it.cat==='image'&&!it.external)?`<button class="tinybtn upload" hidden>Beeld vervangen…</button>`:'';
    return `<div class="item" data-id="${id}">${thumb}<div class="body">
        <div class="badges">${badgeHTML(it)}<span class="badge kind">${it.cat}</span></div>
        <div class="${valCls}">${esc(it.value)}</div>
        <div class="editrow">${editField}<div class="row-msg"></div></div>
      </div><div class="actions">
        <button class="tinybtn edit-toggle">Bewerken</button>${uploadBtn}
        <button class="tinybtn save" hidden>Opslaan</button>
        <button class="tinybtn cancel ghost" hidden>Sluit</button>
      </div></div>`;
  }
  function matches(it){ if(filterCat!=='all'&&it.cat!==filterCat) return false; if(extOnly&&!it.external) return false;
    if(q&&!(String(it.value).toLowerCase().includes(q)||(it.source||'').toLowerCase().includes(q))) return false; return true; }

  function render(){
    let total=0, shown=0;
    const secs=PAGES.map(p=>{ const st=store[p.key]; if(!st) return '';
      if(st.error) return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label}</h2><p class="pgnote" style="color:var(--red)">Kon niet laden: ${esc(st.error)}</p></section>`;
      const groups=[['text','Teksten'],['image','Afbeeldingen'],['link','Links'],['i18n','Vertalingen (NL/PL/RO)']];
      let body='';
      for(const [cat,glabel] of groups){ const list=st.items.filter(i=>i.cat===cat); const vis=list.filter(matches);
        total+=list.length; shown+=vis.length; if(!vis.length) continue;
        body+=`<div class="grp">${glabel} · ${vis.length}</div>`+vis.map(it=>itemHTML(p.key,it)).join(''); }
      if(!body) return '';
      const live=p.path?` <a href="${SITE_BASE}${p.path}" target="_blank" rel="noopener">live ↗</a>`:'';
      const note=p.note?`<p class="pgnote">${p.note}</p>`:'';
      return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label}${live}</h2>${note}${body}</section>`;
    }).join('');
    content.innerHTML=secs||`<p class="hint">Niets gevonden voor deze filter.</p>`;
    summary.textContent=`${shown} van ${total} items`;
  }
  function buildNav(){ pageNav.innerHTML=PAGES.map(p=>`<a href="#sec-${p.key}">${p.label}</a>`).join(''); }

  function findItem(pkey, cat, lang, ord){ return store[pkey].items.find(x=>x.cat===cat && (x.lang||'-')===lang && String(x.ord)===ord); }

  // ---------- editing ----------
  content.addEventListener('click', async e=>{
    const item=e.target.closest('.item'); if(!item) return;
    const [pkey,cat,lang,ord]=item.dataset.id.split('|');
    const it=findItem(pkey,cat,lang,ord);
    if(e.target.classList.contains('edit-toggle')){
      if(!getToken()){ openModal('Log eerst in met een GitHub-token om te bewerken.'); return; }
      item.classList.add('editing'); item.querySelector('.edit-toggle').hidden=true;
      item.querySelector('.save').hidden=false; item.querySelector('.cancel').hidden=false;
      const up=item.querySelector('.upload'); if(up) up.hidden=false;
    }
    if(e.target.classList.contains('cancel')) closeEdit(item);
    if(e.target.classList.contains('upload')){
      if(!getToken()){ openModal('Log eerst in om te uploaden.'); return; }
      const inp=document.createElement('input'); inp.type='file'; inp.accept='image/*';
      inp.onchange=()=>{ if(inp.files[0]) uploadImage(item,it,inp.files[0]); };
      inp.click();
    }
    if(e.target.classList.contains('save')){
      const field=item.querySelector('textarea,input'); const msg=item.querySelector('.row-msg');
      const nv=field.value; if(nv===it.value){ closeEdit(item); return; }
      e.target.disabled=true; msg.textContent='Opslaan…'; msg.className='row-msg';
      try{ await saveItem(it,nv); it.value=nv; item.querySelector('.val').innerHTML=esc(nv);
        if(cat==='image'){ const u=absUrl(it.page,nv); item.querySelector('.thumb').style.backgroundImage=`url('${u.replace(/'/g,'%27')}')`; }
        msg.textContent='Opgeslagen ✓ — live over ~1–2 min.'; msg.className='row-msg ok'; setTimeout(()=>closeEdit(item),900);
      }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
      e.target.disabled=false;
    }
  });
  function closeEdit(item){ item.classList.remove('editing'); item.querySelector('.edit-toggle').hidden=false;
    item.querySelector('.save').hidden=true; item.querySelector('.cancel').hidden=true;
    const up=item.querySelector('.upload'); if(up) up.hidden=true;
    const f=item.querySelector('textarea,input'); if(f) f.value=item.querySelector('.val').textContent; item.querySelector('.row-msg').textContent=''; }

  async function saveItem(it, newVal){
    const { sha, text } = await ghGet(it.file);
    const fresh = it.cat==='i18n' ? tokenizeI18n(text, it.page).filter(x=>x.lang===it.lang) : tokenizeHTML(text, it.page).filter(x=>x.cat===it.cat);
    const tgt = fresh[it.ord];
    if(!tgt || tgt.value!==it.value) throw new Error('Bron is gewijzigd sinds laden — herlaad de pagina.');
    const updated = text.slice(0,tgt.start)+newVal+text.slice(tgt.end);
    await putText(it.file, updated, sha, `CMS: ${it.page.key} — ${it.cat}${it.lang?' '+it.lang:''} bijgewerkt`);
  }

  function fileToB64(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(String(r.result).split(',')[1]); r.onerror=rej; r.readAsDataURL(file); }); }
  async function uploadImage(item, it, file){
    const msg=item.querySelector('.row-msg'); msg.textContent='Uploaden…'; msg.className='row-msg';
    try{
      const rp=repoPathOf(it.page, it.value); if(!rp) throw new Error('Alleen interne afbeeldingen kunnen worden vervangen.');
      const folder=rp.replace(/[^/]+$/,''); const safe=file.name.toLowerCase().replace(/[^a-z0-9._-]+/g,'-');
      const target=folder+safe;
      const b64=await fileToB64(file);
      const existing=await ghGetSha(target);
      await ghPut(target, b64, existing, `CMS: upload ${target}`);
      const newVal=it.value.replace(/[^/]+$/, safe);
      if(newVal!==it.value){ await saveItem(it, newVal); it.value=newVal; item.querySelector('.val').innerHTML=esc(newVal); }
      const u=absUrl(it.page,it.value)+'?t='+Date.now(); item.querySelector('.thumb').style.backgroundImage=`url('${u.replace(/'/g,'%27')}')`;
      msg.textContent='Geüpload ✓ — live over ~1–2 min.'; msg.className='row-msg ok';
    }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
  }

  // ---------- load ----------
  async function loadAll(){
    await Promise.all(PAGES.map(async p=>{
      try{ let items=[];
        if(!p.i18nOnly && p.path){ const r=await fetch(SITE_BASE+p.path,{cache:'no-cache'}); items=tokenizeHTML(await r.text(), p); }
        if(p.i18n){ try{ const r2=await fetch(SITE_BASE+p.i18n,{cache:'no-cache'}); if(r2.ok) items=items.concat(tokenizeI18n(await r2.text(), p)); }catch(e){} }
        store[p.key]={ page:p, items };
      }catch(err){ store[p.key]={ page:p, error:err.message }; }
    }));
    buildNav(); render();
  }

  // ---------- controls ----------
  $('#search').addEventListener('input', e=>{ q=e.target.value.trim().toLowerCase(); render(); });
  $('#extOnly').addEventListener('change', e=>{ extOnly=e.target.checked; render(); });
  const cw=$('#catFilters');
  [['all','Alles'],['text','Teksten'],['image','Afbeeldingen'],['link','Links'],['i18n','Vertalingen']].forEach(([c,l])=>{
    const b=document.createElement('button'); b.className='chip'+(c==='all'?' active':''); b.textContent=l; b.dataset.cat=c;
    b.addEventListener('click',()=>{ filterCat=c; [...cw.children].forEach(x=>x.classList.toggle('active',x===b)); render(); }); cw.appendChild(b);
  });

  // ---------- auth UI ----------
  const modal=$('#authModal');
  const openModal=m=>{ $('#tokenMsg').textContent=m||''; $('#tokenMsg').className='msg'; $('#tokenInput').value=getToken(); modal.hidden=false; };
  $('#authBtn').addEventListener('click',()=>openModal());
  $('#tokenCancel').addEventListener('click',()=>modal.hidden=true);
  $('#logoutBtn').addEventListener('click',()=>{ setToken(''); reflectAuth(); modal.hidden=true; });
  $('#tokenSave').addEventListener('click', async ()=>{
    const t=$('#tokenInput').value.trim(); if(!t) return; setToken(t);
    const msg=$('#tokenMsg'); msg.textContent='Token controleren…'; msg.className='msg';
    try{ const r=await fetch(`https://api.github.com/repos/${REPO}`,{headers:ghHeaders()}); if(!r.ok) throw new Error('geen toegang ('+r.status+')');
      const j=await r.json(); const canPush=j.permissions&&j.permissions.push;
      msg.textContent=canPush?'Gelukt ✓':'Let op: token heeft geen schrijfrechten — opslaan zal falen.'; msg.className=canPush?'msg ok':'msg err';
      reflectAuth(); if(canPush) setTimeout(()=>modal.hidden=true,700);
    }catch(err){ msg.textContent='Token werkt niet: '+err.message; msg.className='msg err'; setToken(''); reflectAuth(); }
  });
  function reflectAuth(){ const on=!!getToken(); const s=$('#authState');
    s.textContent=on?'Ingelogd · kan bewerken':'Niet ingelogd · alleen-lezen'; s.classList.toggle('ok',on);
    $('#authBtn').textContent=on?'Token wijzigen':'Inloggen met GitHub-token'; }

  reflectAuth(); loadAll();
})();
