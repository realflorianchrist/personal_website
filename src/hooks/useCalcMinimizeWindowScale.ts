import { MAX_PREVIEW_WIDTH } from '@/constants/windowSize';
import useProgramsStore from '@/stores/programsStore';
import { ProgramId } from '@/types/program';
import { useMemo } from 'react';

export const useCalcMinimizeWindowScale = (id: ProgramId) => {
    const program = useProgramsStore(s => s.programs[id]);

    return useMemo(() => {
        if (!program) return 1;

        const dock = document.getElementById("macos-dock");
        if (!dock) return 1;

        const style = getComputedStyle(dock);

        const dockHeight =
            dock.clientHeight
            - Number.parseFloat(style.paddingTop)
            - Number.parseFloat(style.paddingBottom);

        return Math.min(
            MAX_PREVIEW_WIDTH / program.windowDimensions.width,
            dockHeight / program.windowDimensions.height
        );
    }, [program]);
};