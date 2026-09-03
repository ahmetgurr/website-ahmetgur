import React from 'react'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import './styles.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { meta } = getContent(locale)

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={robotoMono.variable} data-theme="dark">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
