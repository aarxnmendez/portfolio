/**
 * Portfolio content and personal data.
 */

export type Lang = 'es' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  company?: string;
  url?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExtraItem {
  number: string;
  badge: string;
  badgeStyle: 'filled' | 'outline';
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  header: {
    vol: string;
    est: string;
    price: string;
    date: string;
    edition: string;
    name: string;
    location: string;
    nav: NavItem[];
    navAriaLabel: string;
  };
  hero: {
    imageAlt: string;
    imageUrl: string;
    headline: string;
    lead: string;
    cta: {
      downloadCv: string;
      github: string;
      linkedin: string;
      downloadCvAriaLabel: string;
      githubAriaLabel: string;
      linkedinAriaLabel: string;
    };
  };
  works: {
    title: string;
    previewWatermark: string;
    projects: Project[];
    codeGithub: string;
    viewDemo: string;
  };
  classifieds: {
    title: string;
    categories: SkillCategory[];
  };
  timelines: {
    sectionTitle: string;
    educationTitle: string;
    workTitle: string;
    education: TimelineEntry[];
    work: TimelineEntry[];
  };
  editorial: {
    sectionTitle: string;
    title: string;
    paragraphs: string[];
  };
  extra: {
    title: string;
    items: ExtraItem[];
  };
  contact: {
    email: string;
    copyButton: string;
    copySuccess: string;
    copyEmailAriaLabel: string;
    emailAriaLabel: string;
  };
  footer: {
    name: string;
    copyright: string;
    links: FooterLink[];
  };
}

export const personal = {
  name: 'Aarón Méndez',
  email: 'info@aaronmendez.es',
  github: 'https://github.com/aarxnmendez',
  linkedin: 'https://www.linkedin.com/in/aaronmendezz',
  cvUrl: '/cv-aaron-mendez.pdf',
};

export const personStructuredData = {
  name: personal.name,
  alumniOf: 'Universidade da Coruña (UDC)',
  byLang: {
    es: {
      jobTitle: 'Estudiante de Ingeniería Informática y Desarrollador Web',
      knowsAbout: [
        'Desarrollo web',
        'Ingeniería informática',
        'TypeScript',
        'React',
        'PHP',
        'MySQL',
        'Docker',
        'AWS',
      ],
    },
    en: {
      jobTitle: 'Web Developer & Computer Engineering Student',
      knowsAbout: [
        'Web Development',
        'Computer Engineering',
        'TypeScript',
        'React',
        'PHP',
        'MySQL',
        'Docker',
        'AWS',
      ],
    },
  },
};

export function getPersonStructuredData(lang: Lang) {
  const localized = personStructuredData.byLang[lang];
  return {
    name: personStructuredData.name,
    alumniOf: personStructuredData.alumniOf,
    jobTitle: localized.jobTitle,
    knowsAbout: localized.knowsAbout,
  };
}

