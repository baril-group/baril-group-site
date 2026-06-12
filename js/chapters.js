/* Chapter animations A–D (build phase P2 — see baril-group-cowork-brief.md §4.2–4.5)
   A: "The Liter"      — circular raw-materials transition
   B: "The Paint Pool" — global what-if globe fill + FOSSIL→RENEWABLE morph
   C: "Clean Air"      — solvent particles dissolve + CSE timeline
   D: "The Short Chain"— supply-line retraction map
   Engine: every [data-scene] element gets a scroll-mapped CSS custom
   property --t (0→1); all visual states derive from --t in CSS.
   Respects prefers-reduced-motion: static end-state (--t = 1). */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Chapter C: build the solvent particle field ---------- */
  const pg = document.getElementById('airParticles');
  if (pg) {
    const NS = 'http://www.w3.org/2000/svg';
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 110; i++) {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (250 + Math.random() * 610).toFixed(1));
      c.setAttribute('cy', (24 + Math.random() * 340).toFixed(1));
      c.setAttribute('r', (0.8 + Math.random() * 2.1).toFixed(2));
      c.setAttribute('opacity', (0.18 + Math.random() * 0.45).toFixed(2));
      if (!reduced) {
        c.style.animation =
          'pdrift ' + (7 + Math.random() * 9).toFixed(1) + 's ease-in-out ' +
          (Math.random() * -10).toFixed(1) + 's infinite alternate';
      }
      frag.appendChild(c);
    }
    pg.appendChild(frag);
  }

  /* ---------- scroll progress engine ---------- */
  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  let queued = false;

  // pinned scenes (.scene wrapper taller than viewport): progress through the pin
  function pinnedProgress(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - innerHeight;
    return total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
  }
  // flowing scenes (Chapter C): progress while passing through the viewport
  function flowProgress(el) {
    const r = el.getBoundingClientRect();
    const span = r.height + innerHeight * 0.45;
    return Math.min(1, Math.max(0, (innerHeight * 0.88 - r.top) / span));
  }

  /* ---------- mono counters ---------- */
  // per-scene window in which the counter runs (fractions of --t)
  const tickWindow = { liter: { start: 0.15, span: 0.5 }, air: { start: 0.22, span: 0.28 } };
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
      const t = s.classList.contains('scene') ? pinnedProgress(s) : flowProgress(s);
      s.style.setProperty('--t', t.toFixed(4));
      const tick = s.querySelector('.tick');
      if (tick) renderTick(tick, s.dataset.scene, t);
    }
  }

  if (reduced) {
    // static, meaningful end state per chapter
    for (const s of scenes) {
      s.style.setProperty('--t', '1');
      const tick = s.querySelector('.tick');
      if (tick) {
        tick.textContent = (tick.dataset.prefix || '') + tick.dataset.count + (tick.dataset.suffix || '');
      }
    }
    return;
  }

  const onScroll = () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('load', onScroll);
  update();
})();
