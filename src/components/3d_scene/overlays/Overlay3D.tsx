import { Html } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { ComponentProps } from 'react';

type DreiHtmlProps = ComponentProps<typeof Html>;

export type Overlay3DProps = ThreeElements['group'] & {
  dimensions?: [width?: number, height?: number];
  htmlScale?: number;
  htmlProps?: DreiHtmlProps;
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Overlay3D({
  dimensions = [1, 1],
  htmlScale = 2,
  htmlProps,
  children,
  onOverlayClick,
  ...props
}: Overlay3DProps) {
  const [w = 1, h = 1] = dimensions;

  const pixelsPerUnit = 400;

  return (
    <group {...props}>
      <Html
        transform
        sprite
        center
        distanceFactor={1}
        scale={htmlScale}
        className={'bg-transparent'}
        {...htmlProps}
      >
        <div
          className={'*:block *:size-full'}
          style={{
            width: `${(w * pixelsPerUnit) / htmlScale}px`,
            height: `${(h * pixelsPerUnit) / htmlScale}px`,
          }}
          onClick={onOverlayClick}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}
