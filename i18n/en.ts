import { TECHNOLOGIES } from "@/i18n/Technologies";
import { I18nType } from "@/i18n/I18nType";

const en: I18nType = {
  Sections: {
    hero: "Hero",
    portfolio: "Portfolio",
    experience: "Experience",
    contact: "Contact",
  },
  Hero: {
    positions: [
      "Software Developer",
      "Draftsman"
    ],
    introduction: "I love crafting captivating experiences for the digital world to savor."
  },
  Experience: {
    Timeline: [
      {
        time: "Sept. 2022 - today",
        title: "BSc computer science",
        description: "tbd",
        organisation: "University of Applied Sciences and Arts Northwestern Switzerland"
      }, {
        time: "Aug. 2019 - today",
        title: "Draftsman specializing in engineering",
        description: "tbd",
        organisation: "Aegerter & Bosshardt AG"
      }, {
        time: "Aug. 2019 - July 2021",
        title: "Vocational baccalaureate",
        description: "tbd",
        organisation: "Technology, Architecture, Life Sciences"
      }, {
        time: "Aug. 2015 - July 2019",
        title: "Apprenticeship to draftsman specializing in engineering",
        description: "tbd",
        organisation: "Aegerter & Bosshardt AG"
      }
    ]
  },
  ProjectPreviews: [
    {
      id: 1,
      title: "Tour Booking",
      description: "In meinem dritten und vierten Semester konnten wir im Rahmen der Projektschiene 2 Semester an einer Tour Buchung Webseite arbeiten bei der",
      previewPicturePath: "/images/projects/javafx.png",
      technologies: [
        TECHNOLOGIES.SPRING,
        TECHNOLOGIES.TYPESCRIPT,
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.REACT,
        TECHNOLOGIES.CYPRESS
      ],
      texture: "/textures/project/project1.mp4"
    }, {
      id: 2,
      title: "TwitterFX",
      description: "In my second semester I did a project with JavaFX",
      previewPicturePath: "/images/projects/javafx.png",
      technologies: [
        TECHNOLOGIES.JAVA,
        TECHNOLOGIES.CSS
      ],
      texture: "/textures/project/project1.mp4"
    }, {
      id: 3,
      title: "Plan Directory",
      description: "In my fourth semester I did my first web application",
      previewPicturePath: "/images/projects/plan-directory.png",
      technologies: [
        TECHNOLOGIES.SPRING,
        TECHNOLOGIES.TYPESCRIPT,
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.REACT,
        TECHNOLOGIES.CYPRESS
      ],
      texture: "/textures/project/project1.mp4"
    }
  ],
  TourBooking: {
    title: "Tour Booking",
    intro: "Experience the historic charm of Niederwald and learn about the life and legacy of world-renowned hotelier Cäsar Ritz. Book your guided tour digitally and dive into a journey through time.",
    leadImage: "/images/projects/tour_booking/lead_image.png",
    problemSection: {
      title: "Initial Situation/Problem statement",
      text: "In 2017, the Verein Besucherzentrum Niederwald, founded by the municipality of Goms, the Landschaftspark Binntal, and Obergoms Tourismus AG, began transforming Niederwald's former train station into the Station Ritz. Officially opened in December 2019, the visitor center celebrates the legacy of the renowned hotelier Cäsar Ritz. The center features a permanent exhibition dedicated to Ritz’s life and achievements, alongside additional offerings such as annual temporary exhibitions, a guided village tour, and a themed walking trail that highlights key moments from the lives of Cäsar Ritz and other notable figures. Visitors can also enjoy the charming Stationsbistro, which serves breakfast and light refreshments.\n" +
        "\n" +
        "However, organizing tours for guests used to be a significant challenge. Requests, whether for tours with or without a village walk, in languages such as German, English, French, and Italian, often came by phone or email. This led to numerous follow-ups to clarify details like date, time, group size, and type. Finding available and suitable guides was time-intensive, and all guide arrangements and confirmations were handled manually. Additionally, feedback collection and invoicing were done manually, resulting in inefficiencies and potential errors."
    },
    goalSection: {
      title: "Project Goal",
      text: "The goal is to streamline this process with a web application that simplifies requests, making them more transparent and efficient for guests. This platform will ease administrative tasks by automating the guide selection process, invoicing, and feedback collection, reducing the need for manual correspondence. Guides will also benefit from receiving relevant information in a standardized format, enhancing their engagement."
    },
    pictureSection: {
      tourBrowser: {
        title: "Tour Browser",
        path: "https://",
        description: "Customers browse available tours to find their ideal match."
      },
      tourBookingForm: {
        title: "Tour Booking Form",
        path: "https://",
        description: "The booking form allows customers to reserve spots for their desired tours."
      },
      adminPage: {
        title: "Admin Page",
        path: "https://",
        description: "The admin page provides tools to efficiently manage and monitor all bookings."
      }
    },
    developedSolutionSection: {
      title: "Developed Solution and its Benefits",
      introText: "We developed a comprehensive web application tourbooking.stationritz.ch that revolutionizes the tour booking process at the Niederwald Visitor Center. This platform digitizes and automates tasks like request handling, scheduling, guide assignment, invoicing, and feedback collection. By reducing manual effort, it simplifies guest interactions and boosts administrative efficiency, benefiting both visitors and guides.",
      bulletPoints: [
        "",
        ""
      ],
      outroText: "By streamlining operations and reducing errors, this solution delivers a seamless experience for both visitors and administrative staff, ensuring a smoother and more efficient process for all."
    }
  }
};

export default en;
