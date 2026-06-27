'use client';
import { programPortalTargets } from '@/constants/programPortalTargets';
import useProgramsStore from '@/stores/programsStore';

export default function MinimizedWindows() {
    const programs = useProgramsStore(s => s.programs);

    const { restoreProgram } = useProgramsStore();

    return (
        <>
            {Object.values(programs)
                .filter(program => program?.isMinimized)
                .map(program => (
                    <div
                        key={program.id}
                        id={programPortalTargets.dockPreview(program.id)}
                        className="h-20 w-36 overflow-hidden rounded-md"
                        onClick={() => restoreProgram(program.id)}
                    />
                ))}
        </>
    );
}
