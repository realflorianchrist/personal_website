import { JSX, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = JSX.IntrinsicElements["mesh"] & {
  dim?: [width?: number, height?: number, depth?: number]
};

export default function Wall({ dim, ...props }: ModelProps) {
  const texture = useTexture("/textures/room_wall.jpg");

  useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
    texture.needsUpdate = true;
  }, []);

  return (
    <mesh
      {...props}
    >
      <boxGeometry args={dim} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}