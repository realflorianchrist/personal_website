import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { textVariant } from "@/app/utils/motion";
import { styles } from "../utils/styles";
import SectionWrapper from "@/app/utils/SectionWrapper";
import ExperienceCard from "@/app/components/ExperienceCard";
import ExperienceDetails from "@/app/components/ExperienceDetails";
import { useLanguageContext } from "@/app/providers/language-provider";
import { Waypoint } from "@/app/models/Waypoint";

function Experience() {
  const {i18n} = useLanguageContext();
  const experiences = i18n?.Experience.Timeline;

  const [selectedJob, setSelectedJob] = useState<Waypoint | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(experiences) setSelectedJob(experiences[0])
  }, [experiences]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          {i18n?.Sections.experience}
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences?.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails experience={selectedJob!} />
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "experience");