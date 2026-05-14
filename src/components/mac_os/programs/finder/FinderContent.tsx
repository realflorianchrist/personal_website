import useFinderStore from '@/stores/finderStore';
import { About } from './About';

export function FinderContent() {

    const { activeSection } = useFinderStore();

    return (
        <>
            {activeSection === "about" && <About />}
        </>
    );
}
