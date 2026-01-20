import React, { JSX, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { createHoloMaterial } from "@/materials/holo-material";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type Props = JSX.IntrinsicElements["group"] & {
  src: string;
};

export default function HoloModel({ src, ...groupProps }: Props) {
  const { scene } = useGLTF(src);

  const holoMat = useMemo(() => createHoloMaterial({
    opacity: 0
  }), []);

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((obj) => {
      // eslint-disable-next-line
      if (!(obj as any).isMesh) return;

      const mesh = obj as THREE.Mesh;

      mesh.material = holoMat;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
    });

    return () => {
      holoMat.dispose();
    };
  }, [clonedScene, holoMat]);

  useFrame((_, delta) => {
    // eslint-disable-next-line react-hooks/immutability
    holoMat.uniforms.uTime.value += delta;
  });

  return (
    <group
      {...groupProps}
      onUpdate={(g) => {
        // eslint-disable-next-line
        (g as any).userData.holoMat = holoMat;
      }}
    >
      <primitive object={clonedScene} />
    </group>
  );
}
