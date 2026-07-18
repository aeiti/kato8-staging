import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import Hero from '../components/Hero'
import GameGrid from '../components/GameGrid'
import GameCard from '../components/GameCard'
import SupportSection from '../components/SupportSection'
import GoFundMeWidget from '../components/GoFundMeWidget'
import ConceptArtGallery from '../components/ConceptArtGallery'
import { SocialIcon, socialLinks } from '../components/SocialIcons'
import NewsletterSignup from '../components/NewsletterSignup'
import PlaytestSignupForm from '../components/PlaytestSignupForm'
import DiscordSignupForm from '../components/DiscordSignupForm'
import { games } from '../data/games'

/**
 * Registry of previewable components / features.
 *
 * To add: append an entry with { name, label, group, render }.
 *   name   — URL slug (`/preview/<name>`).
 *   label  — text shown on the `/preview` index.
 *   group  — section heading on the index; must match one of GROUP_ORDER
 *            in [`PreviewPage.jsx`](./PreviewPage.jsx). Matches the
 *            groupings in [../../COMPONENTS.md](../../COMPONENTS.md).
 *   render — function returning the JSX to display.
 *
 * Preview routes are intentionally not registered in
 * `src/data/seo-config.js`, so the prerender pass skips them and
 * crawlers don't index them.
 */

// MobileMenu needs its open/close state driven from outside; wrap it
// so the preview mounts closed and a button opens it.
function MobileMenuPreview() {
  const [open, setOpen] = useState(false)
  return (
    <main style={{ padding: '2rem 1rem' }}>
      <p style={{ marginBottom: '1rem' }}>
        MobileMenu is normally owned by Nav on narrow viewports. Click below
        to open the panel; it closes on Escape, backdrop click, or route
        change.
      </p>
      <button type="button" className="button" onClick={() => setOpen(true)}>
        Open mobile menu
      </button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </main>
  )
}

const gameWithBg = games[0]
const gameWithoutBg = { ...games[0], bgImage: undefined, bgColor: '#4a90e2' }

export const previews = [
  // ── Persistent chrome ─────────────────────────────────────────────
  {
    name: 'nav',
    label: 'Nav (top bar)',
    group: 'Persistent chrome',
    render: () => <Nav />,
  },
  {
    name: 'footer',
    label: 'Footer',
    group: 'Persistent chrome',
    render: () => <Footer />,
  },
  {
    name: 'mobile-menu',
    label: 'MobileMenu (hamburger overlay)',
    group: 'Persistent chrome',
    render: () => <MobileMenuPreview />,
  },

  // ── Page sections ─────────────────────────────────────────────────
  {
    name: 'hero',
    label: 'Hero (home page)',
    group: 'Page sections',
    render: () => <Hero />,
  },
  {
    name: 'game-grid',
    label: 'GameGrid (all games)',
    group: 'Page sections',
    render: () => <GameGrid />,
  },
  {
    name: 'game-card-with-bg-image',
    label: 'GameCard — with background image',
    group: 'Page sections',
    render: () => (
      <main style={{ padding: '2rem 1rem', maxWidth: 480, margin: '0 auto' }}>
        <GameCard game={gameWithBg} />
      </main>
    ),
  },
  {
    name: 'game-card-no-bg-image',
    label: 'GameCard — no background image (color fallback)',
    group: 'Page sections',
    render: () => (
      <main style={{ padding: '2rem 1rem', maxWidth: 480, margin: '0 auto' }}>
        <GameCard game={gameWithoutBg} />
      </main>
    ),
  },
  {
    name: 'support-section',
    label: 'SupportSection (GoFundMe pitch block)',
    group: 'Page sections',
    render: () => <SupportSection />,
  },
  {
    name: 'gofundme-widget',
    label: 'GoFundMeWidget (all three sizes)',
    group: 'Page sections',
    render: () => (
      <main style={{ padding: '2rem 1rem', display: 'grid', gap: '2rem', justifyItems: 'center' }}>
        <div>
          <h3>large</h3>
          <GoFundMeWidget size="large" />
        </div>
        <div>
          <h3>medium</h3>
          <GoFundMeWidget size="medium" />
        </div>
        <div>
          <h3>small</h3>
          <GoFundMeWidget size="small" />
        </div>
      </main>
    ),
  },
  {
    name: 'concept-art-gallery',
    label: 'ConceptArtGallery (Universal Serial Blade)',
    group: 'Page sections',
    render: () => (
      <main style={{ padding: '2rem 0' }}>
        <ConceptArtGallery gameSlug="universal-serial-blade" />
      </main>
    ),
  },

  // ── Shared utilities ──────────────────────────────────────────────
  {
    name: 'social-icons',
    label: 'SocialIcons (all six)',
    group: 'Shared utilities',
    render: () => (
      <main style={{ padding: '2rem 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} {...link} />
          ))}
        </div>
      </main>
    ),
  },
  {
    name: 'newsletter-signup',
    label: 'NewsletterSignup',
    group: 'Shared utilities',
    render: () => (
      <main style={{ padding: '2rem 1rem', maxWidth: 480, margin: '0 auto' }}>
        <NewsletterSignup source="preview" />
      </main>
    ),
  },

  // ── Forms ─────────────────────────────────────────────────────────
  {
    name: 'playtest-signup',
    label: 'PlaytestSignupForm (per-game)',
    group: 'Forms',
    render: () => (
      <main style={{ padding: '2rem 1rem' }}>
        <PlaytestSignupForm source="preview" gameTitle="Universal Serial Blade" />
      </main>
    ),
  },
  {
    name: 'discord-signup',
    label: 'DiscordSignupForm',
    group: 'Forms',
    render: () => (
      <main style={{ padding: '2rem 1rem' }}>
        <DiscordSignupForm source="preview" />
      </main>
    ),
  },
]
