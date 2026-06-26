import useProgramsStore from '@/stores/programsStore';
import { ProgramId } from '@/types/program';

export const useHandleDrag = (
    programId: ProgramId
) => {

    const { setDragOffset, usableScreenRect } = useProgramsStore();

    const program = useProgramsStore(s => s.programs[programId]);

    return {
        handleDrag: (e: React.PointerEvent<HTMLDivElement>) => {
            if (!usableScreenRect) return;

            e.currentTarget.setPointerCapture(e.pointerId);

            setDragOffset({
                x: e.clientX - usableScreenRect.x - program.windowPosition.x,
                y: e.clientY - usableScreenRect.y - program.windowPosition.y
            });
        }
    };
};
