import { Html, useProgress } from '@react-three/drei';
import styles from './CanvasLoader.module.css';

export default function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className={'flex flex-col items-center justify-center'}
    >
      <span className={styles['canvas-loader']}></span>
      <p className={'mt-10'}>{progress.toFixed(0)}%</p>
    </Html>
  );
}
