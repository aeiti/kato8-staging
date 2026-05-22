# kato8-staging

Staging deployment of the Kato.8 Studios marketing site. Live at <https://aeiti.github.io/kato8-staging/>.

Source code mirrors [terrytkato8/external-site](https://github.com/terrytkato8/external-site). **The canonical docs live there** — see that repo's [README.md](https://github.com/terrytkato8/external-site/blob/main/README.md) and [ARCHITECTURE.md](https://github.com/terrytkato8/external-site/blob/main/ARCHITECTURE.md) for tech stack, dev commands, repo layout, and the design rationale.

Code-level documentation is also mirrored here:
- [COMPONENTS.md](./COMPONENTS.md) — render-tree map and per-file pointers for the website code.
- JSDoc headers on every file under `src/`.

This README is intentionally short and covers only what's specific to the staging repo.

## Local dev

```bash
npm install
VITE_DEPLOY_TARGET=staging npm run dev
```

Setting `VITE_DEPLOY_TARGET=staging` is optional locally but matches what CI does for this repo. Without it, the dev server defaults to prod and base URLs won't include `/kato8-staging/` (still works for most things since dev server doesn't enforce the subpath).

## Deploy

Push to `main` triggers [`.github/workflows/deploy-staging.yml`](./.github/workflows/deploy-staging.yml), which:

1. Builds with `VITE_DEPLOY_TARGET=staging` (base URL `/kato8-staging/`, no `CNAME`).
2. Publishes via `actions/deploy-pages`.

Pages source for this repo is set to "GitHub Actions" — the committed `docs/` folder is no longer read.

## Versioning

This repo auto-tags on every push to `main` via [`.github/workflows/release.yml`](./.github/workflows/release.yml). CalVer format `vYYYY.MM.DD.N`. Patch numbers are computed from this repo's own tag history — staging and prod tag independently and version numbers are unrelated.

## When to push here

Use staging as a preview before landing changes on production:

1. Port the change from `terrytkato8/external-site` (cherry-pick, copy diff, or manually mirror).
2. Open and merge a PR here.
3. Verify on <https://aeiti.github.io/kato8-staging/>.
4. Open and merge the same change on the prod repo.

The two repos' source code is intentionally near-identical; only the deploy workflows differ. If you find yourself diverging real source code, that's probably a bug.