export const portfolioContent: Record<Lang, PortfolioContent> = {
  es: {
    meta: {
      title: 'Aarón Méndez | Estudiante de Ingeniería Informática & Desarrollador Web',
      description:
        'Desarrollador web en A Coruña compaginando el grado en Ingeniería Informática en la UDC con el desarrollo web profesional. Enfocado en software mantenible y arquitectura de código.',
      keywords:
        'desarrollador web, ingenieria informatica udc, typescript, react, php, mysql, docker, astro, a coruna, portfolio',
    },
    header: {
      vol: 'VOL. 01 - NO. 01',
      est: 'EST. 2026',
      price: 'PRECIO: UNA LÍNEA DE CÓDIGO',
      date: 'Septiembre 2026',
      edition: 'Edición Inaugural',
      name: 'AARÓN MÉNDEZ',
      location: 'A Coruña, España',
      nav: [
        { label: 'PROYECTOS', href: '#works' },
        { label: 'TECNOLOGÍAS', href: '#classifieds' },
        { label: 'TRAYECTORIA', href: '#timelines' },
        { label: 'SOBRE MÍ', href: '#editorial' },
        { label: 'CONTACTO', href: '#contact' },
      ],
      navAriaLabel: 'Navegación principal',
    },
    hero: {
      imageAlt: 'Retrato de Aarón Méndez',
      imageUrl: '/images/aaron-mendez.jpeg',
      headline: 'ESTUDIANTE DE INGENIERÍA INFORMÁTICA & DESARROLLADOR WEB',
      lead: 'Desarrollador de software en A Coruña que compagina el grado en Ingeniería Informática con la creación de aplicaciones e interfaces web. Enfocado en la arquitectura de código, algoritmos eficientes y en construir software fiable y bien estructurado.',
      cta: {
        downloadCv: '[ DESCARGAR CV ]',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        downloadCvAriaLabel: 'Descargar currículum en PDF',
        githubAriaLabel: 'Abrir perfil de GitHub en una nueva pestaña',
        linkedinAriaLabel: 'Abrir perfil de LinkedIn en una nueva pestaña',
      },
    },
    works: {
      title: 'PROYECTOS DESTACADOS',
      previewWatermark: 'DSAVISION PREVIEW',
      projects: [
        {
          number: 'NO. 001 / ALGORITMOS & WEB',
          category: 'CIENCIAS DE LA COMPUTACIÓN',
          title: 'DSAVision - Visualizador de Estructuras de Datos & Algoritmos',
          description:
            'Herramienta web interactiva para visualizar estructuras de datos y algoritmos en tiempo real. Construida para facilitar la comprensión visual de conceptos complejos con renderizado reactivo y flujo CI/CD automatizado.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'CI/CD'],
          imageUrl: '/images/dsavision-cover.png',
          imageAlt: 'Captura de pantalla de DSAVision, visualizador de estructuras de datos y algoritmos',
          demoUrl: 'https://dsavision.dev',
        },
      ],
      codeGithub: '[ REPO GITHUB ]',
      viewDemo: '[ DEMO EN VIVO ]',
    },
    classifieds: {
      title: 'TECNOLOGÍAS',
      categories: [
        {
          title: 'LENGUAJES & FUNDAMENTOS',
          skills: ['TypeScript', 'JavaScript', 'PHP', 'SQL'],
        },
        {
          title: 'DESARROLLO WEB',
          skills: ['React', 'Astro', 'Tailwind CSS', 'WordPress', 'HTML5', 'CSS3'],
        },
        {
          title: 'INFRAESTRUCTURA & BASES DE DATOS',
          skills: ['MySQL', 'Docker', 'Git', 'GitHub'],
        },
      ],
    },
    timelines: {
      sectionTitle: 'TRAYECTORIA',
      educationTitle: 'FORMACIÓN ACADÉMICA',
      workTitle: 'EXPERIENCIA LABORAL',
      education: [
        {
          period: 'Sep 2025 - Presente',
          title: 'Grado en Ingeniería Informática',
          company: 'Universidade da Coruña (UDC)',
        },
        {
          period: 'Sep 2023 - Jun 2025',
          title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
          company: 'IES Fernando Wirtz Suárez',
        },
      ],
      work: [
        {
          period: 'Mar 2026 - Presente',
          title: 'Web Developer',
          company: 'Clink Web Value',
          url: 'https://clink.es/',
          description:
            'Análisis de requisitos y participación en reuniones con clientes. Desarrollo de funcionalidades dinámicas con foco en la estructura y mantenibilidad del código.',
        },
        {
          period: 'Abr 2025 - Jun 2025',
          title: 'Web Developer Intern',
          company: 'Clink Web Value',
          url: 'https://clink.es/',
          description:
            'Construcción de sitios web a medida desde cero y resolución de incidencias en proyectos activos de clientes.',
        },
      ],
    },
    editorial: {
      sectionTitle: 'SOBRE MÍ',
      title: 'TRAYECTORIA & PERSPECTIVA',
      paragraphs: [
        'Mi primer contacto real con la informática empezó en casa, creando hojas de cálculo en Excel para gestionar mis pequeños gastos. Poco después, descubrir Scratch en el instituto me hizo clic: no solo quería utilizar la tecnología, quería construirla. Hoy, esa misma curiosidad por entender cómo funcionan las cosas por dentro es lo que mueve mi día a día.',
        'Actualmente compagino el desarrollo web profesional con el grado en Ingeniería Informática en la UDC. Me apasiona el equilibrio entre hacer que algo funcione y asegurar que esté bien construido, buscando siempre soluciones robustas y escalables.',
        'Hoy en día, mi objetivo principal es comprender cómo funcionan los sistemas a gran escala, explorando la infraestructura cloud y la arquitectura de software para construir aplicaciones de alto rendimiento.',
      ],
    },
    extra: {
      title: 'DATOS CLAVE',
      items: [
        {
          number: '01',
          badge: 'CERTIFICACIONES',
          badgeStyle: 'filled',
          title: 'CAMBRIDGE ENGLISH C1 ADVANCED',
          description:
            'Certificación oficial para comunicación técnica internacional, reuniones con clientes y documentación de sistemas.',
        },
        {
          number: '02',
          badge: 'APRENDIZAJE',
          badgeStyle: 'outline',
          title: 'AWS E INFRAESTRUCTURA CLOUD',
          description:
            'Profundizando actualmente en servicios de AWS y arquitectura cloud para el diseño de sistemas escalables.',
        },
      ],
    },
    contact: {
      email: personal.email,
      copyButton: '[ COPIAR EMAIL ]',
      copySuccess: 'COPIADO',
      copyEmailAriaLabel: 'Copiar dirección de correo electrónico',
      emailAriaLabel: `Enviar correo a ${personal.email}`,
    },
    footer: {
      name: 'AARÓN MÉNDEZ',
      copyright:
        '© 2026 AARÓN MÉNDEZ. TODOS LOS DERECHOS RESERVADOS. IMPRESO EN CÓDIGO. CONSTRUIDO CON INTENCIÓN.',
      links: [
        { label: 'GITHUB', href: personal.github },
        { label: 'LINKEDIN', href: personal.linkedin },
        { label: 'EMAIL', href: `mailto:${personal.email}` },
      ],
    },
  },
  en: {
    meta: {
      title: 'Aarón Méndez | Computer Engineering Student & Web Developer',
      description:
        'Software developer based in A Coruña balancing a Computer Engineering degree at UDC with professional web development. Focused on maintainable software and code architecture.',
      keywords:
        'web developer, computer engineering udc, typescript, react, php, mysql, docker, astro, a coruna, portfolio',
    },
    header: {
      vol: 'VOL. 01 - NO. 01',
      est: 'EST. 2026',
      price: 'PRICE: ONE LINE OF CODE',
      date: 'September 2026',
      edition: 'Inaugural Edition',
      name: 'AARÓN MÉNDEZ',
      location: 'A Coruña, Spain',
      nav: [
        { label: 'PROJECTS', href: '#works' },
        { label: 'TECHNOLOGIES', href: '#classifieds' },
        { label: 'TIMELINE', href: '#timelines' },
        { label: 'ABOUT', href: '#editorial' },
        { label: 'CONTACT', href: '#contact' },
      ],
      navAriaLabel: 'Main navigation',
    },
    hero: {
      imageAlt: 'Portrait of Aarón Méndez',
      imageUrl: '/images/aaron-mendez.jpeg',
      headline: 'COMPUTER ENGINEERING STUDENT & WEB DEVELOPER',
      lead: 'Software developer based in A Coruña, balancing a Computer Engineering degree with building web applications and interfaces. Focused on code architecture, efficient algorithms, and writing reliable, well-structured software.',
      cta: {
        downloadCv: '[ DOWNLOAD CV ]',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        downloadCvAriaLabel: 'Download resume as PDF',
        githubAriaLabel: 'Open GitHub profile in a new tab',
        linkedinAriaLabel: 'Open LinkedIn profile in a new tab',
      },
    },
    works: {
      title: 'SELECTED WORKS',
      previewWatermark: 'DSAVISION PREVIEW',
      projects: [
        {
          number: 'NO. 001 / ALGORITHMS & WEB',
          category: 'COMPUTER SCIENCE',
          title: 'DSAVision - Interactive DSA Visualizer',
          description:
            'Interactive web tool built to visualize data structures and algorithms in real time. Focused on performance, smooth animations, and automated deployment pipelines.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'CI/CD'],
          imageUrl: '/images/dsavision-cover.png',
          imageAlt: 'Screenshot of DSAVision, interactive data structures and algorithms visualizer',
          demoUrl: 'https://dsavision.dev',
        },
      ],
      codeGithub: '[ GITHUB REPO ]',
      viewDemo: '[ LIVE DEMO ]',
    },
    classifieds: {
      title: 'TECHNOLOGIES',
      categories: [
        {
          title: 'LANGUAGES & CORE',
          skills: ['TypeScript', 'JavaScript', 'PHP', 'SQL'],
        },
        {
          title: 'WEB DEVELOPMENT',
          skills: ['React', 'Astro', 'Tailwind CSS', 'WordPress', 'HTML5', 'CSS3'],
        },
        {
          title: 'INFRASTRUCTURE & DATABASES',
          skills: ['MySQL', 'Docker', 'Git', 'GitHub'],
        },
      ],
    },
    timelines: {
      sectionTitle: 'EXPERIENCE & EDUCATION',
      educationTitle: 'EDUCATION',
      workTitle: 'WORK EXPERIENCE',
      education: [
        {
          period: 'Sep 2025 - Present',
          title: "Bachelor's Degree in Computer Engineering",
          company: 'Universidade da Coruña (UDC)',
        },
        {
          period: 'Sep 2023 - Jun 2025',
          title: 'Higher National Diploma in Web Application Development (DAW)',
          company: 'IES Fernando Wirtz Suárez',
        },
      ],
      work: [
        {
          period: 'Mar 2026 - Present',
          title: 'Web Developer',
          company: 'Clink Web Value',
          url: 'https://clink.es/',
          description:
            'Requirements analysis and participation in client meetings. Implementing dynamic features with a strong focus on code structure and maintainability.',
        },
        {
          period: 'Apr 2025 - Jun 2025',
          title: 'Web Developer Intern',
          company: 'Clink Web Value',
          url: 'https://clink.es/',
          description:
            'Built custom websites from scratch and resolved technical issues across active client projects.',
        },
      ],
    },
    editorial: {
      sectionTitle: 'ABOUT',
      title: 'BACKGROUND & PERSPECTIVE',
      paragraphs: [
        "My first real contact with computing started at home, building Excel sheets to track my small expenses. Shortly after, discovering Scratch in high school clicked for me: I didn't just want to use technology, I wanted to build it. Today, that curiosity to understand how things work under the hood is what drives my day-to-day.",
        "I currently balance professional Web Development with my Computer Engineering degree at UDC. I'm fascinated by the balance between making something work and making sure it's well-built, always aiming for robust and scalable solutions.",
        'Today, my main goal is to understand how large-scale systems work, exploring cloud infrastructure and software architecture to build high-performance applications.',
      ],
    },
    extra: {
      title: 'HIGHLIGHTS',
      items: [
        {
          number: '01',
          badge: 'CERTIFICATIONS',
          badgeStyle: 'filled',
          title: 'CAMBRIDGE ENGLISH C1 ADVANCED',
          description:
            'Certified English level for international technical communication, client meetings, and system documentation.',
        },
        {
          number: '02',
          badge: 'LEARNING',
          badgeStyle: 'outline',
          title: 'AWS & CLOUD INFRASTRUCTURE',
          description:
            'Currently expanding knowledge in AWS services and cloud architecture to design scalable systems.',
        },
      ],
    },
    contact: {
      email: personal.email,
      copyButton: '[ COPY EMAIL ]',
      copySuccess: 'COPIED',
      copyEmailAriaLabel: 'Copy email address',
      emailAriaLabel: `Send email to ${personal.email}`,
    },
    footer: {
      name: 'AARÓN MÉNDEZ',
      copyright:
        '© 2026 AARÓN MÉNDEZ. ALL RIGHTS RESERVED. PRINTED IN CODE. BUILT WITH INTENTION.',
      links: [
        { label: 'GITHUB', href: personal.github },
        { label: 'LINKEDIN', href: personal.linkedin },
        { label: 'EMAIL', href: `mailto:${personal.email}` },
      ],
    },
  },
};

export function getContent(lang: Lang): PortfolioContent {
  return portfolioContent[lang];
}