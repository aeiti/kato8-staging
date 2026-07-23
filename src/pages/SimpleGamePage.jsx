import { getGameBySlug } from '../data/games'
import { gameRoutes } from '../data/seo-config'
import { playtestEndpoints } from '../data/playtestEndpoints'
import { discordEndpoints } from '../data/discordEndpoints'
import NotFoundPage from './NotFoundPage'
import Seo from '../components/Seo'
import ConceptArtGallery from '../components/ConceptArtGallery'
import PlaytestSignupForm from '../components/PlaytestSignupForm'
import DiscordSignupForm from '../components/DiscordSignupForm'

/**
 * Route variant for game detail pages that use the simplified Figma
 * layout: portrait cover image on the left, title + tags + a single
 * description block on the right, with the standard concept-art
 * gallery underneath.
 *
 * Takes the game's slug as a prop (the calling `<Route>` supplies it
 * literally, since the route path is the slug itself rather than a
 * `:slug` placeholder). Description renders `game.gameplay`
 * paragraphs — no separate Story section. Other games will adopt this
 * layout incrementally.
 */
export default function SimpleGamePage({ slug }) {
  const game = getGameBySlug(slug)

  if (!game) return <NotFoundPage />

  const seo = gameRoutes[slug]

  return (
    <section className="simple-game-page">
      {seo && <Seo path={`/games/${slug}`} {...seo} />}

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
            {(game.comingSoon || game.categories.length > 0) && (
              <div className="simple-game-tags">
                {game.comingSoon && (
                  <span className="simple-game-tag simple-game-tag-coming-soon">
                    Coming Soon
                  </span>
                )}
                {game.categories.map((category) => (
                  <span
                    key={category}
                    className="simple-game-tag simple-game-tag-category"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="simple-game-description">
            {game.gameplay.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <ConceptArtGallery gameSlug={game.slug} />

      <PlaytestSignupForm
        key={`playtest-${game.slug}`}
        source={`${game.slug}-page`}
        gameTitle={game.title}
        endpoint={playtestEndpoints[game.slug]}
      />

      <DiscordSignupForm
        key={`discord-${game.slug}`}
        source={`${game.slug}-page`}
        gameTitle={game.title}
        endpoint={discordEndpoints[game.slug]}
      />
    </section>
  )
}
