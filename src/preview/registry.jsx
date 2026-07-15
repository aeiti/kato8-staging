import PlaytestSignupForm from '../components/PlaytestSignupForm'
import DiscordApplicationForm from '../components/DiscordApplicationForm'

/**
 * Registry of previewable components / features.
 *
 * To add: append an entry with { name, label, render }.
 *   name   — URL slug (`/preview/<name>`).
 *   label  — text shown on the `/preview` index.
 *   render — function returning the JSX to display.
 *
 * Preview routes are intentionally not registered in
 * `src/data/seo-config.js`, so the prerender pass skips them and
 * crawlers don't index them.
 */
export const previews = [
  {
    name: 'signup-forms',
    label: 'USB signup forms',
    render: () => (
      <main style={{ padding: '2rem 1rem' }}>
        <PlaytestSignupForm source="preview" />
        <DiscordApplicationForm source="preview" />
      </main>
    ),
  },
]
