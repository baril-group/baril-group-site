/* Baril Group — content overview & editor.
   Lists all text, images, links across the umbrella, plus a TRANSLATION view:
   English source per field with an expand for NL/PL/RO and one-click translation
   via Claude (Haiku 4.5). Browses read-only; edits commit via the GitHub
   Contents API with a fine-grained token. GitHub token + Anthropic key are each
   pasted once and kept in this browser only. */
(() => {
  'use strict';

  const REPO = 'baril-group/baril-group-site';
  const BRANCH = 'main';
  const SITE_BASE = location.href.replace(/\/admin\/[^/]*$/, '/');
  const MEDIA = /\.(jpe?g|png|webp|gif|svg|mp4|webm|avif)(\?.*)?$/i;
  const CLAUDE_MODEL = 'claude-sonnet-4-6';
  const LANGS = [['nl','Nederlands'],['de','Deutsch'],['fr','Français'],['es','Español'],['it','Italiano'],['pl','Polski'],['ro','Română']];
  const LANG_EN_NAME = {nl:'Dutch',de:'German',fr:'French',es:'Spanish',it:'Italian',pl:'Polish',ro:'Romanian'};

  const PAGES = [
    { key:'group',     label:'Baril Group (home)',          path:'index.html',                         dir:'',                     i18n:'js/i18n.js' },
    { key:'coatings',  label:'Baril Coatings (home)',       path:'barilcoatings/index.html',           dir:'barilcoatings',        i18n:'barilcoatings/js/i18n.js' },
    { key:'aquaran',   label:'Coatings · Aquaran',          path:'barilcoatings/aquaran/index.html',   dir:'barilcoatings/aquaran' },
    { key:'dualcure',  label:'Coatings · DualCure',         path:'barilcoatings/dualcure/index.html',  dir:'barilcoatings/dualcure' },
    { key:'steelkote', label:'Coatings · SteelKote',        path:'barilcoatings/steelkote/index.html', dir:'barilcoatings/steelkote' },
    { key:'bariline',  label:'Coatings · Bariline',         path:'barilcoatings/bariline/index.html',  dir:'barilcoatings/bariline' },
    { key:'lines-i18n',label:'Coatings productlijnen · vertalingen (gedeeld)', i18nOnly:true, dir:'barilcoatings', i18n:'barilcoatings/js/brand-i18n.js' },
    { key:'products',  label:'Coatings · Productcatalogus', path:'barilcoatings/products/index.html',  dir:'barilcoatings/products',
      note:'De producten komen uit products.json (apart databestand) en verschijnen hier niet.' },
    { key:'nixol',     label:'Nixol',                       path:'nixol/index.html',                   dir:'nixol',     i18n:'nixol/js/i18n.js' },
    { key:'tintlab',   label:'TintLab',                     path:'tintlab/index.html',                 dir:'tintlab',   i18n:'tintlab/js/i18n.js' },
    { key:'copperant', label:'Copperant',                   path:'copperant/index.html',               dir:'copperant', i18n:'copperant/js/i18n.js' },
    { key:'fairf',     label:'Fairf',                       path:'fairf/index.html',                   dir:'fairf',     i18n:'fairf/js/i18n.js' }
  ];

  const EXTERNAL_ASSETS = {
    'fairf/assets/img/hero.jpg':'fairf.eu','fairf/assets/img/fairf-black.png':'fairf.eu',
    'fairf/assets/img/fairf-white.png':'fairf.eu','fairf/assets/img/favicon.png':'fairf.eu',
    'copperant/assets/img/copperant-black.svg':'copperant.com','copperant/assets/img/copperant-white.svg':'copperant.com',
    'copperant/assets/img/hero-painter.jpg':'copperant.com'
  };
  const EXT_DOMAINS = ['barilcoatings.com','barilcoatings.us','data.barilcoatings.com','copperant.com','fairf.eu','karwei','linkedin.com','facebook.com','instagram.com','youtube','google.'];

  // ---------- keys ----------
  const ghKey='cms-gh-token', clKey='cms-anthropic-key';
  const get=k=>{ try{return localStorage.getItem(k)||'';}catch(e){return '';} };
  const set=(k,v)=>{ try{ v?localStorage.setItem(k,v):localStorage.removeItem(k);}catch(e){} };
  const ghHeaders=()=>{ const h={'Accept':'application/vnd.github+json'}; const t=get(ghKey); if(t) h.Authorization='Bearer '+t; return h; };
  const b64enc=s=>btoa(unescape(encodeURIComponent(s)));
  const b64dec=s=>decodeURIComponent(escape(atob(String(s).replace(/\n/g,''))));

  async function ghGet(path){ const r=await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`,{headers:ghHeaders()}); if(!r.ok) throw new Error('GitHub GET '+r.status); const j=await r.json(); return {sha:j.sha,text:b64dec(j.content)}; }
  async function ghGetSha(path){ const r=await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`,{headers:ghHeaders()}); if(r.status===404) return null; if(!r.ok) throw new Error('GitHub GET '+r.status); return (await r.json()).sha; }
  async function ghPut(path,b64,sha,msg){ const body={message:msg,content:b64,branch:BRANCH}; if(sha) body.sha=sha; const r=await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURI(path)}`,{method:'PUT',headers:{...ghHeaders(),'Content-Type':'application/json'},body:JSON.stringify(body)}); if(!r.ok){ let m; try{m=(await r.json()).message;}catch(e){m=r.status;} throw new Error('PUT: '+m);} return r.json(); }
  const putText=(p,t,sha,m)=>ghPut(p,b64enc(t),sha,m);

  // ---------- Claude ----------
  async function claudeTranslate(en){
    const key=get(clKey); if(!key) throw new Error('Geen Anthropic-sleutel — log in.');
    const keys=LANGS.map(([c])=>c);
    const sys="You translate short UI strings for the Baril Group brand websites. Keep ALL HTML tags and entities (e.g. <strong>, <br>, <em>, <span class=\"...\">, &amp;) exactly as in the source and translate only the human-readable text. Keep brand/product names (Baril, Copperant, Fairf, Nixol, TintLab, RedLike, Pura, ISO/RAL codes, award names, ↗ arrows) unchanged. Match a concise, premium marketing tone. Output ONLY a JSON object with keys "+keys.join(", ")+".";
    const user="Translate to "+LANGS.map(([c])=>LANG_EN_NAME[c]+" ("+c+")").join(", ")+":\n"+JSON.stringify(en);
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify({model:CLAUDE_MODEL,max_tokens:3000,system:sys,messages:[{role:'user',content:user}]})});
    if(!r.ok) throw new Error('Claude '+r.status+' '+(await r.text()).slice(0,160));
    const j=await r.json(); const txt=(j.content||[]).map(c=>c.text||'').join(''); const mm=txt.match(/\{[\s\S]*\}/); if(!mm) throw new Error('Geen JSON van Claude'); return JSON.parse(mm[0]);
  }

  // ---------- helpers ----------
  function repoPathOf(page,val){ if(/^(https?:)?\/\//i.test(val)||/^(data:|#|mailto:|tel:)/.test(val)) return null; try{ return new URL(val,'http://x/'+(page.dir?page.dir+'/':'')).pathname.replace(/^\//,''); }catch(e){ return null; } }
  const isExtDomain=v=>/^(https?:)?\/\//i.test(v)&&EXT_DOMAINS.some(d=>v.includes(d));
  function absUrl(page,val){ if(/^(https?:)?\/\//i.test(val)) return val.startsWith('//')?'https:'+val:val; try{ return new URL(val,SITE_BASE+(page.dir?page.dir+'/':'')).href; }catch(e){ return val; } }
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const escAttr=s=>esc(s).replace(/"/g,'&quot;');
  const jsLit=s=>"'"+String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\r/g,'').replace(/\n/g,'\\n')+"'";
  // JS string-literal inner: unescape on read (so editors see natural text),
  // and escape for the actual delimiter quote on write (so apostrophes etc.
  // never break the source string).
  function jsUnescape(s){ return String(s).replace(/\\(u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)/g,(m,g)=>{ if(g==='n')return '\n'; if(g==='t')return '\t'; if(g==='r')return ''; if(g[0]==='u')return String.fromCharCode(parseInt(g.slice(1),16)); if(g[0]==='x')return String.fromCharCode(parseInt(g.slice(1),16)); return g; }); }
  function escFor(s,quote){ return String(s).replace(/\\/g,'\\\\').replace(/\r/g,'').replace(/\n/g,'\\n').split(quote).join('\\'+quote); }

  // ---------- HTML tokenizer (text/image/link) ----------
  function tokenizeHTML(html,page){
    const items=[]; const c={text:0,image:0,link:0}; const re=/<(script|style)\b[\s\S]*?<\/\1>|<!--[\s\S]*?-->|<[^>]*>|[^<]+/gi; let m;
    while((m=re.exec(html))){ const t=m[0]; if(t[0]!=='<'&&t.trim().length&&!/^\s+$/.test(t)) items.push({cat:'text',value:t,start:m.index,end:m.index+t.length,ord:c.text++,external:false,page,file:page.path}); }
    const ra=/\b(src|href)\s*=\s*"([^"]*)"/gi;
    while((m=ra.exec(html))){ const attr=m[1].toLowerCase(),val=m[2]; if(!val||val.startsWith('data:')) continue; const vs=m.index+m[0].indexOf('"')+1,ve=vs+val.length;
      if(MEDIA.test(val)){ const rp=repoPathOf(page,val); const src=(/^(https?:)?\/\//i.test(val)&&(EXT_DOMAINS.find(d=>val.includes(d))||'extern'))||(rp&&EXTERNAL_ASSETS[rp]); items.push({cat:'image',value:val,start:vs,end:ve,ord:c.image++,external:!!src,source:src||'',page,file:page.path}); }
      else if(attr==='href'){ if(val.endsWith('.css')||val.startsWith('#')) continue; const ext=isExtDomain(val); items.push({cat:'link',value:val,start:vs,end:ve,ord:c.link++,external:ext,source:ext?(EXT_DOMAINS.find(d=>val.includes(d))||'extern'):'',page,file:page.path}); }
    }
    return items;
  }

  // ---------- i18n parser ----------
  function readString(js,i){ const q=js[i]; let j=i+1; while(j<js.length){ const c=js[j]; if(c==='\\'){ j+=2; continue; } if(c===q) return {innerStart:i+1,innerEnd:j,end:j+1,value:js.slice(i+1,j)}; j++; } return null; }
  function parseEntries(js){
    const entries=[]; const reEntry=/\[\s*(['"])((?:\\.|(?!\1)[\s\S])*?)\1\s*,\s*\{/g; let m;
    while((m=reEntry.exec(js))){
      const selector=m[2]; let i=reEntry.lastIndex; const dictOpen=i; const langs={}; let depth=1;
      while(i<js.length&&depth>0){
        const c=js[i];
        if(c==='}'){ depth--; i++; continue; }
        if(c==='{'){ depth++; i++; continue; }
        if(depth===1){
          const km=/^([a-zA-Z_]+)\s*:\s*/.exec(js.slice(i,i+30));
          if(km && /^(en|nl|de|fr|es|it|pl|ro)$/.test(km[1])){ const key=km[1]; i+=km[0].length;
            if(js[i]==='"'||js[i]==="'"){ const r=readString(js,i); if(r){ langs[key]={kind:'string',items:[{value:jsUnescape(r.value),start:r.innerStart,end:r.innerEnd}]}; i=r.end; continue; } }
            else if(js[i]==='['){ i++; const its=[]; while(i<js.length){ while(i<js.length&&/[\s,]/.test(js[i])) i++; if(js[i]===']'){ i++; break; } if(js[i]==='"'||js[i]==="'"){ const r=readString(js,i); its.push({value:jsUnescape(r.value),start:r.innerStart,end:r.innerEnd}); i=r.end; } else i++; } langs[key]={kind:'array',items:its}; continue; }
          }
        }
        i++;
      }
      entries.push({selector,dictOpen,langs}); reEntry.lastIndex=i;
    }
    return entries;
  }

  // ---------- state ----------
  const store={}; let filterCat='all', q='', extOnly=false, loaded=false;
  const $=s=>document.querySelector(s);
  const content=$('#content'), pageNav=$('#pageNav'), summary=$('#summary');

  function badge(it){
    if(it.cat==='image') return it.external?`<span class="badge ext">Externe bron: ${it.source}</span>`:`<span class="badge edit">Bewerkbaar</span>`;
    if(it.cat==='link')  return it.external?`<span class="badge ext">Externe link: ${it.source}</span>`:`<span class="badge link">Interne link</span>`;
    return `<span class="badge edit">Bewerkbaar</span>`;
  }
  function htmlItemHTML(pkey,it){
    const id=`${pkey}|${it.cat}|${it.ord}`;
    let thumb;
    if(it.cat==='image'){ const u=absUrl(it.page,it.value); thumb=`<div class="thumb" style="background-image:url('${u.replace(/'/g,'%27')}')"></div>`; }
    else thumb=`<div class="thumb" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:var(--mono);font-size:11px">${it.cat==='link'?'LINK':'TXT'}</div>`;
    const cls=it.cat==='text'?'val':'val code';
    const field=it.cat==='text'?`<textarea>${esc(it.value)}</textarea>`:`<input type="text" value="${escAttr(it.value)}">`;
    const up=(it.cat==='image'&&!it.external)?`<button class="tinybtn upload" hidden>Beeld vervangen…</button>`:'';
    return `<div class="item" data-id="${id}">${thumb}<div class="body"><div class="badges">${badge(it)}<span class="badge kind">${it.cat}</span></div>
      <div class="${cls}">${esc(it.value)}</div><div class="editrow">${field}<div class="row-msg"></div></div></div>
      <div class="actions"><button class="tinybtn edit-toggle">Bewerken</button>${up}<button class="tinybtn save" hidden>Opslaan</button><button class="tinybtn cancel ghost" hidden>Sluit</button></div></div>`;
  }

  // unified translation field
  function fieldHTML(pkey,fld){
    const id=`${pkey}|fld|${fld.idx}`;
    const langRows=LANGS.map(([code,name])=>{
      const has=fld[code]!=null;
      return `<div class="langrow" data-lang="${code}"><span class="lcode">${code.toUpperCase()}</span>
        <textarea ${has?'':'data-empty="1"'} placeholder="(nog geen ${name} — vertaal of vul aan)">${has?esc(fld[code]):''}</textarea></div>`;
    }).join('');
    const enField=fld.enEditable?`<textarea class="enbox">${esc(fld.en)}</textarea>`:`<div class="val">${esc(fld.en)}</div>`;
    const enNote=fld.enEditable?'':`<span class="ennote">Engels-bron — bewerk via Teksten</span>`;
    return `<div class="item field" data-id="${id}" data-sel="${escAttr(fld.selector)}" data-idx="${fld.idx}">
      <div class="thumb" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:var(--mono);font-size:10px">EN</div>
      <div class="body">
        <div class="badges"><span class="badge edit">Bewerkbaar</span><span class="badge kind">tekst · EN</span>${enNote}</div>
        ${enField}
        <button class="tinybtn xpand">Andere talen ▸</button>
        <div class="langpanel" hidden>${langRows}
          <div class="langactions"><button class="tinybtn translate">Vertaal met Claude</button><button class="tinybtn save savefield">Opslaan</button><span class="row-msg"></span></div>
        </div>
      </div>
      <div class="actions">${fld.enEditable?'<button class="tinybtn save saveen" hidden>EN opslaan</button><button class="tinybtn edit-en">EN bewerken</button>':''}</div></div>`;
  }

  function matches(it){
    if(filterCat!=='all'){ if(filterCat==='fld'){ if(it.cat!=='fld') return false; } else if(it.cat!==filterCat) return false; }
    if(extOnly && !it.external) return false;
    if(q){ const hay=(it.cat==='fld')?[it.en,...LANGS.map(([c])=>it[c])].join(' '):String(it.value); if(!hay.toLowerCase().includes(q)&&!String(it.source||'').toLowerCase().includes(q)) return false; }
    return true;
  }

  function render(){
    let total=0,shown=0;
    const secs=PAGES.map(p=>{ const st=store[p.key]; if(!st) return '';
      if(st.error) return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label}</h2><p class="pgnote" style="color:var(--red)">Kon niet laden: ${esc(st.error)}</p></section>`;
      let body='';
      const groups=[['text','Teksten',st.items.filter(i=>i.cat==='text')],['image','Afbeeldingen',st.items.filter(i=>i.cat==='image')],['link','Links',st.items.filter(i=>i.cat==='link')],['fld','Vertaalbare teksten (EN + '+LANGS.map(([c])=>c.toUpperCase()).join('/')+')',st.fields||[]]];
      for(const [cat,glabel,list] of groups){ const vis=list.filter(matches); total+=list.length; shown+=vis.length; if(!vis.length) continue;
        body+=`<div class="grp">${glabel} · ${vis.length}</div>`+vis.map(it=>cat==='fld'?fieldHTML(p.key,it):htmlItemHTML(p.key,it)).join(''); }
      if(!body) return '';
      const live=p.path?` <a href="${SITE_BASE}${p.path}" target="_blank" rel="noopener">live ↗</a>`:'';
      const note=p.note?`<p class="pgnote">${p.note}</p>`:'';
      const bulk=(st.fields&&st.fields.length)?`<button class="tinybtn bulk" data-pkey="${p.key}">Vertaal alle ontbrekende op deze pagina</button>`:'';
      return `<section class="pagesec" id="sec-${p.key}"><h2>${p.label}${live}</h2>${note}${bulk}${body}</section>`;
    }).join('');
    content.innerHTML=secs||`<p class="hint">Niets gevonden.</p>`;
    summary.textContent=`${shown} van ${total} items`;
  }
  function buildNav(){ pageNav.innerHTML=PAGES.map(p=>`<a href="#sec-${p.key}">${p.label}</a>`).join(''); }

  // ---------- build fields from i18n + DOM EN ----------
  function buildFields(page, i18nText, html){
    const entries=parseEntries(i18nText);
    const doc=html?new DOMParser().parseFromString(html,'text/html'):null;
    const fields=[]; let idx=0;
    for(const e of entries){
      let domEls=[]; if(doc){ try{ domEls=[...doc.querySelectorAll(e.selector)]; }catch(err){} }
      const langKeys=LANGS.map(([c])=>c);
      const count=Math.max(...langKeys.map(c=>e.langs[c]?e.langs[c].items.length:0), e.langs.en?e.langs.en.items.length:0, 1);
      const firstLang=langKeys.find(c=>e.langs[c]);
      const isArray=!!(firstLang && e.langs[firstLang].kind==='array');
      for(let j=0;j<count;j++){
        const enFromDict=e.langs.en?(e.langs.en.items[j]?e.langs.en.items[j].value:null):null;
        const enFromDom=domEls[j]?domEls[j].innerHTML:null;
        const enSrc = enFromDict!=null ? 'dict' : (enFromDom!=null ? 'dom' : 'none');
        const f={ cat:'fld', idx:idx++, selector:e.selector, jdx:j, isArray, enSource:enSrc,
          en: (enFromDict!=null?enFromDict:(enFromDom!=null?enFromDom:'')),
          // EN editable when it lives in the page HTML (any field, incl. arrays) or in a single-value i18n dict
          enEditable: enSrc==='dom' ? true : (enSrc==='dict' && !isArray),
          external:false };
        for(const c of langKeys){ f[c]= e.langs[c]&&e.langs[c].items[j]?e.langs[c].items[j].value:null; }
        fields.push(f);
      }
    }
    return fields;
  }

  // ---------- saving ----------
  // NL/PL/RO: replace the literal at the matching selector+lang+jdx; EN(string): replace or insert en in the dict.
  async function saveLang(page, selector, jdx, lang, newVal){
    const file=page.i18n; const {sha,text}=await ghGet(file);
    const entries=parseEntries(text); const e=entries.find(x=>x.selector===selector); if(!e) throw new Error('Veld niet gevonden (herlaad).');
    let updated;
    if(lang==='en'){
      if(e.langs.en && e.langs.en.items[jdx]){ const t=e.langs.en.items[jdx]; updated=text.slice(0,t.start)+escFor(newVal,text[t.start-1])+text.slice(t.end); }
      else if(!e.langs.en){ const ins=` en: ${jsLit(newVal)},`; updated=text.slice(0,e.dictOpen)+ins+text.slice(e.dictOpen); }
      else throw new Error('EN-array bewerken nog niet ondersteund.');
    } else {
      const L=e.langs[lang]; if(!L||!L.items[jdx]) throw new Error('Taalwaarde ontbreekt (herlaad).');
      const t=L.items[jdx]; updated=text.slice(0,t.start)+escFor(newVal,text[t.start-1])+text.slice(t.end);
    }
    await putText(file, updated, sha, `CMS: ${page.key} — ${selector} [${lang}] bijgewerkt`);
  }

  // EN that lives in the page HTML (incl. list/array fields). Pure-text elements only —
  // fails closed with a clear message so the HTML can never be corrupted.
  async function saveDomEn(page, selector, jdx, newVal){
    if(!page.path) throw new Error('Geen HTML-bron voor deze pagina.');
    const {sha,text}=await ghGet(page.path);
    let els=[]; try{ els=[...new DOMParser().parseFromString(text,'text/html').querySelectorAll(selector)]; }
    catch(err){ throw new Error('Selector ongeldig — bewerk via Teksten.'); }
    const el=els[jdx];
    if(!el) throw new Error('Element niet gevonden — herlaad.');
    if(el.children.length) throw new Error('Deze tekst bevat opmaak (bijv. <br> of <em>) — bewerk via Teksten.');
    const dec=s=>{ const t=document.createElement('textarea'); t.innerHTML=s; return t.value; };
    const target=el.textContent.trim();
    const toks=tokenizeHTML(text,page).filter(t=>t.cat==='text' && dec(t.value).trim()===target);
    if(toks.length===0) throw new Error('Engelse bron niet teruggevonden — herlaad.');
    if(toks.length>1) throw new Error('Deze tekst komt meerdere keren voor — bewerk via Teksten.');
    const tok=toks[0];
    const updated=text.slice(0,tok.start)+newVal+text.slice(tok.end);
    await putText(page.path, updated, sha, `CMS: ${page.key} — EN ${selector}#${jdx} bijgewerkt`);
  }

  // ---------- events ----------
  content.addEventListener('click', async e=>{
    const item=e.target.closest('.item'); if(!item) return;
    // translation field interactions
    if(item.classList.contains('field')){
      const sel=item.dataset.sel, idx=+item.dataset.idx;
      const pkey=(item.dataset.id||'').split('|')[0];
      const fld=((store[pkey]&&store[pkey].fields)||[]).find(x=>x.idx===idx);
      if(!fld) return;
      if(e.target.classList.contains('xpand')){ const p=item.querySelector('.langpanel'); const open=p.hidden; p.hidden=!open; e.target.textContent=open?'Andere talen ▾':'Andere talen ▸'; return; }
      if(e.target.classList.contains('edit-en')){ if(!get(ghKey)){ openModal('Log in om te bewerken.'); return; } item.classList.add('editing'); item.querySelector('.saveen').hidden=false; e.target.hidden=true; return; }
      if(e.target.classList.contains('translate')){
        const msg=item.querySelector('.row-msg'); if(!get(clKey)){ openModal('Plak je Anthropic-sleutel om te vertalen.'); return; }
        msg.textContent='Vertalen…'; msg.className='row-msg';
        try{ const enVal=fld.enEditable?item.querySelector('.enbox').value:fld.en; const out=await claudeTranslate(enVal);
          LANGS.forEach(([code])=>{ const ta=item.querySelector(`.langrow[data-lang="${code}"] textarea`); if(out[code]!=null){ ta.value=out[code]; ta.dataset.dirty='1'; } });
          msg.textContent='Vertaald ✓ — controleer en klik Opslaan.'; msg.className='row-msg ok';
        }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
        return;
      }
      if(e.target.classList.contains('savefield')){
        const msg=item.querySelector('.row-msg'); if(!get(ghKey)){ openModal('Log in om op te slaan.'); return; }
        e.target.disabled=true; msg.textContent='Opslaan…'; msg.className='row-msg';
        try{ for(const [code] of LANGS){ const ta=item.querySelector(`.langrow[data-lang="${code}"] textarea`); const has=fld[code]!=null;
              if(!has) continue; // v1: only update existing language values
              if(ta.value!==fld[code]){ await saveLang(fld.page, sel, fld.jdx, code, ta.value); fld[code]=ta.value; } }
          msg.textContent='Opgeslagen ✓ — live over ~1–2 min.'; msg.className='row-msg ok';
        }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
        e.target.disabled=false; return;
      }
      if(e.target.classList.contains('saveen')){
        const msg=item.querySelector('.row-msg')||item.querySelector('.langpanel .row-msg'); const box=item.querySelector('.enbox');
        e.target.disabled=true;
        try{ if(box.value!==fld.en){
            if(fld.enSource==='dom') await saveDomEn(fld.page, fld.selector, fld.jdx, box.value);
            else await saveLang(fld.page, sel, fld.jdx, 'en', box.value);
            fld.en=box.value;
          } item.classList.remove('editing'); e.target.hidden=true; item.querySelector('.edit-en').hidden=false; }
        catch(err){ alert(err.message); }
        e.target.disabled=false; return;
      }
      return;
    }
    // html item interactions
    const [pkey,cat,ord]=item.dataset.id.split('|'); const st=store[pkey]; const it=st.items.find(x=>x.cat===cat&&String(x.ord)===ord);
    if(e.target.classList.contains('edit-toggle')){ if(!get(ghKey)){ openModal('Log in om te bewerken.'); return; } item.classList.add('editing'); item.querySelector('.edit-toggle').hidden=true; item.querySelector('.save').hidden=false; item.querySelector('.cancel').hidden=false; const up=item.querySelector('.upload'); if(up) up.hidden=false; }
    if(e.target.classList.contains('cancel')) closeEdit(item);
    if(e.target.classList.contains('upload')){ if(!get(ghKey)){ openModal('Log in om te uploaden.'); return; } const inp=document.createElement('input'); inp.type='file'; inp.accept='image/*'; inp.onchange=()=>{ if(inp.files[0]) uploadImage(item,it,inp.files[0]); }; inp.click(); }
    if(e.target.classList.contains('save')&&!e.target.classList.contains('savefield')&&!e.target.classList.contains('saveen')){
      const field=item.querySelector('textarea,input'); const msg=item.querySelector('.row-msg'); const nv=field.value; if(nv===it.value){ closeEdit(item); return; }
      e.target.disabled=true; msg.textContent='Opslaan…'; msg.className='row-msg';
      try{ const {sha,text}=await ghGet(it.file); const fresh=tokenizeHTML(text,it.page).filter(x=>x.cat===it.cat); const tgt=fresh[it.ord]; if(!tgt||tgt.value!==it.value) throw new Error('Bron gewijzigd — herlaad.');
        await putText(it.file, text.slice(0,tgt.start)+nv+text.slice(tgt.end), sha, `CMS: ${it.page.key} ${it.cat}`); it.value=nv; item.querySelector('.val').innerHTML=esc(nv);
        if(cat==='image'){ const u=absUrl(it.page,nv); item.querySelector('.thumb').style.backgroundImage=`url('${u.replace(/'/g,'%27')}')`; }
        msg.textContent='Opgeslagen ✓'; msg.className='row-msg ok'; setTimeout(()=>closeEdit(item),900);
      }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; }
      e.target.disabled=false;
    }
  });
  function closeEdit(item){ item.classList.remove('editing'); const et=item.querySelector('.edit-toggle'); if(et) et.hidden=false; const s=item.querySelector('.save'); if(s) s.hidden=true; const c=item.querySelector('.cancel'); if(c) c.hidden=true; const up=item.querySelector('.upload'); if(up) up.hidden=true; const f=item.querySelector('.editrow textarea,.editrow input'); if(f) f.value=item.querySelector('.val').textContent; const m=item.querySelector('.row-msg'); if(m) m.textContent=''; }

  function fileToB64(file){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(String(r.result).split(',')[1]); r.onerror=rej; r.readAsDataURL(file); }); }
  async function uploadImage(item,it,file){ const msg=item.querySelector('.row-msg'); msg.textContent='Uploaden…'; msg.className='row-msg';
    try{ const rp=repoPathOf(it.page,it.value); if(!rp) throw new Error('Alleen interne afbeeldingen.'); const folder=rp.replace(/[^/]+$/,''); const safe=file.name.toLowerCase().replace(/[^a-z0-9._-]+/g,'-'); const target=folder+safe;
      const b64=await fileToB64(file); const ex=await ghGetSha(target); await ghPut(target,b64,ex,`CMS: upload ${target}`);
      const nv=it.value.replace(/[^/]+$/,safe); if(nv!==it.value){ const {sha,text}=await ghGet(it.file); const fresh=tokenizeHTML(text,it.page).filter(x=>x.cat==='image'); const tgt=fresh[it.ord]; if(tgt&&tgt.value===it.value){ await putText(it.file,text.slice(0,tgt.start)+nv+text.slice(tgt.end),sha,`CMS: ${it.page.key} image src`); it.value=nv; item.querySelector('.val').innerHTML=esc(nv); } }
      const u=absUrl(it.page,it.value)+'?t='+Date.now(); item.querySelector('.thumb').style.backgroundImage=`url('${u.replace(/'/g,'%27')}')`; msg.textContent='Geüpload ✓'; msg.className='row-msg ok';
    }catch(err){ msg.textContent=err.message; msg.className='row-msg err'; } }

  // bulk translate missing on a page
  content.addEventListener('click', async e=>{
    if(!e.target.classList.contains('bulk')) return;
    if(!get(clKey)){ openModal('Plak je Anthropic-sleutel om te vertalen.'); return; }
    if(!get(ghKey)){ openModal('Log in om op te slaan.'); return; }
    const pkey=e.target.dataset.pkey; const fields=store[pkey].fields.filter(f=>LANGS.some(([c])=>f[c]!=null && f[c]==='') || LANGS.some(([c])=>f[c]===''));
    // target: fields with at least one EMPTY existing language value
    const todo=store[pkey].fields.filter(f=>LANGS.some(([c])=>f[c]===''));
    e.target.disabled=true; const orig=e.target.textContent;
    let done=0;
    for(const f of todo){ try{ const out=await claudeTranslate(f.en); for(const [c] of LANGS){ if(f[c]===''&&out[c]!=null){ await saveLang(f.page,f.selector,f.jdx,c,out[c]); f[c]=out[c]; } } done++; e.target.textContent=`Vertalen… ${done}/${todo.length}`; }catch(err){ console.warn(err); } }
    e.target.textContent=`Klaar — ${done} velden`; setTimeout(()=>{ e.target.textContent=orig; e.target.disabled=false; render(); },1500);
  });

  // ---------- load ----------
  async function loadAll(){
    await Promise.all(PAGES.map(async p=>{ try{
      let html=null, items=[];
      if(!p.i18nOnly&&p.path){ const r=await fetch(SITE_BASE+p.path,{cache:'no-cache'}); html=await r.text(); items=tokenizeHTML(html,p); }
      let fields=[];
      if(p.i18n){ const r2=await fetch(SITE_BASE+p.i18n,{cache:'no-cache'}); if(r2.ok){ const i18nText=await r2.text(); fields=buildFields(p,i18nText,html); fields.forEach(f=>f.page=p); } }
      store[p.key]={page:p,items,fields};
    }catch(err){ store[p.key]={page:p,error:err.message,items:[],fields:[]}; } }));
    buildNav(); render(); loaded=true;
  }

  // ---------- controls ----------
  $('#search').addEventListener('input',e=>{ q=e.target.value.trim().toLowerCase(); render(); });
  $('#extOnly').addEventListener('change',e=>{ extOnly=e.target.checked; render(); });
  const cw=$('#catFilters');
  [['all','Alles'],['fld','Vertaalbaar'],['text','Teksten'],['image','Afbeeldingen'],['link','Links']].forEach(([c,l])=>{ const b=document.createElement('button'); b.className='chip'+(c==='all'?' active':''); b.textContent=l; b.addEventListener('click',()=>{ filterCat=c; [...cw.children].forEach(x=>x.classList.toggle('active',x===b)); render(); }); cw.appendChild(b); });

  // ---------- auth UI ----------
  const modal=$('#authModal');
  const openModal=m=>{ const mm=$('#tokenMsg'); mm.textContent=m||''; mm.className='msg'; $('#tokenInput').value=get(ghKey); const ak=$('#anthropicInput'); if(ak) ak.value=get(clKey); modal.hidden=false; };
  $('#authBtn').addEventListener('click',()=>openModal());
  $('#tokenCancel').addEventListener('click',()=>modal.hidden=true);
  $('#logoutBtn').addEventListener('click',()=>{ set(ghKey,''); set(clKey,''); loaded=false; reflectAuth(); content.innerHTML='<p class="hint" style="padding:48px 4px">🔒 Log in met je GitHub-token om het CMS te openen.</p>'; pageNav.innerHTML=''; summary.textContent=''; openModal('Log in met je GitHub-token om te beginnen.'); });
  $('#tokenSave').addEventListener('click', async ()=>{
    const t=$('#tokenInput').value.trim(); const ak=$('#anthropicInput'); if(ak) set(clKey, ak.value.trim());
    const msg=$('#tokenMsg');
    if(t){ set(ghKey,t); msg.textContent='Token controleren…'; msg.className='msg';
      try{ const r=await fetch(`https://api.github.com/repos/${REPO}`,{headers:ghHeaders()}); if(!r.ok) throw new Error('geen toegang ('+r.status+')'); const j=await r.json(); const ok=j.permissions&&j.permissions.push;
        msg.textContent=ok?'Gelukt ✓':'Token zonder schrijfrechten — opslaan zal falen.'; msg.className=ok?'msg ok':'msg err'; reflectAuth();
        if(ok){ setTimeout(()=>modal.hidden=true,700); if(!loaded) loadAll(); }
      }catch(err){ msg.textContent='Token werkt niet: '+err.message; msg.className='msg err'; set(ghKey,''); reflectAuth(); }
    } else { reflectAuth(); msg.textContent='Sleutels opgeslagen.'; msg.className='msg ok'; }
  });
  function reflectAuth(){ const on=!!get(ghKey); const s=$('#authState'); const cl=get(clKey)?' · Claude ✓':''; s.textContent=(on?'Ingelogd · kan bewerken':'Niet ingelogd')+cl; s.classList.toggle('ok',on); $('#authBtn').textContent=on?'Sleutels wijzigen':'Inloggen met GitHub-token'; }

  reflectAuth();
  if(get(ghKey)){ loadAll(); }
  else { content.innerHTML='<p class="hint" style="padding:48px 4px">🔒 Log in met je GitHub-token om het CMS te openen.</p>'; openModal('Log in met je GitHub-token om te beginnen.'); }
})();
