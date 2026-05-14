import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    Bed_LP_Default_0: THREE.Mesh;
  };
  materials: {
    Default: THREE.MeshPhysicalMaterial;
  };
};

export default function Bed(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.bed) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bed_LP_Default_0.geometry}
          material={materials.Default}
          position={[-0.536, -26.323, 431.094]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.bed);
