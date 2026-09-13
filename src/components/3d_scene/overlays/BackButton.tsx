import Glass from '@/components/svg_filters/Glass';
import useCameraPositionStore from '@/stores/cameraPositionStore';
import useOverlayStore from '@/stores/overlayStore';
import cn from '@/utils/cn';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton() {
  const isBackButtonOverlayVisible = useOverlayStore(
    (state) => state.isBackButtonOverlayVisible,
  );
  const setCurrentCameraPosition = useCameraPositionStore(
    (state) => state.setCurrentCameraPosition,
  );

  if (!isBackButtonOverlayVisible) return null;

  return (
    <Glass
      className={cn(
        'absolute left-4 top-4 p-2 w-fit h-fit rounded-2xl z-100',
        'transition-colors hover:bg-white/10 cursor-pointer',
      )}
      onClick={() => setCurrentCameraPosition('default')}
    >
      <IoMdArrowRoundBack size={30} />
    </Glass>
  );
}
