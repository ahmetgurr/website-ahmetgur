'use client'

import { useState } from 'react'
import { Check, Link2 } from 'lucide-react'

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative inline-flex shrink-0">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Bağlantıyı kopyala"
        className="btn-glow flex h-9 w-9 items-center justify-center rounded-full"
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        )}
      </button>
      <span
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-accent/30 bg-card px-2 py-1 text-xs font-medium whitespace-nowrap text-accent shadow-[var(--glow-shadow)] transition-opacity duration-200 ${
          copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {copied ? 'Kopyalandı!' : 'Kopyala'}
      </span>
    </div>
  )
}
