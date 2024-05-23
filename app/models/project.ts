import {Technologies} from "@/app/models/technologies";

export type Project = {
    id: number,
    title: string,
    description: string,
    picturePath: string,
    technologies: Technologies[]
}