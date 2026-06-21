# Languages & translations

The umbrella ships in **9 interface languages**: `en` (source), `nl`, `de`,
`fr`, `es`, `it`, `pl`, `ro`, `tr`. English is authored directly in the HTML;
the other languages are swapped in at runtime.

## Two translation systems

**1. Brand / Group pages** — `index.html`, `barilcoatings/` hub + product-line
pages (DualCure, SteelKote, Aquaran, Bariline) and the 9 brand sites
(Copperant, Fairf, Fortis, Nixol, TintLab, AgriGuard, AutoGuard, FleetSpec,
Resinwerks).

- English lives in the DOM. Each page loads an i18n bundle (`js/i18n.js`, plus
  `barilcoatings/js/brand-i18n.js` for the product-line pages) containing a
  `MAP` of `[cssSelector, { nl, de, fr, es, it, pl, ro, tr }]` entries.
- The engine sets `el.innerHTML` per selector. **Missing entries fall back to
  the English DOM text** (`if (v == null) return;`), so a language is usable
  the moment it is wired up, even before anything is translated.
- Positional arrays: when a selector matches several elements the value is an
  array that must stay in DOM order.
- A hard-coded allow-list of language codes appears twice in every bundle and
  gates which codes the switcher accepts.

**2. Catalogue pages** (data-driven) — `barilcoatings/products`, `systems`,
`markten`, `cases`.

- These render from JSON (`products.json`, `data/paintsystems.json`,
  `data/markets.json`, `data/cases.json`) plus a per-page `T` table of UI
  strings, and fall back to English via `if (!T[lang]) lang = 'en'`.
- They intentionally offer only the languages that have **source data**:
  products/systems `nl/en/pl/ro`, markets/cases `nl/en`. Adding a new language
  here also means adding the `_xx` data fields (and the matching fetch in
  `tools/sync.js`), so it is a separate, content-dependent step — the
  `add-language.js` tool does **not** touch the catalogue.

## Add a new interface language

1. Drop the flag SVG in `assets/img/flags/<code>.svg` (copy an existing one as
   a starting point; 22×15 / 24×16 viewbox).
2. Run the scaffolder:

   ```bash
   node tools/add-language.js <code> "<Native name>"      # e.g. sv "Svenska"
   node tools/add-language.js --dry <code> "<Native name>" # preview only
   ```

   This copies the flag into every site, inserts the `<button data-lang>` into
   every `#langMenu`, and extends the allow-list in every i18n bundle. The
   language is now **live and shows English** everywhere.
3. Translate incrementally. Add the `<code>:` key to entries in the i18n `MAP`
   files. Track progress with:

   ```bash
   node tools/i18n-status.js <code>
   ```

   Anything still missing keeps showing English, so you can ship partial
   translations safely.

## Notes

- The footer carries a disclaimer that some texts are machine-translated and
  invites corrections — keep it.
- Brand names and product names (Baril, Copperant, DualCure, FortiMax, RedLike™,
  Novolac, …) are left untranslated by design.
- To add the new language to the catalogue pages too, extend each page's `T`
  table and the JSON `_<code>` fields, then re-run `tools/sync.js`.
