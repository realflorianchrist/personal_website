import { Html, useProgress } from '@react-three/drei';
import styles from './CanvasLoader.module.css';

export default function CanvasLoader({ fullscreen = false }: { fullscreen?: boolean }) {
  const { progress } = useProgress();
  const content = (
    <>
      <span className={styles['canvas-loader']}></span>
      <p className={'mt-10'}>{progress.toFixed(0)}%</p>
    </>
  );

  if (fullscreen) {
    return (
      <div
        role='status'
        aria-label='Zimmer wird geladen'
        className='absolute inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white'
      >
        {content}
      </div>
    );
  }

  return (
    <Html
      as='div'
      center
      className={'flex flex-col items-center justify-center'}
    >
      {content}
    </Html>
  );
}
