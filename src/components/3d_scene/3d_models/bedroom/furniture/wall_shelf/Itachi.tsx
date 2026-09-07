import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    mesh_6: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_8: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_38: THREE.Mesh;
    mesh_14: THREE.Mesh;
    mesh_14_1: THREE.Mesh;
    mesh_14_2: THREE.Mesh;
    mesh_14_3: THREE.Mesh;
    mesh_14_4: THREE.Mesh;
    mesh_14_5: THREE.Mesh;
  };
  materials: {
    Suit: THREE.MeshStandardMaterial;
    Red_suit: THREE.MeshStandardMaterial;
    Black_suit: THREE.MeshStandardMaterial;
    Blue_shirt: THREE.MeshStandardMaterial;
    Blu_vestito: THREE.MeshStandardMaterial;
    Rete_vestito: THREE.MeshStandardMaterial;
    Nero: THREE.MeshStandardMaterial;
    Black_Necklace: THREE.MeshStandardMaterial;
    Metallo_collana: THREE.MeshStandardMaterial;
    Metallo_coprifronte: THREE.MeshStandardMaterial;
    Metallo_scuro_coprifronte: THREE.MeshStandardMaterial;
    Blu_coprifronte: THREE.MeshStandardMaterial;
    mesh_6: THREE.MeshStandardMaterial;
    Smalto: THREE.MeshStandardMaterial;
    Skin: THREE.MeshStandardMaterial;
    Gambe: THREE.MeshStandardMaterial;
    Blu_scarpe: THREE.MeshStandardMaterial;
    Nero_capelli: THREE.MeshStandardMaterial;
    Rosso_coda_capelli: THREE.MeshStandardMaterial;
    Ears: THREE.MeshStandardMaterial;
    Nero_pastello: THREE.MeshStandardMaterial;
    Bianco_occhi: THREE.MeshStandardMaterial;
    Rosso_occhio: THREE.MeshStandardMaterial;
    Nero_occhi: THREE.MeshStandardMaterial;
    Blood: THREE.MeshStandardMaterial;
  };
};

export default function Itachi(props: Readonly<ThreeElements["group"]>) {
  const { nodes, materials } = useGLTF(
    modelUrls.itachi,
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.16, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.075}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.007, 0.246, 0.005]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Suit}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Red_suit}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Black_suit}
            />
          </group>
          <group
            position={[-0.002, 1.373, 0.224]}
            rotation={[0.446, 0, 0]}
            scale={0.043}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Blu_vestito}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Rete_vestito}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Nero}
            />
          </group>
          <group
            position={[-0.003, 1.503, -0.004]}
            rotation={[0.364, 0, -Math.PI]}
            scale={[-0.27, 0.042, 0.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Black_Necklace}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Metallo_collana}
            />
          </group>
          <group
            position={[-0.024, 1.892, 0.339]}
            scale={[0.158, 0.059, 0.059]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Metallo_coprifronte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.Metallo_scuro_coprifronte}
            />
          </group>
          <group
            position={[0.496, -2.459, 0.414]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.085, 0.085, 0.085]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.Smalto}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.Skin}
            />
          </group>
          <group position={[0.114, 2.106, 0.02]} scale={0.114}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.Nero_capelli}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.Rosso_coda_capelli}
            />
          </group>
          <group position={[-0.005, 1.737, 0.1]} scale={0.141}>
            <mesh
              name="mesh_14"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14.geometry}
              material={materials.Skin}
              morphTargetDictionary={nodes.mesh_14.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_1"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_1.geometry}
              material={materials.Nero_pastello}
              morphTargetDictionary={nodes.mesh_14_1.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_1.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_2"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_2.geometry}
              material={materials.Bianco_occhi}
              morphTargetDictionary={nodes.mesh_14_2.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_2.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_3"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_3.geometry}
              material={materials.Rosso_occhio}
              morphTargetDictionary={nodes.mesh_14_3.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_3.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_4"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_4.geometry}
              material={materials.Nero_occhi}
              morphTargetDictionary={nodes.mesh_14_4.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_4.morphTargetInfluences}
            />
            <mesh
              name="mesh_14_5"
              castShadow
              receiveShadow
              geometry={nodes.mesh_14_5.geometry}
              material={materials.Blood}
              morphTargetDictionary={nodes.mesh_14_5.morphTargetDictionary}
              morphTargetInfluences={nodes.mesh_14_5.morphTargetInfluences}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Blue_shirt}
            position={[-0.277, 1.412, 0.112]}
            rotation={[0.369, 0.364, 0.24]}
            scale={0.088}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Blu_coprifronte}
            position={[-0.005, 1.966, 0.257]}
            scale={[0.064, 0.064, 0.006]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_6.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_7.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_8.geometry}
            material={materials.mesh_6}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.Gambe}
            position={[0.545, -2.001, 0]}
            rotation={[0, 0, 0.081]}
            scale={0.09}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Blu_scarpe}
            position={[0.544, -2.001, 0.005]}
            rotation={[0, 0, 0.081]}
            scale={0.09}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.Ears}
            position={[-0.005, 1.737, 0.1]}
            scale={0.141}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.itachi);
