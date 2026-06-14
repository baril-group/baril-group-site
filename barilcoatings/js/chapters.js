/* Scroll-mapped chapter engine for Baril Coatings.
   Every [data-scene] element gets a CSS custom property --t (0→1) derived
   from its scroll position; all visual states live in CSS.
   Scenes:
     corrode  — rust recedes, protective coating sweeps across
     coverage — one litre spreads over an expanding area (thin-layer)
     liter    — fossil → biobased cross-section
   Respects prefers-reduced-motion: static end-state (--t = 1). */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Chapter 04: build the DualCure molecular mesh ---------- */
  const meshChem = document.getElementById('dccChem');
  if (meshChem) {
    const NS = 'http://www.w3.org/2000/svg';
    const nodes = [
      [70, 88], [170, 70], [270, 84], [358, 74],
      [60, 178], [162, 166], [262, 172], [360, 162],
      [82, 268], [184, 270], [282, 262], [360, 256]
    ];
    // chemical (2K, A+B) backbone — the "single network"
    const chem = [
      [0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[8,9],[9,10],[10,11],
      [0,4],[2,6],[3,7],[5,9],[7,11]
    ];
    // moisture-cure crosslinks — diagonals that densify the mesh
    const moist = [
      [0,5],[1,4],[1,6],[2,5],[2,7],[3,6],
      [4,9],[5,8],[5,10],[6,9],[6,11],[7,10]
    ];
    const moistG = document.getElementById('dccMoist');
    const nodeG = document.getElementById('dccNodes');
    const mkLine = (a, b, i, cls) => {
      const [x1, y1] = nodes[a], [x2, y2] = nodes[b];
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', x1); l.setAttribute('y1', y1);
      l.setAttribute('x2', x2); l.setAttribute('y2', y2);
      l.setAttribute('class', cls); l.setAttribute('pathLength', '1');
      l.style.setProperty('--i', i);
      return l;
    };
    chem.forEach((e, i) => meshChem.appendChild(mkLine(e[0], e[1], i, 'mesh-edge chem')));
    moist.forEach((e, i) => moistG.appendChild(mkLine(e[0], e[1], i, 'mesh-edge moist')));
    nodes.forEach((n, i) => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', n[0]); c.setAttribute('cy', n[1]); c.setAttribute('r', 7);
      c.setAttribute('class', 'mesh-node'); c.style.setProperty('--i', i);
      nodeG.appendChild(c);
    });
  }

  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  let queued = false;

  // pinned scenes (.scene wrapper taller than viewport): progress through the pin
  function pinnedProgress(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - innerHeight;
    return total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
  }

  // per-scene window in which a counter runs (fractions of --t)
  const tickWindow = {
    corrode:  { start: 0.10, span: 0.60 },
    coverage: { start: 0.05, span: 0.70 },
    liter:    { start: 0.15, span: 0.50 },
    dcc:      { start: 0.12, span: 0.55 }
  };
  function renderTick(tickEl, sceneName, t) {
    const w = tickWindow[sceneName] || { start: 0.15, span: 0.5 };
    const p = Math.min(1, Math.max(0, (t - w.start) / w.span));
    const target = parseInt(tickEl.dataset.count, 10) || 0;
    const pre = tickEl.dataset.prefix || '';
    const suf = tickEl.dataset.suffix || '';
    const text = (p >= 1 ? pre : '') + Math.round(p * target) + suf;
    if (tickEl.textContent !== text) tickEl.textContent = text;
  }

  function update() {
    queued = false;
    for (const s of scenes) {
      const t = pinnedProgress(s);
      s.style.setProperty('--t', t.toFixed(4));
      s.querySelectorAll('.tick').forEach(tick => renderTick(tick, s.dataset.scene, t));
    }
  }

  if (reduced) {
    for (const s of scenes) {
      s.style.setProperty('--t', '1');
      s.querySelectorAll('.tick').forEach(tick => {
        tick.textContent = (tick.dataset.prefix || '') + tick.dataset.count + (tick.dataset.suffix || '');
      });
    }
    return;
  }

  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('load', onScroll);
  update();
})();
