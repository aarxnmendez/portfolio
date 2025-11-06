export const content = {
  title: "FORMACIÓN",
  subtitle: "ACADÉMICA",
  education: [
    {
      period: "Sep 2025 - Presente",
      degree: "Ingeniería Informática",
      institution: "Universidad de A Coruña",
      description:
        "Grado universitario en ingeniería informática con enfoque en desarrollo de software y tecnologías de la información.",
      position: "right", // right = period on left, content on right
    },
    {
      period: "Sep 2023 - Jun 2025",
      degree: "Desarrollo Web",
      institution: "IES Fernando Wirtz",
      description:
        "Ciclo formativo de grado superior especializado en desarrollo web full stack, incluyendo frontend, backend y bases de datos.",
      position: "left", // left = content on left, period on right
    },
  ],
} as const;
