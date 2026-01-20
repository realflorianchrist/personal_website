import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { JSX, useEffect } from "react";

type ModelProps = JSX.IntrinsicElements["mesh"];

export default function Floor(props: ModelProps) {
  const { materials } = useGLTF("/textures/rubber_tiles_4k.gltf/rubber_tiles_4k.gltf");
  const rubberMat = materials["rubber_tiles"];

  useEffect(() => {
    const mat = rubberMat as THREE.MeshStandardMaterial;

    const maps = [
      mat.map,
      mat.normalMap,
      mat.roughnessMap,
      mat.metalnessMap,
      mat.aoMap,
    ];

    maps.forEach((tex) => {
      if (!tex) return;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(14, 4);
      tex.needsUpdate = true;
    });
  }, [rubberMat]);

  return (
    <mesh
      {...props}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial {...rubberMat} />
    </mesh>
  );
};
