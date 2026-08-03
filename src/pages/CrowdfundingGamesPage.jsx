import CrowdfundingGameGrid from '../components/CrowdfundingGameGrid'
import Seo from '../components/Seo'
import { staticRoutes } from '../data/seo-config'

/**
 * Route: `/crowdfunding-games`.
 *
 * Landing page listing the studio's crowdfunding titles as a grid of
 * cards. Content is placeholder for now (see
 * `src/data/crowdfundingGames.js`); per-game detail pages at
 * `/crowdfunding-games/:slug` ship in a later PR.
 *
 * SEO meta comes from `staticRoutes['/crowdfunding-games']` in
 * `src/data/seo-config.js`.
 */
export default function CrowdfundingGamesPage() {
  return (
    <section className="cf-page">
      <Seo path="/crowdfunding-games" {...staticRoutes['/crowdfunding-games']} />
      <div className="cf-heading">
        <h1 className="cf-heading__title">Crowdfunding Games</h1>
        <p className="cf-heading__description">
          Quick, experimental games built by our team between larger projects. Every purchase directly
          supports the studio and gives us more room to keep creating.
        </p>
      </div>
      <CrowdfundingGameGrid />
    </section>
  )
}
