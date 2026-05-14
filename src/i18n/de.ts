import { I18nType } from "@/i18n/I18nType";

const de: I18nType = {
  AboutMe: {
    Header: {
      Name: "Florian Christ",
      Role: "Fullstack Softwareentwickler",
      Description:
        "Ich entwickle moderne Webanwendungen, interaktive 3D-Erlebnisse und skalierbare Fullstack Systeme.",
    },

    About: {
      Id: "about",
      Title: "Über mich",
      Intro:
        "Ich entwickle moderne Fullstack Anwendungen mit einem Fokus auf saubere Benutzeroberflächen, robuste Backends und interaktive 3D Erlebnisse.",

      Tags: [
        "Informatikstudent",
        "Fullstack Entwicklung",
        "React & TypeScript",
        "Spring Boot",
        "3D Modelierer",
        "3D Web",
        "Schweiz",
      ],

      Cards: [
        {
          Id: "currently",
          Title: "Aktuell",
          Description:
            "Ich studiere Informatik an der FHNW und arbeite parallel als Softwareentwickler.",
        },
        {
          Id: "focus",
          Title: "Fokus",
          Description:
            "Mein Schwerpunkt liegt auf modernen Webanwendungen, modularen UI Systemen und praxisnahen Fullstack Lösungen.",
        },
        {
          Id: "background",
          Title: "Background",
          Description:
            "Durch meine Ausbildung als Zeichner Ingenieurbau bringe ich ein starkes Verständnis für technische Planung und visuelle Systeme mit.",
        },
      ],
    },

    Skills: {
      Id: "skills",
      Title: "Fähigkeiten",

      Frontend: {
        Title: "Frontend Entwicklung",
        Items: [
          "Interaktive Benutzeroberflächen",
          "Komponentenbasierte Architektur",
          "Responsive Layouts",
          "3D Visualisierungen im Web",
        ],
      },

      Backend: {
        Title: "Backend Entwicklung",
        Items: [
          "REST APIs",
          "Authentifizierung und Autorisierung",
          "Datenmodellierung",
          "Serverseitige Businesslogik",
        ],
      },

      DevOps: {
        Title: "Deployment & Infrastruktur",
        Items: [
          "Containerisierte Deployments",
          "CI/CD Pipelines",
          "Reverse Proxy Setups",
          "Linux Server Administration",
        ],
      },

      Other: {
        Title: "Arbeitsweise",
        Items: [
          "Technische Konzeption",
          "Saubere Typisierung",
          "Modulares UI Design",
          "Praxisnahe Problemlösung",
        ],
      },
    },

    Experience: {
      Id: 'experience',
      Title: "Erfahrung",

      Items: [
        {
          Id: "softwaredeveloper",
          Title: "Fullstack Softwareentwickler",
          Company: "Aegerter & Bosshardt",
          Period: "2022 – Heute",
          Points: [
            "Entwicklung moderner Fullstack Anwendungen",
            "Projekte mit Java, Spring Boot, TypeScript und React",
            "Konzeption und Umsetzung interner Tools",
            "Fokus auf Benutzerfreundlichkeit und Performance",
          ],
        },

        {
          Id: "draftsman",
          Title: "Zeichner Fachrichtung Ingenieurbau",
          Company: "Aegerter & Bosshardt",
          Period: "2015 – 2022",
          Points: [
            "Planung und Konstruktion im Ingenieurbau",
            "Arbeit mit CAD und BIM Software",
            "Erstellung technischer Pläne und Modelle",
            "Zusammenarbeit mit Ingenieuren und Projektleitern",
          ],
        },
      ],
    },

    Education: {
      Id: 'education',
      Title: "Ausbildung",

      Items: [
        {
          Id: "bachelor",
          Title: "Bachelor of Science FHNW",
          Institution: "Fachhochschule Nordwestschweiz",
          Period: "2022 – Heute",
        },

        {
          Id: "apprenticeship",
          Title: "Zeichner EFZ Fachrichtung Ingenieurbau",
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
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
          ],
        },

        {
          Id: "backend",
          Title: "Backend",
          Technologies: [
            "Java",
            "Spring Boot",
            "Node.js",
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

export default de;