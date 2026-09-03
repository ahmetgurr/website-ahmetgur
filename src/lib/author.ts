import { getPayload } from 'payload'
import { cache } from 'react'
import config from '@/payload.config'
import type { AuthorProfile } from '@/payload-types'

export const getAuthorProfile = cache(async (): Promise<AuthorProfile> => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  return payload.findGlobal({
    slug: 'author-profile',
    depth: 1,
  })
})
