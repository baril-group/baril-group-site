# Runbook — Move this repo to a Baril Group GitHub organization

**For:** Claude Cowork (agentic run), executing largely hands-off.
**Goal:** Move `tduijghuisen/baril-group-site` to a Baril Group **organization** so the
public URL and ownership no longer carry a personal account name — **without breaking
the live site, the CMS, or the GitHub Pages deployment.**

This migration is low-risk: the site uses **relative links** everywhere, the GitHub
Actions workflow is owner-agnostic, and only **four** spots hard-code the owner name.

---

## 0. Fill in these variables first

```
ORG        = <the new org login, e.g. baril-group>      # no spaces; this becomes the URL owner
OLD_OWNER  = tduijghuisen
REPO       = baril-group-site
```

> New Pages URL after the move: `https://<ORG>.github.io/baril-group-site/`
> (The repo path stays `/baril-group-site/`, so every relative link keeps working.)

---

## 1. Prerequisites the human does BEFORE the Cowork run (≈3 min)

These steps need the GitHub web UI / billing and **cannot** be done by the API, so do
them up front, then let Cowork run the rest:

1. **Create the organization.** GitHub → top-right **+** → **New organization** →
   pick the **Free** plan → set the org login to **`<ORG>`** (e.g. `baril-group`).
2. Make sure the account Cowork is authenticated as is an **Owner** of `<ORG>`
   (it will be, if you created it).
3. Confirm Cowork's `gh` is logged in as that same account:
   ```bash
   gh auth status
   ```
   The token/login must have **Administration: read & write** on the repo and the
   right to create repos in `<ORG>`. (Classic PAT scopes: `repo` + `admin:org`.)

If any of the above is missing, **stop and ask the human** before continuing.

---

## 2. Pre-flight checks (Cowork)

```bash
gh repo view $OLD_OWNER/$REPO --json nameWithOwner,defaultBranchRef,visibility
gh api repos/$OLD_OWNER/$REPO/pages --jq '{status,html_url,source}'   # note current Pages config
git -C <repo-checkout> status                                         # working tree should be clean
```

Record the current default branch (expected: `main`) and Pages source
(expected: branch `main`, path `/`). You'll verify these again after the move.

---

## 3. Transfer the repository (preserves history, PRs, issues, stars)

**Preferred — API:**
```bash
gh api -X POST repos/$OLD_OWNER/$REPO/transfer -f new_owner=$ORG
```

**Fallback — UI (if the API call is refused):** GitHub → repo **Settings** →
**General** → **Danger Zone** → **Transfer ownership** → new owner `<ORG>` → confirm.

Notes:
- GitHub keeps **redirects** from the old `tduijghuisen/...` paths, so nothing breaks
  during the cutover.
- The dev branch `claude/baril-coatings-one-pager-fofmhn` and all merged PRs move with it.

Wait until `gh repo view $ORG/$REPO` succeeds before continuing:
```bash
until gh repo view $ORG/$REPO --json nameWithOwner >/dev/null 2>&1; do sleep 3; done
echo "Transfer complete."
```

---

## 4. Re-enable / verify GitHub Pages on the org repo

Transfer usually preserves Pages, but **verify** (and re-set if needed):

```bash
gh api repos/$ORG/$REPO/pages --jq '{status,html_url,source}' || \
gh api -X POST repos/$ORG/$REPO/pages -f source.branch=main -f source.path=/
```

Then confirm it builds and serves:
```bash
curl -sI https://$ORG.github.io/$REPO/ | head -1            # expect: HTTP/2 200
```
(Pages can take 1–2 min to rebuild after the transfer.)

---

## 5. Update the four hard-coded owner references

Only these reference the old owner. Replace `tduijghuisen` → `$ORG` in each:

