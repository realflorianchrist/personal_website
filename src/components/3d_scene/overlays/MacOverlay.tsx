import InfoOverlay3D, { InfoOverlay3DProps } from './InfoOverlay3D';

export default function MacOverlay({
  contentClassName,
  ...props
}: InfoOverlay3DProps) {
  return (
    <InfoOverlay3D contentClassName={'cursor-pointer'} {...props}>
      Erfahre mehr über mich und meine Projekte.
    </InfoOverlay3D>
  );
}
