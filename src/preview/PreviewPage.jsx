import { Link, useParams } from 'react-router-dom'
import { previews } from './registry.jsx'

/**
 * Preview library router.
 *
 *   /preview        — index of every registered preview.
 *   /preview/:name  — render the matching entry (or a not-found note).
 *
 * Rendered inside the site's normal Nav/Footer chrome (see `App.jsx`).
 * Entries live in [`registry.jsx`](./registry.jsx).
 */
export default function PreviewPage() {
  const { name } = useParams()

  if (!name) {
    return (
      <main style={{ padding: '2rem 1rem', maxWidth: 720, margin: '0 auto' }}>
        <h1>Component previews</h1>
        <p style={{ color: '#666' }}>
          Add entries in <code>src/preview/registry.jsx</code>.
        </p>
        <ul>
          {previews.map((p) => (
            <li key={p.name}>
              <Link to={`/preview/${p.name}`}>{p.label}</Link>
            </li>
          ))}
        </ul>
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
