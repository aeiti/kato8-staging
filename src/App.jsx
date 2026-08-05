import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import SimpleGamePage from './pages/SimpleGamePage'
import AboutPage from './pages/AboutPage'
import CrowdfundingGamesPage from './pages/CrowdfundingGamesPage'
import CrowdfundingGamePage from './pages/CrowdfundingGamePage'
import NotFoundPage from './pages/NotFoundPage'
import PreviewPage from './preview/PreviewPage'

/**
 * Top-level app shell. Mounted by `main.jsx`.
 *
 * Renders the persistent chrome (`Nav` above, `Footer` below) around a
 * `<Routes>` block, plus two zero-render helpers — `ScrollToTop` (resets
 * scroll on route change) and `Analytics` (fires GA `page_view` on route
 * change).
 *
 * Routes:
 *   `/`                        → HomePage
 *   `/games/last-light`        → SimpleGamePage (simplified layout)
 *   `/games/:slug`             → GamePage (404s in-app for unknown slugs)
 *   `/about-us`                → AboutPage
 *   `/crowdfunding-games`      → CrowdfundingGamesPage (landing grid)
 *   `/crowdfunding-games/:slug`→ CrowdfundingGamePage (demo detail)
 *   anything else              → NotFoundPage
 *
 * Body class toggle: game detail pages (core `/games/:slug` and the
 * crowdfunding `/crowdfunding-games/:slug` demos) use `body-2`,
 * everything else uses `body`. The two classes drive different layout
 * styles in CSS (`body-2` removes the max-width constraint so the hero
 * can span the full viewport).
 */
export default function App() {
  const location = useLocation()
  // Full-bleed layout for game detail pages: the core `/games/:slug` pages
  // and the crowdfunding demo pages (`/crowdfunding-games/:slug`), but NOT
  // the crowdfunding landing (`/crowdfunding-games`), which stays a normal
  // max-width page.
  const isFullWidthPage =
    location.pathname.startsWith('/games/') ||
    /^\/crowdfunding-games\/[^/]+/.test(location.pathname)
  const bodyClass = isFullWidthPage ? 'body-2' : 'body'

  return (
    <div className={bodyClass}>
      <ScrollToTop />
      <Analytics />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* When USB and BBC also adopt SimpleGamePage, collapse these
            two routes into a single `/games/:slug` route with a tiny
            dispatcher component, and let SimpleGamePage read its slug
            via useParams() instead of taking it as a prop. */}
        <Route path="/games/last-light" element={<SimpleGamePage slug="last-light" />} />
        <Route path="/games/:slug" element={<GamePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/crowdfunding-games" element={<CrowdfundingGamesPage />} />
        <Route path="/crowdfunding-games/:slug" element={<CrowdfundingGamePage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/preview/:name" element={<PreviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
