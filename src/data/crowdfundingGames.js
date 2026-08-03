/**
 * Placeholder data for the Crowdfunding Games landing page (`/crowdfunding-games`).
 *
 * Consumed by `CrowdfundingGameGrid` / `CrowdfundingGameCard`.
 *
 * These are intentionally placeholders — real campaigns, art, and copy get
 * filled in later. Each entry links to `/crowdfunding-games/:slug`; those
 * per-game detail pages are a future PR, so the links currently resolve to
 * the in-app 404 until those routes exist.
 *
 * Shape (all fields optional unless noted):
 *   slug        — REQUIRED. URL slug for `/crowdfunding-games/:slug` and React key.
 *   title       — display title.
 *   categories  — string[]. Rendered as pill chips.
 *   description — short blurb shown on the card.
 *   image       — URL or `/assets/...` path (optional). Falls back to a plain
 *                 placeholder block when absent. Write `/assets/...` paths and
 *                 pipe them through `asset()` if/when real art is added
 *                 (see src/data/games.js for the pattern).
 */

export const crowdfundingGames = [
  {
    slug: 'game-one',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    slug: 'game-two',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    slug: 'game-three',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    slug: 'game-four',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    slug: 'game-five',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    slug: 'game-six',
    title: 'Game Name',
    categories: ['Category', 'Category'],
    description:
      'Short game description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
]
