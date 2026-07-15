import { Link, useParams } from 'react-router-dom'
import { previews } from './registry.jsx'

/**
 * Preview library router.
 *
 *   /preview        — index of every registered preview, split by group.
 *   /preview/:name  — render the matching entry (or a not-found note).
 *
 * Rendered inside the site's normal Nav/Footer chrome (see `App.jsx`).
 * Entries live in [`registry.jsx`](./registry.jsx). Groups render in
 * the order below — new group strings need to be added here too.
 */
const GROUP_ORDER = [
  'Persistent chrome',
  'Page sections',
  'Shared utilities',
  'Forms',
]

export default function PreviewPage() {
  const { name } = useParams()

  if (!name) {
    const grouped = new Map(GROUP_ORDER.map((g) => [g, []]))
    for (const entry of previews) {
      if (!grouped.has(entry.group)) grouped.set(entry.group, [])
      grouped.get(entry.group).push(entry)
    }

    return (
      <main style={{ padding: '2rem 1rem', maxWidth: 720, margin: '0 auto' }}>
        <h1>Component previews</h1>
        <p style={{ color: '#666' }}>
          Add entries in <code>src/preview/registry.jsx</code>.
        </p>
        {[...grouped].map(([group, entries]) =>
          entries.length === 0 ? null : (
            <section key={group} style={{ marginTop: '2rem' }}>
              <h2>{group}</h2>
              <ul>
                {entries.map((p) => (
                  <li key={p.name}>
                    <Link to={`/preview/${p.name}`}>{p.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </main>
    )
  }

  const entry = previews.find((p) => p.name === name)
  if (!entry) {
    return (
      <main style={{ padding: '2rem 1rem' }}>
        <p>
          Unknown preview <code>{name}</code>.{' '}
          <Link to="/preview">Back to list</Link>
        </p>
      </main>
    )
  }

  return entry.render()
}
