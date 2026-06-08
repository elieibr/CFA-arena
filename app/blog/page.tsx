import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import Header from '@/components/Header'

export const metadata = {
  title: 'Blog — CharterPath',
  description: 'CFA Level 1 study tips, formulas, and career advice',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg-0)', paddingTop: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Hero */}
          <div style={{ paddingTop: '64px', paddingBottom: '48px', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 500,
                color: 'var(--fg-3)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              CFA Level 1 Resources
            </div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 500,
                color: 'var(--fg-0)',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Blog
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--fg-2)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Study strategies, formulas, and career guidance for CFA candidates
            </p>
          </div>

          {/* Blog posts grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '24px',
              paddingBottom: '80px',
            }}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line)',
                  borderRadius: '14px',
                  padding: '28px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-2)'
                  e.currentTarget.style.borderColor = 'var(--line-strong)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-1)'
                  e.currentTarget.style.borderColor = 'var(--line)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 500,
                    color: 'var(--fg-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '12px',
                  }}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>

                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--fg-0)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--fg-2)',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                  }}
                >
                  {post.description}
                </p>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--acc)',
                  }}
                >
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
