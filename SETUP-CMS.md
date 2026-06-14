# Content editor (CMS) — setup

The sites have a simple web editor at **`/admin`** (Sveltia CMS, a modern
Decap-compatible, Git-based CMS). Editors log in with their **GitHub account**,
change texts (English + Dutch) and images in a form, and on **Save** the change
is committed to this repository — GitHub Pages then republishes automatically.

> **Phase 1** covers the **Baril Coatings** one-pager
> (`barilcoatings/content/coatings.json`). The Baril Group site can be added
> the same way as Phase 2.

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
2. Pick **Baril Coatings — one-pager → Teksten & beelden**.
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
- For the Group site (Phase 2) the same pattern is repeated with its own
  content file and a second collection in `admin/config.yml`.
