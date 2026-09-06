'use client';
import Glass from '@/components/svg_filters/Glass';
import useOverlayStore from '@/stores/overlayStore';
import { FaPlay } from 'react-icons/fa';

export default function WelcomeOverlay() {
  const { isWelcomeOverlayVisible, setIsWelcomeOverlayVisible } =
    useOverlayStore();

  if (!isWelcomeOverlayVisible) return null;

  return (
    <Glass className='absolute left-4 top-4 z-100 w-90 rounded-2xl p-4'>
      <h2 className='mb-2 text-lg font-semibold'>👋 Hi, ich bin Florian.</h2>

      <p className='text-sm'>
        Softwareentwicklung ist für mich mehr als nur Code.
      </p>

      <p className='mt-2 text-sm'>
        Erkunde mein Zimmer und erfahre mehr über meine Projekte, Technologien
        und Erfahrungen.
      </p>

      <button
        onClick={() => setIsWelcomeOverlayVisible(false)}
        className='flex mt-4 ml-auto items-center gap-4 rounded-lg border-0.5 border-border px-3 py-1.5 text-sm transition-colors hover:bg-white/10 cursor-pointer'
      >
        Los gehts
        <FaPlay />
      </button>
    </Glass>
  );
}
