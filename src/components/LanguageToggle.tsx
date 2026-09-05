'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Locale = 'tr' | 'en'

export function LanguageToggle() {
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>('tr')

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )locale=(tr|en)/)
    setLocale(match?.[1] === 'en' ? 'en' : 'tr')
  }, [])

  function selectLocale(next: Locale) {
    if (next === locale) return
    document.cookie = `locale=${next}; path=/; max-age=31536000`
    setLocale(next)
    router.refresh()
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2 py-2 font-mono text-xs font-semibold">
      [{' '}
      <button
        type="button"
        onClick={() => selectLocale('tr')}
        aria-pressed={locale === 'tr'}
        aria-label="Türkçe"
        data-active={locale === 'tr'}
        className="lang-option"
      >
        TR
      </button>
      {' / '}
      <button
        type="button"
        onClick={() => selectLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="English"
        data-active={locale === 'en'}
        className="lang-option"
      >
        EN
      </button>
      {' ]'}
    </span>
  )
}
