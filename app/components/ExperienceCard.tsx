import { Waypoint } from "@/app/models/Waypoint";

export default function ExperienceCard(
  {
    experience,
    onClick,
    isActive,
    isMobile
  }: {
    experience: Waypoint;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    isActive: boolean;
    isMobile: boolean;
  }) {

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {experience.description}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {experience.organisation} | {experience.time}
      </p>
    </div>
  );
}