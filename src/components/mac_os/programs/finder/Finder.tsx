"use client";

import CloseButton from "@/components/mac_os/programs/CloseButton";
import useProgramsStore from "@/stores/programsStore";
import Program from "@/components/mac_os/programs/Program";
import FinderIcon from "@/components/mac_os/programs/icons/FinderIcon";

export default function Finder() {

  const program = useProgramsStore(s => s.programs[1]);

  const { openProgram, closeProgram, openProgramIds, setDragOffset } = useProgramsStore();

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
              setDragOffset({
                x: e.clientX - program.windowPosition.x,
                y: e.clientY - program.windowPosition.y
              });
            }}
          >
            <CloseButton
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => closeProgram(program.id)}
            />
          </div>

          <div className={"p-3"}>
            Finder content
          </div>
        </div>
      </Program>
    </>
  );
}