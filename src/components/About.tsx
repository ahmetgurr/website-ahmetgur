import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { Reveal } from './Reveal'

export async function About() {
  const locale = await getLocale()
  const { about } = getContent(locale)

  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-accent md:text-4xl">{about.heading}</h2>
          <p className="mt-4 text-lg text-muted">{about.intro}</p>
        </div>
        <div className="glass-card rounded-lg p-8">
          <p className="text-base leading-relaxed text-foreground md:text-lg">{about.body}</p>
        </div>
      </Reveal>
    </section>
  )
}
