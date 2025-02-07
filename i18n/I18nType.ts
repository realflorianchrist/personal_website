import {Waypoint} from "@/app/models/Waypoint";
import {ProjectPreviewType} from "@/app/models/ProjectPreviewType";

export type I18nType = {
    Home: {
        welcome: string,
        introduction: string
    },
    About: {
        Timeline: Waypoint[]
    },
    ProjectPreviews: ProjectPreviewType[],
    TourBooking: {
        title: string,
        intro: string,
        leadImage: string,
        problemSection: {
            title: string,
            text: string,
        }
        goalSection: {
            title: string,
            text: string
        },
        pictureSection: {
            tourBrowser: {
                title: string,
                path: string,
                description: string,
            },
            tourBookingForm: {
                title: string,
                path: string,
                description: string,
            },
            adminPage: {
                title: string,
                path: string,
                description: string,
            },
        },
        developedSolutionSection: {
            title: string,
            introText: string,
            bulletPoints: string[],
            outroText: string
        }
    }
}