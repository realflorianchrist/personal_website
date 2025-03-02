import { TECHNOLOGIES } from "@/i18n/technologies";
import { I18nType } from "@/i18n/I18nType";

const de: I18nType = {
  Sections: {
    hero: "Hero",
    portfolio: "Portfolio",
    experience: "Erfahrung",
    // contact: "Kontakt"
  },
  Hero: {
    positions: [
      "Software Entwickler",
      "3D Modelierer"
    ],
    introduction: "Ich liebe es, fesselnde Erlebnisse für die digitale Welt zu schaffen."
  },
  Experience: {
    Timeline: [
      {
        time: "Sept. 2022 - heute",
        title: "BSc Informatik",
        description: "Mein Informatikstudium an der FHNW vermittelt mir ein breites Wissen in Softwareentwicklung, Systemarchitektur und modernen Technologien. Neben theoretischen Grundlagen arbeite ich an praxisnahen Projekten, die meine Fähigkeiten in der Entwicklung und Implementierung von Anwendungen stärken. Mein Fokus liegt auf der Backend-Entwicklung, verteilten Systemen und Webtechnologien.",
        organisation: "Fachhochschule Nordwestschweiz"
      }, {
        time: "Aug. 2019 - heute",
        title: "Zeichner Fachrichtung Ingenieurbau",
        description: "Seit 2019 arbeite ich als Zeichner Fachrichtung Ingenieurbau bei Aegerter & Bosshardt AG. Ich erstelle Baupläne, Konstruktionszeichnungen und 3D-Modelle zur Visualisierung von Projekten. Durch meine CAD-Erfahrung und technisches Verständnis trage ich zur präzisen und effizienten Umsetzung bei.",
        organisation: "Aegerter & Bosshardt AG"
      }, {
        time: "Aug. 2019 - Juli 2021",
        title: "Berufsmaturität",
        description: "Im Rahmen der Berufsmaturität vertiefte ich mein Wissen in den Bereichen Technik, Architektur und Life Sciences. Der interdisziplinäre Lehrplan ermöglichte mir, meine analytischen und wissenschaftlichen Fähigkeiten weiterzuentwickeln und eine solide Grundlage für mein anschließendes Informatikstudium zu schaffen.",
        organisation: "Technik, Architektur, Life Sciences"
      }, {
        time: "Aug. 2015 - Juli 2019",
        title: "Ausbildung zum Zeichner Fachrichtung Ingenieurbau",
        description: "Während meiner vierjährigen Ausbildung zum Zeichner mit Fachrichtung Ingenieurbau habe ich fundierte Kenntnisse in der Planung und Konstruktion von Bauprojekten erworben. Ich arbeitete mit CAD-Software, erstellte Baupläne und unterstützte Ingenieure bei der Umsetzung verschiedener Projekte. Diese Erfahrung hat mein technisches Verständnis geschärft und meine Präzision im Umgang mit komplexen Strukturen gefestigt.",
        organisation: "Aegerter & Bosshardt AG"
      }
    ]
  },
  ProjectPreviews: [
    {
      id: 1,
      title: "Tour Booking",
      description: "Im dritten und vierten Semester entwickelten wir in einem agilen Team im Rahmen der Projektschiene eine Webanwendung zur digitalen Tourbuchung für das Besucherzentrum Niederwald. Die Plattform automatisiert Anfragen, Guide-Zuweisung, Rechnungsstellung und Feedback-Erfassung, wodurch der manuelle Aufwand reduziert wird. So wird der Buchungsprozess effizienter und transparenter für Gäste, Guides und die Verwaltung.",
      previewPicturePath: "/images/projects/javafx.png",
      technologies: [
        TECHNOLOGIES.SPRING,
        TECHNOLOGIES.TYPESCRIPT,
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.REACT,
        TECHNOLOGIES.CYPRESS
      ],
      texture: "/textures/project/project1.mp4",
      repoPath: {
        link: "https://gitlab.com/realflorianchrist/tourbooking-station-ritz",
        linktText: "GitLab"
      },
      furtherLink: {
        link: "https://web0.fhnw.ch/ht/informatik/ip34/25bb/booking/index.html",
        linkText: "Mehr Infos"
      }
    }, {
      id: 2,
      title: "Plan Directory",
      description: "Im vierten Semester entwickelte ich meine erste Webanwendung für ein digitales Planverzeichnis. Die Plattform durchsucht Windows-Laufwerke, extrahiert relevante Informationen und speichert sie strukturiert ab, sodass Baupläne effizient verwaltet, durchsucht und kategorisiert werden können. Dies verbessert den Zugriff und die Organisation im Bauingenieurbüro erheblich.",
      previewPicturePath: "/images/projects/plan-directory.png",
      technologies: [
        TECHNOLOGIES.SPRING,
        TECHNOLOGIES.TYPESCRIPT,
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.REACT,
        TECHNOLOGIES.CYPRESS
      ],
      texture: "/textures/project/project2.mp4",
    }, {
      id: 3,
      title: "TwitterFX",
      description: "Im zweiten Semester entwickelte ich das Übungsprojekt TwitterFX, meine erste Anwendung mit JavaFX. Dabei konnte ich erste Erfahrungen in der UI-Entwicklung sammeln und mich mit der Gestaltung und Funktionalität von Desktop-Anwendungen vertraut machen.",
      previewPicturePath: "/images/projects/javafx.png",
      technologies: [
        TECHNOLOGIES.JAVA,
        TECHNOLOGIES.CSS
      ],
      texture: "/textures/project/project3.mp4",
    }
  ],
};

export default de;
