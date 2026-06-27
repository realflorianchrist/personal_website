'use client';
import { programPortalTargets } from '@/constants/programPortalTargets';
import useProgramsStore from '@/stores/programsStore';

export default function MinimizedWindows() {
    const programs = useProgramsStore(s => s.programs);

    const { restoreProgram } = useProgramsStore();

    const minimizedPrograms = Object
        .values(programs)
        .filter(p => !!p && p.isMinimized);

    return (
        <>
            {minimizedPrograms.length > 0 && (
                <div className="h-full border-0.5 border-border" />
            )}

            {minimizedPrograms.map(program => (
                <div
                    key={program.id}
                    id={programPortalTargets.dockPreview(program.id)}
                    className="h-full aspect-video overflow-hidden rounded-md"
                    onClick={() => restoreProgram(program.id)}
                />
            ))}
        </>
    );
}
