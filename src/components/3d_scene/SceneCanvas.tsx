'use client';
import CanvasLoader from '@/components/3d_scene/CanvasLoader/CanvasLoader';
import Scene from '@/components/3d_scene/Scene';
import { setOrbitControls } from '@/services/orbitControlsService';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useCallback } from 'react';
import type { OrbitControls as Controls } from 'three-stdlib';
import WelcomeOverlay from './overlays/WelcomeOverlay';

export default function SceneCanvas() {
  const handleControlsRef = useCallback((controls: Controls | null) => {
    setOrbitControls(controls);
  }, []);

  return (
    <div className={'w-screen h-screen'}>
      <WelcomeOverlay />
      <Canvas
        camera={{
          position: [-3, 3, 3],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={handleControlsRef}
            minDistance={2}
            maxDistance={6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / (2 * 1.01)}
          />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
