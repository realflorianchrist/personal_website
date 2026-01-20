import * as THREE from "three";
import React, { JSX, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    polySurface1_Table_v2_0: THREE.Mesh
    polySurface3_Table_v2_0: THREE.Mesh
    polySurface2_Table_v2_0: THREE.Mesh
    pPlane7_Table_v2_0: THREE.Mesh
    pPlane8_Table_v2_0: THREE.Mesh
    pPlane9_Table_v2_0: THREE.Mesh
    pCylinder1_Table_v2_0: THREE.Mesh
    pPlane10_Table_v2_0: THREE.Mesh
    pPlane12_Table_v2_0: THREE.Mesh
    pPlane11_Table_v2_0: THREE.Mesh
    pPlane13_Table_v2_0: THREE.Mesh
  }
  materials: {
    Table_v2: THREE.MeshStandardMaterial
  }
}

export default function Table(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.table) as unknown as GLTFResult;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    materials.Table_v2.depthWrite = true;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {/*plate*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1_Table_v2_0.geometry}
          material={materials.Table_v2}
        />
        {/*holo mountains*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.polySurface3_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*holo plate*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_Table_v2_0.geometry}
          material={materials.Table_v2}
        />
        {/*stand*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane7_Table_v2_0.geometry}
          material={materials.Table_v2}
        />
        {/*stand*/}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane8_Table_v2_0.geometry}
          material={materials.Table_v2}
        />

        {/*holos*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pPlane9_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pCylinder1_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pPlane10_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pPlane12_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pPlane11_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.pPlane13_Table_v2_0.geometry}*/}
        {/*  material={materials.Table_v2}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.table);