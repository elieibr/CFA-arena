import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog'
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
      <main style={{ minHeight: '100vh', background: 'var(--bg-0)', paddingTop: '80px' }}>
        <article style={{ maxWidth: '768px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back link */}
          <Link
            href="/blog"
            className="blog-back-link"
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
  )
}
