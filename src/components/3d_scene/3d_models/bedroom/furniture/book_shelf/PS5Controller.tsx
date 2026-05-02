import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_28: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_47: THREE.Mesh
    Object_49: THREE.Mesh
    Object_51: THREE.Mesh
    Object_53: THREE.Mesh
    Object_55: THREE.Mesh
    Object_57: THREE.Mesh
    Object_59: THREE.Mesh
    Object_61: THREE.Mesh
    Object_63: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_76: THREE.Mesh
    Object_78: THREE.Mesh
    Object_80: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_86: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_94: THREE.Mesh
    Object_96: THREE.Mesh
    Object_98: THREE.Mesh
  }
  materials: {
    VRayMtl55: THREE.MeshStandardMaterial
    ["Material.003"]: THREE.MeshStandardMaterial
    ["1001"]: THREE.MeshStandardMaterial
    front_body: THREE.MeshStandardMaterial
    ["front_body.001"]: THREE.MeshStandardMaterial
    ["front_body.002"]: THREE.MeshStandardMaterial
    VRayMtl33: THREE.MeshStandardMaterial
    ["Material.004"]: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    ["Material.006"]: THREE.MeshStandardMaterial
    ["Material.008"]: THREE.MeshStandardMaterial
    ["Material.010"]: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ["Material.007"]: THREE.MeshStandardMaterial
    VRayMtl37: THREE.MeshStandardMaterial
    ["Material.005"]: THREE.MeshStandardMaterial
    ["Material.002"]: THREE.MeshStandardMaterial
    ["Material.009"]: THREE.MeshStandardMaterial
    ["1001.002"]: THREE.MeshStandardMaterial
  }
}

export default function PS5Controller(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.ps5Controller) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <group scale={2.633}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.VRayMtl55}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.front_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["front_body.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["front_body.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.VRayMtl33}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.front_body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials["1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.VRayMtl37}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials["1001"]}
          />
        </group>
        <group rotation={[-Math.PI, 0, -Math.PI]} scale={0.196}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials["Material.002"]}
            position={[-0.032, 0.024, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials["Material.002"]}
            position={[-0.032, 0.024, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials["Material.002"]}
            position={[-0.032, 0.024, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials["Material.002"]}
            position={[-0.032, 0.024, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials["Material.009"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.material_0}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials["Material.009"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials.material_0}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_88.geometry}
            material={materials["Material.009"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_90.geometry}
            material={materials.material_0}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_92.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_94.geometry}
            material={materials["Material.009"]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials.material_0}
            position={[9.729, 3.768, -4.162]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={13.221}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials["1001.002"]}
            position={[16.802, 7.462, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={13.476}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.ps5Controller);
