import * as THREE from "three";
import React, { JSX, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { createHoloMaterial } from "@/materials/holo-material";

export default function HoloExcavator(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/3d_models/excavator.glb");

  const holoMat = useMemo(
    () => createHoloMaterial(),
    []
  );

  useEffect(() => {
    scene.traverse((obj) => {
      if (!(obj as any).isMesh) return;
      const mesh = obj as THREE.Mesh;

      mesh.material = holoMat;

      mesh.castShadow = false;
      mesh.receiveShadow = false;
    });

    return () => {
      holoMat.dispose();
    };
  }, [scene, holoMat]);

  useFrame((_, delta) => {
    // eslint-disable-next-line react-hooks/immutability
    holoMat.uniforms.uTime.value += delta;
  });

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/3d_models/excavator.glb");
