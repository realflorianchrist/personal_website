"use client";
import React from "react";
import useProgramsStore from "@/stores/programsStore";
import Program from "@/components/mac_os/programs/Program";
import FinderIcon from "@/components/mac_os/programs/icons/FinderIcon";
import WindowManagementButtons from "@/components/mac_os/programs/buttons/WindowManagementButtons";

export default function Finder() {

  const program = useProgramsStore(s => s.programs[1]);

  const { openProgram, openProgramIds, setDragOffset, usableScreenRect } = useProgramsStore();

  const handleDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!usableScreenRect) return;

    setDragOffset({
      x: e.clientX - usableScreenRect.x - program.windowPosition.x,
      y: e.clientY - usableScreenRect.y - program.windowPosition.y
    });
  };

  return (
    <>
      <FinderIcon
        programName={program.name}
        onClick={() => openProgram(program.id)}
        active={openProgramIds.includes(program.id)}
      />

      <Program programId={program.id}>
        <div
          className={"flex w-full h-full bg-popover border-0.5 border-border rounded-3xl overflow-hidden p-2"}
          onPointerDown={handleDrag}
        >
          <div className={"flex flex-col border-0.5 border-border rounded-2xl h-full"}>
            <div
              className={"h-10 flex p-2"}
            >
              <WindowManagementButtons programId={program.id} />
            </div>
            <div
              className={"flex-1 w-56 px-3"}
              onPointerDown={(e) => e.stopPropagation()}
            >
              list
            </div>
          </div>

          <div className={"flex flex-col flex-1"}>
            <div
              className={"h-10 flex items-center px-3"}
            >
              Header
            </div>
            <div
              className={"flex flex-1 p-3"}
              onPointerDown={(e) => e.stopPropagation()}
            >
              content
            </div>
          </div>
        </div>
      </Program>
    </>
  );
}