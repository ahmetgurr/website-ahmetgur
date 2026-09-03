import type { GlobalConfig } from 'payload'

export const AuthorProfile: GlobalConfig = {
  slug: 'author-profile',
  label: 'Yazar Profili',
  admin: {
    components: {
      elements: {
        beforeDocumentControls: ['/components/admin/CancelButton#CancelButton'],
      },
    },
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'coverPhoto', type: 'upload', relationTo: 'media' },
    { name: 'profilePicture', type: 'upload', relationTo: 'media' },
    { name: 'displayName', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'aboutText', type: 'richText' },
  ],
}
