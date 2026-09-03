export type SkillIconName =
  | 'ClipboardCheck'
  | 'ShieldCheck'
  | 'Landmark'
  | 'ShieldAlert'
  | 'TrendingUp'
  | 'Layers'
  | 'Router'
  | 'Radar'
  | 'Network'
  | 'Factory'
  | 'Bug'
  | 'Code2'
  | 'FileSpreadsheet'
  | 'Database'
  | 'Smartphone'
  | 'BarChart3'
  | 'Flame'
  | 'Atom'
  | 'Braces'

export type SkillItem = {
  name: string
  level: string
  value: number
  icon: SkillIconName
}

export type SkillCategory = {
  title: string
  items: SkillItem[]
}

export type ProjectItem = {
  id: string
  tabLabel: string
  title: string
  description: string
}

export type ExperienceItem = {
  date: string
  title: string
  company: string
  bullets: string[]
  groupLabel?: string
}

export type SiteContent = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    recentPosts: string
    blog: string
    contact: string
    contactCta: string
  }
  hero: {
    name: string
    title: string
    description: string
    ctaLinkedin: string
  }
  about: {
    heading: string
    intro: string
    body: string
  }
  skills: {
    heading: string
    intro: string
    categories: SkillCategory[]
  }
  projects: {
    heading: string
    intro: string
    items: ProjectItem[]
  }
  experience: {
    heading: string
    intro: string
    items: ExperienceItem[]
  }
  blog: {
    heading: string
    intro: string
    emptyState: string
    aboutEmptyState: string
    readMore: string
    viewAllCta: string
    allPostsHeading: string
    backToHome: string
    readingTimeSuffix: string
    tabHome: string
    tabAbout: string
  }
  contact: {
    heading: string
    body: string
    linkedin: string
    email: string
    github: string
    tryhackme: string
  }
}
