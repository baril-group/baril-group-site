/* Renders the Baril Coatings product catalogue from products.json.
   Shows full specs (chemistry, components, gloss, substrate) and supports
   search, brand filter and attribute filters. Datasheets are fetched live
   from the Baril product database via a POST form (same as the official
   site), with a language selector. */
(() => {
  'use strict';
  const BRAND_ORDER = ['dualcure', 'steelkote', 'steelkote bio', 'aquaran', 'bariline', 'baril', 'baril activators', 'baril solvents'];
  const SPEC_ORDER = ['Chemie', 'Componenten', 'Glans', 'Ondergrond'];
  const FILTER_ORDER = ['Chemie', 'Glans', 'Componenten', 'Ondergrond'];
  const LANGS = [['nl', 'NL'], ['en', 'EN'], ['de', 'DE'], ['fr', 'FR'], ['pl', 'PL'], ['es', 'ES'], ['it', 'IT'], ['ro', 'RO'], ['no', 'NO']];
  const DS_BASE = 'https://data.barilcoatings.com/nl/products/datasheet/';

  const root = document.getElementById('catalogue');
  const countEl = document.getElementById('pcount');
  const searchEl = document.getElementById('psearch');
  const chipsEl = document.getElementById('pchips');
  const filtersEl = document.getElementById('pfilters');
  let DATA = null;
  let activeBrand = 'all';
  const activeAttr = {}; // group -> Set(labels)

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  function descNode(desc) {
    const wrap = el('div', 'pdesc');
    (desc || '').split('\n').forEach((line, i) => {
      if (i) wrap.appendChild(document.createElement('br'));
      wrap.appendChild(document.createTextNode(line));
    });
    return wrap;
  }

  function dsForm(code, color) {
    const form = el('form', 'ds-form');
    form.method = 'post';
    form.action = DS_BASE + encodeURIComponent(code);
    form.target = '_blank';
    form.rel = 'noopener';
    const lang = document.createElement('input');
    lang.type = 'hidden'; lang.name = 'language[]'; lang.value = 'nl';
    form.appendChild(lang);
    const sel = el('select');
    LANGS.forEach(([v, t]) => { const o = el('option', null, t); o.value = v; sel.appendChild(o); });
    sel.setAttribute('aria-label', 'Datasheet-taal');
    sel.addEventListener('change', () => { lang.value = sel.value; });
    const btn = el('button', 'ds-btn', 'Datasheet ↗');
    btn.type = 'submit';
    if (color) btn.style.background = `linear-gradient(95deg, ${color}, var(--amber))`;
    form.appendChild(sel); form.appendChild(btn);
    return form;
  }

  function specsNode(attrs) {
    const wrap = el('div', 'pspecs');
    let any = false;
    for (const g of SPEC_ORDER) {
      const vals = attrs && attrs[g];
      if (!vals || !vals.length) continue;
      any = true;
      const s = el('div', 'pspec');
      s.appendChild(el('span', null, g));
      s.appendChild(el('b', null, vals.join(', ')));
      wrap.appendChild(s);
    }
    return any ? wrap : null;
  }

  function card(p, color) {
    const c = el('div', 'pcard');
    c.style.setProperty('--accent', color || '#F18A00');
    const top = el('div', 'pcard-top');
    top.appendChild(el('span', 'pcode', p.code));
    top.appendChild(el('h3', null, p.name));
    c.appendChild(top);
    if (p.desc) c.appendChild(descNode(p.desc));
    if (p.related && p.related.length) {
      const r = el('div', 'prelated');
      p.related.forEach(t => r.appendChild(el('span', null, t)));
      c.appendChild(r);
    }
    const specs = specsNode(p.attrs);
    if (specs) c.appendChild(specs);
    const actions = el('div', 'pactions');
    actions.appendChild(dsForm(p.code, color));
    c.appendChild(actions);
    return c;
  }

  function matchesAttr(p) {
    for (const g of Object.keys(activeAttr)) {
      const want = activeAttr[g];
      if (!want.size) continue;
      const have = (p.attrs && p.attrs[g]) || [];
      if (!have.some(v => want.has(v))) return false;
    }
    return true;
  }

  function render() {
    root.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    let shown = 0;
    const brandsPresent = BRAND_ORDER.filter(b => DATA.products.some(p => p.brand === b))
      .concat([...new Set(DATA.products.map(p => p.brand))].filter(b => !BRAND_ORDER.includes(b)));

    for (const brand of brandsPresent) {
      if (activeBrand !== 'all' && activeBrand !== brand) continue;
      const meta = DATA.brands[brand] || { name: brand, color: '#F18A00' };
      let items = DATA.products.filter(p => p.brand === brand);
      if (q) items = items.filter(p => (p.code + ' ' + p.name + ' ' + (p.desc || '')).toLowerCase().includes(q));
      items = items.filter(matchesAttr);
      if (!items.length) continue;

      const sec = el('section', 'brandsec');
      sec.id = 'b-' + brand.replace(/\s+/g, '-');
      const head = el('div', 'brandsec-head');
      const dot = el('span', 'bdot'); dot.style.background = meta.color; head.appendChild(dot);
      head.appendChild(el('h2', null, meta.name));
      head.appendChild(el('span', 'bn', items.length + (items.length === 1 ? ' product' : ' producten')));
      sec.appendChild(head);
      const grid = el('div', 'pgrid');
      items.forEach(p => grid.appendChild(card(p, meta.color)));
      sec.appendChild(grid);
      root.appendChild(sec);
      shown += items.length;
    }
    if (!shown) root.appendChild(el('p', 'pempty', 'Geen producten gevonden. Pas je zoekopdracht of filters aan.'));
    renderCount(shown);
  }

  function isFiltering() {
    if (activeBrand !== 'all' || (searchEl.value || '').trim()) return true;
    return Object.values(activeAttr).some(s => s.size);
  }

  function renderCount(shown) {
    countEl.innerHTML = '';
    countEl.appendChild(el('span', null, shown + ' van ' + DATA.products.length + ' producten' + (isFiltering() ? ' (gefilterd)' : '')));
    if (isFiltering()) {
      const clr = el('button', 'pclear', 'Wis filters');
      clr.addEventListener('click', () => {
        activeBrand = 'all'; searchEl.value = '';
        Object.keys(activeAttr).forEach(g => activeAttr[g].clear());
        [...chipsEl.children].forEach((c, i) => c.classList.toggle('active', i === 0));
        [...filtersEl.querySelectorAll('.fopt')].forEach(o => o.classList.remove('active'));
        render();
      });
      countEl.appendChild(clr);
    }
  }

  function buildChips() {
    const mk = (key, label) => {
      const b = el('button', 'pchip' + (key === activeBrand ? ' active' : ''), label);
      b.addEventListener('click', () => {
        activeBrand = key;
        [...chipsEl.children].forEach(c => c.classList.remove('active'));
        b.classList.add('active');
        render();
      });
      return b;
    };
    chipsEl.appendChild(mk('all', 'Alle lijnen'));
    BRAND_ORDER.filter(b => DATA.products.some(p => p.brand === b))
      .forEach(b => { const m = DATA.brands[b] || { name: b }; chipsEl.appendChild(mk(b, m.name)); });
  }

  function buildFilters() {
    for (const g of FILTER_ORDER) {
      const values = [...new Set(DATA.products.flatMap(p => (p.attrs && p.attrs[g]) || []))];
      if (!values.length) continue;
      activeAttr[g] = new Set();
      const grp = el('div', 'fgroup');
      grp.appendChild(el('span', 'fglabel', g));
      values.forEach(v => {
        const o = el('button', 'fopt', v);
        o.addEventListener('click', () => {
          o.classList.toggle('active');
          if (activeAttr[g].has(v)) activeAttr[g].delete(v); else activeAttr[g].add(v);
          render();
        });
        grp.appendChild(o);
      });
      filtersEl.appendChild(grp);
    }
  }

  fetch('products.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      DATA = d;
      const gen = document.getElementById('genDate');
      if (gen && d.generated) gen.textContent = d.generated;
      buildChips();
      buildFilters();
      render();
      searchEl.addEventListener('input', render);
    })
    .catch(() => { root.appendChild(el('p', 'pempty', 'Kon de productdata niet laden.')); });
})();
