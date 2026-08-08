import { Code2, Globe, Database } from "lucide-react";

// Icons: use existing /public/tech assets where available.
// Skills without a dedicated icon reuse a generic existing asset (no new assets invented).
const ICON = {
  react: "/tech/react.svg",
  mongodb: "/tech/mongodb.svg",
  fastapi: "/tech/fastapi.svg",
  api: "/tech/api.svg",
  postgresql: "/tech/postgresql.svg",
  git: "/tech/git.svg",
  nodejs: "/tech/nodejs.svg",
};

export const skillCategories = [
  {
    title: "Web Development",
    icon: Globe,
    blurb: "Frontend fundamentals and UI building",
    skills: [
      {
        name: "Web Development",
        icon: ICON.api,
        core: true,
        description:
          "Building websites and simple web applications using standard web technologies.",
      },
      {
        name: "HTML",
        icon: ICON.api,
        core: true,
        description:
          "Structuring web page content with semantic HTML markup.",
      },
      {
        name: "CSS",
        icon: ICON.api,
        core: true,
        description:
          "Styling layouts and visual presentation for web pages.",
      },
      {
        name: "JavaScript",
        icon: ICON.nodejs,
        core: true,
        description:
          "Adding interactivity and client-side logic to web pages.",
      },
      {
        name: "React",
        icon: ICON.react,
        core: true,
        description:
          "Building user interfaces with reusable React components.",
      },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    blurb: "Core languages I use and study",
    skills: [
      {
        name: "Python",
        icon: ICON.fastapi,
        core: true,
        description:
          "General-purpose programming for scripts, backends, and data-related project work.",
      },
      {
        name: "C",
        icon: ICON.git,
        core: true,
        description:
          "Foundational programming language used in coursework and practice.",
      },
      {
        name: "C++",
        icon: ICON.git,
        core: true,
        description:
          "Object-oriented and systems-oriented programming practice alongside CSE studies.",
      },
      {
        name: "Java",
        icon: ICON.git,
        core: true,
        description:
          "Object-oriented programming language used in coursework and practice.",
      },
    ],
  },
  {
    title: "Tools & Data",
    icon: Database,
    blurb: "Environments and data storage",
    skills: [
      {
        name: "Linux",
        icon: ICON.api,
        core: true,
        description:
          "Using Linux as a development environment for coursework and projects.",
      },
      {
        name: "SQL",
        icon: ICON.postgresql,
        core: true,
        description:
          "Querying and working with relational data using SQL.",
      },
      {
        name: "MongoDB",
        icon: ICON.mongodb,
        core: true,
        description:
          "Working with document-oriented data using MongoDB.",
      },
    ],
  },
];

export const globeSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.title })),
);
