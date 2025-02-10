"use client";
import { ReactNode } from "react";
import { Html } from "@react-three/drei";

export default function ComputerScreen({ children }: { children?: ReactNode }) {

  return (
    <group position={[2.5, 64.2, 0]}
           rotation={[0, Math.PI / 2, 0]}
    >
      <group position={[0, 0, 0]}
             rotation={[-Math.PI / 18, 0, 0]}
      >
        <mesh>
          <planeGeometry args={[112, 63]} />
          <meshStandardMaterial color="black" roughness={1} metalness={0} />
        </mesh>
        <Html transform
              scale={10}
        >
          <div onPointerDown={(e) => e.stopPropagation()}>
            <button onClick={() => {alert('hello')}} >
              hello
            </button>
            {children}
          </div>
        </Html>
      </group>
    </group>
  );
}
