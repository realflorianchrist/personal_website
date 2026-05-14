import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    Plane_Material_0: THREE.Mesh;
    Plane_Material001_0: THREE.Mesh;
    Plane001_Material_0: THREE.Mesh;
    Plane001_Material001_0: THREE.Mesh;
    Plane002_Material_0: THREE.Mesh;
    Circle_Material002_0: THREE.Mesh;
    Circle001_Material002_0: THREE.Mesh;
    Plane003_Material002_0: THREE.Mesh;
    Circle002_Material002_0: THREE.Mesh;
    Circle003_Material002_0: THREE.Mesh;
    Circle004_Material002_0: THREE.Mesh;
    Circle005_Material002_0: THREE.Mesh;
    Circle006_Material002_0: THREE.Mesh;
    Plane004_Material_0: THREE.Mesh;
    Plane005_Material002_0: THREE.Mesh;
    aseito_logo_aseito_logo_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    aseito_logo: THREE.MeshStandardMaterial;
  };
};

export default function GamingChair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.gamingChair) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.0025} position={[0, -0.085, 0]}>
        <group position={[0.447, 347.716, -16.46]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0.447, 207.526, 71.017]} rotation={[-Math.PI / 2, 0, 0]} scale={83.559}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Material_0.geometry}
          material={materials.Material}
          position={[0.447, 148.165, 100.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[18.692, 58.11, 10.379]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0.447, 148.165, 100.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10.164}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0.447, 151.276, 100.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[8.569, 8.569, 22.595]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0.447, 66, 99.636]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[8.179, 5.513, 8.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[1.225, 47.514, 208.302]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-8.982, 8.982, 8.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[102.826, 47.514, 136.071]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
          scale={[-8.982, 8.982, 8.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[69.7, 47.514, 15.893]}
          rotation={[0, 0.873, -Math.PI / 2]}
          scale={[-8.982, 8.982, 8.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-69.998, 47.514, 16.893]}
          rotation={[-Math.PI, 0.873, Math.PI / 2]}
          scale={[-8.982, 8.982, 8.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-101.399, 47.514, 137.533]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
          scale={[-8.982, 8.982, 8.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_Material_0.geometry}
          material={materials.Material}
          position={[0.447, 132.148, 100.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={36.095}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-107.034, 107.386, 124.379]}
          rotation={[-Math.PI / 2, -0.204, 0]}
          scale={12.598}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aseito_logo_aseito_logo_0.geometry}
          material={materials.aseito_logo}
          position={[0.447, 368.437, -8.993]}
          scale={6.094}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.gamingChair);