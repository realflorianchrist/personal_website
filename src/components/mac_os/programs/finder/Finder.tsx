"use client";
import FinderIcon from "@/components/mac_os/programs/icons/FinderIcon";
import useProgramsStore from "@/stores/programsStore";
import Program from '../Program';
import { MacOSWindow, MacOSWindowContent, MacOSWindowContentContainer, MacOSWindowContentHeader, MacOSWindowSidebarContainer, MacOSWindowSidebarContent, MacOSWindowSidebarHeader } from '../MacOSWindow';
import { FinderContent } from './FinderContent';
import Header from './Header';
import Sidebar from './Sidebar';
import DockIcon from '../../dock/DockIcon';


export default function Finder() {

  const program = useProgramsStore(s => s.programs.finder);

  const { openProgram, openProgramIds } = useProgramsStore();

  if (!program) return null;

  return (
    <>
      <DockIcon
        programName={program?.name}
        onClick={() => openProgram(program?.id)}
        active={openProgramIds.includes(program?.id)}
      >
        <FinderIcon />
      </DockIcon>

      <Program programId={program?.id}>
        <MacOSWindow>
          <MacOSWindowSidebarContainer>
            <MacOSWindowSidebarHeader />
            <MacOSWindowSidebarContent>
              <Sidebar />
            </MacOSWindowSidebarContent>
          </MacOSWindowSidebarContainer>
          <MacOSWindowContentContainer>
            <MacOSWindowContentHeader>
              <Header />
            </MacOSWindowContentHeader>
            <MacOSWindowContent>
              <FinderContent />
            </MacOSWindowContent>
          </MacOSWindowContentContainer>
        </MacOSWindow>
      </Program>
    </>
  );
}