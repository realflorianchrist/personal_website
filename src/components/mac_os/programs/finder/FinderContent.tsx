import useFinderStore from '@/stores/finderStore';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import TechStack from './TechStack';

export function FinderContent() {
    const { activeSection } = useFinderStore();

    return (
        <>
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "education" && <Education />}
            {activeSection === "tech-stack" && <TechStack />}
        </>
    );
}
