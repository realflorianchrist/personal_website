import { ResizeHandleType, resizeHandles } from "@/components/mac_os/programs/ResizeHandle";
import useProgramsStore from "@/stores/programsStore";
import React from "react";
import { ProgramId } from "@/types/program";

export const useWindowResize = (
  programId: ProgramId
) => {

  const startResize = (
    type: ResizeHandleType,
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    const {
      programs,
      setResizeState
    } = useProgramsStore.getState();

    const program = programs[programId];

    setResizeState({
      programId,
      type,

      startMouseX: e.clientX,
      startMouseY: e.clientY,

      startWidth: program.windowDimensions.width,
      startHeight: program.windowDimensions.height,

      startX: program.windowPosition.x,
      startY: program.windowPosition.y
    });

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const resize = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {

    const {
      resizeState,
      setWindowDimensions,
      setWindowPosition
    } = useProgramsStore.getState();

    if (!resizeState || resizeState.programId !== programId) return;

    const handle = resizeHandles[resizeState.type];

    const dx = e.clientX - resizeState.startMouseX;
    const dy = e.clientY - resizeState.startMouseY;

    let width = resizeState.startWidth;
    let height = resizeState.startHeight;

    let x = resizeState.startX;
    let y = resizeState.startY;

    if (handle.resizeX !== 0) {

      width = resizeState.startWidth + dx * handle.resizeX;

      if (handle.resizeX < 0) {
        x = resizeState.startX + dx;
      }
    }

    if (handle.resizeY !== 0) {

      height = resizeState.startHeight + dy * handle.resizeY;

      if (handle.resizeY < 0) {
        y = resizeState.startY + dy;
      }
    }

    setWindowDimensions(programId, {
      width,
      height
    });

    setWindowPosition(programId, {
      x,
      y
    });
  };

  const stopResize = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {

    useProgramsStore.getState().setResizeState(null);

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return {
    startResize,
    resize,
    stopResize
  };
};