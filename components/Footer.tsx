import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--bg-0)',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Top section: Logo + Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <img
              src="/charterpath-logo.svg"
              width="170"
              height="42"
              alt="CharterPath"
              style={{ marginBottom: '12px' }}
            />
            <p
              style={{
                fontSize: '13px',
                color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono)',
                margin: 0,
              }}
            >
              La plateforme de préparation CFA la plus sérieuse
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <Link
              href="/blog"
              style={{
                fontSize: '14px',
                color: 'var(--fg-2)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--acc)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
            >
              Blog
            </Link>
            <Link
              href="/leaderboard"
              style={{
                fontSize: '14px',
                color: 'var(--fg-2)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--acc)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
            >
              Classement
            </Link>
            <Link
              href="/courses"
              style={{
                fontSize: '14px',
                color: 'var(--fg-2)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--acc)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
            >
              Cours
            </Link>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '32px',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--fg-3)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © 2026 CharterPath
        </div>
      </div>
    </footer>
  )
}
