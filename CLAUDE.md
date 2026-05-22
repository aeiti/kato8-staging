# Claude Code context

This file is auto-loaded by Claude Code when working in this repo. The canonical AI-context doc lives in the prod repo's [CLAUDE.md](https://github.com/terrytkato8/external-site/blob/main/CLAUDE.md). Read that for general conventions (commit authorship, asset helper, SEO entries, etc.).

## What's specific to this repo

This is the staging mirror of `terrytkato8/external-site`. Same source code, different deploy target.

- **Deploy workflow**: [`.github/workflows/deploy-staging.yml`](./.github/workflows/deploy-staging.yml) on push to `main`. Builds with `VITE_DEPLOY_TARGET=staging` → publishes to <https://aeiti.github.io/kato8-staging/>.
- **No release workflow.** Version tags come from the prod repo via the `STAGING_TAG_TOKEN` PAT. Do not add a `release.yml` here.
- **Base URL is `/kato8-staging/`** for all builds in this repo (set by `VITE_DEPLOY_TARGET=staging` in CI; `vite.config.js` reads the env var).

## When porting changes from prod

Source should match the prod repo byte-for-byte except for:

- `.github/workflows/` (each repo has its own)
- `README.md` and `CLAUDE.md` (this repo's are short pointers)

If you're mirroring a prod change here, the easiest method is to cherry-pick the prod commit. The two repos don't share git history but the source diffs apply cleanly because the env-aware config means there's no per-repo source drift.

## Don't break these

- `vite.config.js`'s `base` must remain env-aware (read from `VITE_DEPLOY_TARGET`). Don't hard-code `/kato8-staging/`.
- `BrowserRouter` in `src/main.jsx` must have `basename={import.meta.env.BASE_URL}` — without it, routes don't resolve under the staging subpath.
- Deploy workflow must set `VITE_DEPLOY_TARGET: staging` in the Build step env. Without it, the artifact would be a prod build claiming `kato8studios.com`.
