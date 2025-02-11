import { Waypoint } from "@/app/models/Waypoint";

export default function ExperienceDetails({ experience }: { experience: Waypoint }) {
  return (
    <div className="mt-5">
      <div className="max-w-7xl space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
          <div
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
          >
            {experience?.description}
          </div>
      </div>
    </div>
  );
}