import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { Reveal } from './Reveal'

export async function Experience() {
  const locale = await getLocale()
  const { experience } = getContent(locale)

  return (
    <section id="experience" className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-accent md:text-4xl">{experience.heading}</h2>
          <p className="mt-4 text-lg text-muted">{experience.intro}</p>
        </div>
        <div className="relative border-l-2 border-accent">
          {experience.items.map((item) => (
            <div key={`${item.company}-${item.date}`}>
              {item.groupLabel && (
                <p className="mb-4 ml-8 text-sm font-bold tracking-wide text-muted uppercase">
                  {item.groupLabel}
                </p>
              )}
              <div className="mb-10 ml-8">
                <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border-4 border-background bg-accent" />
                <div className="glass-card rounded-lg p-6">
                  <p className="text-sm font-semibold text-accent">{item.date}</p>
                  <h3 className="text-xl font-bold text-accent">{item.title}</h3>
                  <p className="text-md font-medium text-muted">{item.company}</p>
                  <ul className="mt-2 list-inside list-disc text-base text-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
