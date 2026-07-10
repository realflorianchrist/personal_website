'use client';
import useProgramsStore from '@/stores/programsStore';
import MinimizedWindow from './MinimizedWindow';

export default function MinimizedWindows() {

    const { programs, minimizedProgramIds } = useProgramsStore();

    const minimizedPrograms = Object
        .values(programs)
        .filter(p => minimizedProgramIds.includes(p.id));

    return (
        <>
            {minimizedPrograms.length > 0 && (
                <div className="h-full border-0.5 border-border" />
            )}

            {minimizedPrograms.map(program => (
                <MinimizedWindow
                    key={program.id}
                    program={program}
                />
            ))}
        </>
    );
}
