import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    ["shapha_1_Rubber_-_Black_0"]: THREE.Mesh;
    shapha_1_Plastic_Matte_0: THREE.Mesh;
    shapha_1_Subtle_Wood_01_0: THREE.Mesh;
  };
  materials: {
    ["Rubber_-_Black"]: THREE.MeshStandardMaterial;
    Plastic_Matte: THREE.MeshStandardMaterial;
    Subtle_Wood_01: THREE.MeshStandardMaterial;
  };
};

export default function Wardrobe(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.wardrobe) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 149, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["shapha_1_Rubber_-_Black_0"].geometry}
            material={materials["Rubber_-_Black"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shapha_1_Plastic_Matte_0.geometry}
            material={materials.Plastic_Matte}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shapha_1_Subtle_Wood_01_0.geometry}
            material={materials.Subtle_Wood_01}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.wardrobe);