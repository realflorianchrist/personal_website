"use client";
import {
  MacOSWindow,
  MacOSWindowContent,
  MacOSWindowContentContainer,
  MacOSWindowContentHeader,
  MacOSWindowSidebarContainer,
  MacOSWindowSidebarContent,
  MacOSWindowSidebarHeader
} from "@/components/mac_os/programs/MacOSWindow";
import Program from "@/components/mac_os/programs/Program";
import ContactsIcon from "@/components/mac_os/programs/icons/ContactsIcon";
import { useI18n } from '@/hooks/useI18n';
import useProgramsStore from "@/stores/programsStore";
import Sidebar from './Sidebar';
import ContactContent from './ContactContent';

export default function Contact() {

  const program = useProgramsStore(s => s.programs[1]);

  const { openProgram, openProgramIds } = useProgramsStore();

  const i18n = useI18n('Contact.Header');

  return (
    <>
      <ContactsIcon
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
              {i18n}
            </MacOSWindowContentHeader>
            <MacOSWindowContent>
              <ContactContent />
            </MacOSWindowContent>
          </MacOSWindowContentContainer>
        </MacOSWindow>
      </Program>
    </>
  );
}