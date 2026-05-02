import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    Plane002_Glossy_0: THREE.Mesh
    Plane002_Door_0: THREE.Mesh
    Plane001_Glossy_0: THREE.Mesh
    Plane001_Door_0: THREE.Mesh
    Plane003_Door_0: THREE.Mesh
    Circle002_Glossy_0: THREE.Mesh
  }
  materials: {
    Glossy: THREE.MeshStandardMaterial
    Door: THREE.MeshStandardMaterial
  }
}

export default function Door(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.door) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Glossy_0.geometry}
          material={materials.Glossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Door_0.geometry}
          material={materials.Door}
        />
        <group position={[-0.435, -0.101, 0.249]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Glossy_0.geometry}
            material={materials.Glossy}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Door_0.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Door_0.geometry}
            material={materials.Door}
            position={[0.852, 0.017, 0.782]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Glossy_0.geometry}
            material={materials.Glossy}
            position={[0.81, 0.043, 0.803]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.door);
