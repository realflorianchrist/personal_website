import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    MaterialFBXASC032FBXASC0352142150880: THREE.Mesh
    MaterialFBXASC032FBXASC03511298: THREE.Mesh
    MaterialFBXASC032FBXASC0352142170963: THREE.Mesh
    MaterialFBXASC032FBXASC0352142171025: THREE.Mesh
    MaterialFBXASC032FBXASC0352142171324: THREE.Mesh
    MaterialFBXASC032FBXASC0352142147988: THREE.Mesh
  }
  materials: {
    MaterialFBXASC032FBXASC0352142150880: THREE.MeshStandardMaterial
    MaterialFBXASC032FBXASC03511298: THREE.MeshStandardMaterial
    MaterialFBXASC032FBXASC0352142170963: THREE.MeshStandardMaterial
    MaterialFBXASC032FBXASC0352142171025: THREE.MeshStandardMaterial
    MaterialFBXASC032FBXASC0352142171324: THREE.MeshStandardMaterial
    MaterialFBXASC032FBXASC0352142147988: THREE.MeshStandardMaterial
  }
}

export function ComputerRound(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.computerRound) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0.325, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.065}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142150880}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC03511298.geometry}
              material={materials.MaterialFBXASC032FBXASC03511298}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142170963.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142170963}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142171025.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142171025}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142171324.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142171324}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142147988.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142147988}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.computerRound);

