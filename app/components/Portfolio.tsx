import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import { styles } from "@/app/utils/styles";
import { useLanguageContext } from "@/app/providers/language-provider";
import SectionWrapper from "@/app/utils/SectionWrapper";
import { Suspense, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "@/app/components/CanvasLoader";
import DemoComputer from "@/app/components/DemoComputer";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

function Portfolio() {
  const { i18n } = useLanguageContext();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  if (!i18n) return null;

  const projects = i18n.ProjectPreviews;
  const projectCount = projects.length;
  const currentProject = projects[selectedProjectIndex];

  return (
    <div className="text-center mb-20 md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>{i18n.Sections.portfolio}</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex bg-primaryDark flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black">

          <div className="flex flex-col gap-5 text-white-600 my-5 mb-auto min-h-72">
            <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
            <p>{currentProject.description}</p>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.technologies.map((tech, index) => (
                <div key={index} className="tech-logo">
                  <Image src={tech.path} alt={tech.name} height={40} width={40} />
                </div>
              ))}
            </div>

            <div className={"flex flex-col items-end"}>
            {
              currentProject.repoPath &&
              <Link
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.repoPath.link}
                target="_blank"
              >
                {currentProject.repoPath.linktText}
                <FaGitlab />
                <FiArrowUpRight />
              </Link>
            }

            {currentProject.furtherLink &&
              <Link
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.furtherLink.link}
                target="_blank"
                rel="noreferrer">
                <p>{currentProject.furtherLink.linkText}</p>
                <FiArrowUpRight />
              </Link>
            }
            </div>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <FaArrowLeft />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="bg-primaryDark rounded-lg h-96 md:h-full shadow-2xl shadow-black">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Portfolio, "portfolio");