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
        "Maintenance and improvements of the official SHA Wellness Clinic website, a leading international wellness center with locations in Spain, Mexico, and Saudi Arabia.",
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
        "Complete redesign of the official Leyma Básquet Coruña website, delivering a more modern, faster, and visually engaging experience for fans.",
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
        "3D landing page for the MacBook Pro 2024 built with React, Three.js, and GSAP created as a learning project to explore animation and real-time 3D rendering.",
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
