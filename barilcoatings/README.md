# Baril Coatings — Sustainable Coating Solutions

An ambitious, award-grade one-pager for **Baril Coatings**, the brand for
protective and industrial coatings of **Baril Group**.

Built in the same design language as the Baril Group site (premium dark
scrollytelling, Montserrat / Open Sans / Space Grotesk), but in the
**Baril Coatings house style**: deep green base + orange/amber accent +
white, sampled from the official Baril Coatings logo.

## What's here

- `index.html` — the one-pager
- `css/site.css` — full design system + scroll-driven scenes
- `js/site.js` — sticky nav, reveal-on-scroll, the woven paint ribbon
- `js/chapters.js` — the scroll engine (`--t` 0→1 per `[data-scene]`) + counters
- `js/i18n.js` — EN ⇄ NL language switch (English authored, Dutch in the map)
- `assets/img/logo-baril-coatings.svg` — official Baril Coatings wordmark

## Sections

1. **Hero** — *Sustainable coating solutions* (the Baril Coatings claim)
2. **About** — who Baril Coatings is, in four pillars
3. **Chapter 01 · From rust to resilience** — scroll to apply the protective coating
4. **Chapter 02 · More metres, less coating** — thin-layer coverage
5. **Chapter 03 · From barrel to bio** — renewable chemistry (55% → 100% by 2030)
6. **Markets** — steel & infra, OEM & metal, marine & offshore, painting companies
7. **Ranges** — Biobased · DualCure · SteelKote · Aquaran · Bariline
8. **In the field** — practice cases
9. **Datasheet** — Baril Coatings in numbers
10. **Sources** & footer

## Run locally

It's a static site — open `index.html`, or:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Notes

- Fully self-contained (HTML/CSS/JS + one SVG logo). Case images load from
  barilcoatings.com.
- Respects `prefers-reduced-motion`: every scene falls back to its meaningful
  end-state.
- Claims (55% today, <10% in 2022, 100% by 2030) per Baril Group, 2026.
  Durability/coverage figures are illustrative (see the Sources section).
