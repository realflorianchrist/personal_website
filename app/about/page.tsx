"use client";
import { useLanguageContext } from "@/app/providers/language-provider";
import { Waypoint } from "@/app/models/Waypoint";
import { useMainRef } from "@/app/providers/providers";

export default function About() {
  const { i18n } = useLanguageContext();

  return (
    <main>
      <h1 className={"animate dur600 slideInBottom mt-36 mb-20"}>About me</h1>
      <ul className={`animate dur800 slideInBottom flex-col content-center pt-10`}>
        {i18n.About.Timeline.map((waypoint: Waypoint, index: number) => {
          const liClass = index % 2 === 0 ? "pr-52 md:pr-96" : "pl-52 md:pl-96";
          const articleClass = index % 2 === 0 ? "text-right" : "text-left";
          const durationClass = `dur${1000 + (index * 400)}`;

          return (
            <li key={waypoint.description}
                className={`animate ${durationClass} slideInBottom ${liClass} block relative mb-12`}>
              <div
                className={"h-3 w-3 rounded-full bg-accent-color absolute top-0.5 left-1/2 transform -translate-x-1/2"}></div>
              <article className={`${articleClass} inline-block relative w-44 md:w-72 space-y-2 text-xs md:text-base`}>
                <h4>{waypoint.time}</h4>
                <div>{waypoint.description}</div>
                <div>{waypoint.organisation}</div>
              </article>
            </li>
          );
        })}
        <div className={"absolute top-0 left-1/2 w-1 h-full bg-accent-color transform -translate-x-1/2"}></div>
      </ul>
    </main>
  );
}