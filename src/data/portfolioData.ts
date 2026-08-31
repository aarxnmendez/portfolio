/**
 * Mock portfolio data for development and public repository snapshots.
 * Replace with your real information in a local override or before deploying.
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
}

export interface TimelineEntry {
  period: string;
  tag: string;
  tagStyle: 'filled' | 'outline';
  title: string;
  company?: string;
  description?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
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
  };
  hero: {
    imageAlt: string;
    headline: string;
    lead: string;
    cta: {
      downloadCv: string;
      contact: string;
      github: string;
      linkedin: string;
    };
  };
  works: {
    title: string;
    pageLabel: string;
    projects: Project[];
    codeGithub: string;
    viewDemo: string;
  };
  classifieds: {
    title: string;
    categories: SkillCategory[];
    inquireRates: string;
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
    title: string;
    subtitle: string;
    officeLabel: string;
    email: string;
    copyButton: string;
    copySuccess: string;
  };
  footer: {
    name: string;
    copyright: string;
    links: FooterLink[];
  };
}

export const personal = {
  name: 'John Doe',
  email: 'contact@example.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://www.linkedin.com/in/johndoe',
  cvUrl: '/cv-john-doe.pdf',
};

export const portfolioContent: Record<Lang, PortfolioContent> = {
  es: {
    meta: {
      title: 'JOHN DOE | EL GACETILLA DE INGENIERÍA',
      description:
        'Portfolio de John Doe, desarrollador web. Proyectos, trayectoria y contacto.',
    },
    header: {
      vol: 'VOL. 01 - NO. 01',
      est: 'EST. 2026',
      price: 'PRECIO: UNA LÍNEA DE CÓDIGO',
      date: 'Marzo 2026',
      edition: 'Edición Inaugural',
      name: 'JOHN DOE',
      location: 'Ciudad Ejemplo, País',
      nav: [
        { label: 'PROYECTOS', href: '#works' },
        { label: 'TECNOLOGÍAS', href: '#classifieds' },
        { label: 'TRAYECTORIA', href: '#timelines' },
        { label: 'EDITORIAL', href: '#editorial' },
        { label: 'CONTACTO', href: '#contact' },
      ],
    },
    hero: {
      imageAlt: 'Retrato de John Doe',
      headline: 'DESARROLLADOR WEB & ESTUDIANTE DE INGENIERÍA',
      lead: 'Desarrollador enfocado en proyectos full-stack, código mantenible y buenas prácticas. Abierto a colaboraciones y nuevas oportunidades.',
      cta: {
        downloadCv: '[ DESCARGAR CV ]',
        contact: '[ CONTACTAR ]',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
    },
    works: {
      title: 'OBRAS SELECCIONADAS',
      pageLabel: 'PÁGINA 01 - PROYECTOS',
      projects: [
        {
          number: 'NO. 001 / DESARROLLO WEB',
          category: 'DESARROLLO WEB',
          title: 'Proyecto Uno',
          description: 'Sitio web estático de alto rendimiento con i18n, SEO y estética editorial.',
          tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
          githubUrl: personal.github,
          demoUrl: 'https://example.com',
        },
        {
          number: 'NO. 002 / DESARROLLO WEB',
          category: 'DESARROLLO WEB',
          title: 'Proyecto Dos',
          description: 'Aplicación web con enfoque en accesibilidad, rendimiento y experiencia de usuario.',
          tags: ['React', 'Node.js', 'PostgreSQL'],
          githubUrl: personal.github,
        },
      ],
      codeGithub: '[ GITHUB REPO ]',
      viewDemo: '[ LIVE DEMO ]',
    },
    classifieds: {
      title: 'LOS CLASIFICADOS',
      categories: [
        { title: 'FRONTEND', description: 'React, TypeScript, Tailwind CSS, HTML5/CSS3' },
        { title: 'BACKEND', description: 'Node.js, Express, PostgreSQL' },
        { title: 'HERRAMIENTAS', description: 'Git, GitHub, Docker, pnpm' },
      ],
      inquireRates: 'ABIERTO A COLABORACIONES Y NUEVOS PROYECTOS',
    },
    timelines: {
      sectionTitle: 'TRAYECTORIA',
      educationTitle: 'FORMACIÓN ACADÉMICA',
      workTitle: 'EXPERIENCIA LABORAL',
      education: [
        {
          period: 'Sep 2022 – Jun 2026',
          tag: '[EDUCACIÓN]',
          tagStyle: 'filled',
          title: 'Grado en Ingeniería Informática',
          company: 'Universidad Ejemplo',
          description: 'Formación en desarrollo de software y fundamentos de computación.',
        },
        {
          period: 'Sep 2020 – Jun 2022',
          tag: '[EDUCACIÓN]',
          tagStyle: 'outline',
          title: 'Ciclo Formativo en Desarrollo Web',
          company: 'Centro de Formación Ejemplo',
          description: 'Especialización en desarrollo web full-stack.',
        },
      ],
      work: [
        {
          period: 'Ene 2024 – Presente',
          tag: '[EXPERIENCIA]',
          tagStyle: 'filled',
          title: 'Software Engineer',
          company: 'Tech Company',
          highlights: [
            'Desarrollo de APIs REST con Node.js y TypeScript',
            'Construcción de interfaces con React y Tailwind CSS',
            'Integración continua y despliegue con GitHub Actions',
          ],
        },
      ],
    },
    editorial: {
      sectionTitle: 'EDITORIAL',
      title: 'NOTA DEL EDITOR',
      paragraphs: [
        'Empecé en el mundo de la programación con proyectos personales y curiosidad por entender cómo funcionan las aplicaciones web.',
        'Me interesa el equilibrio entre entregar valor rápido y mantener una base de código sólida y escalable.',
        'Fuera del código, disfruto aprendiendo cosas nuevas y aplicándolas en proyectos reales.',
      ],
    },
    extra: {
      title: '¡EXTRA! ¡EXTRA!',
      items: [
        {
          number: '01',
          badge: 'Certificaciones',
          badgeStyle: 'filled',
          title: 'LANGUAGES & CERTIFICATIONS',
          description: 'Español nativo. Inglés B2. Certificación de ejemplo en curso.',
        },
        {
          number: '02',
          badge: 'Filosofía',
          badgeStyle: 'outline',
          title: 'Aprender construyendo',
          description: 'Prefiero entender el porqué de cada decisión técnica antes de aplicarla.',
        },
        {
          number: '03',
          badge: 'Intereses',
          badgeStyle: 'outline',
          title: 'Open source',
          description: 'Sigo la comunidad y contribuyo en proyectos personales cuando puedo.',
        },
      ],
    },
    contact: {
      title: 'Carta al Editor',
      subtitle: 'Si tienes un proyecto o una oportunidad, escríbeme.',
      officeLabel: 'OFICINA EDITORIAL Y CORRESPONDENCIA DIRECTA',
      email: personal.email,
      copyButton: '[ COPIAR EMAIL ]',
      copySuccess: 'COPIADO',
    },
    footer: {
      name: 'JOHN DOE',
      copyright: '© 2026 JOHN DOE. TODOS LOS DERECHOS RESERVADOS. IMPRESO EN CÓDIGO.',
      links: [
        { label: 'GITHUB', href: personal.github },
        { label: 'LINKEDIN', href: personal.linkedin },
        { label: 'EMAIL', href: `mailto:${personal.email}` },
      ],
    },
  },
  en: {
    meta: {
      title: 'JOHN DOE | THE ENGINEERING GAZETTE',
      description: 'Portfolio of John Doe, web developer. Projects, experience, and contact.',
    },
    header: {
      vol: 'VOL. 01 - NO. 01',
      est: 'EST. 2026',
      price: 'PRICE: ONE LINE OF CODE',
      date: 'March 2026',
      edition: 'Inaugural Edition',
      name: 'JOHN DOE',
      location: 'Example City, Country',
      nav: [
        { label: 'PROJECTS', href: '#works' },
        { label: 'TECHNOLOGIES', href: '#classifieds' },
        { label: 'TIMELINE', href: '#timelines' },
        { label: 'EDITORIAL', href: '#editorial' },
        { label: 'CONTACT', href: '#contact' },
      ],
    },
    hero: {
      imageAlt: 'Portrait of John Doe',
      headline: 'WEB DEVELOPER & COMPUTER ENGINEERING STUDENT',
      lead: 'Developer focused on full-stack projects, maintainable code, and solid engineering practices. Open to collaborations and new opportunities.',
      cta: {
        downloadCv: '[ DOWNLOAD CV ]',
        contact: '[ CONTACT ]',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
    },
    works: {
      title: 'SELECTED WORKS',
      pageLabel: 'PAGE 01 - PROJECTS',
      projects: [
        {
          number: 'NO. 001 / WEB DEVELOPMENT',
          category: 'WEB DEVELOPMENT',
          title: 'Project One',
          description: 'High-performance static website with i18n, SEO, and editorial newspaper aesthetic.',
          tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
          githubUrl: personal.github,
          demoUrl: 'https://example.com',
        },
        {
          number: 'NO. 002 / WEB DEVELOPMENT',
          category: 'WEB DEVELOPMENT',
          title: 'Project Two',
          description: 'Web application focused on accessibility, performance, and user experience.',
          tags: ['React', 'Node.js', 'PostgreSQL'],
          githubUrl: personal.github,
        },
      ],
      codeGithub: '[ GITHUB REPO ]',
      viewDemo: '[ LIVE DEMO ]',
    },
    classifieds: {
      title: 'THE CLASSIFIEDS',
      categories: [
        { title: 'FRONTEND', description: 'React, TypeScript, Tailwind CSS, HTML5/CSS3' },
        { title: 'BACKEND', description: 'Node.js, Express, PostgreSQL' },
        { title: 'TOOLS', description: 'Git, GitHub, Docker, pnpm' },
      ],
      inquireRates: 'OPEN TO COLLABORATIONS AND NEW PROJECTS',
    },
    timelines: {
      sectionTitle: 'TIMELINE',
      educationTitle: 'EDUCATION',
      workTitle: 'WORK EXPERIENCE',
      education: [
        {
          period: 'Sep 2022 – Jun 2026',
          tag: '[EDUCATION]',
          tagStyle: 'filled',
          title: "Bachelor's Degree in Computer Science",
          company: 'Example University',
          description: 'Software development and computer science fundamentals.',
        },
        {
          period: 'Sep 2020 – Jun 2022',
          tag: '[EDUCATION]',
          tagStyle: 'outline',
          title: 'Web Development Vocational Program',
          company: 'Example Training Center',
          description: 'Full-stack web development specialization.',
        },
      ],
      work: [
        {
          period: 'Jan 2024 – Present',
          tag: '[WORK]',
          tagStyle: 'filled',
          title: 'Software Engineer',
          company: 'Tech Company',
          highlights: [
            'Built REST APIs with Node.js and TypeScript',
            'Developed UI with React and Tailwind CSS',
            'CI/CD pipelines and deployment with GitHub Actions',
          ],
        },
      ],
    },
    editorial: {
      sectionTitle: 'EDITORIAL',
      title: "EDITOR'S NOTE",
      paragraphs: [
        'I started in programming through personal projects and curiosity about how web applications work.',
        'I care about balancing fast delivery with a solid and scalable codebase.',
        'Outside of code, I enjoy learning new things and applying them in real projects.',
      ],
    },
    extra: {
      title: 'EXTRA! EXTRA!',
      items: [
        {
          number: '01',
          badge: 'Certifications',
          badgeStyle: 'filled',
          title: 'LANGUAGES & CERTIFICATIONS',
          description: 'Native Spanish. English B2. Sample certification in progress.',
        },
        {
          number: '02',
          badge: 'Philosophy',
          badgeStyle: 'outline',
          title: 'Learn by building',
          description: 'I prefer understanding the why behind each technical decision.',
        },
        {
          number: '03',
          badge: 'Interests',
          badgeStyle: 'outline',
          title: 'Open source',
          description: 'I follow the community and contribute through personal projects.',
        },
      ],
    },
    contact: {
      title: 'Letter to the Editor',
      subtitle: 'If you have a project or an opportunity, drop me a line.',
      officeLabel: 'EDITORIAL OFFICE & DIRECT CORRESPONDENCE',
      email: personal.email,
      copyButton: '[ COPY EMAIL ]',
      copySuccess: 'COPIED',
    },
    footer: {
      name: 'JOHN DOE',
      copyright: '© 2026 JOHN DOE. ALL RIGHTS RESERVED. PRINTED IN CODE.',
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
