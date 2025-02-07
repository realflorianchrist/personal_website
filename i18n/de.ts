import {TECHNOLOGIES} from "@/i18n/Technologies";
import {I18nType} from "@/i18n/I18nType";

const de: I18nType = {
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
        ]
    },
    ProjectPreviews: [
        {
            id: 1,
            title: 'Tour Booking',
            description: 'In meinem dritten und vierten Semester konnten wir im Rahmen der Projektschiene 2 Semester an einer Tour Buchung Webseite arbeiten bei der',
            previewPicturePath: '/images/projects/javafx.png',
            technologies: [
                TECHNOLOGIES.SPRING,
                TECHNOLOGIES.TYPESCRIPT,
                TECHNOLOGIES.NEXTJS,
                TECHNOLOGIES.REACT,
                TECHNOLOGIES.CYPRESS,
            ],
        }, {
            id: 2,
            title: 'TwitterFX',
            description: 'In my second semester I did a project with JavaFX',
            previewPicturePath: '/images/projects/javafx.png',
            technologies: [
                TECHNOLOGIES.JAVA,
                TECHNOLOGIES.CSS
            ],
        }, {
            id: 3,
            title: 'Plan Directory',
            description: 'In my fourth semester I did my first web application',
            previewPicturePath: '/images/projects/plan-directory.png',
            technologies: [
                TECHNOLOGIES.SPRING,
                TECHNOLOGIES.TYPESCRIPT,
                TECHNOLOGIES.NEXTJS,
                TECHNOLOGIES.REACT,
                TECHNOLOGIES.CYPRESS,
            ],
        }
    ]
}

export default de;
