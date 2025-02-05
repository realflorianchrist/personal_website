import {Waypoint} from "@/app/models/Waypoint";
import {Project} from "@/app/models/Project";

export type I18nType = {
    Home: {
        welcome: string,
        introduction: string
    },
    About: {
        Timeline: Waypoint[]
    },
    ProjectData: Project[]
}