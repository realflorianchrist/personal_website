import { ComponentType } from 'react';

import { programPortalTargets } from '@/constants/programPortalTargets';
import { useMinimizeWindow } from '@/hooks/useMinimizeWindow';
import useProgramsStore from '@/stores/programsStore';
import { Program, ProgramId } from '@/types/program';

import ContactsIcon from '../programs/icons/ContactsIcon';
import FinderIcon from '../programs/icons/FinderIcon';
import SafariIcon from '../programs/icons/SafariIcon';

const icons: Record<ProgramId, ComponentType<{ className?: string; }>> = {
  finder: FinderIcon,
  contact: ContactsIcon,
  safari: SafariIcon,
};

type Props = {
  program: Program;
};

export default function MinimizedWindow({ program }: Props) {
  const { restoreProgram, minimizedProgramsIds, minimizingProgramsIds } = useProgramsStore();
  const { calcScale } = useMinimizeWindow(program.id);

  const minimizeWindowScale = calcScale();

  const Icon = icons[program.id];

  return (
    <div
      id={programPortalTargets.dockPreview(program.id)}
      className="relative h-full"
      style={{
        width: program.windowDimensions.width * minimizeWindowScale,
      }}
      onClick={() => restoreProgram(program.id)}
    >
      {
        // TODO: replace
        minimizingProgramsIds.includes(program.id) && (
          <Icon className="absolute -left-0.5 -bottom-0.5 z-900 scale-50 origin-bottom-left" />
        )}
    </div>
  );
}
