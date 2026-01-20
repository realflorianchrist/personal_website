import gsap from "gsap";
import * as THREE from "three";
import { RefObject, useCallback, useState } from "react";
import { Vector3 } from "three";

type GroupRef = RefObject<THREE.Group | null>;

export const useHoloAnimations = (
  openPosition: Vector3,
  closedPosition: Vector3
) => {

  const [initialised, setInitialised] = useState(false);

  const animateTo = (
    g: THREE.Group,
    mat: THREE.ShaderMaterial,
    pos: Vector3,
    opacity: number,
    durations?: {
      position?: number,
      opacity?: number,
    }
  ) => {
    gsap.killTweensOf(g.position);
    gsap.killTweensOf(mat.uniforms.uOpacity);

    gsap.to(g.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: durations?.position ?? 2,
      ease: "power2.inOut",
      overwrite: "auto",
      immediateRender: false
    });

    gsap.to(mat.uniforms.uOpacity, {
        value: opacity,
        duration: durations?.opacity ?? 2.5,
        ease: "power2.inOut",
        overwrite: "auto",
        immediateRender: false,
        delay: 0.05
      }
    );
  };

  const initClosed = useCallback((holoRef: GroupRef) => {
    if (!initialised) {
      const g = holoRef.current;
      if (!g) return;

      g.position.copy(closedPosition);

      // eslint-disable-next-line
      const mat = (g as any).userData.holoMat as THREE.ShaderMaterial | undefined;
      if(mat) mat.uniforms.uOpacity.value = 0;

      setInitialised(true);
    }
  }, [closedPosition, initialised]);

  const open = useCallback((holoRef: GroupRef) => {
    const g = holoRef.current;
    if (!g) return;

    // eslint-disable-next-line
    const mat = (g as any).userData.holoMat as THREE.ShaderMaterial | undefined;
    if (mat) animateTo(g, mat, openPosition, 1);
  }, [openPosition]);

  const close = useCallback((holoRef: GroupRef) => {
    const g = holoRef.current;
    if (!g) return;

    // eslint-disable-next-line
    const mat = (g as any).userData.holoMat as THREE.ShaderMaterial | undefined;
    if (mat) animateTo(g, mat, closedPosition, 0);
  }, [closedPosition]);

  return { open, close, initClosed };
};
