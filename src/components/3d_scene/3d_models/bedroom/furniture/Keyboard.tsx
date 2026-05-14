import * as THREE from "three";
import React, { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    Cube003_KeyboardMaterial_0: THREE.Mesh;
    Cube004_KeyboardMaterial_0: THREE.Mesh;
    Cube001_KeyboardMaterial_0: THREE.Mesh;
    Cube002_KeyboardMaterial_0: THREE.Mesh;
    Cube005_KeyboardMaterial_0: THREE.Mesh;
    Cube006_KeyboardMaterial_0: THREE.Mesh;
    Cube007_KeyboardMaterial_0: THREE.Mesh;
    Cube008_KeyboardMaterial_0: THREE.Mesh;
    Cube009_KeyboardMaterial_0: THREE.Mesh;
    Cube010_KeyboardMaterial_0: THREE.Mesh;
    Cube011_KeyboardMaterial_0: THREE.Mesh;
    Cube012_KeyboardMaterial_0: THREE.Mesh;
    Cube013_KeyboardMaterial_0: THREE.Mesh;
    Cube014_KeyboardMaterial_0: THREE.Mesh;
    Cube015_KeyboardMaterial_0: THREE.Mesh;
    Cube016_KeyboardMaterial_0: THREE.Mesh;
    Cube017_KeyboardMaterial_0: THREE.Mesh;
    Cube018_KeyboardMaterial_0: THREE.Mesh;
    Cube019_KeyboardMaterial_0: THREE.Mesh;
    Cube020_KeyboardMaterial_0: THREE.Mesh;
    Cube021_KeyboardMaterial_0: THREE.Mesh;
    Cube022_KeyboardMaterial_0: THREE.Mesh;
    Cube023_KeyboardMaterial_0: THREE.Mesh;
    Cube024_KeyboardMaterial_0: THREE.Mesh;
    body_main_KeyboardMaterial_0: THREE.Mesh;
    power_KeyboardMaterial_0: THREE.Mesh;
    select_KeyboardMaterial_0: THREE.Mesh;
    volume_KeyboardMaterial_0: THREE.Mesh;
    Cylinder_StandMaterial_0: THREE.Mesh;
    Cube029_StandMaterial_0: THREE.Mesh;
    Sphere_StandMaterial_0: THREE.Mesh;
    Circle002_StandMaterial_0: THREE.Mesh;
    Cylinder002_StandMaterial_0: THREE.Mesh;
    Cube028_StandMaterial_0: THREE.Mesh;
    Cylinder001_StandMaterial_0: THREE.Mesh;
    pedal_btm_StandMaterial_0: THREE.Mesh;
    pedal_top_StandMaterial_0: THREE.Mesh;
    wire_StandMaterial_0: THREE.Mesh;
    jack_StandMaterial_0: THREE.Mesh;
    light_light_0: THREE.Mesh;
  };
  materials: {
    KeyboardMaterial: THREE.MeshStandardMaterial;
    StandMaterial: THREE.MeshStandardMaterial;
    light: THREE.MeshStandardMaterial;
  };
};

export default function Keyboard(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.keyboard) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-54.768, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-53.627, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-46.643, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-38.459, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-37.318, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-30.333, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-22.159, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-21.017, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-14.033, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-5.857, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-4.716, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[2.268, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[10.451, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[11.593, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[18.577, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[26.76, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[27.901, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[34.885, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[43.047, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[44.188, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[51.172, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-59.422, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-58.28, 70.379, 2.933]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[59.396, 68.549, 5.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[103.823, 100.534, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_main_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[0, 64.355, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-58.922, 71.417, -4.482]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.select_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-48.967, 71.417, -4.482]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volume_KeyboardMaterial_0.geometry}
          material={materials.KeyboardMaterial}
          position={[-52.86, 71.417, -4.482]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[-40.416, 55.96, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[0, 28.62, 3.861]}
          rotation={[-Math.PI / 2, -0.595, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[0, 28.62, 2.183]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[-0.594, 28.162, 5.222]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[2.004, 30.104, 5.486]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[0, 28.62, 6.533]}
          rotation={[Math.PI / 2, -0.595, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[2.004, 30.104, 2.334]}
          rotation={[Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pedal_btm_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[16.739, 1.253, 6.186]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pedal_top_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[16.739, 1.253, 6.186]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wire_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[16.739, 1.069, 1.851]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jack_StandMaterial_0.geometry}
          material={materials.StandMaterial}
          position={[-24.957, 59.034, -8.644]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.light_light_0.geometry}
          material={materials.light}
          position={[-59.904, 71.376, -4.464]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.keyboard);
