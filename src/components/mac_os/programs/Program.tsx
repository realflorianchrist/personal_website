"use client";
import ResizeHandle, { resizeHandleTypes } from "@/components/mac_os/programs/ResizeHandle";
import useProgramsStore from "@/stores/programsStore";
import { ProgramId } from "@/types/program";
import { createContext, ReactNode, use, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { programPortalTargets } from '@/constants/programPortalTargets';
import cn from '@/utils/cn';

type ProgramContextType = {
  programId: ProgramId;
};

const ProgramContext = createContext<ProgramContextType | null>(null);

export function useProgramContext() {
  const context = use(ProgramContext);

  if (!context) {
    throw new Error("useProgramContext must be used inside Program");
  }

  return context;
}

type Props = {
  children: ReactNode;
  programId: ProgramId;
};

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

  const targetId = program?.isMinimized
    ? programPortalTargets.dockPreview(program?.id)
    : programPortalTargets.usableScreen;

  useEffect(() => {
    setPortalTarget(document.getElementById(targetId));
  }, [targetId]);

  const isMinimized = program?.isMinimized;

  const windowClassName = cn(
    isMinimized
      ? "relative h-full w-full overflow-hidden rounded-md pointer-events-none"
      : "absolute select-none",
    !isMinimized && focusedProgramId === program?.id && "z-50",
    !isMinimized && focusedProgramId !== program?.id && "z-10"
  );

  const PREVIEW_WIDTH = 140;
  const PREVIEW_HEIGHT = 80;

  const scale = isMinimized
    ? Math.min(
      PREVIEW_WIDTH / program.windowDimensions.width,
      PREVIEW_HEIGHT / program.windowDimensions.height
    )
    : 1;

  const windowStyle: React.CSSProperties = isMinimized
    ? {
      width: program?.windowDimensions.width,
      height: program?.windowDimensions.height,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    }
    : {
      width: program?.windowDimensions.width,
      height: program?.windowDimensions.height,
      top: program?.windowPosition.y,
      left: program?.windowPosition.x,
    };

  if (!program) return null;

  return (
    portalTarget &&
    openProgramIds.includes(program?.id) &&
    createPortal(
      <ProgramContext.Provider value={{ programId }}>
        <div
          className={windowClassName}
          style={windowStyle}
          onPointerDown={(e) => {
            focusProgram(programId);
          }}
          onPointerMove={(e) => {
            if (dragOffset && usableScreenRect) {
              setWindowPosition(program?.id, {
                x: e.clientX - usableScreenRect.x - dragOffset.x,
                y: e.clientY - usableScreenRect.y - dragOffset.y
              });
            }
          }}
          onPointerUp={(e) => {
            setDragOffset(null);
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
              onResize={resize}
              onResizeEnd={stopResize}
            />
          ))}

          {children}
        </div>
      </ ProgramContext.Provider>, portalTarget)
  );
}