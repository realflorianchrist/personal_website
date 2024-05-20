import {Project} from "@/app/models/project";

export const ProjectData: Project[] = [
    {
        title: 'TwitterFX',
        description: 'In my second semester I did a project with JavaFX',
        picturePath: '/images/javafx.png',
        technologies: [
            'JavaFX',
            'css'
        ]
    }, {
        title: 'Plan Directory',
        description: 'In my fourth semester I did my first web application',
        picturePath: '/images/plan-directory.png',
        technologies: [
            'Spring Boot',
            'Next.js',
            'React',
            'Cypress'
        ]
    }
]