| File | What it is |
|------|-----------|
| `admin/app.js` (line ~10) | `const REPO = 'tduijghuisen/baril-group-site';` |
| `admin/index.html` (line ~32) | token-modal text: `<code>tduijghuisen/baril-group-site</code>` |
| `SETUP-CMS.md` (line ~14) | docs URL `https://tduijghuisen.github.io/baril-group-site/admin/` |
| `SETUP-CMS.md` (line ~25) | docs repo name `tduijghuisen/baril-group-site` |

Do it on a branch and open a PR (don't push to `main` directly):

```bash
cd <repo-checkout>
git fetch origin && git checkout main && git pull
git checkout -b chore/org-rename
grep -rl 'tduijghuisen' --include='*.js' --include='*.html' --include='*.md' . \
  | xargs sed -i 's/tduijghuisen/'"$ORG"'/g'
grep -rn 'tduijghuisen' . --include='*.js' --include='*.html' --include='*.md'   # expect: no matches
git commit -am "chore: point repo references at the $ORG organization"
git push -u origin chore/org-rename
gh pr create --base main --head chore/org-rename \
  --title "Point references at the $ORG organization" \
  --body "Update the four hard-coded owner references after moving the repo to the $ORG org."
gh pr merge --squash --delete-branch
```

End commit messages with the standard trailers used in this repo:
```
Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
Claude-Session: <your session URL>
```

---

## 6. Point the local clone at the new owner

```bash
git -C <repo-checkout> remote set-url origin https://github.com/$ORG/$REPO.git
git -C <repo-checkout> remote -v        # confirm it shows $ORG
git -C <repo-checkout> fetch origin
```

---

## 7. Verification checklist (Cowork)

- [ ] `gh repo view $ORG/$REPO` resolves; old `tduijghuisen/$REPO` redirects to it.
- [ ] `curl -sI https://$ORG.github.io/$REPO/` returns `200`.
- [ ] A brand page loads, e.g. `https://$ORG.github.io/$REPO/nixol/` → `200`.
- [ ] The kiosk presentation loads, e.g. `.../presentation/group/` → `200`.
- [ ] `grep -rn 'tduijghuisen' .` (excluding `.git/`) returns **nothing**.
- [ ] The `Sync Baril data` Action still appears under the repo's Actions tab
      (it uses the built-in `GITHUB_TOKEN`, so no edits needed).

Report the final Pages URL and the verification results back to the human.

---

## 8. Manual follow-ups for the human (cannot be automated)

1. **CMS token.** The admin CMS uses a *fine-grained* personal access token that was
   scoped to `tduijghuisen/baril-group-site`. Create a **new** fine-grained token
   scoped to **`<ORG>/baril-group-site`** with **Contents: Read & write**, and paste it
   once in the admin login. (Old token stops working for the new path.)
2. **Bookmarks / links** that used the old `tduijghuisen.github.io` URL — update them.
   (Old links keep redirecting for a while, but don't rely on it long-term.)

---

## 9. Optional — custom domain (hide the github.io URL entirely)

If Baril wants the site on a real domain (e.g. `group.baril.com`) instead of
`github.io`:

1. In repo **Settings → Pages → Custom domain**, enter the domain (this commits a
   `CNAME` file to the repo root).
2. At the DNS provider, add a **CNAME** record pointing the subdomain to
   `$ORG.github.io`. (For an apex/root domain, add GitHub's Pages **A/AAAA** records
   instead.)
3. Tick **Enforce HTTPS** once the certificate is issued.

This is independent of the move and can be done later.

---

## 10. Rollback

The transfer is reversible: transfer the repo back to `tduijghuisen` (Settings →
Transfer, or the same API call with `new_owner=tduijghuisen`), revert the
`chore/org-rename` PR, and reset the local remote. GitHub's redirects mean the live
site keeps working throughout.

> **Note on git history:** moving the repo does **not** rewrite commit history. The
> personal account name only appeared in the *URL*, which this move fixes. Scrubbing
> author metadata from history is a separate, invasive step (rewrites every commit SHA
> and detaches existing PRs) and is **not recommended** — skip it unless explicitly asked.
