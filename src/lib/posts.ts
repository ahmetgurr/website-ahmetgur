import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Post } from '@/payload-types'

export const BLOG_HANDLE = '@ahmetgur'

async function getPayloadClient() {
  const payloadConfig = await config
  return getPayload({ config: payloadConfig })
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-publishedDate',
    limit,
    depth: 1,
  })
  return docs
}

export async function getAllPosts(): Promise<Post[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-publishedDate',
    limit: 0,
    depth: 1,
  })
  return docs
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      _status: { equals: 'published' },
    },
    depth: 1,
    limit: 1,
  })
  return docs[0] ?? null
}
