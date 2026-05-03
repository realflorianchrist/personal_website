import { Html } from "@react-three/drei";
import { JSX } from "react";

type Props = JSX.IntrinsicElements["mesh"] & {
  dimensions?: [width?: number, height?: number];
}

export default function Display({ dimensions = [1, 1], ...props }: Props) {
  const [w = 1, h = 1] = dimensions;

  const pixelsPerUnit = 400;
  const scale = 4;

  return (
    <mesh {...props}>
      <Html
        transform
        occlude
        center
        distanceFactor={1}
        scale={1 / scale}
      >
        <div
          className="flex flex-col items-center justify-center bg-white text-black overflow-hidden"
          style={{
            width: `${w * pixelsPerUnit * scale}px`,
            height: `${h * pixelsPerUnit * scale}px`
          }}
        >
          <div className={"w-full h-full bg-red-50 overflow-x-scroll"}>
            <div>Hello my name is Florian</div>
            <div>These are my projects</div>
          </div>
        </div>
      </Html>
    </mesh>
  );
}