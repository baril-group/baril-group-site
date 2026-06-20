/* Renders Baril Coatings coating systems from ../data/paintsystems.json.
   Each system: build-up (layers, thickness, dry time), durability and the
   system datasheet in multiple languages (direct links to the Baril database).
   Multilingual (nl/en/pl/ro); English by default. */
(() => {
  'use strict';
  const LINE_META = {
    dualcure: { name: 'DualCure', color: '#F18A00' },
    steelkote: { name: 'SteelKote', color: '#4FB78E' },
    aquaran: { name: 'Aquaran', color: '#2E8C9E' },
    bariline: { name: 'Bariline', color: '#8FB3A6' },
    biobased: { name: 'Biobased', color: '#5FC98F' },
    marine: { name: 'Marine', color: '#2E8C9E' },
    onderhoud: { name: { nl: 'Onderhoud', en: 'Maintenance', pl: 'Konserwacja', ro: 'Întreținere' }, color: '#B5662F' }
  };
  const LINE_ORDER = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased', 'marine', 'onderhoud'];

  const T = {
    nl: { eyebrow: 'Verfsystemen · Baril Coatings', h1: 'Complete <span class="paint">opbouw</span>', lead: 'Beproefde verfsystemen per toepassing — laag voor laag, met laagdikte, droogtijd en duurzaamheidsklasse, plus de systeem-datasheet in meerdere talen.', search: 'Zoek een systeem (naam, product, klasse)…', th: ['Laag', 'Product', 'Dikte', 'Droogtijd'], total: 'Totaal', allLines: 'Alle lijnen', sys: n => n === 1 ? 'systeem' : 'systemen', count: (s, t, f) => `${s} van ${t} systemen${f ? ' (gefilterd)' : ''}`, none: 'Geen systemen gevonden.', fail: 'Kon de systemen niet laden.' },
    en: { eyebrow: 'Coating systems · Baril Coatings', h1: 'Complete <span class="paint">build-up</span>', lead: 'Proven coating systems per application — layer by layer, with film thickness, drying time and durability class, plus the system datasheet in multiple languages.', search: 'Search a system (name, product, class)…', th: ['Layer', 'Product', 'Thickness', 'Dry time'], total: 'Total', allLines: 'All lines', sys: n => n === 1 ? 'system' : 'systems', count: (s, t, f) => `${s} of ${t} systems${f ? ' (filtered)' : ''}`, none: 'No systems found.', fail: 'Could not load the systems.' },
    pl: { eyebrow: 'Systemy powłokowe · Baril Coatings', h1: 'Pełna <span class="paint">budowa</span>', lead: 'Sprawdzone systemy powłokowe według zastosowania — warstwa po warstwie, z grubością powłoki, czasem schnięcia i klasą trwałości, plus karta systemu w wielu językach.', search: 'Szukaj systemu (nazwa, produkt, klasa)…', th: ['Warstwa', 'Produkt', 'Grubość', 'Czas schnięcia'], total: 'Razem', allLines: 'Wszystkie linie', sys: n => n === 1 ? 'system' : 'systemy', count: (s, t, f) => `${s} z ${t} systemów${f ? ' (filtr)' : ''}`, none: 'Nie znaleziono systemów.', fail: 'Nie udało się załadować systemów.' },
    ro: { eyebrow: 'Sisteme de acoperire · Baril Coatings', h1: 'Structură <span class="paint">completă</span>', lead: 'Sisteme de acoperire dovedite per aplicație — strat cu strat, cu grosimea filmului, timpul de uscare și clasa de durabilitate, plus fișa sistemului în mai multe limbi.', search: 'Caută un sistem (nume, produs, clasă)…', th: ['Strat', 'Produs', 'Grosime', 'Timp de uscare'], total: 'Total', allLines: 'Toate liniile', sys: n => n === 1 ? 'sistem' : 'sisteme', count: (s, t, f) => `${s} din ${t} sisteme${f ? ' (filtrat)' : ''}`, none: 'Niciun sistem găsit.', fail: 'Nu s-au putut încărca sistemele.' }
  };

  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { lang = 'en'; }
  if (!T[lang]) lang = 'en';
  const L = (o, k) => (lang !== 'nl' && o[k + '_' + lang] != null) ? o[k + '_' + lang] : o[k];
  const lineName = m => (m && typeof m.name === 'object') ? (m.name[lang] || m.name.en || m.name.nl) : (m ? m.name : '');

  const root = document.getElementById('systems');
  const countEl = document.getElementById('scount');
  const searchEl = document.getElementById('ssearch');
  const chipsEl = document.getElementById('schips');
  const flagBox = document.getElementById('langflags');
  let DATA = null;
  let activeLine = 'all';

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  function applyChrome() {
    const t = T[lang];
    document.documentElement.lang = lang;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
    set('t-eyebrow', t.eyebrow); set('t-h1', t.h1); set('t-lead', t.lead);
    if (searchEl) searchEl.placeholder = t.search;
    if (flagBox) [...flagBox.children].forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  function sysCard(s, color) {
    const t = T[lang];
    const c = el('div', 'syscard'); c.style.setProperty('--accent', color);
    c.appendChild(el('h3', null, L(s, 'name')));
    const dur = L(s, 'durability');
    if (dur) c.appendChild(el('span', 'sysdur', dur));

    const table = el('table', 'systable');
    const thead = el('tr');
    t.th.forEach(h => thead.appendChild(el('th', null, h)));
    table.appendChild(thead);
    (s.steps || []).forEach(st => {
      const tr = el('tr');
      tr.appendChild(el('td', 'num', L(st, 'layer') || ''));
      tr.appendChild(el('td', null, L(st, 'product') || ''));
      tr.appendChild(el('td', 'num', st.thickness || ''));
      tr.appendChild(el('td', 'num', st.drytime || ''));
      table.appendChild(tr);
    });
    if (s.totalThickness || s.totalDrytime) {
      const tr = el('tr', 'total');
      tr.appendChild(el('td', null, t.total));
      tr.appendChild(el('td', null, ''));
      tr.appendChild(el('td', 'num', s.totalThickness || ''));
      tr.appendChild(el('td', 'num', s.totalDrytime || ''));
      table.appendChild(tr);
    }
    c.appendChild(table);

    if (s.languages && s.languages.length) {
      const wrap = el('div', 'ds-form sys-ds');
      const sel = el('select'); sel.setAttribute('aria-label', 'Datasheet');
      s.languages.forEach(l => { const o = el('option', null, (l.lang || '').toUpperCase()); o.value = l.url; if ((l.lang || '') === lang) o.selected = true; sel.appendChild(o); });
      const btn = el('button', 'ds-btn', 'Datasheet ↗'); btn.type = 'button';
      btn.style.background = `linear-gradient(95deg, ${color}, var(--amber))`;
      btn.addEventListener('click', () => { if (sel.value) window.open(sel.value, '_blank', 'noopener'); });
      wrap.appendChild(sel); wrap.appendChild(btn);
      c.appendChild(wrap);
    }
    return c;
  }

  function render() {
    const t = T[lang];
    root.innerHTML = '';
    const q = (searchEl.value || '').trim().toLowerCase();
    const lines = LINE_ORDER.filter(l => DATA.systems[l] && DATA.systems[l].length);
    let shown = 0, total = 0;
    lines.forEach(l => total += DATA.systems[l].length);

    for (const line of lines) {
      if (activeLine !== 'all' && activeLine !== line) continue;
      const meta = LINE_META[line] || { name: line, color: '#F18A00' };
      let items = DATA.systems[line];
      if (q) items = items.filter(s => (L(s, 'name') + ' ' + (L(s, 'durability') || '') + ' ' + (s.steps || []).map(x => L(x, 'product')).join(' ')).toLowerCase().includes(q));
      if (!items.length) continue;
      const sec = el('section', 'sysline');
      const head = el('div', 'sysline-head');
      const dot = el('span', 'bdot'); dot.style.background = meta.color; head.appendChild(dot);
      head.appendChild(el('h2', null, lineName(meta)));
      head.appendChild(el('span', 'bn', items.length + ' ' + t.sys(items.length)));
      sec.appendChild(head);
      const grid = el('div', 'sysgrid');
      items.forEach(s => grid.appendChild(sysCard(s, meta.color)));
      sec.appendChild(grid);
      root.appendChild(sec);
      shown += items.length;
    }
    if (!shown) root.appendChild(el('p', 'pempty', t.none));
    countEl.textContent = t.count(shown, total, !!(q || activeLine !== 'all'));
  }

  function buildChips() {
    chipsEl.innerHTML = '';
    const lines = LINE_ORDER.filter(l => DATA.systems[l] && DATA.systems[l].length);
    const mk = (key, label) => {
      const b = el('button', 'pchip' + (key === activeLine ? ' active' : ''), label);
      b.addEventListener('click', () => { activeLine = key; [...chipsEl.children].forEach(c => c.classList.remove('active')); b.classList.add('active'); render(); });
      return b;
    };
    chipsEl.appendChild(mk('all', T[lang].allLines));
    lines.forEach(l => chipsEl.appendChild(mk(l, lineName(LINE_META[l] || { name: l }))));
  }

  applyChrome();
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!T[lang]) lang = 'en';
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    applyChrome(); if (DATA) { buildChips(); render(); }
  }));

  fetch('../data/paintsystems.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      DATA = d;
      const gen = document.getElementById('genDate'); if (gen && d.generated) gen.textContent = d.generated;
      buildChips(); render();
      searchEl.addEventListener('input', render);
    })
    .catch(() => { root.appendChild(el('p', 'pempty', T[lang].fail)); });
})();
