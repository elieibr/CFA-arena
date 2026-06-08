import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog'
import Header from '@/components/Header'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} — CharterPath`,
    description: post.description,
  }
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', background: 'var(--bg-0)', paddingTop: '80px' }}>
        <article style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--fg-3)',
              textDecoration: 'none',
              marginTop: '48px',
              marginBottom: '32px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--acc)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--fg-3)'
            }}
          >
            ← Back to blog
          </Link>

          {/* Post metadata */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              color: 'var(--fg-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>

          {/* Post title */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 500,
              color: 'var(--fg-0)',
              marginBottom: '16px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {post.title}
          </h1>

          {/* Post description */}
          <p
            style={{
              fontSize: '18px',
              color: 'var(--fg-2)',
              marginBottom: '48px',
              lineHeight: 1.6,
            }}
          >
            {post.description}
          </p>

          {/* Post content */}
          <div
            className="blog-content"
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--fg-1)',
              paddingBottom: '80px',
            }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </main>

      <style jsx global>{`
        .blog-content h2 {
          font-size: 32px;
          font-weight: 500;
          color: var(--fg-0);
          margin-top: 56px;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .blog-content h3 {
          font-size: 24px;
          font-weight: 500;
          color: var(--fg-0);
          margin-top: 40px;
          margin-bottom: 16px;
        }

        .blog-content p {
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .blog-content strong {
          font-weight: 600;
          color: var(--fg-0);
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 28px;
        }

        .blog-content li {
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .blog-content code {
          font-family: var(--font-mono);
          font-size: 14px;
          background: var(--bg-1);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--acc);
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
          font-size: 14px;
        }

        .blog-content table th {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--fg-3);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-align: left;
          padding: 12px 16px;
          background: var(--bg-1);
          border-bottom: 1px solid var(--line);
        }

        .blog-content table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--line-soft);
          color: var(--fg-1);
        }

        .blog-content table tr:last-child td {
          border-bottom: none;
        }

        .blog-content blockquote {
          border-left: 3px solid var(--acc);
          padding-left: 20px;
          margin: 32px 0;
          font-style: italic;
          color: var(--fg-2);
        }

        .blog-content a {
          color: var(--acc);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }

        .blog-content a:hover {
          border-bottom-color: var(--acc);
        }
      `}</style>
    </>
  )
}
