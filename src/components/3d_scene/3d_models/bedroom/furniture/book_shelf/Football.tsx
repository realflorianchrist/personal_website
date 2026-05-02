import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    Football_LowPoly_FootballTex_0: THREE.Mesh
  }
  materials: {
    FootballTex: THREE.MeshPhysicalMaterial
  }
}

export default function Football(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.football) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Football_LowPoly_FootballTex_0.geometry}
          material={materials.FootballTex}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.football);
