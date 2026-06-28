"use client";
import useProgramsStore from '@/stores/programsStore';
import SafariIcon from '../icons/SafariIcon';
import Program from '../Program';
import { MacOSWindow } from '../MacOSWindow';
import SafariHeader from './Header/SafariHeader';
import DockIcon from '../../dock/DockIcon';

export default function Safari() {

    const program = useProgramsStore(s => s.programs.safari);

    const { openProgram, openProgramIds } = useProgramsStore();

    if (!program) return null;

    return (
        <>
            <DockIcon
                programName={program?.name}
                onClick={() => openProgram(program?.id)}
                active={openProgramIds.includes(program?.id)}
            >
                <SafariIcon />
            </DockIcon>

            <Program programId={program?.id}>
                <MacOSWindow className='flex-col p-0'>
                    <SafariHeader />
                    <iframe src='https://infboardv2.ch/' title='safari-content' className='h-full' />
                </MacOSWindow>
            </Program>
        </>
    );
}
