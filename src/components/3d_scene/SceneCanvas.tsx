'use client';
import CanvasLoader from '@/components/3d_scene/CanvasLoader/CanvasLoader';
import Scene from '@/components/3d_scene/Scene';
import { setOrbitControls } from '@/services/orbitControlsService';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useCallback, useState } from 'react';
import type { OrbitControls as Controls } from 'three-stdlib';
import BackButton from './overlays/BackButton';
import WelcomeOverlay from './overlays/WelcomeOverlay';
import PrepareScene from './PrepareScene';

export default function SceneCanvas() {
  const [isSceneReady, setIsSceneReady] = useState(false);
  const handleSceneReady = useCallback(() => setIsSceneReady(true), []);

  const handleControlsRef = useCallback((controls: Controls | null) => {
    setOrbitControls(controls);
  }, []);

  return (
    <div className={'relative isolate w-screen h-screen'}>
      {!isSceneReady && <CanvasLoader fullscreen />}
      {isSceneReady && <WelcomeOverlay />}
      <BackButton />
      <Canvas
        camera={{
          position: [0, 3, 0],
        }}
        shadows
      >
        <Suspense fallback={null}>
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
          <Scene isSceneReady={isSceneReady} />
          <PrepareScene onReady={handleSceneReady} />
        </Suspense>
      </Canvas>
    </div>
  );
}
