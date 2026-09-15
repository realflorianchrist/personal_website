import cn from '@/utils/cn';
import InfoOverlay3D, { InfoOverlay3DProps } from './InfoOverlay3D';

export default function MacInfoOverlay({
  contentClassName,
  ...props
}: InfoOverlay3DProps) {
  return (
    <InfoOverlay3D
      contentClassName={cn('cursor-pointer', contentClassName)}
      {...props}
    >
      Erfahre mehr über mich und meine Projekte.
    </InfoOverlay3D>
  );
}
