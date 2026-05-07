"use client";

import CloseButton from "@/components/mac_os/programs/buttons/CloseButton";
import useProgramsStore from "@/stores/programsStore";
import Program from "@/components/mac_os/programs/Program";
import FinderIcon from "@/components/mac_os/programs/icons/FinderIcon";
import WindowManagementButtons from "@/components/mac_os/programs/buttons/WindowManagementButtons";

export default function Finder() {

  const program = useProgramsStore(s => s.programs[1]);

  const { openProgram, closeProgram, openProgramIds, setDragOffset, usableScreenRect } = useProgramsStore();

  return (
    <>
      <FinderIcon
        programName={program.name}
        onClick={() => openProgram(program.id)}
        active={openProgramIds.includes(program.id)}
      />

      <Program programId={program.id}>
        <div
          className={"w-full h-full bg-popover border-[0.5px] border-border rounded-3xl overflow-hidden"}
        >
          <div
            className={"h-10 flex items-center px-3"}
            onPointerDown={(e) => {
              if (!usableScreenRect) return;

              setDragOffset({
                x: e.clientX - usableScreenRect.x - program.windowPosition.x,
                y: e.clientY - usableScreenRect.y - program.windowPosition.y
              });

              e.currentTarget.parentElement?.setPointerCapture(e.pointerId);
            }}
          >
            <WindowManagementButtons programId={program.id} />
          </div>

          <div className={"p-3"}>
            Finder content
          </div>
        </div>
      </Program>
    </>
  );
}