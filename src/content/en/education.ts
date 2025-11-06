export const content = {
  title: "EDUCATION",
  subtitle: "BACKGROUND",
  education: [
    {
      period: "Sep 2025 - Present",
      degree: "Computer Engineering",
      institution: "University of A Coruña",
      description:
        "University degree in computer engineering with a focus on software development and information technologies.",
      position: "right", // right = period on left, content on right
    },
    {
      period: "Sep 2023 - Jun 2025",
      degree: "Web Development",
      institution: "IES Fernando Wirtz",
      description:
        "Higher education cycle specialized in full stack web development, including frontend, backend and databases.",
      position: "left", // left = content on left, period on right
    },
  ],
} as const;
