import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    KALLAX__112x147_KALLAX_MAIN_COLOR_0: THREE.Mesh;
    KALLAX__112x147_KALLAX_SCREW_0: THREE.Mesh;
    KALLAX__112x147_KALLAX_SCREW_HOLE_0: THREE.Mesh;
  };
  materials: {
    KALLAX_MAIN_COLOR: THREE.MeshStandardMaterial;
    KALLAX_SCREW: THREE.MeshStandardMaterial;
    KALLAX_SCREW_HOLE: THREE.MeshStandardMaterial;
  };
};

export default function Kallax(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.kallax) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 75, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.KALLAX__112x147_KALLAX_MAIN_COLOR_0.geometry}
              material={materials.KALLAX_MAIN_COLOR}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.KALLAX__112x147_KALLAX_SCREW_0.geometry}
              material={materials.KALLAX_SCREW}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.KALLAX__112x147_KALLAX_SCREW_HOLE_0.geometry}
              material={materials.KALLAX_SCREW_HOLE}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.kallax);
