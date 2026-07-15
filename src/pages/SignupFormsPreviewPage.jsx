import PlaytestSignupForm from '../components/PlaytestSignupForm'
import DiscordApplicationForm from '../components/DiscordApplicationForm'

/**
 * Preview / iteration page for the two USB sign-up forms.
 *
 * This route is intentionally not registered in `src/data/seo-config.js`,
 * so the prerender pass skips it and crawlers won't get a prerendered
 * HTML entry for it. Removable once the forms are placed for real.
 *
 * Access at `/preview/signup-forms`.
 */
export default function SignupFormsPreviewPage() {
  return (
    <main style={{ padding: '2rem 1rem' }}>
      <PlaytestSignupForm source="preview" />
      <DiscordApplicationForm source="preview" />
    </main>
  )
}
