"use client";
import ResizeHandle, { resizeHandleTypes } from "@/components/mac_os/programs/ResizeHandle";
import useProgramsStore from "@/stores/programsStore";
import { ProgramId } from "@/types/program";
import { createContext, ReactNode, use, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { programPortalTargets } from '@/constants/programPortalTargets';
import cn from '@/utils/cn';
import { useMinimizeWindow } from '@/hooks/useMinimizeWindow';

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
    minimizingProgramsIds,
    minimizedProgramsIds,
    dragOffset,
    setDragOffset,
    setWindowPosition,
    openProgramsIds,
    focusedProgramId,
    focusProgram,
    usableScreenRect
  } = useProgramsStore();

  const { startResize, resize, stopResize } = useWindowResize(programId);

  const { calcScale, calcTargetPos } = useMinimizeWindow(programId);

  const isMinimizing = minimizingProgramsIds.includes(programId);
  const isMinimized = minimizedProgramsIds.includes(programId);

  //TODO: replace
  const targetId = isMinimizing
    ? programPortalTargets.dockPreview(programId)
    : programPortalTargets.usableScreen;

  useEffect(() => {
    setPortalTarget(document.getElementById(targetId));
  }, [targetId]);

  if (!program) return null;

  const windowClassName = cn(
    //TODO: replace
    isMinimizing
      ? "relative h-full w-full overflow-hidden rounded-md pointer-events-none"
      : "absolute select-none",
    !isMinimized && focusedProgramId === program?.id && "z-50",
    !isMinimized && focusedProgramId !== program?.id && "z-10"
  );

  const isAnimatingToDock = isMinimizing && calcTargetPos();

  // TODO: replace
  const windowStyle: React.CSSProperties = isMinimizing
    ? {
      width: program?.windowDimensions.width,
      height: program?.windowDimensions.height,
      transform: `scale(${calcScale()})`,
      transformOrigin: "top left",
    } : {
      width: program?.windowDimensions.width,
      height: program?.windowDimensions.height,
      top: program?.windowPosition.y,
      left: program?.windowPosition.x,
    };


  return (
    portalTarget &&
    openProgramsIds.includes(program?.id) &&
    createPortal(
      <ProgramContext.Provider value={{ programId }}>
        <div
          id={programId}
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