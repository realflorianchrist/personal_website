'use client';
import CanvasLoader from '@/components/3d_scene/CanvasLoader/CanvasLoader';
import Scene from '@/components/3d_scene/Scene';
import { setOrbitControls } from '@/services/orbitControlsService';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useCallback } from 'react';
import type { OrbitControls as Controls } from 'three-stdlib';
import BackButton from './overlays/BackButton';
import WelcomeOverlay from './overlays/WelcomeOverlay';

export default function SceneCanvas() {
  const handleControlsRef = useCallback((controls: Controls | null) => {
    setOrbitControls(controls);
  }, []);

  return (
    <div className={'w-screen h-screen'}>
      <WelcomeOverlay />
      <BackButton />
      <Canvas
        camera={{
          position: [0, 3, 0],
        }}
        shadows
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={handleControlsRef}
            minDistance={2}
            maxDistance={6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.4}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 6}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            zoomSpeed={0.6}
            panSpeed={0.5}
          />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
