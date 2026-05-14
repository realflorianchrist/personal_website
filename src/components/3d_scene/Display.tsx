import { Html } from "@react-three/drei";
import { JSX } from "react";
import MacOS from "@/components/mac_os/MacOS";

type Props = JSX.IntrinsicElements["mesh"] & {
  dimensions?: [width?: number, height?: number];
}

export default function Display({ dimensions = [1, 1], ...props }: Props) {
  const [w = 1, h = 1] = dimensions;

  const pixelsPerUnit = 400;
  const scale = 5;

  return (
    <mesh {...props}>
      <Html
        transform
        occlude
        center
        distanceFactor={1}
        scale={1 / scale}
        className={"overflow-hidden bg-transparent"}
      >
        <iframe
          src="/macos"
          title={"MacOS"}
          style={{
            width: `${w * pixelsPerUnit * scale}px`,
            height: `${h * pixelsPerUnit * scale}px`
          }}
        />
      </Html>
    </mesh>
  );
}