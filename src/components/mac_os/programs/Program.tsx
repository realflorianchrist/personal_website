"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProgramId } from "@/types/program";
import useProgramsStore from "@/stores/programsStore";
import { createPortal } from "react-dom";
import ResizeHandle, { resizeHandleTypes } from "@/components/mac_os/programs/ResizeHandle";
import { useWindowResize } from "../../../hooks/useWindowResize";

type ProgramContextType = {
  programId: ProgramId
}

const ProgramContext = createContext<ProgramContextType | null>(null);

export function useProgramContext() {
  const context = useContext(ProgramContext);

  if (!context) {
    throw new Error("useProgramContext must be used inside Program");
  }

  return context;
}

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
    focusProgram,
    usableScreenRect
  } = useProgramsStore();

  const { startResize, resize, stopResize } = useWindowResize(programId);

  useEffect(() => {
    setPortalTarget(document.getElementById("usable-screen"));
  }, []);

  return (
    portalTarget &&
    openProgramIds.includes(program.id) &&
    createPortal(
      <ProgramContext.Provider value={{ programId }}>
        <div className={`absolute select-none ${focusedProgramId === program.id ? "z-50" : "z-10"}`}
             style={{
               width: program.windowDimensions.width,
               height: program.windowDimensions.height,
               top: program.windowPosition.y,
               left: program.windowPosition.x
             }}
             onPointerDown={(e) => {
               focusProgram(programId);
               e.currentTarget.setPointerCapture(e.pointerId);
             }}
             onPointerMove={(e) => {
               if (dragOffset && usableScreenRect) {
                 setWindowPosition(program.id, {
                   x: e.clientX - usableScreenRect.x - dragOffset.x,
                   y: e.clientY - usableScreenRect.y - dragOffset.y
                 });
               }

               resize(e);
             }}
             onPointerUp={(e) => {
               setDragOffset(null);
               stopResize(e);
               if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                 e.currentTarget.releasePointerCapture(e.pointerId);
               }
             }}
        >
          {resizeHandleTypes.map((type) => (
            <ResizeHandle
              key={type}
              type={type}
              onResizeStart={startResize}
            />
          ))}

          {children}
        </div>
      </ ProgramContext.Provider>, portalTarget)
  );
}