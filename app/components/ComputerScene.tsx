"use client";
import { Canvas } from "@react-three/fiber";
import Computer from "@/app/components/Computer";
import { ReactNode } from "react";

export default function ComputerScene({ children }: { children?: ReactNode }) {
  return (
    <div className={"flex h-[1000px]"}>
      <Canvas camera={{ position: [150, 50, 0] }}>
        <Computer>
          {children}
        </Computer>
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}