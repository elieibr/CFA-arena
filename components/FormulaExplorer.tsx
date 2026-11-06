'use client'

import { useMemo, useState } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import type { FormulaItem } from '@/data/formulas/types'

function tex(src: string, display = true): string {
  return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: 'ignore' })
}

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function FormulaExplorer({ formulas }: { formulas: FormulaItem[] }) {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState<string>('all')
  const [reviewMode, setReviewMode] = useState(false)
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [copied, setCopied] = useState<string | null>(null)

  const groups = useMemo(() => Array.from(new Set(formulas.map((f) => f.group))), [formulas])

  const visible = useMemo(() => {
    const q = norm(query.trim())
    return formulas.filter(
      (f) =>
        (group === 'all' || f.group === group) &&
        (!q || norm(`${f.name} ${f.note} ${f.group} ${f.text ?? ''}`).includes(q))
    )
  }, [formulas, query, group])

  const byGroup = useMemo(() => {
    const map = new Map<string, FormulaItem[]>()
    visible.forEach((f) => map.set(f.group, [...(map.get(f.group) ?? []), f]))
    return Array.from(map.entries())
  }, [visible])

  function toggleReveal(id: string) {
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  async function copy(f: FormulaItem) {
    try {
      await navigator.clipboard.writeText(f.latex ?? f.text ?? '')
      setCopied(f.id)
      setTimeout(() => setCopied((c) => (c === f.id ? null : c)), 1500)
    } catch {
      /* presse-papiers indisponible : on ignore */
    }
  }

  const chip = (active: boolean): React.CSSProperties => ({
    padding: '8px 12px',
    minHeight: '36px',
    borderRadius: '999px',
    fontSize: '12.5px',
    fontWeight: 500,
    cursor: 'pointer',
    border: '1px solid var(--line)',
    background: active ? 'var(--acc)' : 'var(--bg-1)',
    color: active ? 'var(--bg-0)' : 'var(--fg-2)',
  })

  return (
    <div>
      {/* Barre d'outils */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une formule…"
          aria-label="Rechercher une formule"
          style={{
            flex: '1 1 220px',
            minHeight: '44px',
            padding: '0 14px',
            borderRadius: '8px',
            border: '1px solid var(--line)',
            background: 'var(--bg-0)',
            color: 'var(--fg-0)',
            fontSize: '14px',
          }}
        />
        <button
          type="button"
          onClick={() => {
            setReviewMode((v) => !v)
            setRevealed(new Set())
          }}
          aria-pressed={reviewMode}
          style={{ ...chip(reviewMode), minHeight: '44px', padding: '0 16px', borderRadius: '8px' }}
        >
          {reviewMode ? 'Mode révision : activé' : 'Mode révision'}
        </button>
      </div>

      {/* Filtres par thème */}
      {groups.length > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          <button type="button" style={chip(group === 'all')} onClick={() => setGroup('all')}>
            Tout ({formulas.length})
          </button>
          {groups.map((g) => (
            <button key={g} type="button" style={chip(group === g)} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </div>
      )}

      {reviewMode && (
        <p style={{ color: 'var(--fg-3)', fontSize: '13px', marginBottom: '20px' }}>
          Devine la formule à partir de son nom, puis clique sur la carte pour la vérifier.
        </p>
      )}

      {visible.length === 0 && (
        <p style={{ color: 'var(--fg-3)', fontSize: '14px' }}>Aucune formule ne correspond à ta recherche.</p>
      )}

      {byGroup.map(([g, items]) => (
        <section key={g} style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: 'var(--fg-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            {g} · {items.length}
          </h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {items.map((f) => {
              const hidden = reviewMode && !revealed.has(f.id)
              return (
                <article
                  key={f.id}
                  style={{ border: '1px solid var(--line)', borderRadius: '10px', background: 'var(--bg-1)', padding: '16px 18px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--fg-0)', margin: 0 }}>{f.name}</h4>
                    {!hidden && (
                      <button
                        type="button"
                        onClick={() => copy(f)}
                        style={{ fontSize: '12px', color: 'var(--fg-3)', background: 'none', border: 'none', cursor: 'pointer', minHeight: '32px', whiteSpace: 'nowrap' }}
                      >
                        {copied === f.id ? 'Copié ✓' : f.latex ? 'Copier LaTeX' : 'Copier'}
                      </button>
                    )}
                  </div>

                  {hidden ? (
                    <button
                      type="button"
                      onClick={() => toggleReveal(f.id)}
                      style={{
                        width: '100%',
                        marginTop: '12px',
                        minHeight: '64px',
                        borderRadius: '8px',
                        border: '1px dashed var(--line)',
                        background: 'var(--bg-0)',
                        color: 'var(--fg-3)',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      Cliquer pour révéler
                    </button>
                  ) : (
                    <>
                      <div
                        onClick={reviewMode ? () => toggleReveal(f.id) : undefined}
                        style={{
                          marginTop: '12px',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--line)',
                          background: 'var(--bg-0)',
                          color: 'var(--acc)',
                          overflowX: 'auto',
                          cursor: reviewMode ? 'pointer' : 'default',
                        }}
                      >
                        {f.latex ? (
                          // Données statiques internes (jamais saisies par un utilisateur) : rendu KaTeX sûr.
                          <div dangerouslySetInnerHTML={{ __html: tex(f.latex) }} />
                        ) : (
                          <div style={{ fontSize: '14px', lineHeight: 1.6 }}>{f.text}</div>
                        )}
                      </div>

                      {f.vars && f.vars.length > 0 && (
                        <dl style={{ margin: '12px 0 0', display: 'flex', flexWrap: 'wrap', gap: '6px 20px', fontSize: '13px', color: 'var(--fg-2)' }}>
                          {f.vars.map(([sym, meaning]) => (
                            <div key={sym} style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
                              <dt dangerouslySetInnerHTML={{ __html: tex(sym, false) }} />
                              <dd style={{ margin: 0 }}>: {meaning}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      <p style={{ margin: '12px 0 0', fontSize: '14px', lineHeight: 1.6, color: 'var(--fg-2)' }}>{f.note}</p>
                    </>
                  )}
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
