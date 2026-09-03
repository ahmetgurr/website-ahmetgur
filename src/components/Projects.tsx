import { getContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { ProjectsClient } from './ProjectsClient'

export async function Projects() {
  const locale = await getLocale()
  const { projects } = getContent(locale)

  return <ProjectsClient content={projects} />
}
