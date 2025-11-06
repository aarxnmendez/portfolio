export const projectsContent = {
  title: "PROYECTOS",
  subtitle: "DESTACADOS",
  projects: [
    {
      name: "SHA Wellness Clinic",
      image: "shawellness",
      imageAlt: "Captura de pantalla de la página de SHA Wellness Clinic",
      technologies: ["Wordpress", "PHP", "JavaScript"],
      description:
        "Sitio web oficial de SHA Wellness Clinic, centro de bienestar líder internacional con presencia en España, México y Arabia Saudí.",
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
      technologies: ["Wordpress", "Elementor", "WPML"],
      description:
        "Sitio web oficial del equipo de baloncesto Leyma Coruña con diseño moderno y contenido multiidioma.",
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
        "Landing page del MacBook Pro 2024 desarrollada con React, Three.js y GSAP para aprender animaciones y renderizado 3D.",
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
