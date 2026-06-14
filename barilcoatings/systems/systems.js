/* Renders Baril Coatings paint systems from ../data/paintsystems.json.
   Each system: build-up (layers, thickness, dry time), durability and the
   system datasheet in multiple languages (direct links to the Baril database). */
(() => {
  'use strict';
  const LINE_META = {
    dualcure: { name: 'DualCure', color: '#F18A00' },
    steelkote: { name: 'SteelKote', color: '#4FB78E' },
    aquaran: { name: 'Aquaran', color: '#2E8C9E' },
    bariline: { name: 'Bariline', color: '#8FB3A6' },
    biobased: { name: 'Biobased', color: '#5FC98F' },
    marine: { name: 'Marine', color: '#2E8C9E' },
    onderhoud: { name: 'Onderhoud', color: '#B5662F' }
  };
  const LINE_ORDER = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased', 'marine', 'onderhoud'];

  const root = document.getElementById('systems');
  const countEl = document.getElementById('scount');
  const searchEl = document.getElementById('ssearch');
  const chipsEl = document.getElementById('schips');
  let DATA = null;
  let activeLine = 'all';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  function sysCard(s, color) {
    const c = el('div', 'syscard'); c.style.setProperty('--accent', color);
    c.appendChild(el('h3', null, s.name));
    if (s.durability) c.appendChild(el('span', 'sysdur', s.durability));

    const table = el('table', 'systable');
    const thead = el('tr');
    ['Laag', 'Product', 'Dikte', 'Droogtijd'].forEach(h => thead.appendChild(el('th', null, h)));
    table.appendChild(thead);
    (s.steps || []).forEach(st => {
      const tr = el('tr');
      tr.appendChild(el('td', 'num', st.layer || ''));
      tr.appendChild(el('td', null, st.product || ''));
      tr.appendChild(el('td', 'num', st.thickness || ''));
      tr.appendChild(el('td', 'num', st.drytime || ''));
      table.appendChild(tr);
    });
    if (s.totalThickness || s.totalDrytime) {
      const tr = el('tr', 'total');
      tr.appendChild(el('td', null, 'Totaal'));
      tr.appendChild(el('td', null, ''));
      tr.appendChild(el('td', 'num', s.totalThickness || ''));
      tr.appendChild(el('td', 'num', s.totalDrytime || ''));
      table.appendChild(tr);
    }
    c.appendChild(table);

    if (s.languages && s.languages.length) {
      const wrap = el('div', 'ds-form sys-ds');
      const sel = el('select'); sel.setAttribute('aria-label', 'Datasheet-taal');
      s.languages.forEach(l => { const o = el('option', null, (l.lang || '').toUpperCase()); o.value = l.url; if ((l.lang || '') === 'nl') o.selected = true; sel.appendChild(o); });
      const btn = el('button', 'ds-btn', 'Datasheet ↗'); btn.type = 'button';
      btn.style.background = `linear-gradient(95deg, ${color}, var(--amber))`;
      btn.addEventListener('click', () => { if (sel.value) window.open(sel.value, '_blank', 'noopener'); });
      wrap.appendChild(sel); wrap.appendChild(btn);
      c.appendChild(wrap);
    }
    return c;
  }

  function render() {
    root.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    const lines = LINE_ORDER.filter(l => DATA.systems[l] && DATA.systems[l].length);
    let shown = 0, total = 0;
    lines.forEach(l => total += DATA.systems[l].length);

    for (const line of lines) {
      if (activeLine !== 'all' && activeLine !== line) continue;
      const meta = LINE_META[line] || { name: line, color: '#F18A00' };
      let items = DATA.systems[line];
      if (q) items = items.filter(s => (s.name + ' ' + s.durability + ' ' + (s.steps || []).map(x => x.product).join(' ')).toLowerCase().includes(q));
      if (!items.length) continue;
      const sec = el('section', 'sysline');
      const head = el('div', 'sysline-head');
      const dot = el('span', 'bdot'); dot.style.background = meta.color; head.appendChild(dot);
      head.appendChild(el('h2', null, meta.name));
      head.appendChild(el('span', 'bn', items.length + (items.length === 1 ? ' systeem' : ' systemen')));
      sec.appendChild(head);
      const grid = el('div', 'sysgrid');
      items.forEach(s => grid.appendChild(sysCard(s, meta.color)));
      sec.appendChild(grid);
      root.appendChild(sec);
      shown += items.length;
    }
    if (!shown) root.appendChild(el('p', 'pempty', 'Geen systemen gevonden.'));
    countEl.textContent = shown + ' van ' + total + ' systemen' + (q || activeLine !== 'all' ? ' (gefilterd)' : '');
  }

  function buildChips() {
    const lines = LINE_ORDER.filter(l => DATA.systems[l] && DATA.systems[l].length);
    const mk = (key, label) => {
      const b = el('button', 'pchip' + (key === activeLine ? ' active' : ''), label);
      b.addEventListener('click', () => { activeLine = key; [...chipsEl.children].forEach(c => c.classList.remove('active')); b.classList.add('active'); render(); });
      return b;
    };
    chipsEl.appendChild(mk('all', 'Alle lijnen'));
    lines.forEach(l => chipsEl.appendChild(mk(l, (LINE_META[l] || { name: l }).name)));
  }

  fetch('../data/paintsystems.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      DATA = d;
      const gen = document.getElementById('genDate'); if (gen && d.generated) gen.textContent = d.generated;
      buildChips(); render();
      searchEl.addEventListener('input', render);
    })
    .catch(() => { root.appendChild(el('p', 'pempty', 'Kon de systemen niet laden.')); });
})();
