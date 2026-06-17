# Content overview & editor (`/admin`)

A single tool at **`/admin/`** shows **every text, image and link** across the
whole Baril Group umbrella — the Group site, Baril Coatings (incl. the Aquaran,
DualCure, SteelKote, Bariline product lines and the product catalogue), Nixol,
TintLab, Copperant and Fairf — each item with a **badge**:

- **Bewerkbaar** — editable content that lives in this repository.
- **Externe bron: …** — an image mirrored from a brand's own website
  (e.g. `fairf.eu`, `copperant.com`).
- **Externe link: …** — a link that points to an external site.
- **Interne link** — a link within the umbrella.

Open `https://tduijghuisen.github.io/baril-group-site/admin/`. **Browsing works
without logging in** (read-only). To **edit**, sign in with a GitHub token.

## Logging in (GitHub token)

No server or OAuth app is needed — you paste a personal access token that stays
only in your browser (localStorage).

1. GitHub → **Settings → Developer settings → Fine-grained personal access
   tokens → Generate new token** (<https://github.com/settings/tokens?type=beta>).
2. **Resource owner:** your account · **Repository access:** only
   `tduijghuisen/baril-group-site`.
3. **Permissions → Repository permissions → Contents: Read and write.**
4. Generate, copy the token (`github_pat_…`).
5. In `/admin`, click **Inloggen met GitHub-token**, paste it, **Opslaan**.

Anyone who should edit needs **Write access** to the repo (Settings →
Collaborators) and their own token.

## Editing

1. Find an item (search box, the category / "alleen externe bronnen" filters, or
   the page chips).
2. Click **Bewerken**, change the text or image path, **Opslaan**.
3. Save commits straight to the source file on `main`; GitHub Pages republishes
   in ~1–2 minutes.

### What v1 edits
- **Text** is edited in the page's **base (English)** HTML. The Dutch / Polish /
  Romanian variants live in each page's `js/i18n.js` and are not yet exposed
  here — so a base-text change shows in English; translations are managed in the
  i18n files (next iteration).
- **Images** are edited as a **path/URL** (point to another asset or URL).
  Uploading a brand-new image file from the tool is a planned next step.
- The product **catalogue** items come from `barilcoatings/products/products.json`
  (a separate data file) and are not listed here.

## How it works (for maintainers)
- `admin/index.html` + `admin/app.css` + `admin/app.js` — a dependency-free
  dashboard. It fetches each page from the live site to build the inventory, and
  uses the GitHub **Contents API** to read a file (for its SHA) and commit an
  edit. Edits are exact, targeted substring replacements in the source — no
  reformatting of the rest of the file.
- External-source images are flagged via a small registry in `app.js`
  (`EXTERNAL_ASSETS`) plus external-domain detection (`EXT_DOMAINS`); extend
  these as brands/assets change.
- Adding a brand/page to the tool = add one entry to the `PAGES` array in
  `app.js`.

> Note: the earlier Sveltia/Decap (OAuth) setup has been replaced by this
> token-based dashboard. The per-page `content/*.json` + `js/overrides.js`
> runtime layer remains in place and harmless (empty overrides change nothing).
