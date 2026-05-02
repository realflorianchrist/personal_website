import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    tex_u1_v1: THREE.MeshStandardMaterial
  }
}

export default function Ezio(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.ezio) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.tex_u1_v1}
        position={[-0.024, -0.003, 0]}
        rotation={[-Math.PI / 2, 0.001, 0]}
        scale={0.008}
      />
    </group>
  );
}

useGLTF.preload(modelUrls.ezio);
