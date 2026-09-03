import { tr } from './tr'
import { en } from './en'
import type { SiteContent } from './types'

export const content = { tr, en } as const

export type Locale = keyof typeof content

export const getContent = (locale: Locale = 'tr'): SiteContent => content[locale]

export type { SiteContent } from './types'
