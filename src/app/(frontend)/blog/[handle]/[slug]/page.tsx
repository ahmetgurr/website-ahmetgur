import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ShareButton } from '@/components/blog/ShareButton'
import { CodeBlockRenderer } from '@/components/blog/CodeBlockRenderer'
import { getPostBySlug, BLOG_HANDLE } from '@/lib/posts'
import { getAuthorProfile } from '@/lib/author'
import { formatDate, getReadingTime } from '@/lib/format'
import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import '../../../styles.css'

type Params = { handle: string; slug: string }

const richTextConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    Code: ({ node }: { node: { fields: { language?: string | null; code: string } } }) => (
      <CodeBlockRenderer language={node.fields.language} code={node.fields.code} />
    ),
  },
})

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { handle, slug } = await params
  if (decodeURIComponent(handle) !== BLOG_HANDLE) return {}

  const post = await getPostBySlug(decodeURIComponent(slug))
  if (!post) return {}

  const cover = typeof post.coverImage === 'object' ? post.coverImage : null

  return {
    title: `${post.title} | Ahmet Gür`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: 'article',
      publishedTime: post.publishedDate,
      images: cover?.url ? [{ url: cover.url, alt: cover.alt || post.title }] : undefined,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { handle, slug } = await params
  if (decodeURIComponent(handle) !== BLOG_HANDLE) notFound()

  const post = await getPostBySlug(decodeURIComponent(slug))
  if (!post) notFound()

  const locale = await getLocale()
  const { blog } = getContent(locale)
  const author = await getAuthorProfile()
  const authorPicture = typeof author.profilePicture === 'object' ? author.profilePicture : null
  const cover = typeof post.coverImage === 'object' ? post.coverImage : null
  const readingTime = getReadingTime(post.content)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href={`/blog/${BLOG_HANDLE}`} className="text-sm text-accent hover:underline">
          {blog.backToHome}
        </Link>
        <article className="mt-6">
          {cover?.url && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={cover.url}
                alt={cover.alt || post.title}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <h1
            className={`text-3xl font-bold text-foreground md:text-4xl ${cover?.url ? 'mt-8' : ''}`}
          >
            {post.title}
          </h1>
          {post.excerpt && <p className="mt-4 text-lg text-muted">{post.excerpt}</p>}

          <div className="mt-6 flex items-center justify-between gap-3 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-accent">
                {authorPicture?.url ? (
                  <Image
                    src={authorPicture.url}
                    alt={authorPicture.alt || author.displayName || ''}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-sm font-bold text-background">
                    {(author.displayName ?? 'AG').slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{author.displayName}</p>
                <p className="text-xs text-muted">
                  {formatDate(post.publishedDate)} · {readingTime} {blog.readingTimeSuffix}
                </p>
              </div>
            </div>
            <ShareButton />
          </div>

          <RichText
            data={post.content}
            converters={richTextConverters}
            className="prose prose-invert prose-lg mt-10 max-w-none"
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
