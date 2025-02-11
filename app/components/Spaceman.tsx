import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function Spaceman(
  {
    scale,
    position,
    isMobile
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
      easing.dampE(
        spacemanRef.current.rotation,
        [state.pointer.y / 10, initialRotationY + state.pointer.x / 10, 0],
        0.5,
        delta
      );
    }
  });

  return (
    <mesh ref={spacemanRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
}