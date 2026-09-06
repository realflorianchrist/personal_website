import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Glass_Glass_0: THREE.Mesh;
    Pillars_Pillars_0: THREE.Mesh;
    SecondGlass_Glass_0: THREE.Mesh;
    Leg_2_Legs_0: THREE.Mesh;
    Leg_1_Legs_0: THREE.Mesh;
  };
  materials: {
    Glass: THREE.MeshPhysicalMaterial;
    Pillars: THREE.MeshStandardMaterial;
    Legs: THREE.MeshStandardMaterial;
  };
};

export default function GlassTable(props: Readonly<ThreeElements["group"]>) {
  const { nodes, materials } = useGLTF(
    modelUrls.glassTable,
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 123.7, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={90}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillars_Pillars_0.geometry}
            material={materials.Pillars}
            position={[0, 0, -0.13]}
            scale={1.111}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecondGlass_Glass_0.geometry}
            material={materials.Glass}
            position={[0, 0, -0.811]}
            scale={[0.889, 0.889, 1.111]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg_2_Legs_0.geometry}
            // material={materials.Legs}
            position={[0, -1.556, -0.408]}
            scale={1.111}
          >
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leg_1_Legs_0.geometry}
            // material={materials.Legs}
            position={[0, 1.556, -0.408]}
            scale={1.111}
          >
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.glassTable);
