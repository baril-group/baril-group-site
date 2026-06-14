/* Renders the Baril Coatings practice cases from ../data/cases.json,
   filterable per market. */
(() => {
  'use strict';
  const grid = document.getElementById('casegrid');
  const countEl = document.getElementById('ccount');
  const searchEl = document.getElementById('csearch');
  const chipsEl = document.getElementById('cchips');
  let CASES = [];
  let activeMarket = 'all';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const caseSlug = url => (String(url).match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';

  function card(c) {
    const a = el('a', 'casecard'); a.href = 'case.html?c=' + encodeURIComponent(caseSlug(c.url));
    if (c.image) { const im = el('div', 'img'); const img = document.createElement('img'); img.loading = 'lazy'; img.src = c.image; img.alt = c.title || ''; im.appendChild(img); a.appendChild(im); }
    const ct = el('div', 'ct');
    ct.appendChild(el('h3', null, c.title || ''));
    if (c.markets && c.markets.length) { const m = el('div', 'prelated'); c.markets.forEach(t => m.appendChild(el('span', null, t))); ct.appendChild(m); }
    ct.appendChild(el('span', 'go', 'Lees de case →'));
    a.appendChild(ct);
    return a;
  }

  function render() {
    grid.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    let items = CASES;
    if (activeMarket !== 'all') items = items.filter(c => (c.markets || []).includes(activeMarket));
    if (q) items = items.filter(c => (c.title || '').toLowerCase().includes(q));
    items.forEach(c => grid.appendChild(card(c)));
    if (!items.length) grid.appendChild(el('p', 'pempty', 'Geen cases gevonden.'));
    countEl.textContent = items.length + ' van ' + CASES.length + ' cases' + (q || activeMarket !== 'all' ? ' (gefilterd)' : '');
  }

  function buildChips() {
    const markets = [...new Set(CASES.flatMap(c => c.markets || []))].sort();
    const mk = (key, label) => { const b = el('button', 'pchip' + (key === activeMarket ? ' active' : ''), label); b.addEventListener('click', () => { activeMarket = key; [...chipsEl.children].forEach(c => c.classList.remove('active')); b.classList.add('active'); render(); }); return b; };
    chipsEl.appendChild(mk('all', 'Alle markten'));
    markets.forEach(m => chipsEl.appendChild(mk(m, m)));
  }

  fetch('../data/cases.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => { CASES = d.cases || []; const g = document.getElementById('genDate'); if (g && d.generated) g.textContent = d.generated; buildChips(); render(); searchEl.addEventListener('input', render); })
    .catch(() => { grid.appendChild(el('p', 'pempty', 'Kon de cases niet laden.')); });
})();
