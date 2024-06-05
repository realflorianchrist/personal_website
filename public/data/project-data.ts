import {Project} from "@/app/models/Project";

export const ProjectData: Project[] = [
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
            {name: 'typeScript' , path: '/images/logos/TypeScript.png'},
            {name: 'nextJS', path: '/images/logos/Next.js.png'},
            {name: 'react', path: '/images/logos/React.png'},
            {name: 'cypress', path: '/images/logos/Cypress.png'},
        ]
    }
]