import Overlay3D, { Overlay3DProps } from './Overlay3D';

export default function Display({
  htmlScale = 1 / 5,
  htmlProps,
  ...props
}: Overlay3DProps) {
  return (
    <Overlay3D
      htmlScale={htmlScale}
      htmlProps={{
        sprite: false,
        occlude: false,
        zIndexRange: [10, 0],
        ...htmlProps,
      }}
      {...props}
    >
      <iframe src='/macos' title={'MacOS'} />
    </Overlay3D>
  );
}
