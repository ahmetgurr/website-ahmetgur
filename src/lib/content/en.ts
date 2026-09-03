import type { SiteContent } from './types'

export const en: SiteContent = {
  meta: {
    title: 'Ahmet Gür | Information Systems and Cybersecurity',
    description:
      'Personal portfolio and blog on cybersecurity, network infrastructure, and IT audit.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    recentPosts: 'Recent Posts',
    blog: 'Blog',
    contact: 'Contact',
    contactCta: 'Get in Touch',
  },
  hero: {
    name: 'AHMET GÜR',
    title: 'Information Systems Controller & Cybersecurity Specialist',
    description:
      "I'm a Computer Engineer bridging financial information systems audit, cybersecurity, and the design of critical network infrastructure.",
    ctaLinkedin: 'LinkedIn',
  },
  about: {
    heading: 'About Me',
    intro: 'An engineer bringing hands-on technical field experience into audit and governance.',
    body: "I'm a Computer Engineer with a strong focus on cybersecurity and network technologies. I started my career working on the architecture, installation, and integration of network and security hardware such as firewalls, NAC, SIEM, switches, and routers. I'm now turning the in-depth technical experience I gained in endpoint security, hardware configuration, and network vulnerabilities into a strategic advantage in Internal Control and Compliance within the financial sector. I carry out critical IT audits, risk management activities, and process automation within the framework of COBIT, NIST CSF 2.0, ISO 27001, and BRSA regulations to ensure the security and operational continuity of financial systems. By blending my technical \"field and hardware\" background in cybersecurity with the strict audit and governance standards required by the financial sector, I ensure that technological infrastructures remain both resilient against cyber threats and fully compliant with regulations.",
  },
  skills: {
    heading: 'Skills & Technologies',
    intro: 'A blend of IT audit, OT/cybersecurity, and software automation skills.',
    categories: [
      {
        title: '🛡️ IT Audit & Governance',
        items: [
          { name: 'COBIT', level: 'Advanced', value: 90, icon: 'ClipboardCheck' },
          { name: 'ISO 27001', level: 'Advanced', value: 85, icon: 'ShieldCheck' },
          { name: 'BRSA Regulations', level: 'Advanced', value: 90, icon: 'Landmark' },
          { name: 'NIST CSF 2.0', level: 'Intermediate', value: 70, icon: 'ShieldAlert' },
          { name: 'Risk Analysis', level: 'Advanced', value: 85, icon: 'TrendingUp' },
        ],
      },
      {
        title: '⚙️ OT & Cybersecurity',
        items: [
          { name: 'Firewall', level: 'Expert', value: 100, icon: 'Flame' },
          { name: 'Purdue Model', level: 'Advanced', value: 85, icon: 'Layers' },
          { name: 'FortiNAC', level: 'Advanced', value: 85, icon: 'Router' },
          { name: 'Nozomi', level: 'Advanced', value: 85, icon: 'Radar' },
          { name: 'Network Segmentation', level: 'Advanced', value: 85, icon: 'Network' },
          { name: 'ICS/SCADA Security', level: 'Advanced', value: 85, icon: 'Factory' },
          { name: 'Penetration Testing', level: 'Advanced', value: 85, icon: 'Bug' },
        ],
      },
      {
        title: '💻 Software & Automation',
        items: [
          { name: 'Python', level: 'Intermediate', value: 70, icon: 'Code2' },
          { name: 'Excel VBA', level: 'Advanced', value: 85, icon: 'FileSpreadsheet' },
          { name: 'Power Query', level: 'Advanced', value: 80, icon: 'Database' },
          { name: 'Android/Kotlin', level: 'Advanced', value: 85, icon: 'Smartphone' },
          { name: 'React', level: 'Intermediate-Advanced (Proficient)', value: 78, icon: 'Atom' },
          {
            name: 'JavaScript',
            level: 'Intermediate-Advanced (Proficient)',
            value: 78,
            icon: 'Braces',
          },
          { name: 'Data Analysis', level: 'Advanced', value: 80, icon: 'BarChart3' },
        ],
      },
    ],
  },
  projects: {
    heading: 'Featured Projects',
    intro: 'Projects I have delivered in audit, security, and automation.',
    items: [
      {
        id: 'limit-kontrol',
        tabLabel: 'Data Automation',
        title: 'Data Automation & Limit Control Tools',
        description:
          'Built autonomous data-matching and tracking tools — including MASAK compliance checks and a BRSA Limit Control Automation — using Excel VBA, Power Query, and Python to boost operational efficiency within the unit.',
      },
      {
        id: 'iga',
        tabLabel: 'IGA Airport OT Security',
        title: 'Istanbul Airport (IGA) OT Security',
        description:
          "Took a key role in securing Operational Technology (OT) and Industrial Control Systems (ICS) at Istanbul Airport, one of the largest airports in the world. As part of the project, I helped build a comprehensive security infrastructure to protect the network managing the airport's critical operations, strengthening network access control and threat-detection mechanisms with solutions such as FortiNAC (NAC) and Nozomi.",
      },
      {
        id: 'ivedik',
        tabLabel: 'İvedik OIZ Security',
        title: 'İvedik Organized Industrial Zone (İOSB) OT Security',
        description:
          'Took part in a project to strengthen the critical network infrastructure and cybersecurity of the İvedik Organized Industrial Zone (İOSB). Focusing on the unique security needs of industrial control systems (ICS) in industrial zones, I performed network topology analysis and vulnerability assessments. The project involved designing and implementing security policies tailored to keep industrial operations running continuously and safely.',
      },
      {
        id: 'tcdd-teias',
        tabLabel: 'TCDD & TEİAŞ',
        title: 'TCDD & TEİAŞ Network Security and Infrastructure Improvement',
        description:
          'Carried out network topology analysis and vulnerability assessments as part of a team at critical infrastructure organizations. Together we integrated next-generation security architectures — including for SCADA systems — into operational processes and improved the overall security infrastructure.',
      },
      {
        id: 'kestanederesi-res',
        tabLabel: 'Kestanederesi Wind Farm',
        title: 'Kestanederesi Wind Power Plant',
        description:
          "Analyzed the industrial network infrastructure to help build the control infrastructure securely. Implemented network segmentation aligned with the Purdue Model to keep systems running continuously and safely.",
      },
      {
        id: 'android-devops',
        tabLabel: 'Android & DevOps',
        title: 'Modern Android & DevOps Projects',
        description:
          'Mobile applications modernized with Jetpack Compose (Kotlin), Android Studio, and Git, built around CI/CD principles. This work includes a user-focused Travel Booking App with map integration for route and reservation management, as well as a dynamic Recipe App featuring core database (CRUD) operations. Both projects prioritize modern UX/UI standards and functionality.',
      },
    ],
  },
  experience: {
    heading: 'Professional Experience',
    intro: 'A journey from network and cybersecurity fieldwork to financial information systems audit.',
    items: [
      {
        date: 'January 2026 – Present',
        title: 'Assistant Information Systems Controller',
        company: 'FuzulEv - Internal Control and Compliance Directorate',
        bullets: [
          'Helped build the Information Systems Internal Control infrastructure from the ground up, laying the foundations of the Risk Control Matrix (RCM) methodology and integrating it into the internal system.',
          'Involved in preparing Risk Control Matrices, audit checklists, and executive presentations fully compliant with COBIT, NIST CSF 2.0, ISO 27001, and BRSA regulations.',
          'Lead the preparation of audit summary reports, annual activity reports, and Board of Directors presentations mapped according to the BRSA Information Systems Communiqué.',
          'Assess IT governance, risk management processes, and internal controls to identify system security gaps and design actionable improvements as a team.',
          'Develop autonomous data-matching and tracking tools — including MASAK compliance checks and a BRSA Limit Control Automation — using Excel VBA, Power Query, and Python to automate manual work and boost operational efficiency within the unit.',
        ],
      },
      {
        date: 'May 2024 – January 2026',
        title: 'Network & Cybersecurity Engineer',
        company: 'Kontrolmatik Teknoloji - Communications and Cybersecurity Department',
        bullets: [
          'Actively involved in developing and managing network and cybersecurity solutions.',
          'Successfully carried out installation, configuration, and integration of network infrastructure components such as firewalls, NAC, SIEM, switches, and routers.',
          'Identified potential security vulnerabilities by building test and simulation environments on VirtualBox and Hyper-V.',
          'Identified system security vulnerabilities and proposed remediations through network vulnerability scans and penetration testing.',
          'Involved in every stage of the project lifecycle, from architecture and network topology design to product selection and procurement.',
          'Contributed to protecting industrial systems by integrating Operational Technology (OT) security standards into projects.',
          'Ran client meetings to gather requirements and supported new client acquisition efforts.',
        ],
      },
      {
        date: 'March 2024 – May 2024',
        title: 'Software Engineering Intern / Android Developer',
        company: 'Biocoder Teknoloji',
        groupLabel: 'Internship History',
        bullets: [
          'Worked as an Android Developer at a company doing R&D in embedded software and electronic systems.',
          'Developed and shipped the company\'s operational mobile application end to end.',
          'Maintained existing applications and actively took part in integrating new features into the system.',
        ],
      },
      {
        date: 'July 2023 – September 2023',
        title: 'IT Intern',
        company: 'Gaziosmanpaşa University - Information Technologies Department',
        bullets: [
          'Managed and developed user authentication processes with Active Directory.',
          'Provided fast, effective technical support to users, taking responsibility for resolving computer and hardware issues.',
          'Carried out secure data backup, imaging, and network-based deployment operations.',
        ],
      },
    ],
  },
  blog: {
    heading: 'Recent Posts',
    intro: 'What I write about cybersecurity, audit, and automation.',
    emptyState: 'No posts published yet — check back soon.',
    aboutEmptyState: 'About info will be here soon.',
    readMore: 'Read more',
    viewAllCta: 'View All My Posts',
    allPostsHeading: 'All Posts',
    backToHome: '← Home',
    readingTimeSuffix: 'min read',
    tabHome: 'Home',
    tabAbout: 'About',
  },
  contact: {
    heading: 'Contact',
    body: "Feel free to reach out for collaborations, or just a friendly chat.",
    linkedin: 'https://www.linkedin.com/in/ahmetgur/',
    email: 'ahhmetgur@gmail.com',
    github: 'https://github.com/ahmetgurr',
    tryhackme: 'https://tryhackme.com/p/ahmetgur',
  },
}
