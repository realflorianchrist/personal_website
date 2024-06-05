import {Technologies} from "@/app/models/Technologies";

export type Project = {
    id: number,
    title: string,
    description: string,
    picturePath: string,
    technologies: Technologies[]
}