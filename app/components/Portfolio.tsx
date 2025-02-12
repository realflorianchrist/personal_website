import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import { styles } from "@/app/utils/styles";
import { useLanguageContext } from "@/app/providers/language-provider";
import SectionWrapper from "@/app/utils/SectionWrapper";
import { Suspense, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "@/app/components/CanvasLoader";
import DemoComputer from "@/app/components/DemoComputer";

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

  useGSAP(() => {
    gsap.fromTo(`.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" });
  }, [selectedProjectIndex]);

  if (!i18n) return null;

  const projects = i18n.ProjectPreviews;
  const projectCount = projects.length;
  const currentProject = projects[selectedProjectIndex];

  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            {/*<img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />*/}
          </div>

          {/*<div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>*/}
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
            {/*<img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />*/}
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.description}</p>
            {/*<p className="animatedText">{currentProject.subdesc}</p>*/}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.technologies.map((tech, index) => (
                <div key={index} className="tech-logo">
                  <img src={tech.path} alt={tech.name} />
                </div>
              ))}
            </div>

            {/*<a*/}
            {/*  className="flex items-center gap-2 cursor-pointer text-white-600"*/}
            {/*  href={currentProject.href}*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer">*/}
            {/*  <p>Check Live Site</p>*/}
            {/*  <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />*/}
            {/*</a>*/}
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <FaArrowLeft />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
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