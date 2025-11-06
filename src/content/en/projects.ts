export const projectsContent = {
  title: "FEATURED",
  subtitle: "PROJECTS",
  projects: [
    {
      name: "SHA Wellness Clinic",
      image: "shawellness",
      imageAlt: "Screenshot of SHA Wellness Clinic website",
      technologies: ["Wordpress", "PHP", "JavaScript"],
      description:
        "Official website of SHA Wellness Clinic, leading international wellness center with presence in Spain, Mexico, and Saudi Arabia.",
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
      imageAlt: "Screenshot of Leyma Basquet Coruña website",
      technologies: ["Wordpress", "Elementor", "WPML"],
      description:
        "Official website of Leyma Coruña basketball team with modern design and multilingual content.",
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
      imageAlt: "Screenshot of MacBook landing page",
      technologies: ["Tailwind", "React", "ThreeJS", "GSAP"],
      description:
        "MacBook Pro 2024 landing page built with React, Three.js, and GSAP to learn 3D animations and rendering.",
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
