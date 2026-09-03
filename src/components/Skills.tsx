import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { Reveal } from './Reveal'
import { SkillBar } from './SkillBar'

const cardSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-12']

export async function Skills() {
  const locale = await getLocale()
  const { skills } = getContent(locale)

  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-accent md:text-4xl">{skills.heading}</h2>
          <p className="mt-4 text-lg text-muted">{skills.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {skills.categories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card rounded-lg p-6 ${cardSpans[index] ?? 'lg:col-span-12'}`}
            >
              <h3 className="font-semibold text-accent">{category.title}</h3>
              <div
                className={`mt-5 grid grid-cols-1 gap-x-8 gap-y-5 ${
                  index === cardSpans.length - 1 ? 'md:grid-cols-2' : ''
                }`}
              >
                {category.items.map((item) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    value={item.value}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
