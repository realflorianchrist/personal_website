import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1.2, 1.25]}
      onUpdate={(cam) => cam.lookAt(0, 0.75, 0)}
    />
  );
}