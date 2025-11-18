export const projectsContent = {
  title: "PROYECTOS",
  subtitle: "DESTACADOS",
  projects: [
    {
      name: "SHA Wellness Clinic",
      image: "shawellness",
      imageAlt: "Captura de pantalla de la página de SHA Wellness Clinic",
      technologies: ["WordPress", "PHP", "JavaScript"],
      description:
        "Mantenimiento y mejoras del sitio oficial de SHA Wellness Clinic, un referente internacional en bienestar con sedes en España, México y Arabia Saudí.",
      links: [
        {
          type: "demo",
          url: "https://shawellnessclinic.com/",
          label: "Live Demo",
        },
      ],
    },
    {
      name: "Leyma Basquet Coruña",
      image: "basquetcoruna",
      imageAlt: "Captura de pantalla de la página de Leyma Basquet Coruña",
      technologies: ["WordPress", "Elementor", "WPML"],
      description:
        "Rediseño completo del sitio oficial del Leyma Básquet Coruña, creando una web más moderna, rápida y visualmente atractiva para mejorar la experiencia de los aficionados.",
      links: [
        {
          type: "demo",
          url: "https://basquetcoruna.com/",
          label: "Live Demo",
        },
      ],
    },
    {
      name: "MacBook 3D Landing",
      image: "macbook-landing",
      imageAlt: "Captura de pantalla de la página de Macbook",
      technologies: ["Tailwind", "React", "ThreeJS", "GSAP"],
      description:
        "Landing 3D del MacBook Pro 2024 creada con React, Three.js y GSAP como proyecto de aprendizaje en animación y renderizado 3D.",
      links: [
        {
          type: "github",
          url: "https://github.com/aarxnmendez/macbookpro-3d-landing",
          label: "Github",
        },
        {
          type: "demo",
          url: "https://aaronmendez-macbook-landing.vercel.app",
          label: "Live Demo",
        },
      ],
    },
  ],
} as const;
