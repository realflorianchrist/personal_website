export type SectionKeys = "hero" | "portfolio" | "experience";

export type I18nType = {
  Sections: Record<SectionKeys, string>,
  Hero: {
    positions: string[],
    introduction: string
  },
}