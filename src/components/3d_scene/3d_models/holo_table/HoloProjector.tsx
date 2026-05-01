import * as THREE from "three";
import React, { JSX, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";
import { createHoloMaterial } from "@/materials/holo-material";

type GLTFResult = GLTF & {
  nodes: {
    SM_Holo_Projector_M_Projector_Base_0: THREE.Mesh
    SM_Holo_Projector_M_Projector_Emissive_0: THREE.Mesh
    SM_Holo_Projector_M_Holo_Sides_0: THREE.Mesh
    SM_Holo_Projector_M_Holo_Top_0: THREE.Mesh
  }
  materials: {
    M_Projector_Base: THREE.MeshStandardMaterial
    M_Projector_Emissive: THREE.MeshStandardMaterial
    M_Holo_Sides: THREE.MeshStandardMaterial
    M_Holo_Top: THREE.MeshStandardMaterial
  }
}

export default function HoloProjector(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.holoProjector) as unknown as GLTFResult;

  const holoMat = useMemo(() => createHoloMaterial({
    opacity: 0.1
  }), []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -0.557]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Holo_Projector_M_Projector_Base_0.geometry}
            material={materials.M_Projector_Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Holo_Projector_M_Projector_Emissive_0.geometry}
            material={materials.M_Projector_Emissive}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Holo_Projector_M_Holo_Sides_0.geometry}
            material={holoMat}
            scale={[2, 1.2, 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Holo_Projector_M_Holo_Top_0.geometry}
            material={holoMat}
            scale={[2, 1.2, 2]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.holoProjector);