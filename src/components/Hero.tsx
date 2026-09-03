import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'

export async function Hero() {
  const locale = await getLocale()
  const { hero, nav, contact } = getContent(locale)

  return (
    <section id="hero" className="py-20 text-center md:py-32">
      <h1 className="text-4xl font-extrabold text-accent md:text-6xl">{hero.name}</h1>
      <p className="mt-4 text-lg font-semibold text-foreground md:text-2xl">{hero.title}</p>
      <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">{hero.description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-md bg-[#00ff41] px-6 py-3 font-bold text-black shadow-[0_0_15px_rgba(0,255,65,0.6)] transition-opacity hover:opacity-90"
        >
          {nav.contactCta}
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#00ff41] bg-transparent px-6 py-3 font-semibold text-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.35)] transition-colors hover:bg-[#00ff41]/10"
        >
          {hero.ctaLinkedin}
        </a>
      </div>
    </section>
  )
}
