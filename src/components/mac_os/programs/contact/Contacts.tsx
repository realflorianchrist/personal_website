"use client";
import React from "react";
import useProgramsStore from "@/stores/programsStore";
import Program from "@/components/mac_os/programs/Program";
import {
  MacOSWindow,
  MacOSWindowContent,
  MacOSWindowContentContainer,
  MacOSWindowContentHeader,
  MacOSWindowSidebarContainer,
  MacOSWindowSidebarContent,
  MacOSWindowSidebarHeader
} from "@/components/mac_os/programs/MacOSWindow";
import ContactsIcon from "@/components/mac_os/programs/icons/ContactsIcon";

export default function Contacts() {

  const program = useProgramsStore(s => s.programs[1]);

  const { openProgram, openProgramIds } = useProgramsStore();

  return (
    <>
      <ContactsIcon
        programName={program.name}
        onClick={() => openProgram(program.id)}
        active={openProgramIds.includes(program.id)}
      />

      <Program programId={program.id}>
        <MacOSWindow programId={program.id}>
          <MacOSWindowSidebarContainer>
            <MacOSWindowSidebarHeader />
            <MacOSWindowSidebarContent>
              list
            </MacOSWindowSidebarContent>
          </MacOSWindowSidebarContainer>
          <MacOSWindowContentContainer>
            <MacOSWindowContentHeader>
              Header
            </MacOSWindowContentHeader>
            <MacOSWindowContent>
              content
            </MacOSWindowContent>
          </MacOSWindowContentContainer>
        </MacOSWindow>
      </Program>
    </>
  );
}