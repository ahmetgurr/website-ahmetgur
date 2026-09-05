import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
const { protocol: serverProtocol, hostname: serverHostname, port: serverPort } = new URL(serverURL)

const isDev = process.env.NODE_ENV === 'development'

// Next.js'in resmi "nonce'suz" CSP örüntüsü (next/dist/docs/.../content-security-policy.md).
// Nonce tabanlı bir CSP tüm sayfaları dinamik render'a zorlardı (statik üretim/ISR kaybı) —
// bu proje için orantısız olurdu. 'unsafe-inline' script/style, hem layout.tsx'teki tema
// init script'i hem de Payload admin panelinin satır içi stilleri için gerekli.
const contentSecurityPolicy = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' blob: data:`,
  `font-src 'self'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join('; ')

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
]

const nextConfig: NextConfig = {
  // CasaOS/Docker'da çok aşamalı Dockerfile'ın son stage'i .next/standalone'dan
  // kopyalama yapıyor — bu olmadan o klasör hiç üretilmez.
  output: 'standalone',
  // Prod'da varsayılan zaten false (Next.js kaynağı client'a sızdırmaz) — burada
  // niyeti açıkça belgelemek ve gelecekte yanlışlıkla açılmasını engellemek için.
  productionBrowserSourceMaps: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
    // Payload'ın serverURL ayarlandığında ürettiği MUTLAK medya URL'leri
    // (http://localhost:3000/... veya prod'da https://ahmetgur.com/...) için —
    // localPatterns sadece göreli URL'leri kapsıyor, next/image mutlak
    // aynı-origin URL'leri de remotePatterns'te açıkça tanımlanmış olmasını
    // istiyor.
    remotePatterns: [
      {
        protocol: serverProtocol.replace(':', '') as 'http' | 'https',
        hostname: serverHostname,
        port: serverPort,
        pathname: '/api/media/file/**',
      },
    ],
    // remotePatterns eşleşse bile Next, "localhost" gibi private/loopback IP'lere
    // çözülen host'lardan görsel çekmeyi SSRF koruması olarak varsayılan
    // reddediyor ("hostname resolved to private IP") — medya her zaman AYNI
    // uygulama instance'ından (Payload) geldiği için burada gerçek bir SSRF
    // riski yok, dev'de localhost'un çalışması için gerekli.
    dangerouslyAllowLocalIP: true,
  },
  experimental: {
    serverActions: {
      // Payload admin panelinin form-state Server Action'ı her alan değişiminde
      // tüm dokümanı (uzun yazılarda büyük Lexical içerik dahil) gönderiyor;
      // Next.js'in varsayılan 1MB sınırı uzun yazıların kaydını engelliyordu.
      bodySizeLimit: '5mb',
    },
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
