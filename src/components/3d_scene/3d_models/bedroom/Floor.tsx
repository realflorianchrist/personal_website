import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { JSX, useEffect } from "react";

type ModelProps = JSX.IntrinsicElements["mesh"] & {
  width?: number,
  depth?: number
};

export default function Floor({ width = 1, depth = 1, ...props }: ModelProps) {
  const { materials } = useGLTF("/textures/laminate_floor_03_4k.gltf/laminate_floor_03_4k.gltf");
  const rubberMat = materials["laminate_floor_03"];

  useEffect(() => {
    const mat = rubberMat as THREE.MeshStandardMaterial;

    const maps = [
      mat.map,
      mat.normalMap,
      mat.roughnessMap,
      mat.metalnessMap,
      mat.aoMap
    ];

    maps.forEach((tex) => {
      if (!tex) return;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      tex.needsUpdate = true;
    });
  }, [rubberMat]);

  return (
    <mesh
      {...props}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[width, depth]} />
      <meshStandardMaterial {...rubberMat} />
    </mesh>
  );
};
