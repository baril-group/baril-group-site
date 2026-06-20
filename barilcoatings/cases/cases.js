/* Renders the Baril Coatings practice cases from ../data/cases.json,
   filterable per market. Multilingual UI (nl/en); English by default.
   The case content itself exists in Dutch only, so the texts stay Dutch;
   the interface, market labels and chrome switch language. */
(() => {
  'use strict';
  const T = {
    nl: { eyebrow: 'Praktijkcases · Baril Coatings', h1: 'In de <span class="paint">praktijk</span>', lead: 'Projecten die met Baril Coatings beschermd zijn — van infrastructuur en staalbouw tot restauratie en industrie.', updated: 'bijgewerkt', search: 'Zoek een case…', allMarkets: 'Alle markten', read: 'Lees de case →', count: (s, t, f) => `${s} van ${t} cases${f ? ' (gefilterd)' : ''}`, none: 'Geen cases gevonden.', fail: 'Kon de cases niet laden.', foot: 'Cases en beeldmateriaal © Baril Coatings.' },
    en: { eyebrow: 'Case studies · Baril Coatings', h1: 'In <span class="paint">practice</span>', lead: 'Projects protected with Baril Coatings — from infrastructure and steel construction to restoration and industry.', updated: 'updated', search: 'Search a case…', allMarkets: 'All markets', read: 'Read the case →', count: (s, t, f) => `${s} of ${t} cases${f ? ' (filtered)' : ''}`, none: 'No cases found.', fail: 'Could not load the cases.', foot: 'Cases and imagery © Baril Coatings.' }
  };
  // Market segments are tagged with their Dutch labels in the data; map to English for display.
  const MARKET_EN = {
    'Constructie & Infra': 'Construction & Infrastructure',
    'Gebouwen & Onderhoud': 'Buildings & maintenance',
    'Industrie & Machinebouw': 'Industry & engineering',
    'Marine & Offshore': 'Marine & Offshore'
  };

  const AVAIL = ['nl', 'en'];
  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { lang = 'en'; }
  if (!AVAIL.includes(lang)) lang = 'en';
  const marketLabel = m => (lang === 'nl') ? m : (MARKET_EN[m] || m);

  const grid = document.getElementById('casegrid');
  const countEl = document.getElementById('ccount');
  const searchEl = document.getElementById('csearch');
  const chipsEl = document.getElementById('cchips');
  const flagBox = document.getElementById('langflags');
  let CASES = [];
  let activeMarket = 'all';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const caseSlug = url => (String(url).match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';

  function applyChrome() {
    const t = T[lang];
    document.documentElement.lang = lang;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
    set('t-eyebrow', t.eyebrow); set('t-h1', t.h1); set('t-lead', t.lead);
    const up = document.getElementById('t-updated'); if (up) up.textContent = t.updated;
    const ft = document.getElementById('t-foot'); if (ft) ft.textContent = t.foot;
    if (searchEl) searchEl.placeholder = t.search;
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang)); const cur = flagBox.querySelector('.flag-current'), src = flagBox.querySelector('button[data-lang="' + lang + '"] .flag'); if (cur && src) cur.src = src.getAttribute('src'); }
  }

  function card(c) {
    const a = el('a', 'casecard'); a.href = 'case.html?c=' + encodeURIComponent(caseSlug(c.url));
    if (c.image) { const im = el('div', 'img'); const img = document.createElement('img'); img.loading = 'lazy'; img.src = c.image; img.alt = c.title || ''; im.appendChild(img); a.appendChild(im); }
    const ct = el('div', 'ct');
    ct.appendChild(el('h3', null, c.title || ''));
    if (c.markets && c.markets.length) { const m = el('div', 'prelated'); c.markets.forEach(t => m.appendChild(el('span', null, marketLabel(t)))); ct.appendChild(m); }
    ct.appendChild(el('span', 'go', T[lang].read));
    a.appendChild(ct);
    return a;
  }

  function render() {
    const t = T[lang];
    grid.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    let items = CASES;
    if (activeMarket !== 'all') items = items.filter(c => (c.markets || []).includes(activeMarket));
    if (q) items = items.filter(c => (c.title || '').toLowerCase().includes(q));
    items.forEach(c => grid.appendChild(card(c)));
    if (!items.length) grid.appendChild(el('p', 'pempty', t.none));
    countEl.textContent = t.count(items.length, CASES.length, !!(q || activeMarket !== 'all'));
  }

  function buildChips() {
    chipsEl.innerHTML = '';
    const markets = [...new Set(CASES.flatMap(c => c.markets || []))].sort();
    const mk = (key, label) => { const b = el('button', 'pchip' + (key === activeMarket ? ' active' : ''), label); b.addEventListener('click', () => { activeMarket = key; [...chipsEl.children].forEach(c => c.classList.remove('active')); b.classList.add('active'); render(); }); return b; };
    chipsEl.appendChild(mk('all', T[lang].allMarkets));
    markets.forEach(m => chipsEl.appendChild(mk(m, marketLabel(m))));
  }

  applyChrome();
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!AVAIL.includes(lang)) lang = 'en';
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    const lm = document.getElementById('langMenu'), lt = document.getElementById('langToggle');
    if (lm) lm.classList.remove('open'); if (lt) lt.setAttribute('aria-expanded', 'false');
    applyChrome(); if (CASES.length) { buildChips(); render(); }
  }));

  fetch('../data/cases.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => { CASES = d.cases || []; const g = document.getElementById('genDate'); if (g && d.generated) g.textContent = d.generated; buildChips(); render(); searchEl.addEventListener('input', render); })
    .catch(() => { grid.appendChild(el('p', 'pempty', T[lang].fail)); });
})();
