/**
 * Per-game playtest sign-up endpoints, keyed by game slug.
 *
 * Each value is a Formspree URL (or undefined if the env var isn't
 * set — in that case `PlaytestSignupForm` skips the network call and
 * still shows the success state, which is useful for local dev before
 * the endpoint is provisioned).
 *
 * Values are read from Vite env vars at build time. To provision a
 * new game: add a `VITE_<GAME>_PLAYTEST_ENDPOINT` variable to
 * `.env.example`, wire it up as a GitHub Actions secret for staging /
 * prod, and add an entry here.
 */
export const playtestEndpoints = {
  'universal-serial-blade': import.meta.env.VITE_USB_PLAYTEST_ENDPOINT,
  'last-light': import.meta.env.VITE_LAST_LIGHT_PLAYTEST_ENDPOINT,
  'big-boss-cleanup': import.meta.env.VITE_BIG_BOSS_PLAYTEST_ENDPOINT,
}
