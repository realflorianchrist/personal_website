"use client";
import { useGLTF } from "@react-three/drei";
import ComputerScreen from "@/app/components/ComputerScreen";
import { ReactNode, useRef } from "react";
import { Vector3 } from "three";

export default function Computer(
  {
    children,
    scale,
    position
  }: {
    children?: ReactNode,
    scale?: Vector3;
    position?: Vector3;
  }) {
  const computerRef = useRef(null);
  const { scene } = useGLTF("/3d/imac_2021.glb");

  return (
    <mesh ref={computerRef} scale={scale} position={position}>
      <primitive object={scene}>
        <ComputerScreen>
            {children}
        </ComputerScreen>
      </primitive>
    </mesh>
  );
};

