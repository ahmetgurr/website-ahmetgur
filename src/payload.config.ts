import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { translations } from '@payloadcms/translations/all'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { AuthorProfile } from './globals/AuthorProfile'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'dark',
    meta: {
      titleSuffix: ' - SİSTEM YÖNETİMİ',
    },
    avatar: {
      Component: '/components/admin/AdminAvatar#AdminAvatar',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/admin/AdminLogo#AdminLogo',
        Icon: '/components/admin/AdminLogo#AdminIcon',
      },
      beforeNavLinks: ['/components/admin/NavHomeLink#NavHomeLink'],
      afterNavLinks: ['/components/admin/LogoutButton#LogoutButton'],
    },
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'onboarding@resend.dev',
    defaultFromName: 'Ahmet Gür',
    transportOptions: {
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY || '',
      },
    },
  }),
  i18n: {
    supportedLanguages: { en: translations.en, tr: translations.tr },
    translations: {
      en: { authentication: { login: '[ SİSTEME GİRİŞ YAP ]' } },
      tr: { authentication: { login: '[ SİSTEME GİRİŞ YAP ]' } },
    },
  },
  collections: [Users, Media, Posts],
  globals: [AuthorProfile],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  // Şifre sıfırlama linki gibi Payload'ın ürettiği tüm mutlak URL'ler için
  // gerekli — ayarlanmazsa Payload, isteğin Host header'ını sadece CORS/CSRF
  // allowlist'inde varsa güveniyor (burada tanımlı değildi), aksi halde boş
  // string'e düşüp origin'siz ("admin/reset/...") bozuk linkler üretiyordu.
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
