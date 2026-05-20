// Prefix any absolute `/Assets/...` path with Vite's BASE_URL so it resolves
// under the project subpath on GitHub Pages (e.g. /kato8-staging/Assets/...).
// Works for single src values and for srcSet strings with multiple paths.
export const asset = (p) =>
  p.replace(/\/Assets\//g, `${import.meta.env.BASE_URL}Assets/`)
