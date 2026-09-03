import { cookies } from 'next/headers'
import type { Locale } from './content'

export async function getLocale(): Promise<Locale> {
  const store = await cookies()
  const value = store.get('locale')?.value
  return value === 'en' ? 'en' : 'tr'
}
