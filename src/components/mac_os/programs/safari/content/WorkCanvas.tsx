import { Canvas } from '@react-three/fiber';
import WorkScene from './WorkScene';

export default function WorkCanvas() {
  return (
    <div className={'w-full h-full bg-black'}>
      <Canvas>
        <WorkScene />
      </Canvas>
    </div>
  );
}
