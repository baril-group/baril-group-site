/* Renders the Baril Coatings practice cases from ../data/cases.json. */
(() => {
  'use strict';
  const grid = document.getElementById('casegrid');
  const countEl = document.getElementById('ccount');
  const searchEl = document.getElementById('csearch');
  let CASES = [];

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  function card(c) {
    const a = el('a', 'casecard');
    a.href = c.url; a.target = '_blank'; a.rel = 'noopener';
    if (c.image) {
      const im = el('div', 'img');
      const img = document.createElement('img');
      img.loading = 'lazy'; img.src = c.image; img.alt = c.title || '';
      im.appendChild(img); a.appendChild(im);
    }
    const ct = el('div', 'ct');
    ct.appendChild(el('h3', null, c.title || ''));
    ct.appendChild(el('span', 'go', 'Lees de case →'));
    a.appendChild(ct);
    return a;
  }

  function render() {
    grid.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    const items = q ? CASES.filter(c => (c.title || '').toLowerCase().includes(q)) : CASES;
    items.forEach(c => grid.appendChild(card(c)));
    if (!items.length) grid.appendChild(el('p', 'pempty', 'Geen cases gevonden.'));
    countEl.textContent = items.length + ' van ' + CASES.length + ' cases' + (q ? ' (gefilterd)' : '');
  }

  fetch('../data/cases.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      CASES = d.cases || [];
      const gen = document.getElementById('genDate'); if (gen && d.generated) gen.textContent = d.generated;
      render();
      searchEl.addEventListener('input', render);
    })
    .catch(() => { grid.appendChild(el('p', 'pempty', 'Kon de cases niet laden.')); });
})();
