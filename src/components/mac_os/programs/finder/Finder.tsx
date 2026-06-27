"use client";
import FinderIcon from "@/components/mac_os/programs/icons/FinderIcon";
import {
  MacOSWindow, MacOSWindowContent,
  MacOSWindowContentContainer,
  MacOSWindowContentHeader,
  MacOSWindowSidebarContainer, MacOSWindowSidebarContent, MacOSWindowSidebarHeader
} from "@/components/mac_os/programs/MacOSWindow";
import Program from "@/components/mac_os/programs/Program";
import useProgramsStore from "@/stores/programsStore";
import Header from './Header';
import Sidebar from './Sidebar';
import { FinderContent } from './FinderContent';

export default function Finder() {

  const program = useProgramsStore(s => s.programs[0]);

  const { openProgram, openProgramIds } = useProgramsStore();

  return (
    <>
      <FinderIcon
        programName={program?.name}
        onClick={() => openProgram(program?.id)}
        active={openProgramIds.includes(program?.id)}
      />

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