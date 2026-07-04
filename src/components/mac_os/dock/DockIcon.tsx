import { ReactNode } from "react";
import ToolTip from "@/components/mac_os/ToolTip";
import { Program } from '@/types/program';
import useProgramsStore from '@/stores/programsStore';

export type DockIconProps = {
  program: Program;
  children: ReactNode;
};

export default function DockIcon({ program, children }: Readonly<DockIconProps>) {

  const { openProgram, openProgramsIds } = useProgramsStore();

  return (
    <button
      onClick={() => openProgram(program.id)}
      className="relative group flex flex-col items-center"
    >
      <div className="absolute -top-14 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
        <ToolTip text={program.name} />
      </div>

      {children}

      {openProgramsIds.includes(program.id) && (
        <div className="absolute -bottom-2.5 size-1 bg-gray-400 rounded-full" />
      )}
    </button>
  );
}