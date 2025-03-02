import { Waypoint } from "@/app/models/Waypoint";
import { Project } from "@/app/models/Project";

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
  ProjectPreviews: Project[],
}