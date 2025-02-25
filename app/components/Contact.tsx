import React, { useEffect, useRef, useState } from "react";
import { styles } from "@/app/utils/styles";
import SectionWrapper from "@/app/utils/SectionWrapper";
import { useLanguageContext } from "@/app/providers/language-provider";


function Contact() {
  const { i18n } = useLanguageContext();


  return (
    <div className="text-center h-screen md:text-left md:px-20">

      <h3 className={styles.sectionText}>{i18n?.Sections.contact}</h3>


    </div>
  );
}

export default SectionWrapper(Contact, "contact");