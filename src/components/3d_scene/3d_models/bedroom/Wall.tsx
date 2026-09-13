import { useTexture } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

type ModelProps = ThreeElements['mesh'] & {
  dim?: [width?: number, height?: number, depth?: number];
};

export default function Wall({ dim, ...props }: ModelProps) {
  const texture = useTexture('/textures/room_wall.jpg');

  useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
    texture.needsUpdate = true;
  }, []);

  return (
    <mesh castShadow receiveShadow {...props}>
      <boxGeometry args={dim} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
