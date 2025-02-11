import React, { ReactNode, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function SpacemanCamera(
  {
    isMobile,
    children
  }: {
    isMobile: boolean;
    children: ReactNode
  }) {

  const groupRef = useRef<Group>(null);

  useFrame((state, delta, frame) => {
    if (!isMobile) {
      easing.dampE(state.camera.rotation,
        [state.pointer.y / 20, -state.pointer.x / 20, 0],
        0.25,
        delta);
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}