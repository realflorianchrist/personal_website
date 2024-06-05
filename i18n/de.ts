import {Project} from "@/app/models/Project";
import {Waypoint} from "@/app/models/Waypoint";

const de = {
    Home: {
        welcome: "Hallo, ich bin Florian.",
        introduction: "Eine leidenschaftliche Person mit einem vielfältigen Hintergrund in Informatik, Design und Erfahrungen " +
            "als Bauzeichner Fachrichtung Bauingenieurwesen. Ich liebe es, die Schnittstelle zwischen Technologie und Kreativität " +
            "zu erkunden und überzeugende digitale Erlebnisse zu schaffen, die bei den Nutzern Anklang finden. Mit einer Grundlage in " +
            "Informatik und Bauingenieurwesen bringe ich eine einzigartige Perspektive in meinen Designprozess ein und nutze Technologie, " +
            "um kreative Grenzen zu erweitern."
    },
    About: {
        Timeline: [
            {
                time: "Sept. 2022 - heute",
                description: "BSc Informatik",
                organisation: "Fachhochschule Nordwestschweiz",
            }, {
                time: "Aug. 2019 - heute",
                description: "Zeichner Fachrichtung Ingenieurbau",
                organisation: "Aegerter & Bosshardt AG",
            }, {
                time: "Aug. 2019 - Juli 2021",
                description: "Berufsmaturität",
                organisation: "Technik, Architektur, Life Sciences",
            }, {
                time: "Aug. 2015 - Juli 2019",
                description: "Ausbildung zum Zeichner Fachrichtung Ingenieurbau",
                organisation: "Aegerter & Bosshardt AG",
            }
        ] as Waypoint[]
    },
    ProjectData: [
        {
            id: 1,
            title: 'TwitterFX',
            description: 'In my second semester I did a project with JavaFX',
            picturePath: '/images/projects/javafx.png',
            technologies: [
                {name: 'java', path: '/images/logos/Java.png'},
                {name: 'css', path: '/images/logos/CSS3.png'},
            ]
        }, {
            id: 2,
            title: 'Plan Directory',
            description: 'In my fourth semester I did my first web application',
            picturePath: '/images/projects/plan-directory.png',
            technologies: [
                {name: 'spring', path: '/images/logos/Spring.png'},
                {name: 'typeScript', path: '/images/logos/TypeScript.png'},
                {name: 'nextJS', path: '/images/logos/Next.js.png'},
                {name: 'react', path: '/images/logos/React.png'},
                {name: 'cypress', path: '/images/logos/Cypress.png'},
            ]
        }
    ] as Project[]
}

export default de;
