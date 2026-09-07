import {
  AboutMeI18n,
  ContactI18n,
  I18nType,
  ProgramsI18n,
} from '@/i18n/I18nType';

const AboutMe: AboutMeI18n = {
  Header: {
    Name: 'Florian Christ',
    Role: 'Fullstack Developer & Computer Science Student',
    Description:
      'I build modern web applications, interactive 3D experiences and scalable fullstack systems.',
  },

  About: {
    Id: 'about',
    Title: 'About Me',

    Intro:
      'I build modern fullstack applications with a strong focus on clean user interfaces, robust backend systems and interactive 3D experiences.',

    Tags: [
      'Computer Science Student',
      'Fullstack Development',
      'Java',
      'Spring Boot',
      'TypeScript',
      'React',
      '3D Modeling',
      '3D Web',
      'Switzerland',
    ],

    Cards: [
      {
        Id: 'currently',
        Title: 'Currently',
        Description:
          'I am studying Computer Science at FHNW while working part time as a software developer.',
      },

      {
        Id: 'focus',
        Title: 'Focus',
        Description:
          'My main focus is on modern web applications, modular UI systems and practical fullstack solutions.',
      },

      {
        Id: 'background',
        Title: 'Background',
        Description:
          'My background in civil engineering drafting gives me a strong understanding of technical planning and visual systems.',
      },
    ],
  },

  Skills: {
    Id: 'skills',
    Title: 'Skills',

    Frontend: {
      Title: 'Frontend Development',
      Items: [
        'Interactive user interfaces',
        'Component based architecture',
        'Responsive layouts',
        '3D web visualizations',
      ],
    },

    Backend: {
      Title: 'Backend Development',
      Items: [
        'REST APIs',
        'Authentication and authorization',
        'Data modeling',
        'Server side business logic',
      ],
    },

    DevOps: {
      Title: 'Deployment & Infrastructure',
      Items: [
        'Containerized deployments',
        'CI/CD pipelines',
        'Reverse proxy setups',
        'Linux server administration',
      ],
    },

    Other: {
      Title: 'Workflow',
      Items: [
        'Technical architecture',
        'Strong type safety',
        'Modular UI design',
        'Practical problem solving',
      ],
    },
  },

  Experience: {
    Id: 'experience',
    Title: 'Experience',

    Items: [
      {
        Id: 'softwaredeveloperHSLU',
        Title: 'Fullstack Softwareentwickler',
        Company: 'Hochschule Luzern',
        Period: '06.2026 – 09.2026',
        Points: [
          'Development of a Rhino 8 plugin using C# and .NET for modeling, simulation and visualization',
          'Implementation of interactive 3D visualizations and technical user interfaces',
          'Integration of simulation data and development of visual analysis features',
          'Contribution from technical design through implementation',
        ],
      },
      {
        Id: 'softwaredeveloper',
        Title: 'Fullstack Softwareentwickler',
        Company: 'Aegerter & Bosshardt',
        Period: '2022 – Heute',
        Points: [
          'Development of an internal file management system using Java, Spring Boot, TypeScript and React',
          'Implementation of backend services and REST APIs using Java and Spring Boot',
          'Development of modern user interfaces with TypeScript and React',
          'Design and integration of data models and interfaces',
          'Automation of existing workflows through custom software solutions',
        ],
      },
      {
        Id: 'draftsman',
        Title: 'Zeichner Fachrichtung Ingenieurbau',
        Company: 'Aegerter & Bosshardt',
        Period: '2015 – 2022',
        Points: [
          'Planning and design of civil engineering and infrastructure projects',
          'Creation of technical drawings, models and construction documentation',
          'Working with CAD and BIM software and digital planning workflows',
          'Preparation and coordination of complex technical information',
          'Close collaboration with engineers, project managers and other specialists',
        ],
      },
    ],
  },

  Education: {
    Id: 'education',
    Title: 'Education',

    Items: [
      {
        Id: 'bachelor',
        Title: 'Bachelor of Science FHNW',
        Institution:
          'University of Applied Sciences and Arts Northwestern Switzerland',
        Period: '2022 – Present',
      },

      {
        Id: 'apprenticeship',
        Title: 'Federal VET Diploma in Civil Engineering Drafting',
        Institution: 'Aegerter & Bosshardt',
        Period: '2015 – 2019',
      },
    ],
  },

  TechStack: {
    Id: 'tech-stack',
    Title: 'Tech Stack',

    Items: [
      {
        Id: 'frontend',
        Title: 'Frontend',
        Technologies: [
          'TypeScript',
          'React',
          'Next.js',
          'Tailwind CSS',
          'HTML',
          'CSS',
          'WPF',
        ],
      },
      {
        Id: 'backend',
        Title: 'Backend',
        Technologies: [
          'Java',
          'Spring Boot',
          'C#',
          '.NET',
          'Node.js',
          'Express',
          'REST',
          'GraphQL',
          'WebSockets',
        ],
      },
      {
        Id: '3d',
        Title: '3D & Graphics',
        Technologies: [
          'Three.js',
          'React Three Fiber',
          'RhinoCommon',
          'GLTF',
          'GSAP',
        ],
      },
      {
        Id: 'data',
        Title: 'Databases',
        Technologies: ['PostgreSQL', 'MongoDB', 'SQL'],
      },
      {
        Id: 'infrastructure',
        Title: 'Infrastructure & Tools',
        Technologies: ['Docker', 'Nginx', 'Git', 'GitLab CI/CD', 'Linux'],
      },
    ],
  },
};

const Contact: ContactI18n = {
  Header: 'Contact',
  CV: {
    title: 'CV',
    url: 'cv/Florian_Christ_cv.pdf',
  },
};

const Programs: ProgramsI18n = {
  finder: 'About me',
  contact: 'Contact',
  safari: 'Projects',
};

const en: I18nType = {
  AboutMe,
  Contact,
  Programs,
};

export default en;
