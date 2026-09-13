import { ThreeElements } from '@react-three/fiber';
import gsap from 'gsap';
import { type Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { SpotLight as ThreeSpotLight } from 'three';

type SpotLightProps = Omit<ThreeElements['spotLight'], 'ref'> & {
  ref?: Ref<ThreeSpotLight>;
  isOn?: boolean;
  fadeInDuration?: number;
};

export default function SpotLight({
  ref,
  isOn = true,
  intensity = 20,
  fadeInDuration = 1,
  ...props
}: Readonly<SpotLightProps>) {
  const lightRef = useRef<ThreeSpotLight>(null);

  useImperativeHandle(ref, () => lightRef.current!, []);

  useEffect(() => {
    if (!lightRef.current) return;

    const tween = gsap.to(lightRef.current, {
      intensity: isOn ? intensity : 0,
      duration: fadeInDuration,
      ease: 'power2.inOut',
    });

    return () => {
      tween.kill();
    };
  }, [isOn, intensity, fadeInDuration]);

  return (
    <spotLight
      ref={lightRef}
      color='#fff0dd'
      intensity={0}
      angle={Math.PI / 5}
      penumbra={0.7}
      distance={8}
      decay={2}
      castShadow
      shadow-mapSize={[1024, 1024]}
      {...props}
    />
  );
}
