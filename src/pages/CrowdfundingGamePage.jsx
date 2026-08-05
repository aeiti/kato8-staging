import { useParams } from 'react-router-dom'
import { getCrowdfundingGameBySlug } from '../data/crowdfundingGames'
import { crowdfundingGameRoutes } from '../data/seo-config'
import NotFoundPage from './NotFoundPage'
import Seo from '../components/Seo'

/**
 * Route: `/crowdfunding-games/:slug`.
 *
 * Per-game detail page for a crowdfunding title. Reuses the simplified
 * "main section" layout from `SimpleGamePage` (the Last Light page):
 * portrait cover on the left, title + tags + description block on the
 * right. Unlike `SimpleGamePage`, it stops at the main section — no
 * concept-art gallery, no playtest/Discord forms, and no Kickstarter
 * button (these are placeholder demo games).
 *
 * Reads its slug via `useParams()` and looks the game up in the
 * `crowdfundingGames` single source of truth. Unknown slugs render the
 * in-app 404. SEO meta comes from `crowdfundingGameRoutes[slug]`.
 */
export default function CrowdfundingGamePage() {
  const { slug } = useParams()
  const game = getCrowdfundingGameBySlug(slug)

  if (!game) return <NotFoundPage />

  const seo = crowdfundingGameRoutes[slug]
  const categories = game.categories ?? []

  return (
    <section className="simple-game-page">
      {seo && <Seo path={`/crowdfunding-games/${slug}`} {...seo} />}

      <div className="simple-game-hero">
        <div className="simple-game-cover">
          {game.coverImage ? (
            <img
              src={game.coverImage.src}
              alt={game.coverImage.alt}
              className="simple-game-cover-image"
            />
          ) : (
            <div className="simple-game-cover-placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="simple-game-info">
          <div className="simple-game-title-block">
            <h1 className="simple-game-title">{game.title}</h1>
            {(game.comingSoon || categories.length > 0) && (
              <div className="simple-game-tags">
                {game.comingSoon && (
                  <span className="simple-game-tag simple-game-tag-coming-soon">
                    Coming Soon
                  </span>
                )}
                {categories.map((category, i) => (
                  <span
                    key={`${category}-${i}`}
                    className="simple-game-tag simple-game-tag-category"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="simple-game-description">
            {(game.body ?? []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
