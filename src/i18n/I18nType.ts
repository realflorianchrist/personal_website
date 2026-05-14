export type AboutMeSectionId =
  | "about"
  | "skills"
  | "experience"
  | "education"
  | "tech-stack";

export type AboutMeExperienceItemId =
  | "softwaredeveloper"
  | "draftsman"
  | "bachelor"
  | "apprenticeship";

export type TechCategoryId =
  | "frontend"
  | "backend"
  | "3d"
  | "infrastructure";

type SectionBase = {
  Id: AboutMeSectionId;
  Title: string;
};

type TextSection = SectionBase & {
  Description: string;
};

type ListSection<T> = SectionBase & {
  Items: T[];
};

type NamedListSection = {
  Title: string;
  Items: string[];
};

type TimelineItem = {
  Id: AboutMeExperienceItemId;
  Title: string;
  Period: string;
  Points?: string[];
};

type ExperienceItem = TimelineItem & {
  Company?: string;
};

type EducationItem = TimelineItem & {
  Institution: string;
};

type TechCategory = {
  Id: TechCategoryId;
  Title: string;
  Technologies: string[];
};

type HeroSection = {
  Name: string;
  Role: string;
  Description: string;
};

type AboutSection = SectionBase & {
  Intro: string;
  Tags: string[];
  Cards: {
    Id: string;
    Title: string;
    Description: string;
  }[];
};

export type AboutMeI18n = {
  Header: HeroSection;

  About: AboutSection;

  Skills: SectionBase & {
    Frontend: NamedListSection;
    Backend: NamedListSection;
    DevOps: NamedListSection;
    Other: NamedListSection;
  };

  Experience: ListSection<ExperienceItem>;

  Education: ListSection<EducationItem>;

  TechStack: ListSection<TechCategory>;
};

export type I18nType = {
  AboutMe: AboutMeI18n;
};