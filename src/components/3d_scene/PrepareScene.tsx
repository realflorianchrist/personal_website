import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import type { Object3D } from 'three';

export default function PrepareScene({ onReady }: { onReady: () => void }) {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    let cancelled = false;

    async function prepare() {
      try {
        await gl.compileAsync(scene, camera);
        if (cancelled) return;

        // Render all objects once to upload textures/geometry and prepare shadows.
        // A cloned camera leaves the animation's starting position untouched.
        const warmupCamera = camera.clone();
        warmupCamera.position.set(-3, 3, 3);
        warmupCamera.lookAt(0, 0, 0);
        warmupCamera.updateMatrixWorld();
        const culling = new Map<Object3D, boolean>();

        try {
          scene.traverse((object) => {
            culling.set(object, object.frustumCulled);
            object.frustumCulled = false;
          });
          gl.render(scene, warmupCamera);
        } finally {
          culling.forEach((value, object) => {
            object.frustumCulled = value;
          });
        }

        // Keep the loading cover in place through a normal frame as well.
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => resolve()),
        );
        if (cancelled) return;
        gl.render(scene, camera);
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => resolve()),
        );
      } catch (error) {
        console.error('Scene shader preparation failed:', error);
      } finally {
        // Allow normal rendering to proceed even if preparation fails.
        if (!cancelled) onReady();
      }
    }

    void prepare();

    return () => {
      cancelled = true;
    };
  }, [gl, scene, camera, onReady]);

  return null;
}
