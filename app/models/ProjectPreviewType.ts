import {Technology} from "@/app/models/Technology";

export type ProjectPreviewType = {
    id: number,
    title: string,
    description: string,
    previewPicturePath: string,
    technologies: Technology[],
    texture: string,
}