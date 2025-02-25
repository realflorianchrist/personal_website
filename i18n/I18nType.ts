import { Waypoint } from "@/app/models/Waypoint";
import { ProjectPreviewType } from "@/app/models/ProjectPreviewType";

export type SectionKeys = "hero" | "portfolio" | "experience" | "contact";

export type I18nType = {
  Sections: Record<SectionKeys, string>,
  Hero: {
    positions: string[],
    introduction: string
  },
  Experience: {
    Timeline: Waypoint[]
  },
  ProjectPreviews: ProjectPreviewType[],
}