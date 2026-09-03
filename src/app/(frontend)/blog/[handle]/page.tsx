import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FileText } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProfileTabs } from '@/components/blog/ProfileTabs'
import { getAllPosts, BLOG_HANDLE } from '@/lib/posts'
import { getAuthorProfile } from '@/lib/author'
import { formatDate } from '@/lib/format'
import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import '../../styles.css'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  if (decodeURIComponent(handle) !== BLOG_HANDLE) return {}

  const locale = await getLocale()
  const { blog } = getContent(locale)
  const author = await getAuthorProfile()
  return {
    title: `${author.displayName ?? BLOG_HANDLE} | Blog`,
    description: blog.intro,
  }
}

export default async function BlogProfilePage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  if (decodeURIComponent(handle) !== BLOG_HANDLE) notFound()

  const locale = await getLocale()
  const { blog } = getContent(locale)
  const [allPosts, author] = await Promise.all([getAllPosts(), getAuthorProfile()])
  const coverPhoto = typeof author.coverPhoto === 'object' ? author.coverPhoto : null
  const profilePicture = typeof author.profilePicture === 'object' ? author.profilePicture : null

  const postsList =
    allPosts.length > 0 ? (
      <div className="flex flex-col">
        {allPosts.map((post) => {
          const cover = typeof post.coverImage === 'object' ? post.coverImage : null
          return (
            <Link
              key={post.id}
              href={`/blog/${BLOG_HANDLE}/${post.slug}`}
              className="group flex items-start justify-between gap-6 border-b border-white/10 py-7"
            >
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted">{formatDate(post.publishedDate)}</p>
                <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-accent md:text-xl">
                  {post.title}
                </h3>
                {post.excerpt && <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>}
                <span className="mt-3 inline-block text-sm font-semibold text-accent">
                  {blog.readMore} →
                </span>
              </div>
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-card sm:h-24 sm:w-28">
                {cover?.url ? (
                  <Image
                    src={cover.url}
                    alt={cover.alt || post.title}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <FileText className="h-6 w-6 text-muted" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    ) : (
      <p className="py-10 text-center text-muted">{blog.emptyState}</p>
    )

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/#blog" className="text-sm text-accent hover:underline">
          {blog.backToHome}
        </Link>

        {coverPhoto?.url && (
          <div className="relative mt-8 aspect-[3/1] w-full overflow-hidden rounded-lg bg-card">
            <Image
              src={coverPhoto.url}
              alt={coverPhoto.alt || author.displayName || ''}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Sol kolon: içerik akışı */}
          <div>
            <ProfileTabs
              tabHomeLabel={blog.tabHome}
              tabAboutLabel={blog.tabAbout}
              postsList={postsList}
              aboutText={author.aboutText}
              emptyAboutLabel={blog.aboutEmptyState}
            />
          </div>

          {/* Sağ kolon: yazar profili (sticky) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-accent">
              {profilePicture?.url ? (
                <Image
                  src={profilePicture.url}
                  alt={profilePicture.alt || author.displayName || ''}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-xl font-bold text-background">
                  {(author.displayName ?? 'AG').slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <h1 className="mt-4 text-xl font-bold text-foreground">{author.displayName}</h1>
            <p className="mt-1 text-sm text-muted">{author.title}</p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
