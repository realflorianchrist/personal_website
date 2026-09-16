import { Html } from '@react-three/drei';
import styles from './CanvasLoader.module.css';

export default function CanvasLoader({ fullscreen = false }: { fullscreen?: boolean }) {
  const content = (
    <div className={styles.content} role='status' aria-live='polite'>
      <div className={styles.illustration} aria-hidden='true'>
        <svg viewBox='0 0 160 160' fill='none' className={styles.room}>
          <path className={styles.wall} d='M24 105V49L80 21L136 49V105L80 135Z' />
          <path className={styles.structure} d='M80 21V79M24 105L80 79L136 105' />
          <path className={styles.desk} d='M48 90L82 73L111 88L77 105ZM48 90V108M77 105V121M111 88V106' />
          <path className={styles.screen} d='M73 76V53L95 64V87ZM84 82V89L91 93L78 86' />
          <path className={styles.structure} d='M36 55L61 43V68L36 80ZM48.5 49V74M36 67L61 55' />
        </svg>
      </div>
      <p className={styles.eyebrow}>FLORIANS ZIMMER</p>
      <h2 className={styles.title}>Gleich kannst du dich umsehen.</h2>
      <p className={styles.description}>Mein digitales Zimmer wird vorbereitet.</p>
      <div className={styles.dots} aria-hidden='true'>
        <span /><span /><span />
      </div>
    </div>
  );

  if (fullscreen) return <div className={styles.cover}>{content}</div>;

  return <Html as='div' center>{content}</Html>;
}
