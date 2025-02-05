import {TECHNOLOGIES} from "@/i18n/Technologies";
import {I18nType} from "@/i18n/I18nType";

const en: I18nType = {
    Home: {
        welcome: "Hi, I'm Florian.",
        introduction: "A passionate individual with a diverse background spanning computer sciences, design and experiences " +
            "as an draftsman specialising in civil engineering. I thrive on exploring the intersection of technology and creativity, " +
            "crafting compelling digital experiences that resonate with users. With a foundation in computer sciences and civil " +
            "engineering I bring a unique perspective to my design process, leveraging technology to push creative boundaries."
    },
    About: {
        Timeline: [
            {
                time: "Sept. 2022 - today",
                description: "BSc computer science",
                organisation: "University of Applied Sciences and Arts Northwestern Switzerland",
            }, {
                time: "Aug. 2019 - today",
                description: "Draftsman specializing in engineering",
                organisation: "Aegerter & Bosshardt AG",
            }, {
                time: "Aug. 2019 - July 2021",
                description: "Vocational baccalaureate",
                organisation: "Technology, Architecture, Life Sciences",
            }, {
                time: "Aug. 2015 - July 2019",
                description: "Apprenticeship to draftsman specializing in engineering",
                organisation: "Aegerter & Bosshardt AG",
            }
        ]
    },
    ProjectData: [
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

export default en;
