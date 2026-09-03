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

  function toggle() {
    const next: Locale = locale === 'tr' ? 'en' : 'tr'
    document.cookie = `locale=${next}; path=/; max-age=31536000`
    setLocale(next)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dili değiştir / Switch language"
      className="rounded-full px-2 py-2 font-mono text-xs font-semibold text-muted transition-colors hover:text-glow"
    >
      [ {locale === 'tr' ? 'TR' : 'EN'} / {locale === 'tr' ? 'EN' : 'TR'} ]
    </button>
  )
}
