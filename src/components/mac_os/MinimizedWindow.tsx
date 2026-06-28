import { programPortalTargets } from '@/constants/programPortalTargets';
import { useCalcMinimizeWindowScale } from '@/hooks/useCalcMinimizeWindowScale';
import useProgramsStore from '@/stores/programsStore';
import { Program } from '@/types/program';
import FinderIcon from './programs/icons/FinderIcon';
import ContactsIcon from './programs/icons/ContactsIcon';
import SafariIcon from './programs/icons/SafariIcon';
import cn from '@/utils/cn';

type Props = {
    program: Program;
};

export default function MinimizedWindow({ program }: Props) {
    const { restoreProgram } = useProgramsStore();

    const minimizeWindowScale = useCalcMinimizeWindowScale(program.id);

    return (
        <div
            id={programPortalTargets.dockPreview(program.id)}
            className={cn("h-full relative")}
            style={{
                width: program.windowDimensions.width * minimizeWindowScale
            }}
            onClick={() => restoreProgram(program.id)}
        >
            {program.id === 'finder' &&
                <FinderIcon
                    className='absolute scale-50 z-900 origin-bottom-left -left-0.5 -bottom-0.5'
                />
            }
            {program.id === 'contact' &&
                <ContactsIcon
                    className='absolute scale-50 z-900 origin-bottom-left -left-0.5 -bottom-0.5'
                />
            }
            {program.id === 'safari' &&
                <SafariIcon
                    className='absolute scale-50 z-900 origin-bottom-left -left-0.5 -bottom-0.5'
                />
            }
        </div>
    );
}
