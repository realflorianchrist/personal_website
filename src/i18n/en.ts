import { I18nType } from "@/i18n/I18nType";

const en: I18nType = {
  AboutMe: {
    Header: {
      Name: "Florian Christ",
      Role: "Fullstack Developer & Computer Science Student",
      Description:
        "I build modern web applications, interactive 3D experiences and scalable fullstack systems.",
    },

    About: {
      Id: "about",
      Title: "About Me",

      Intro:
        "I build modern fullstack applications with a strong focus on clean user interfaces, robust backend systems and interactive 3D experiences.",

      Tags: [
        "Computer Science Student",
        "Fullstack Development",
        "React & TypeScript",
        "Spring Boot",
        "3D Modeler",
        "3D Web",
        "Switzerland",
      ],

      Cards: [
        {
          Id: "currently",
          Title: "Currently",
          Description:
            "I am studying Computer Science at FHNW while working part time as a software developer.",
        },

        {
          Id: "focus",
          Title: "Focus",
          Description:
            "My main focus is on modern web applications, modular UI systems and practical fullstack solutions.",
        },

        {
          Id: "background",
          Title: "Background",
          Description:
            "My background in civil engineering drafting gives me a strong understanding of technical planning and visual systems.",
        },
      ],
    },

    Skills: {
      Id: "skills",
      Title: "Skills",

      Frontend: {
        Title: "Frontend Development",
        Items: [
          "Interactive user interfaces",
          "Component based architecture",
          "Responsive layouts",
          "3D web visualizations",
        ],
      },

      Backend: {
        Title: "Backend Development",
        Items: [
          "REST APIs",
          "Authentication and authorization",
          "Data modeling",
          "Server side business logic",
        ],
      },

      DevOps: {
        Title: "Deployment & Infrastructure",
        Items: [
          "Containerized deployments",
          "CI/CD pipelines",
          "Reverse proxy setups",
          "Linux server administration",
        ],
      },

      Other: {
        Title: "Workflow",
        Items: [
          "Technical architecture",
          "Strong type safety",
          "Modular UI design",
          "Practical problem solving",
        ],
      },
    },

    Experience: {
      Id: 'experience',
      Title: "Experience",

      Items: [
        {
          Id: "softwaredeveloper",
          Title: "Software Developer",
          Company: "Aegerter & Bosshardt",
          Period: "2022 – Present",
          Description:
            "Development of internal applications and fullstack systems using modern web technologies.",
        },

        {
          Id: "draftsman",
          Title: "Civil Engineering Draftsman",
          Company: "Aegerter & Bosshardt",
          Period: "2015 – 2022",
          Description:
            "Planning and construction work in the field of civil engineering using CAD and BIM software.",
        },
      ],
    },

    Education: {
      Id: 'education',
      Title: "Education",

      Items: [
        {
          Id: "bachelor",
          Title: "Bachelor of Science FHNW",
          Institution: "University of Applied Sciences and Arts Northwestern Switzerland",
          Period: "2022 – Present",
          Description: "Computer Science studies.",
        },

        {
          Id: "apprenticeship",
          Title: "Federal VET Diploma in Civil Engineering Drafting",
          Institution: "Aegerter & Bosshardt",
          Period: "2015 – 2019",
        },
      ],
    },

    TechStack: {
      Id: "tech-stack",
      Title: "Tech Stack",

      Items: [
        {
          Id: "frontend",
          Title: "Frontend",
          Technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
          ],
        },

        {
          Id: "backend",
          Title: "Backend",
          Technologies: [
            "Node.js",
            "Spring Boot",
            "Java",
            "Express",
          ],
        },

        {
          Id: "3d",
          Title: "3D & Graphics",
          Technologies: [
            "Three.js",
            "React Three Fiber",
            "GLTF",
            "GSAP",
          ],
        },

        {
          Id: "infrastructure",
          Title: "Infrastructure",
          Technologies: [
            "Docker",
            "MongoDB",
            "PostgreSQL",
            "Nginx",
          ],
        },
      ],
    },
  },
};

export default en;