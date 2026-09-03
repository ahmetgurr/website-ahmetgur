'use client'

import { useState } from 'react'
import type { SiteContent } from '@/lib/content'
import { Reveal } from './Reveal'

export function ProjectsClient({ content }: { content: SiteContent['projects'] }) {
  const [activeId, setActiveId] = useState(content.items[0]?.id)

  const active = content.items.find((item) => item.id === activeId) ?? content.items[0]

  return (
    <section id="projects" className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-accent md:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-lg text-muted">{content.intro}</p>
        </div>
        <div className="glass-card overflow-hidden rounded-lg">
          <div className="grid grid-cols-2 border-b border-card-border sm:grid-cols-3 lg:grid-cols-6">
            {content.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`flex-1 border-b-2 p-4 text-sm font-medium transition-colors ${
                  item.id === active?.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>
          {active && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-accent">{active.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground">{active.description}</p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
