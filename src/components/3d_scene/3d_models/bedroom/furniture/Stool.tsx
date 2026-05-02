import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001_Material005_0: THREE.Mesh
    Cylinder001_Material004_0: THREE.Mesh
    Cylinder001_Material001_0: THREE.Mesh
  }
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial
    ["Material.004"]: THREE.MeshStandardMaterial
    ["Material.001"]: THREE.MeshStandardMaterial
  }
}

export default function Stool(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.stool) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.12} position={[0, 0.32, 0]} rotation={[0.129, 1.002, -0.109]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material005_0.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material004_0.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material001_0.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.stool);
