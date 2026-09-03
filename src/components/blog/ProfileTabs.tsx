'use client'

import { useState } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { AuthorProfile } from '@/payload-types'

export function ProfileTabs({
  tabHomeLabel,
  tabAboutLabel,
  postsList,
  aboutText,
  emptyAboutLabel,
}: {
  tabHomeLabel: string
  tabAboutLabel: string
  postsList: React.ReactNode
  aboutText: AuthorProfile['aboutText']
  emptyAboutLabel: string
}) {
  const [activeTab, setActiveTab] = useState<'home' | 'about'>('home')

  return (
    <div>
      <div className="flex gap-6 border-b border-white/10">
        <button
          type="button"
          onClick={() => setActiveTab('home')}
          className={
            activeTab === 'home'
              ? 'border-b-2 border-accent px-1 pb-3 text-sm font-semibold text-accent'
              : 'px-1 pb-3 text-sm text-muted'
          }
        >
          {tabHomeLabel}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('about')}
          className={
            activeTab === 'about'
              ? 'border-b-2 border-accent px-1 pb-3 text-sm font-semibold text-accent'
              : 'px-1 pb-3 text-sm text-muted'
          }
        >
          {tabAboutLabel}
        </button>
      </div>

      {activeTab === 'home' ? (
        postsList
      ) : aboutText ? (
        <RichText data={aboutText} className="prose prose-invert prose-lg mt-8 max-w-none" />
      ) : (
        <p className="py-10 text-center text-muted">{emptyAboutLabel}</p>
      )}
    </div>
  )
}
