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
    liter:    { start: 0.15, span: 0.50 }
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
