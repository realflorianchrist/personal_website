"use client";
import useProgramsStore from '@/stores/programsStore';
import SafariIcon from '../icons/SafariIcon';
import Program from '../Program';
import { MacOSWindow } from '../MacOSWindow';
import SafariHeader from './Header/SafariHeader';

export default function Safari() {

    const program = useProgramsStore(s => s.programs[2]);

    const { openProgram, openProgramIds } = useProgramsStore();

    return (
        <>
            <SafariIcon
                programName={program?.name}
                onClick={() => openProgram(program?.id)}
                active={openProgramIds.includes(program?.id)}
            />

            <Program programId={program?.id}>
                <MacOSWindow className='flex-col p-0'>
                    <SafariHeader />
                    <iframe src='https://infboardv2.ch/' title='safari-content' className='h-full' />
                </MacOSWindow>
            </Program>

        </>
    );
}
