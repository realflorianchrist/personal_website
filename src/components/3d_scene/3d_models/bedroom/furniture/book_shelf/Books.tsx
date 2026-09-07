import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Buku1_0: THREE.Mesh;
    Buku1_1: THREE.Mesh;
    Buku2_0: THREE.Mesh;
    Buku2_1: THREE.Mesh;
    Buku3_0: THREE.Mesh;
    Buku3_1: THREE.Mesh;
    Buku4_0: THREE.Mesh;
    Buku4_1: THREE.Mesh;
    Buku5_0: THREE.Mesh;
    Buku5_1: THREE.Mesh;
    Buku6_0: THREE.Mesh;
    Buku6_1: THREE.Mesh;
    Buku7_0: THREE.Mesh;
    Buku7_1: THREE.Mesh;
    Buku8_0: THREE.Mesh;
    Buku8_1: THREE.Mesh;
    Buku9_0: THREE.Mesh;
    Buku9_1: THREE.Mesh;
    Buku10_0: THREE.Mesh;
    Buku10_1: THREE.Mesh;
    Buku11_0: THREE.Mesh;
    Buku11_1: THREE.Mesh;
    Buku12_0: THREE.Mesh;
    Buku12_1: THREE.Mesh;
  };
  materials: {
    BookPaper: THREE.MeshStandardMaterial;
    BookCover1: THREE.MeshStandardMaterial;
    BookCover2: THREE.MeshStandardMaterial;
    BookCover3: THREE.MeshStandardMaterial;
    BookCover4: THREE.MeshStandardMaterial;
    BookCover5: THREE.MeshStandardMaterial;
    BookCover6: THREE.MeshStandardMaterial;
    BookCover7: THREE.MeshStandardMaterial;
    BookCover8: THREE.MeshStandardMaterial;
    BookCover9: THREE.MeshStandardMaterial;
    BookCover10: THREE.MeshStandardMaterial;
    BookCover11: THREE.MeshStandardMaterial;
    BookCover12: THREE.MeshStandardMaterial;
  };
};

export default function Books(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.books) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.1}>

        <group position={[0, 0.65, 0]}>
          <group position={[0, -0.266, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku1_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku1_1.geometry}
              material={materials.BookCover1}
            />
          </group>
          <group position={[-0.106, -0.068, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku2_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku2_1.geometry}
              material={materials.BookCover2}
            />
          </group>
          <group position={[0.02, 0.11, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku3_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku3_1.geometry}
              material={materials.BookCover3}
            />
          </group>
          <group position={[-0.078, -0.507, 0]} scale={[1, 1.459, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku12_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku12_1.geometry}
              material={materials.BookCover12}
            />
          </group>
        </group>

        <group position={[0, -0.75, 0]}>
          <group position={[-0.053, 2.755, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku4_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku4_1.geometry}
              material={materials.BookCover4}
            />
          </group>
          <group position={[-0.064, 2.559, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku5_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku5_1.geometry}
              material={materials.BookCover5}
            />
          </group>
          <group position={[-0.036, 2.356, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku6_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku6_1.geometry}
              material={materials.BookCover6}
            />
          </group>
          <group position={[0, 2.136, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku11_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku11_1.geometry}
              material={materials.BookCover11}
            />
          </group>
        </group>

        <group>
          <group position={[-0.107, 0.853, 0]} rotation={[0, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku7_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku7_1.geometry}
              material={materials.BookCover7}
            />
          </group>

          <group position={[-0.036, 0.967, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku8_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku8_1.geometry}
              material={materials.BookCover8}
            />
          </group>
          <group position={[-0.023, 1.229, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku9_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku9_1.geometry}
              material={materials.BookCover9}
            />
          </group>
          <group position={[-0.05, 1.096, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku10_0.geometry}
              material={materials.BookPaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buku10_1.geometry}
              material={materials.BookCover10}
            />
          </group>
        </group>

      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.books);
