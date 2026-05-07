"use client";
import { ReactNode, useEffect, useState } from "react";
import { ProgramId } from "@/types/program";
import useProgramsStore from "@/stores/programsStore";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  programId: ProgramId;
}

export default function Program({ children, programId }: Props) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const program = useProgramsStore(s => s.programs[programId]);

  const {
    dragOffset,
    setDragOffset,
    setWindowPosition,
    openProgramIds,
    focusedProgramId,
    usableScreenRect
  } = useProgramsStore();

  useEffect(() => {
    setPortalTarget(document.getElementById("usable-screen"));
  }, []);

  return (
    portalTarget &&
    openProgramIds.includes(program.id) &&
    createPortal(
      <div className={`absolute select-none ${focusedProgramId === program.id ? "z-50" : "z-10"}`}
           style={{
             width: program.windowDimensions.width,
             height: program.windowDimensions.height,
             top: program.windowPosition.y,
             left: program.windowPosition.x
           }}
           onPointerDown={(e) => e.currentTarget.setPointerCapture(e.pointerId)}
           onPointerMove={(e) => {
             if (!dragOffset || !usableScreenRect) return;

             setWindowPosition(program.id, {
               x: e.clientX - usableScreenRect.x - dragOffset.x,
               y: e.clientY - usableScreenRect.y - dragOffset.y
             });
           }}
           onPointerUp={(e) => {
             setDragOffset(null);
             e.currentTarget.releasePointerCapture(e.pointerId);
           }}
      >
        {children}
      </div>, portalTarget)
  );
}