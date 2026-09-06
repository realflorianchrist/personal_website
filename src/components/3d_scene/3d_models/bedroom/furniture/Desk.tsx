import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube010_mate_0: THREE.Mesh;
    Plane002_Material001_0: THREE.Mesh;
    Cube_mate_0: THREE.Mesh;
    Cube012_mate_0: THREE.Mesh;
    Cube011_mate_0: THREE.Mesh;
  };
  materials: {
    mate: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Desk(props: Readonly<ThreeElements["group"]>) {
  const { nodes, materials } = useGLTF(modelUrls.desk) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.0035} position={[0, 0.7, 0]}>
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.Cube010_mate_0.geometry}*/}
        {/*  material={materials.mate}*/}
        {/*  position={[1.419, -4.757, -475.984]}*/}
        {/*  rotation={[-Math.PI / 2, 0, 0]}*/}
        {/*  scale={[94.663, 194.069, 5.807]}*/}
        {/*/>*/}
        <mesh castShadow receiveShadow position={[3, 2.5, -475.984]}>
          <boxGeometry args={[180, 5, 420]} />
          <meshStandardMaterial color="black" transparent opacity={0.6} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[2.907, -71.93, -271.306]}
          scale={[88.732, 72.824, 100]}
        >
          <meshStandardMaterial color="#aaaaaa" metalness={1} roughness={0} />
        </mesh>
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.Cube_mate_0.geometry}*/}
        {/*  material={materials.mate}*/}
        {/*  position={[1.292, -63.482, -616.075]}*/}
        {/*  rotation={[-Math.PI / 2, 0, 0]}*/}
        {/*  scale={[79.483, 53.039, 53.039]}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.Cube012_mate_0.geometry}*/}
        {/*  material={materials.mate}*/}
        {/*  position={[1.292, -63.482, -616.075]}*/}
        {/*  rotation={[-Math.PI / 2, 0, 0]}*/}
        {/*  scale={[79.483, 53.039, 53.039]}*/}
        {/*/>*/}
        {/*<mesh*/}
        {/*  castShadow*/}
        {/*  receiveShadow*/}
        {/*  geometry={nodes.Cube011_mate_0.geometry}*/}
        {/*  material={materials.mate}*/}
        {/*  position={[1.292, -105.596, -616.075]}*/}
        {/*  rotation={[-Math.PI / 2, 0, 0]}*/}
        {/*  scale={[79.483, 53.039, 53.039]}*/}
        {/*/>*/}
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.desk);
