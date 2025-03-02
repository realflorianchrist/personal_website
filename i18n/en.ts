import { TECHNOLOGIES } from "@/i18n/technologies";
import { I18nType } from "@/i18n/I18nType";

const en: I18nType = {
  Sections: {
    hero: "Hero",
    portfolio: "Portfolio",
    experience: "Experience",
    // contact: "Contact",
  },
  Hero: {
    positions: [
      "Software Developer",
      "3D Modeler"
    ],
    introduction: "I love crafting captivating experiences for the digital world to savor."
  },
  Experience: {
    Timeline: [
      {
        time: "Sept. 2022 - today",
        title: "BSc computer science",
        description: "My Computer Science studies at FHNW provide me with a solid foundation in software development, system architecture, and modern technologies. In addition to theoretical concepts, I work on practical projects that enhance my skills in developing and implementing applications. My focus is on backend development, distributed systems, and web technologies.",
        organisation: "University of Applied Sciences and Arts Northwestern Switzerland"
      }, {
        time: "Aug. 2019 - today",
        title: "Draftsman specializing in engineering",
        description: "Since 2019, I have been working as a structural engineering draftsman at Aegerter & Bosshardt AG. In this role, I create precise construction plans and technical drawings, collaborate closely with engineers, and support the planning of construction projects. Additionally, I work with 3D modeling to visualize designs and enhance project accuracy. My experience with CAD software and my technical expertise contribute to the efficient execution of projects.",
        organisation: "Aegerter & Bosshardt AG"
      }, {
        time: "Aug. 2019 - July 2021",
        title: "Vocational baccalaureate",
        description: "As part of my vocational baccalaureate, I deepened my knowledge in the fields of technology, architecture, and life sciences. The interdisciplinary curriculum allowed me to develop my analytical and scientific skills, providing a solid foundation for my subsequent computer science studies.",
        organisation: "Technology, Architecture, Life Sciences"
      }, {
        time: "Aug. 2015 - July 2019",
        title: "Apprenticeship to draftsman specializing in engineering",
        description: "Since 2019, I have been working as a structural engineering draftsman at Aegerter & Bosshardt AG. I create construction plans, technical drawings, and 3D models to visualize projects. With my CAD experience and technical expertise, I contribute to precise and efficient execution.",
        organisation: "Aegerter & Bosshardt AG"
      }
    ]
  },
  ProjectPreviews: [
    {
      id: 1,
      title: "Tour Booking",
      description: "In the third and fourth semester, we developed a digital tour booking platform for the Niederwald Visitor Center as part of our project track, working in an agile team. The platform automates tour requests, guide assignments, invoicing, and feedback collection, reducing manual effort. This makes the booking process more efficient and transparent for guests, guides, and administrators.",
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
        linkText: "more infos"
      }
    }, {
      id: 2,
      title: "Plan Directory",
      description: "In my fourth semester, I developed my first web application for a digital plan directory. The platform scans Windows drives, extracts relevant information, and stores it in a structured way, enabling efficient management, search, and categorization of construction plans. This significantly improves accessibility and organization in the engineering office.",
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
      description: "In my second semester, I developed TwitterFX as a practice project, my first application using JavaFX. This allowed me to gain initial experience in UI development and explore the design and functionality of desktop applications.",
      previewPicturePath: "/images/projects/javafx.png",
      technologies: [
        TECHNOLOGIES.JAVA,
        TECHNOLOGIES.CSS
      ],
      texture: "/textures/project/project3.mp4",
    },
  ],
};

export default en;
