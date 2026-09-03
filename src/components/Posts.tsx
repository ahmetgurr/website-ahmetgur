import Link from 'next/link'
import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { getRecentPosts, BLOG_HANDLE } from '@/lib/posts'
import { Reveal } from './Reveal'
import { PostCard } from './PostCard'

export async function Posts() {
  const locale = await getLocale()
  const { blog } = getContent(locale)
  const recentPosts = await getRecentPosts(3)

  return (
    <section id="blog" className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-accent md:text-4xl">{blog.heading}</h2>
          <p className="mt-4 text-lg text-muted">{blog.intro}</p>
        </div>
        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} readMoreLabel={blog.readMore} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-lg p-8 text-center text-muted">
            {blog.emptyState}
          </div>
        )}
        <div className="mt-10 flex justify-center">
          <Link href={`/blog/${BLOG_HANDLE}`} className="btn-glow rounded-md px-6 py-3 font-semibold">
            {blog.viewAllCta}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
