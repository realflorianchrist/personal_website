import { useLayoutEffect, useState } from "react";

import { programPortalTargets } from "@/constants/programPortalTargets";
import { MAX_PREVIEW_WIDTH } from "@/constants/windowSize";
import useProgramsStore from "@/stores/programsStore";
import { ProgramId } from "@/types/program";

export const useMinimizeWindow = (id: ProgramId) => {
    const program = useProgramsStore((s) => s.programs[id]);
    // const [scale, setScale] = useState(1);
    // const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });


    const calcScale = () => {
        const defaultScale = 1;
        if (!program) return defaultScale;

        const dock = document.getElementById("macos-dock");

        if (!dock) return defaultScale;

        const style = getComputedStyle(dock);

        const dockHeight =
            dock.clientHeight -
            Number.parseFloat(style.paddingTop) -
            Number.parseFloat(style.paddingBottom);

        const scale = Math.min(
            MAX_PREVIEW_WIDTH / program.windowDimensions.width,
            dockHeight / program.windowDimensions.height,
        );

        return scale;
    };

    // TODO: fix, at the moment it doesn't work since the target element does not exist when this method ist called, not sure how to solve this, maybe with refs or safe the values in a store
    const calcTargetPos = () => {
        if (!program) return;

        const target = document.getElementById(
            programPortalTargets.dockPreview(program.id),
        );

        if (!target) return;

        const rect = target.getBoundingClientRect();
        return {
            x: rect.x,
            y: rect.y,
        };
    };

    return {
        calcScale,
        calcTargetPos
    };
};
