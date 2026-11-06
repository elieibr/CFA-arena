import type { ReactNode } from 'react'

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-0)', paddingTop: '80px' }}>
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px', color: 'var(--fg-1)', lineHeight: 1.7, fontSize: '15px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 500, color: 'var(--fg-0)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
          {title}
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-3)', marginBottom: '40px' }}>
          Dernière mise à jour : {updated}
        </p>
        <div className="legal-content">{children}</div>
        <style>{`
          .legal-content h2 { font-size: 20px; font-weight: 500; color: var(--fg-0); margin: 32px 0 12px; }
          .legal-content p, .legal-content ul { margin: 0 0 16px; }
          .legal-content ul { padding-left: 20px; }
          .legal-content a { color: var(--acc); }
        `}</style>
      </article>
    </main>
  )
}
