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
  const SDS_BASE = 'https://data.barilcoatings.com/nl/products/safetysheet/';
  const SDS_PRIO = ['nl_NL', 'en_EU', 'en_GB', 'pl_PL', 'ro_RO', 'de_DE', 'fr_FR', 'nl_BE', 'es_ES', 'it_IT'];
  const SDS_DEFAULT = { nl: 'nl_NL', en: 'en_EU', pl: 'pl_PL', ro: 'ro_RO' };
  const CYCLE = ['nl', 'en', 'pl', 'ro'];
  const numOf = code => { const m = (code || '').match(/\d+/); return m ? parseInt(m[0], 10) : 0; };

  const T = {
    nl: { eyebrow: 'Productcatalogus · Baril Coatings', h1: 'Alle <span class="paint">coatings</span>',
      lead: 'Het volledige assortiment industriële en beschermende coatings van Baril Coatings — per productlijn, met omschrijving, eigenschappen en een directe link naar de datasheet.',
      search: 'Zoek op productnaam, code of eigenschap…', allLines: 'Alle lijnen', clear: 'Wis filters',
      count: (s, t, f) => `${s} van ${t} producten${f ? ' (gefilterd)' : ''}`, none: 'Geen producten gevonden. Pas je zoekopdracht of filters aan.', products: n => n === 1 ? 'product' : 'producten', filters: 'Filters' },
    en: { eyebrow: 'Product catalogue · Baril Coatings', h1: 'All <span class="paint">coatings</span>',
      lead: 'The complete range of industrial and protective coatings from Baril Coatings — per product line, with description, properties and a direct link to the datasheet.',
      search: 'Search by product name, code or property…', allLines: 'All lines', clear: 'Clear filters',
      count: (s, t, f) => `${s} of ${t} products${f ? ' (filtered)' : ''}`, none: 'No products found. Adjust your search or filters.', products: n => n === 1 ? 'product' : 'products', filters: 'Filters' },
    pl: { eyebrow: 'Katalog produktów · Baril Coatings', h1: 'Wszystkie <span class="paint">powłoki</span>',
      lead: 'Pełny asortyment przemysłowych i ochronnych powłok Baril Coatings — według linii produktowej, z opisem, właściwościami i bezpośrednim linkiem do karty technicznej.',
      search: 'Szukaj po nazwie, kodzie lub właściwości…', allLines: 'Wszystkie linie', clear: 'Wyczyść filtry',
      count: (s, t, f) => `${s} z ${t} produktów${f ? ' (filtrowane)' : ''}`, none: 'Nie znaleziono produktów. Zmień wyszukiwanie lub filtry.', products: () => 'produktów', filters: 'Filtry' },
    ro: { eyebrow: 'Catalog de produse · Baril Coatings', h1: 'Toate <span class="paint">acoperirile</span>',
      lead: 'Gama completă de acoperiri industriale și de protecție Baril Coatings — pe linii de produse, cu descriere, proprietăți și link direct către fișa tehnică.',
      search: 'Caută după nume, cod sau proprietate…', allLines: 'Toate liniile', clear: 'Șterge filtrele',
      count: (s, t, f) => `${s} din ${t} produse${f ? ' (filtrate)' : ''}`, none: 'Niciun produs găsit. Ajustează căutarea sau filtrele.', products: () => 'produse', filters: 'Filtre' }
  };

  const root = document.getElementById('catalogue');
  const countEl = document.getElementById('pcount');
  const searchEl = document.getElementById('psearch');
  const chipsEl = document.getElementById('pchips');
  const filtersEl = document.getElementById('pfilters');
  const flagBox = document.getElementById('langflags');
  let DATA = null, activeBrand = 'all';
  const activeAttr = {};
  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { lang = 'en'; }
  if (!T[lang]) lang = 'en';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const nm = p => lang === 'nl' ? p.name : (p['name_' + lang] || p.name);
  const ds = p => lang === 'nl' ? p.desc : (p['desc_' + lang] != null ? p['desc_' + lang] : p.desc);

  function applyChrome() {
    const t = T[lang];
    document.documentElement.lang = lang;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
    set('t-eyebrow', t.eyebrow); set('t-h1', t.h1); set('t-lead', t.lead);
    if (searchEl) searchEl.placeholder = t.search;
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang)); const cur = flagBox.querySelector('.flag-current'), src = flagBox.querySelector('button[data-lang="' + lang + '"] .flag'); if (cur && src) cur.src = src.getAttribute('src'); }
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

  function sdsForm(code, locales) {
    const avail = SDS_PRIO.filter(l => locales.includes(l));
    const list = avail.length ? avail : locales.slice(0, 8);
    if (!list.length) return null;
    const form = el('form', 'sds-form');
    form.method = 'post'; form.action = SDS_BASE + encodeURIComponent(code); form.target = '_blank'; form.rel = 'noopener';
    const li = document.createElement('input'); li.type = 'hidden'; li.name = 'language[]';
    li.value = (SDS_DEFAULT[lang] && list.includes(SDS_DEFAULT[lang])) ? SDS_DEFAULT[lang] : list[0];
    form.appendChild(li);
    const sel = el('select');
    list.forEach(l => { const o = el('option', null, l.replace('_', '-')); o.value = l; if (l === li.value) o.selected = true; sel.appendChild(o); });
    sel.setAttribute('aria-label', 'Veiligheidsblad'); sel.addEventListener('change', () => { li.value = sel.value; });
    const btn = el('button', 'sds-btn', 'SDS ↗'); btn.type = 'submit';
    form.appendChild(sel); form.appendChild(btn);
    return form;
  }

  function card(p, color) {
    const c = el('div', 'pcard'); c.style.setProperty('--accent', color || '#F18A00');
    const top = el('div', 'pcard-top');
    const h = el('h3');
    h.appendChild(el('span', 'pcode', p.code));
    h.appendChild(document.createTextNode(' '));
    h.appendChild(el('span', 'pname', nm(p)));
    top.appendChild(h); c.appendChild(top);
    const d = ds(p); if (d) c.appendChild(descNode(d));
    if (p.related && p.related.length) { const r = el('div', 'prelated'); p.related.forEach(t => r.appendChild(el('span', null, t))); c.appendChild(r); }
    const specs = specsNode(p.attrs); if (specs) c.appendChild(specs);
    const actions = el('div', 'pactions');
    actions.appendChild(dsForm(p.code, color));
    const sds = sdsForm(p.code, p.sds || []); if (sds) actions.appendChild(sds);
    c.appendChild(actions);
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
      items.sort((a, b) => numOf(a.code) - numOf(b.code) || (a.code > b.code ? 1 : -1));
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
    updateFilterToggle();
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

  function ensureFilterToggle() {
    if (document.getElementById('pftoggle')) return;
    const tg = el('button', 'pftoggle'); tg.id = 'pftoggle'; tg.type = 'button';
    tg.setAttribute('aria-controls', 'pfilters'); tg.setAttribute('aria-expanded', 'false');
    tg.appendChild(el('span', 'pftoggle-label', T[lang].filters));
    tg.appendChild(el('span', 'pftoggle-ar', '▾'));
    tg.addEventListener('click', () => {
      const open = filtersEl.classList.toggle('open');
      tg.setAttribute('aria-expanded', open ? 'true' : 'false');
      tg.querySelector('.pftoggle-ar').textContent = open ? '▴' : '▾';
    });
    filtersEl.parentNode.insertBefore(tg, filtersEl);
  }
  function updateFilterToggle() {
    const tg = document.getElementById('pftoggle'); if (!tg) return;
    const n = Object.values(activeAttr).reduce((a, s) => a + s.size, 0);
    const lbl = tg.querySelector('.pftoggle-label');
    if (lbl) lbl.textContent = T[lang].filters + (n ? ' (' + n + ')' : '');
  }

  function buildFilters() {
    filtersEl.innerHTML = '';
    ensureFilterToggle();
    for (const g of FILTER_ORDER) {
      const values = [...new Set(DATA.products.flatMap(p => (p.attrs && p.attrs[g]) || []))];
      if (!values.length) continue;
      activeAttr[g] = activeAttr[g] || new Set();
      const grp = el('div', 'fgroup'); grp.appendChild(el('span', 'fglabel', g));
      values.forEach(v => { const o = el('button', 'fopt' + (activeAttr[g].has(v) ? ' active' : ''), v); o.addEventListener('click', () => { o.classList.toggle('active'); if (activeAttr[g].has(v)) activeAttr[g].delete(v); else activeAttr[g].add(v); render(); }); grp.appendChild(o); });
      filtersEl.appendChild(grp);
    }
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!T[lang]) lang = 'en';
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    const lm = document.getElementById('langMenu'), lt = document.getElementById('langToggle');
    if (lm) lm.classList.remove('open'); if (lt) lt.setAttribute('aria-expanded', 'false');
    applyChrome(); if (DATA) { buildChips(); render(); }
  }));

  applyChrome();
  fetch('products.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => { DATA = d; const g = document.getElementById('genDate'); if (g && d.generated) g.textContent = d.generated;
      try { const lp = (new URLSearchParams(location.search).get('line') || '').toLowerCase().trim();
        if (lp && DATA.products.some(p => p.brand === lp)) activeBrand = lp; } catch (e) {}
      buildChips(); buildFilters(); render(); searchEl.addEventListener('input', render); })
    .catch(() => { root.appendChild(el('p', 'pempty', 'Kon de productdata niet laden.')); });
})();
