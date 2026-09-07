import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_45: THREE.Mesh;
  };
  materials: {
    Black_skin: THREE.MeshStandardMaterial;
    Bianco_occhi: THREE.MeshStandardMaterial;
    Rosso_occhio: THREE.MeshStandardMaterial;
    Nero_occhi: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    Suit: THREE.MeshStandardMaterial;
    Red_suit: THREE.MeshStandardMaterial;
    Black_suit: THREE.MeshStandardMaterial;
    Blue_shirt: THREE.MeshStandardMaterial;
    Smalto: THREE.MeshStandardMaterial;
    Skin: THREE.MeshStandardMaterial;
    Gambe: THREE.MeshStandardMaterial;
    Blu_scarpe: THREE.MeshStandardMaterial;
    Hair: THREE.MeshStandardMaterial;
  };
};

export default function Obito(props: Readonly<ThreeElements["group"]>) {
  const { nodes, materials } = useGLTF(
    modelUrls.obito,
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.075} position={[0, 0.16, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Black_skin}
          position={[-0.005, 1.737, 0.1]}
          scale={0.141}
        />
        <group position={[-0.005, 1.737, 0.1]} scale={0.141}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Bianco_occhi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Rosso_occhio}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Nero_occhi}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Material}
          position={[-0.011, 1.808, 0.184]}
          scale={[0.217, 0.313, 0.138]}
        />
        <group position={[0.007, 0.246, 0.005]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Suit}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.Red_suit}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.Black_suit}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Blue_shirt}
          position={[-0.277, 1.412, 0.112]}
          rotation={[0.369, 0.364, 0.24]}
          scale={0.088}
        />
        <group
          position={[0.496, -2.459, 0.414]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.085, 0.085, 0.085]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.Smalto}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Skin}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Gambe}
          position={[0.545, -2.001, 0]}
          rotation={[0, 0, 0.081]}
          scale={0.09}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.Blu_scarpe}
          position={[0.544, -2.001, 0.005]}
          rotation={[0, 0, 0.081]}
          scale={0.09}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Hair}
          position={[-0.005, 1.737, 0.1]}
          scale={0.141}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.Hair}
          position={[0.048, 2.149, 0.2]}
          scale={[0.025, 0.024, 0.024]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.obito);
