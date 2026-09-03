import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    components: {
      edit: {
        beforeDocumentControls: ['/components/admin/CancelButton#CancelButton'],
      },
    },
  },
  access: {
    admin: ({ req: { user } }) => Boolean(user),
  },
  auth: {
    maxLoginAttempts: 5,
    lockTime: 300000,
  },
  hooks: {
    beforeDelete: [
      async ({ req, id }) => {
        const target = await req.payload.findByID({ collection: 'users', id, req })
        if (target?.role !== 'super_admin') return

        const { totalDocs } = await req.payload.count({
          collection: 'users',
          where: { role: { equals: 'super_admin' } },
          req,
        })

        if (totalDocs <= 1) {
          throw new APIError('Sistemdeki son Süper Admin hesabı silinemez!', 400)
        }
      },
    ],
  },
  fields: [
    // Email added by default
    {
      name: 'firstName',
      type: 'text',
      label: 'Ad',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Soyad',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rol',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Süper Admin', value: 'super_admin' },
        { label: 'Yönetici', value: 'admin' },
        { label: 'Yazar', value: 'editor' },
        { label: 'Sadece Okuma', value: 'read_only' },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'super_admin',
      },
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
