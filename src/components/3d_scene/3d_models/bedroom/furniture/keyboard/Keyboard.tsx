import modelUrls from '@/constants/modelUrls';
import { useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { getKeyRotation } from './keyboardPlayback';
import { splitKeyboardKeys } from './splitKeyboardKeys';

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

const keySources = [
  { node: 'Cube003_KeyboardMaterial_0', position: [-54.768, 68.549, 5.294] },
  { node: 'Cube004_KeyboardMaterial_0', position: [-53.627, 70.379, 2.933] },
  { node: 'Cube001_KeyboardMaterial_0', position: [-46.643, 70.379, 2.933] },
  { node: 'Cube002_KeyboardMaterial_0', position: [-38.459, 68.549, 5.294] },
  { node: 'Cube005_KeyboardMaterial_0', position: [-37.318, 70.379, 2.933] },
  { node: 'Cube006_KeyboardMaterial_0', position: [-30.333, 70.379, 2.933] },
  { node: 'Cube007_KeyboardMaterial_0', position: [-22.159, 68.549, 5.294] },
  { node: 'Cube008_KeyboardMaterial_0', position: [-21.017, 70.379, 2.933] },
  { node: 'Cube009_KeyboardMaterial_0', position: [-14.033, 70.379, 2.933] },
  { node: 'Cube010_KeyboardMaterial_0', position: [-5.857, 68.549, 5.294] },
  { node: 'Cube011_KeyboardMaterial_0', position: [-4.716, 70.379, 2.933] },
  { node: 'Cube012_KeyboardMaterial_0', position: [2.268, 70.379, 2.933] },
  { node: 'Cube013_KeyboardMaterial_0', position: [10.451, 68.549, 5.294] },
  { node: 'Cube014_KeyboardMaterial_0', position: [11.593, 70.379, 2.933] },
  { node: 'Cube015_KeyboardMaterial_0', position: [18.577, 70.379, 2.933] },
  { node: 'Cube016_KeyboardMaterial_0', position: [26.76, 68.549, 5.294] },
  { node: 'Cube017_KeyboardMaterial_0', position: [27.901, 70.379, 2.933] },
  { node: 'Cube018_KeyboardMaterial_0', position: [34.885, 70.379, 2.933] },
  { node: 'Cube019_KeyboardMaterial_0', position: [43.047, 68.549, 5.294] },
  { node: 'Cube020_KeyboardMaterial_0', position: [44.188, 70.379, 2.933] },
  { node: 'Cube021_KeyboardMaterial_0', position: [51.172, 70.379, 2.933] },
  { node: 'Cube022_KeyboardMaterial_0', position: [-59.422, 68.549, 5.294] },
  { node: 'Cube023_KeyboardMaterial_0', position: [-58.28, 70.379, 2.933] },
  { node: 'Cube024_KeyboardMaterial_0', position: [59.396, 68.549, 5.294] },
] as const;

type KeyboardProps = ThreeElements['group'] & {
  playing?: boolean;
  loop?: boolean;
  playbackSpeed?: number;
  audioOffset?: number;
};

export default function Keyboard({
  playing = false,
  loop = true,
  playbackSpeed = 1,
  audioOffset = 3.755208,
  ...props
}: Readonly<KeyboardProps>) {
  const keyMeshes = useRef<(THREE.Mesh | null)[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const speed = Number.isFinite(playbackSpeed)
    ? THREE.MathUtils.clamp(playbackSpeed, 0.25, 4)
    : 1;

  useEffect(() => {
    // Keep audio independent of the optional HTML overlay and the Three scene.
    const audio = new Audio('/audio/interstellar-main-theme.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = loop;
    audio.playbackRate = speed;
    if (!playing || playbackSpeed <= 0) {
      audio.pause();
      return;
    }

    void audio.play().catch(() => {
      // Autoplay may be blocked by the browser.
    });
    return () => {
      audio.pause();
    };
  }, [playing, loop, playbackSpeed, speed]);

  useFrame(() => {
    const audio = audioRef.current;
    const time = (audio?.currentTime ?? 0) + audioOffset;
    keyMeshes.current.forEach((mesh, index) => {
      if (mesh)
        mesh.rotation.x = audio?.ended ? 0 : getKeyRotation(index, time);
    });
  });

  const { nodes, materials } = useGLTF(
    modelUrls.keyboard,
  ) as unknown as GLTFResult;

  const keys = useMemo(
    () =>
      keySources
        .flatMap(({ node, position }) =>
          splitKeyboardKeys(nodes[node].geometry, position),
        )
        .sort((a, b) => a.position[0] - b.position[0])
        .map((key, index) => ({
          ...key,
          index,
          name: `keyboard-key-${index}`,
        })),
    [nodes],
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {keys.map(({ geometry, position, name, index }) => (
          <mesh
            key={name}
            ref={(mesh) => {
              keyMeshes.current[index] = mesh;
            }}
            name={name}
            castShadow
            receiveShadow
            geometry={geometry}
            material={materials.KeyboardMaterial}
            position={position}
            userData={{
              keyIndex: index,
              midiNote: index + 21,
              restPosition: position,
            }}
          />
        ))}
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
