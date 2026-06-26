import { ResizeHandleType, resizeHandles } from "@/components/mac_os/programs/ResizeHandle";
import useProgramsStore, { MIN_WINDOW_SIZE, MAX_WINDOW_SIZE } from "@/stores/programsStore";
import React from "react";
import { ProgramId } from "@/types/program";
import { clamp } from 'gsap/all';

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

  const resize = (e: React.PointerEvent<HTMLDivElement>) => {
    const {
      resizeState,
      usableScreenRect,
      setWindowDimensions,
      setWindowPosition,
    } = useProgramsStore.getState();

    if (resizeState?.programId !== programId) return;

    const handle = resizeHandles[resizeState.type];

    const dx = e.clientX - resizeState.startMouseX;
    const dy = e.clientY - resizeState.startMouseY;

    let width = resizeState.startWidth;
    let height = resizeState.startHeight;
    let x = resizeState.startX;
    let y = resizeState.startY;

    const maxWidth = usableScreenRect
      ? Math.min(MAX_WINDOW_SIZE.width, usableScreenRect.width)
      : MAX_WINDOW_SIZE.width;

    const maxHeight = usableScreenRect
      ? Math.min(MAX_WINDOW_SIZE.height, usableScreenRect.height)
      : MAX_WINDOW_SIZE.height;

    if (handle.resizeX > 0) {
      const desiredWidth = resizeState.startWidth + dx;
      const maxAllowedWidth = Math.min(
        MAX_WINDOW_SIZE.width,
        maxWidth - resizeState.startX
      );

      width = clamp(
        MIN_WINDOW_SIZE.width,
        maxAllowedWidth,
        desiredWidth
      );
    }

    if (handle.resizeX < 0) {
      const desiredWidth = resizeState.startWidth - dx;
      const maxAllowedWidth = Math.min(
        MAX_WINDOW_SIZE.width,
        resizeState.startWidth + resizeState.startX
      );

      width = clamp(
        MIN_WINDOW_SIZE.width,
        maxAllowedWidth,
        desiredWidth
      );

      x = resizeState.startX + (resizeState.startWidth - width);
    }

    if (handle.resizeY > 0) {
      const desiredHeight = resizeState.startHeight + dy;
      const maxAllowedHeight = Math.min(
        MAX_WINDOW_SIZE.height,
        maxHeight - resizeState.startY
      );

      height = clamp(
        MIN_WINDOW_SIZE.height,
        maxAllowedHeight,
        desiredHeight
      );
    }

    if (handle.resizeY < 0) {
      const desiredHeight = resizeState.startHeight - dy;
      const maxAllowedHeight = Math.min(
        MAX_WINDOW_SIZE.height,
        resizeState.startHeight + resizeState.startY
      );

      height = clamp(
        MIN_WINDOW_SIZE.height,
        maxAllowedHeight,
        desiredHeight
      );

      y = resizeState.startY + (resizeState.startHeight - height);
    }

    setWindowDimensions(programId, { width, height });
    setWindowPosition(programId, { x, y });
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
    stopResize,
  };
};