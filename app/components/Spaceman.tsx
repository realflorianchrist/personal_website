import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export default function Spaceman(
  {
    scale,
    position,
    isMobile,
  }: {
    scale: Vector3;
    position: Vector3;
    isMobile: boolean;
  }) {

  const spacemanRef = useRef<Mesh>(null);
  const { scene, animations } = useGLTF("/3d/spaceman.glb");
  const { actions } = useAnimations(animations, spacemanRef);

  const initialRotationY = 2.2;

  useEffect(() => {
    actions["Idle"]?.play();
  }, [actions]);

  useEffect(() => {
    if (spacemanRef.current) {
      spacemanRef.current.rotation.set(0, initialRotationY, 0);
    }
  }, []);

  useFrame((state, delta) => {
    if (!isMobile && spacemanRef.current) {
      spacemanRef.current.rotation.set(
        state.pointer.y / 15,
        initialRotationY + state.pointer.x / 15,
        0
      );
    }
  });

  return (
    <mesh ref={spacemanRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
}