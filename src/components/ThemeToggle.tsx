'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    setTheme(current === 'light' ? 'light' : 'dark')
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    window.localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      className="rounded-full p-2 text-muted transition-colors hover:text-accent"
    >
      {theme === 'dark' ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18ZM12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,2a8,8,0,1,1,0,16A8,8,0,0,1,12,4Zm0,2v2h2V6H12Zm0,12v2h2V18H12Zm-6-6h2v2H6V12Zm10,0h2v2H16V12Zm9.5,4.5l-1.41,1.41L15.5,19.5Zm4.5-6h2v2h-2V12Zm-16,0h2v2H4V12Zm-1.41-1.41L6.91,6.41,4.5,9.5Zm15,6L17.09,17.09l1.41-1.41Z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.73,12.35a8.75,8.75,0,0,1-8.38,8.38A11.77,11.77,0,0,1,12,24V0A11.77,11.77,0,0,1,21.73,12.35ZM12,2a10,10,0,0,0,0,20,10,10,0,0,0,0-20Z" />
        </svg>
      )}
    </button>
  )
}
