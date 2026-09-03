import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { BLOG_HANDLE } from '@/lib/posts'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export async function Navbar() {
  const locale = await getLocale()
  const { nav } = getContent(locale)

  const links = [
    { href: '/#about', label: nav.about },
    { href: '/#skills', label: nav.skills },
    { href: '/#projects', label: nav.projects },
    { href: '/#experience', label: nav.experience },
    { href: '/#blog', label: nav.recentPosts },
    { href: `/blog/${BLOG_HANDLE}`, label: nav.blog },
    { href: '/#contact', label: nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/#hero" className="text-2xl font-extrabold text-glow">
          AG
        </a>
        <div className="hidden items-baseline gap-4 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
