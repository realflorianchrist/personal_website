import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

export default function Spaceman(
  {
    scale,
    position
  }: {
    scale: Vector3;
    position: Vector3;
  }) {

  const spacemanRef = useRef(null);
  const { scene, animations } = useGLTF("/3d/spaceman.glb");
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    actions["Idle"]?.play();
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={[0, 2.2, 0]}>
      <primitive object={scene} />
    </mesh>
  );
}