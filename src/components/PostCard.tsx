import Image from 'next/image'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import type { Post } from '@/payload-types'
import { formatDate } from '@/lib/format'
import { BLOG_HANDLE } from '@/lib/posts'

export function PostCard({ post, readMoreLabel }: { post: Post; readMoreLabel: string }) {
  const cover = typeof post.coverImage === 'object' ? post.coverImage : null

  return (
    <Link
      href={`/blog/${BLOG_HANDLE}/${post.slug}`}
      className="glass-card group flex flex-col overflow-hidden rounded-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-card">
        {cover?.url ? (
          <Image
            src={cover.url}
            alt={cover.alt || post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileText className="h-10 w-10 text-muted" strokeWidth={1.5} aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-muted">{formatDate(post.publishedDate)}</p>
        <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-accent">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{post.excerpt}</p>
        )}
        <span className="mt-4 text-sm font-semibold text-accent">{readMoreLabel} →</span>
      </div>
    </Link>
  )
}
