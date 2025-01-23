import {Technology} from "@/app/models/Technology";

export type Project = {
    id: number,
    title: string,
    description: string,
    previewPicturePath: string,
    technologies: Technology[]
}