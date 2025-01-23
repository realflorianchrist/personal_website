import {Waypoint} from "@/app/models/Waypoint";

const en = {
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
        ] as Waypoint[]
    },
    ProjectData: {
        TourBooking: {
            id: 1,
            title: 'Tour Booking Station Ritz',
            description: 'In my second semester I did a project with JavaFX',
            previewPicturePath: '/images/projects/javafx.png',
            technologies: [
                {name: 'java', path: '/images/logos/Java.png'},
                {name: 'css', path: '/images/logos/CSS3.png'},
            ]
        },
        TwitterFX: {
            id: 2,
            title: 'TwitterFX',
            description: 'In my second semester I did a project with JavaFX',
            previewPicturePath: '/images/projects/javafx.png',
            technologies: [
                {name: 'java', path: '/images/logos/Java.png'},
                {name: 'css', path: '/images/logos/CSS3.png'},
            ]
        },
        PlanDirectory: {
            id: 3,
            title: 'Plan Directory',
            description: 'In my fourth semester I did my first web application',
            previewPicturePath: '/images/projects/plan-directory.png',
            technologies: [
                {name: 'spring', path: '/images/logos/Spring.png'},
                {name: 'typeScript', path: '/images/logos/TypeScript.png'},
                {name: 'nextJS', path: '/images/logos/Next.js.png'},
                {name: 'react', path: '/images/logos/React.png'},
                {name: 'cypress', path: '/images/logos/Cypress.png'},
            ]
        }
    }
}

export default en;
