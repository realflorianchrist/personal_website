import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
  };
  materials: {
    Keys: THREE.MeshStandardMaterial;
    Caps_Lock: THREE.MeshStandardMaterial;
    Caps_Lock_Glass: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
    Toggle_Button: THREE.MeshStandardMaterial;
  };
};

export default function MagicKeyboard(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.magicKeyboard) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.1}>
        <group position={[-0.034, 0.04, -0.062]} scale={[0.095, 0.013, 0.094]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Keys}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Caps_Lock}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Caps_Lock_Glass}
          />
        </group>
        <group
          position={[-2.05, 0.007, -0.681]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.291, 0.015, 0.005]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Port}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Toggle_Button}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.001"]}
          position={[0.08, -0.012, 0.031]}
          scale={[0.767, 1, 0.679]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.magicKeyboard);