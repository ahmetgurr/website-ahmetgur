import type { CollectionConfig } from 'payload'
import { BlocksFeature, CodeBlock, lexicalEditor } from '@payloadcms/richtext-lexical'

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedDate', '_status'],
    components: {
      edit: {
        beforeDocumentControls: ['/components/admin/CancelButton#CancelButton'],
      },
    },
  },
  access: {
    read: () => true,
    // Payload'ın tanımsız erişim için varsayılanı zaten Boolean(user) —
    // burada açıkça yazmak niyeti belgeliyor ve gelecekte bu varsayılan
    // değişse bile yazma işlemlerinin oturum açmamış kullanıcılara
    // kapalı kalmasını garanti ediyor.
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value)
            if (data?.title) return slugify(data.title)
            return value
          },
        ],
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({ blocks: [CodeBlock()] }),
        ],
      }),
    },
  ],
}
