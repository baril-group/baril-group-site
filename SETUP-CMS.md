# Content editor (CMS) — setup

The sites have a simple web editor at **`/admin`** (Sveltia CMS, a modern
Decap-compatible, Git-based CMS). Editors log in with their **GitHub account**,
change texts (English + Dutch) and images in a form, and on **Save** the change
is committed to this repository — GitHub Pages then republishes automatically.

> **One admin for all Baril brands.** Every brand/site is a collection in the
> same sidebar, behind one login:
> - **Baril Group** — `content/group.json`
> - **Baril Coatings** — `barilcoatings/content/coatings.json`
> - *future sub-brands* — added the same way (see "Add a new brand" below).

The editor itself is built and committed. To make **login** work, one
**one-time, ~10-minute** setup is needed (it can't be done from code — it needs
your GitHub/Cloudflare dashboards).

## 1. Create a GitHub OAuth App
GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
- **Application name:** `Baril CMS`
- **Homepage URL:** `https://tduijghuisen.github.io/baril-group-site/admin/`
- **Authorization callback URL:** `https://<your-relay>/callback` *(from step 2)*

Note the **Client ID** and generate a **Client secret**.

## 2. Deploy the tiny OAuth relay (free)
A Git-based CMS needs a small relay to complete the GitHub login. Use the
ready-made **`sveltia-cms-auth`** worker on Cloudflare (free):

1. Go to <https://github.com/sveltia/sveltia-cms-auth> and follow its
   "Deploy to Cloudflare Workers" steps.
2. Set the worker's environment variables to your **Client ID** and
   **Client secret** from step 1.
3. Copy the worker URL, e.g. `https://baril-cms-auth.<you>.workers.dev`.
4. Put `https://<your-relay>/callback` back into the OAuth App's callback URL
   (step 1).

## 3. Point the CMS at the relay
In **`admin/config.yml`**, uncomment and set:

```yaml
backend:
  name: github
  repo: tduijghuisen/baril-group-site
  branch: main
  base_url: https://baril-cms-auth.<you>.workers.dev
```

Commit that one-line change (or ask me to).

## 4. Add editors
For each colleague who should edit the sites:
- GitHub → repo **Settings → Collaborators → Add people** → give **Write** access.
- They open `https://tduijghuisen.github.io/baril-group-site/admin/`,
  click **Sign in with GitHub**, and can edit.

Each editor needs a (free) GitHub account, as chosen. No other service or
password system is involved.

## How editing works day-to-day
1. Open `/admin`, sign in with GitHub.
2. Pick a brand in the sidebar (**Baril Group**, **Baril Coatings**, …) **→ Teksten & beelden**.
3. Edit any English/Dutch text, or upload a new image.
4. **Save** (publish). A commit lands on `main`; the live page updates in ~1–2
   minutes at `…/baril-group-site/barilcoatings/`.

Leaving a field empty keeps the site's built-in text — you can never blank the
page from the editor. Images you upload are stored in
`barilcoatings/assets/img/`.

## Notes & limits
- The `/admin` page is public but **read-only without GitHub write access** —
  only collaborators can save. (It's marked `noindex`.)
- Phase 1 exposes a curated set of the most-edited fields. More fields are easy
  to add: add the key to `barilcoatings/content/coatings.json`, map it in
  `barilcoatings/js/overrides.js` (`FIELD_MAP`), and add a field in
  `admin/config.yml`.
- The Group site uses the same pattern: `content/group.json`,
  `js/overrides.js` (repo root) and the `group` collection in
  `admin/config.yml`.

## Add a new brand (e.g. a future sub-brand under Group)
Every brand is just another collection — no new admin, no new login.

1. **Site** — give the brand its own folder/site (e.g. `copperant/index.html`),
   in the brand's own design language.
2. **Content file** — create `copperant/content/copperant.json` with the
   editable texts/images (same shape as `coatings.json`: `{ "key": {"en","nl",…} }`
   for text, plain paths for images).
3. **Apply layer** — add `copperant/js/overrides.js` (copy an existing one),
   set its `FILE` to the new JSON and map each key to a CSS selector in
   `FIELD_MAP`; include it from the brand's `index.html`.
4. **Collection** — add a `- name: copperant` collection in `admin/config.yml`
   pointing at `copperant/content/copperant.json`, with labelled fields.

It then shows up automatically in the same `/admin` sidebar. (Happy to scaffold
this for each new brand when it's ready.)
