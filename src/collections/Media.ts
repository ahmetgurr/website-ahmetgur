import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
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
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
