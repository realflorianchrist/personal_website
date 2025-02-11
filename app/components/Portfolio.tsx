import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import ProjectCard from "@/app/components/ProjectCard";
import { styles } from "@/app/utils/styles";
import { useLanguageContext } from "@/app/providers/language-provider";
import SectionWrapper from "@/app/utils/SectionWrapper";

function Portfolio() {
  const {i18n} = useLanguageContext();

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {i18n?.ProjectPreviews.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Portfolio, "portfolio");