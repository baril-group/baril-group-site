/* Baril Coatings product catalogue — renders from products.json.
   Multilingual (NL/EN/PL/RO), full specs, search + brand + attribute filters.
   Datasheets are fetched live from the Baril database via a POST form
   (same as the official site), with a language selector. */
(() => {
  'use strict';
  const BRAND_ORDER = ['dualcure', 'steelkote', 'steelkote bio', 'aquaran', 'bariline', 'baril', 'baril activators', 'baril solvents'];
  const SPEC_ORDER = ['Chemie', 'Componenten', 'Glans', 'Ondergrond'];
  const FILTER_ORDER = ['Chemie', 'Glans', 'Componenten', 'Ondergrond'];
  const LANGS = [['nl', 'NL'], ['en', 'EN'], ['de', 'DE'], ['fr', 'FR'], ['pl', 'PL'], ['es', 'ES'], ['it', 'IT'], ['ro', 'RO'], ['no', 'NO']];
  const DS_BASE = 'https://data.barilcoatings.com/nl/products/datasheet/';
  const CYCLE = ['nl', 'en', 'pl', 'ro'];

  const T = {
    nl: { eyebrow: 'Productcatalogus · Baril Coatings', h1: 'Alle <span class="paint">coatings</span>',
      lead: 'Het volledige assortiment industriële en beschermende coatings van Baril Coatings — per productlijn, met omschrijving, eigenschappen en een directe link naar de datasheet.',
      search: 'Zoek op productnaam, code of eigenschap…', allLines: 'Alle lijnen', clear: 'Wis filters',
      count: (s, t, f) => `${s} van ${t} producten${f ? ' (gefilterd)' : ''}`, none: 'Geen producten gevonden. Pas je zoekopdracht of filters aan.', products: n => n === 1 ? 'product' : 'producten' },
    en: { eyebrow: 'Product catalogue · Baril Coatings', h1: 'All <span class="paint">coatings</span>',
      lead: 'The complete range of industrial and protective coatings from Baril Coatings — per product line, with description, properties and a direct link to the datasheet.',
      search: 'Search by product name, code or property…', allLines: 'All lines', clear: 'Clear filters',
      count: (s, t, f) => `${s} of ${t} products${f ? ' (filtered)' : ''}`, none: 'No products found. Adjust your search or filters.', products: n => n === 1 ? 'product' : 'products' },
    pl: { eyebrow: 'Katalog produktów · Baril Coatings', h1: 'Wszystkie <span class="paint">powłoki</span>',
      lead: 'Pełny asortyment przemysłowych i ochronnych powłok Baril Coatings — według linii produktowej, z opisem, właściwościami i bezpośrednim linkiem do karty technicznej.',
      search: 'Szukaj po nazwie, kodzie lub właściwości…', allLines: 'Wszystkie linie', clear: 'Wyczyść filtry',
      count: (s, t, f) => `${s} z ${t} produktów${f ? ' (filtrowane)' : ''}`, none: 'Nie znaleziono produktów. Zmień wyszukiwanie lub filtry.', products: () => 'produktów' },
    ro: { eyebrow: 'Catalog de produse · Baril Coatings', h1: 'Toate <span class="paint">acoperirile</span>',
      lead: 'Gama completă de acoperiri industriale și de protecție Baril Coatings — pe linii de produse, cu descriere, proprietăți și link direct către fișa tehnică.',
      search: 'Caută după nume, cod sau proprietate…', allLines: 'Toate liniile', clear: 'Șterge filtrele',
      count: (s, t, f) => `${s} din ${t} produse${f ? ' (filtrate)' : ''}`, none: 'Niciun produs găsit. Ajustează căutarea sau filtrele.', products: () => 'produse' }
  };

  const root = document.getElementById('catalogue');
  const countEl = document.getElementById('pcount');
  const searchEl = document.getElementById('psearch');
  const chipsEl = document.getElementById('pchips');
  const filtersEl = document.getElementById('pfilters');
  const langBtn = document.getElementById('langSwitch');
  let DATA = null, activeBrand = 'all';
  const activeAttr = {};
  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'nl'; } catch (e) { lang = 'nl'; }
  if (!T[lang]) lang = 'nl';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const nm = p => lang === 'nl' ? p.name : (p['name_' + lang] || p.name);
  const ds = p => lang === 'nl' ? p.desc : (p['desc_' + lang] != null ? p['desc_' + lang] : p.desc);

  function applyChrome() {
    const t = T[lang];
    document.documentElement.lang = lang;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
    set('t-eyebrow', t.eyebrow); set('t-h1', t.h1); set('t-lead', t.lead);
    if (searchEl) searchEl.placeholder = t.search;
    if (langBtn) langBtn.textContent = CYCLE[(CYCLE.indexOf(lang) + 1) % CYCLE.length].toUpperCase();
  }

  function descNode(text) {
    const wrap = el('div', 'pdesc');
    (text || '').split('\n').forEach((line, i) => { if (i) wrap.appendChild(document.createElement('br')); wrap.appendChild(document.createTextNode(line)); });
    return wrap;
  }

  function dsForm(code, color) {
    const form = el('form', 'ds-form');
    form.method = 'post'; form.action = DS_BASE + encodeURIComponent(code); form.target = '_blank'; form.rel = 'noopener';
    const li = document.createElement('input'); li.type = 'hidden'; li.name = 'language[]'; li.value = lang; form.appendChild(li);
    const sel = el('select'); LANGS.forEach(([v, t]) => { const o = el('option', null, t); o.value = v; if (v === lang) o.selected = true; sel.appendChild(o); });
    sel.setAttribute('aria-label', 'Datasheet'); sel.addEventListener('change', () => { li.value = sel.value; });
    const btn = el('button', 'ds-btn', 'Datasheet ↗'); btn.type = 'submit';
    if (color) btn.style.background = `linear-gradient(95deg, ${color}, var(--amber))`;
    form.appendChild(sel); form.appendChild(btn);
    return form;
  }

  function specsNode(attrs) {
    const wrap = el('div', 'pspecs'); let any = false;
    for (const g of SPEC_ORDER) { const v = attrs && attrs[g]; if (!v || !v.length) continue; any = true; const s = el('div', 'pspec'); s.appendChild(el('span', null, g)); s.appendChild(el('b', null, v.join(', '))); wrap.appendChild(s); }
    return any ? wrap : null;
  }

  function card(p, color) {
    const c = el('div', 'pcard'); c.style.setProperty('--accent', color || '#F18A00');
    const top = el('div', 'pcard-top'); top.appendChild(el('span', 'pcode', p.code)); top.appendChild(el('h3', null, nm(p))); c.appendChild(top);
    const d = ds(p); if (d) c.appendChild(descNode(d));
    if (p.related && p.related.length) { const r = el('div', 'prelated'); p.related.forEach(t => r.appendChild(el('span', null, t))); c.appendChild(r); }
    const specs = specsNode(p.attrs); if (specs) c.appendChild(specs);
    const actions = el('div', 'pactions'); actions.appendChild(dsForm(p.code, color)); c.appendChild(actions);
    return c;
  }

  function matchesAttr(p) {
    for (const g of Object.keys(activeAttr)) { const want = activeAttr[g]; if (!want.size) continue; const have = (p.attrs && p.attrs[g]) || []; if (!have.some(v => want.has(v))) return false; }
    return true;
  }

  function render() {
    root.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    let shown = 0;
    const brands = BRAND_ORDER.filter(b => DATA.products.some(p => p.brand === b)).concat([...new Set(DATA.products.map(p => p.brand))].filter(b => !BRAND_ORDER.includes(b)));
    for (const brand of brands) {
      if (activeBrand !== 'all' && activeBrand !== brand) continue;
      const meta = DATA.brands[brand] || { name: brand, color: '#F18A00' };
      let items = DATA.products.filter(p => p.brand === brand);
      if (q) items = items.filter(p => (p.code + ' ' + nm(p) + ' ' + (ds(p) || '')).toLowerCase().includes(q));
      items = items.filter(matchesAttr);
      if (!items.length) continue;
      const sec = el('section', 'brandsec'); sec.id = 'b-' + brand.replace(/\s+/g, '-');
      const head = el('div', 'brandsec-head');
      const dot = el('span', 'bdot'); dot.style.background = meta.color; head.appendChild(dot);
      head.appendChild(el('h2', null, meta.name));
      head.appendChild(el('span', 'bn', items.length + ' ' + T[lang].products(items.length)));
      sec.appendChild(head);
      const grid = el('div', 'pgrid'); items.forEach(p => grid.appendChild(card(p, meta.color))); sec.appendChild(grid);
      root.appendChild(sec); shown += items.length;
    }
    if (!shown) root.appendChild(el('p', 'pempty', T[lang].none));
    renderCount(shown);
  }

  const isFiltering = () => activeBrand !== 'all' || (searchEl.value || '').trim() || Object.values(activeAttr).some(s => s.size);

  function renderCount(shown) {
    countEl.innerHTML = '';
    countEl.appendChild(el('span', null, T[lang].count(shown, DATA.products.length, isFiltering())));
    if (isFiltering()) {
      const clr = el('button', 'pclear', T[lang].clear);
      clr.addEventListener('click', () => {
        activeBrand = 'all'; searchEl.value = ''; Object.keys(activeAttr).forEach(g => activeAttr[g].clear());
        [...chipsEl.children].forEach((c, i) => c.classList.toggle('active', i === 0));
        [...filtersEl.querySelectorAll('.fopt')].forEach(o => o.classList.remove('active'));
        render();
      });
      countEl.appendChild(clr);
    }
  }

  function buildChips() {
    chipsEl.innerHTML = '';
    const mk = (key, label) => { const b = el('button', 'pchip' + (key === activeBrand ? ' active' : ''), label); b.addEventListener('click', () => { activeBrand = key; [...chipsEl.children].forEach(c => c.classList.remove('active')); b.classList.add('active'); render(); }); return b; };
    chipsEl.appendChild(mk('all', T[lang].allLines));
    BRAND_ORDER.filter(b => DATA.products.some(p => p.brand === b)).forEach(b => { const m = DATA.brands[b] || { name: b }; chipsEl.appendChild(mk(b, m.name)); });
  }

  function buildFilters() {
    filtersEl.innerHTML = '';
    for (const g of FILTER_ORDER) {
      const values = [...new Set(DATA.products.flatMap(p => (p.attrs && p.attrs[g]) || []))];
      if (!values.length) continue;
      activeAttr[g] = activeAttr[g] || new Set();
      const grp = el('div', 'fgroup'); grp.appendChild(el('span', 'fglabel', g));
      values.forEach(v => { const o = el('button', 'fopt' + (activeAttr[g].has(v) ? ' active' : ''), v); o.addEventListener('click', () => { o.classList.toggle('active'); if (activeAttr[g].has(v)) activeAttr[g].delete(v); else activeAttr[g].add(v); render(); }); grp.appendChild(o); });
      filtersEl.appendChild(grp);
    }
  }

  if (langBtn) langBtn.addEventListener('click', () => {
    lang = CYCLE[(CYCLE.indexOf(lang) + 1) % CYCLE.length];
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    applyChrome(); buildChips(); render();
  });

  applyChrome();
  fetch('products.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => { DATA = d; const g = document.getElementById('genDate'); if (g && d.generated) g.textContent = d.generated; buildChips(); buildFilters(); render(); searchEl.addEventListener('input', render); })
    .catch(() => { root.appendChild(el('p', 'pempty', 'Kon de productdata niet laden.')); });
})();
