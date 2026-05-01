import { PerspectiveCamera } from "@react-three/drei";
import { PerspectiveCameraProps } from "@react-three/drei/core/PerspectiveCamera";

export default function Camera(props: PerspectiveCameraProps) {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1.2, 1.25]}
      onUpdate={(cam) => cam.lookAt(0, 0.75, 0)}
      {...props}
    />
  );
}