import React, { useEffect, useRef, useState } from "react";
import { styles } from "@/app/utils/styles";
import SectionWrapper from "@/app/utils/SectionWrapper";
import { useLanguageContext } from "@/app/providers/language-provider";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";


function Contact() {
  const { i18n } = useLanguageContext();


  return (
    <div className={'mb-60'}>

    </div>
    // <div className="text-center h-screen md:text-left md:px-20">
    //   <motion.div variants={textVariant()}>
    //     <h3 className={styles.sectionText}>{i18n?.Sections.contact}</h3>
    //   </motion.div>
    // </div>
  );
}

export default SectionWrapper(Contact, "contact");