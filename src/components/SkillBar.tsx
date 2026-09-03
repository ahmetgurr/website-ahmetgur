'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Atom,
  BarChart3,
  Braces,
  Bug,
  ClipboardCheck,
  Code2,
  Database,
  Factory,
  FileSpreadsheet,
  Flame,
  Landmark,
  Layers,
  Network,
  Radar,
  Router,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import type { SkillIconName } from '@/lib/content/types'

const icons: Record<SkillIconName, LucideIcon> = {
  ClipboardCheck,
  ShieldCheck,
  Landmark,
  ShieldAlert,
  TrendingUp,
  Layers,
  Router,
  Radar,
  Network,
  Factory,
  Bug,
  Code2,
  FileSpreadsheet,
  Database,
  Smartphone,
  BarChart3,
  Flame,
  Atom,
  Braces,
}

export function SkillBar({
  name,
  level,
  value,
  icon,
}: {
  name: string
  level: string
  value: number
  icon: SkillIconName
}) {
  const Icon = icons[icon]
  const ref = useRef<HTMLDivElement>(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
          {name}
        </span>
        <span className="shrink-0 text-xs text-muted">{level}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-card-border/60">
        <div
          className="h-full rounded-full bg-accent shadow-[var(--glow-shadow)] transition-[width] duration-1000 ease-out"
          style={{ width: filled ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  )
}
