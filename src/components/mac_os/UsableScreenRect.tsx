"use client";
import { ReactNode, useEffect, useRef } from "react";
import useProgramsStore from "@/stores/programsStore";
import { programPortalTargets } from '@/constants/programPortalTargets';

export default function UsableScreenRect({ children }: { children: ReactNode; }) {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const { setUsableScreenRect } = useProgramsStore();

  useEffect(() => {
    if (!screenRef.current) return;

    const updateRect = () => {
      const rect = screenRef.current!.getBoundingClientRect();

      setUsableScreenRect({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      });
    };

    updateRect();

    const observer = new ResizeObserver(updateRect);
    observer.observe(screenRef.current);

    window.addEventListener("resize", updateRect);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateRect);
    };
  }, [setUsableScreenRect]);

  return (
    <div ref={screenRef} id={programPortalTargets.usableScreen} className={"relative flex-grow-1 overflow-hidden"}>
      {children}
    </div>
  );
}