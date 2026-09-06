import cn from '@/utils/cn';
import Overlay3D, { Overlay3DProps } from './Overlay3D';

export type InfoOverlay3DProps = Overlay3DProps & { contentClassName?: string };

export default function InfoOverlay3D({
  dimensions = [1, 1],
  htmlScale = 2.5,
  contentClassName,
  children,
  ...props
}: InfoOverlay3DProps) {
  return (
    <Overlay3D
      dimensions={dimensions}
      htmlScale={htmlScale}
      htmlProps={{
        zIndexRange: [20, 11],
      }}
      {...props}
    >
      <div
        className={cn(
          'flex content-center text-center rounded-full p-4 select-none',
          'scale-20 hover:scale-110 bg-red-700 hover:bg-black/50 transition-all duration-200',
          contentClassName,
        )}
      >
        {children}
      </div>
    </Overlay3D>
  );
}
