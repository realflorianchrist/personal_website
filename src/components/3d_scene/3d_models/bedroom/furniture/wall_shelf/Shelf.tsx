import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    ["Floating_Shelf_35x10__Material_#2146953915_0"]: THREE.Mesh;
    ["Text078_Material_#2146954027_0"]: THREE.Mesh;
  };
  materials: {
    Material_2146953915: THREE.MeshStandardMaterial;
    Material_2146954027: THREE.MeshStandardMaterial;
  };
};

export default function Shelf(props: Readonly<ThreeElements["group"]>) {
  const { nodes } = useGLTF(modelUrls.shelf) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["Floating_Shelf_35x10__Material_#2146953915_0"].geometry
          }
          // material={materials.Material_2146953915}
          position={[1.5, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.shelf);
