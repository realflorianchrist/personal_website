"use client";

import { useState } from "react";
import CloseButton from "@/components/mac_os/programs/CloseButton";

export default function Finder() {
  const [size] = useState({ width: 500, height: 300 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number } | null>(null);

  const isDragging = dragOffset !== null;

  return (
    <div
      className="absolute bg-popover border-[0.5px] border-border rounded-3xl overflow-hidden"
      style={{
        width: size.width,
        height: size.height,
        top: position.y,
        left: position.x
      }}
      onPointerMove={(e) => {
        if (!isDragging) return;

        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }}
      onPointerUp={(e) => {
        setDragOffset(null);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
    >
      <div
        className="h-10 flex items-center px-3"
        onPointerDown={(e) => {
          setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
          });

          e.currentTarget.parentElement?.setPointerCapture(e.pointerId);
        }}
      >
        <CloseButton />
      </div>

      <div className="p-3">
        Finder content
      </div>
    </div>
  );
}