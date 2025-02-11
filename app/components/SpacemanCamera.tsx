import React, { ReactNode } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

export default function SpacemanCamera(
  {
    isMobile,
    children
  }: {
    isMobile: boolean;
    children: ReactNode
  }) {

  const { camera } = useThree();

  useFrame((state, delta) => {
    if (!isMobile) {
      easing.dampE(
        camera.rotation,
        [state.pointer.y / 20, -state.pointer.x / 20, 0],
        0.25,
        delta
      );
    }
  });

  return <group>{children}</group>;
}