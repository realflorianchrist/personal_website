import { useWindowResize } from '@/hooks/useWindowResize';
import { ProgramId } from '@/types/program';
import cn from "@/utils/cn";
import React from "react";

export const resizeHandleTypes = [
  "l",
  "r",
  "t",
  "b",
  "tl",
  "tr",
  "br",
  "bl"
] as const;

export type ResizeHandleType = typeof resizeHandleTypes[number];

export const resizeHandles = {
  l: {
    className: "left-0 top-0 h-full w-2 cursor-ew-resize",
    resizeX: -1,
    resizeY: 0
  },

  r: {
    className: "right-0 top-0 h-full w-2 cursor-ew-resize",
    resizeX: 1,
    resizeY: 0
  },

  t: {
    className: "top-0 left-0 w-full h-2 cursor-ns-resize",
    resizeX: 0,
    resizeY: -1
  },

  b: {
    className: "bottom-0 left-0 w-full h-2 cursor-ns-resize",
    resizeX: 0,
    resizeY: 1
  },

  tl: {
    className: "top-0 left-0 w-3 h-3 cursor-nwse-resize",
    resizeX: -1,
    resizeY: -1
  },

  tr: {
    className: "top-0 right-0 w-3 h-3 cursor-nesw-resize",
    resizeX: 1,
    resizeY: -1
  },

  br: {
    className: "bottom-0 right-0 w-3 h-3 cursor-nwse-resize",
    resizeX: 1,
    resizeY: 1
  },

  bl: {
    className: "bottom-0 left-0 w-3 h-3 cursor-nesw-resize",
    resizeX: -1,
    resizeY: 1
  }
} as const;

type Props = {
  type: ResizeHandleType;
  onResizeStart: (
    type: ResizeHandleType,
    e: React.PointerEvent<HTMLDivElement>
  ) => void;
  onResize: (e: React.PointerEvent<HTMLDivElement>) => void;
  onResizeEnd: (e: React.PointerEvent<HTMLDivElement>) => void;
};

export default function ResizeHandle({ type, onResizeStart, onResize, onResizeEnd }: Props) {
  return (
    <div
      className={cn("absolute z-50", resizeHandles[type].className)}
      onPointerDown={(e) => {
        e.stopPropagation();
        onResizeStart(type, e);
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => onResize(e)}
      onPointerUp={(e) => {
        onResizeEnd(e);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
    />
  );
}