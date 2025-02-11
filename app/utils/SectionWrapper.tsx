import React, { ComponentType } from "react";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";

export default function SectionWrapper<T extends {}>(
  Component: ComponentType<T>,
  idName: string
) {
  return function HOC(props: T) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };
}
