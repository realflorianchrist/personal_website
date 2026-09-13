import Door from '@/components/3d_scene/3d_models/bedroom/Door';
import Floor from '@/components/3d_scene/3d_models/bedroom/Floor';
import Wall from '@/components/3d_scene/3d_models/bedroom/Wall';
import Bed from '@/components/3d_scene/3d_models/bedroom/furniture/Bed';
import Desk from '@/components/3d_scene/3d_models/bedroom/furniture/Desk';
import GamingChair from '@/components/3d_scene/3d_models/bedroom/furniture/GamingChair';
import GlassTable from '@/components/3d_scene/3d_models/bedroom/furniture/GlassTable';
import Keyboard from '@/components/3d_scene/3d_models/bedroom/furniture/Keyboard';
import Stool from '@/components/3d_scene/3d_models/bedroom/furniture/Stool';
import TV from '@/components/3d_scene/3d_models/bedroom/furniture/TV';
import Wardrobe from '@/components/3d_scene/3d_models/bedroom/furniture/Wardrobe';
import BookShelf from '@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/BookShelf';
import MacComputer from '@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MacComputer';
import WallShelf from '@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/WallShelf';
import {
  getOrbitControls,
  pauseOrbitControls,
  resumeOrbitControls,
} from '@/services/orbitControlsService';
import useCameraPositionStore, {
  CameraPosition,
} from '@/stores/cameraPositionStore';
import useOverlayStore from '@/stores/overlayStore';
import useSpotLightsStore from '@/stores/spotLightsStore';
import { ThreeElements, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Group, SpotLight as ThreeSpotLight, Vector3 } from 'three';
import SpotLight from '../../SpotLight';
import MacOverlay from '../../overlays/MacOverlay';

export default function Bedroom(props: Readonly<ThreeElements['group']>) {
  const { camera } = useThree();

  const currentCameraPosition = useCameraPositionStore(
    (state) => state.currentCameraPosition,
  );
  const setCurrentCameraPosition = useCameraPositionStore(
    (state) => state.setCurrentCameraPosition,
  );
  const setIsWelcomeOverlayVisible = useOverlayStore(
    (state) => state.setIsWelcomeOverlayVisible,
  );
  const setIsBackButtonOverlayVisible = useOverlayStore(
    (state) => state.setIsBackButtonOverlayVisible,
  );

  const setActiveSpotLight = useSpotLightsStore(
    (state) => state.setActiveSpotLight,
  );
  const activeSpotLight = useSpotLightsStore((state) => state.activeSpotLight);

  const ceilingSpotLightRef = useRef<ThreeSpotLight | null>(null!);

  const displayRef = useRef<Group | null>(null);
  const macGroupRef = useRef<Group | null>(null);
  const macLightRef = useRef<ThreeSpotLight | null>(null);

  useLayoutEffect(() => {
    if (macLightRef.current && macGroupRef.current) {
      macLightRef.current.target = macGroupRef.current;
    }
  }, []);

  const zoomToDefault = () => {
    const controls = getOrbitControls();

    if (!controls || !displayRef.current) return;

    setIsBackButtonOverlayVisible(false);

    const lookAtTarget = new Vector3();
    const targetPosition = new Vector3(-3, 3, 3);

    const timeline = gsap.timeline({
      onComplete: () => {
        resumeOrbitControls();
      },
    });

    timeline.to(
      camera.position,
      {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );

    timeline.to(
      controls.target,
      {
        x: lookAtTarget.x,
        y: lookAtTarget.y,
        z: lookAtTarget.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );
  };

  const zoomToMacOS = () => {
    const controls = getOrbitControls();

    if (!controls || !displayRef.current) return;

    pauseOrbitControls();
    setIsWelcomeOverlayVisible(false);

    const lookAtTarget = new Vector3();

    displayRef.current.getWorldPosition(lookAtTarget);

    const targetPosition = lookAtTarget.clone().add(new Vector3(0, 0, 0.27));

    const timeline = gsap.timeline({
      onComplete: () => setIsBackButtonOverlayVisible(true),
    });

    timeline.to(
      camera.position,
      {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );

    timeline.to(
      controls.target,
      {
        x: lookAtTarget.x,
        y: lookAtTarget.y,
        z: lookAtTarget.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );
  };

  const cameraActions = {
    default: zoomToDefault,
    MacOS: zoomToMacOS,
  } satisfies Record<CameraPosition, () => void>;

  useEffect(() => {
    cameraActions[currentCameraPosition]();
  }, [currentCameraPosition]);

  return (
    <group {...props} dispose={null}>
      <spotLight
        ref={ceilingSpotLightRef}
        position={[0, 2.4, 0]}
        intensity={15}
        angle={Math.PI / 2.5}
        penumbra={0.7}
        distance={8}
        decay={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Floor width={5.5} depth={4.5} />

      <Wall dim={[5.5, 2.5, 0.2]} position={[0, 1.25, -2.35]} />

      <Door scale={[-1, 1, 1]} position={[2.23, 0, -2.32]} />

      <Wall
        dim={[4.7, 2.5, 0.2]}
        rotation={[0, -Math.PI / 2, 0]}
        position={[2.85, 1.25, -0.1]}
      />

      <Wardrobe scale={[1.6, 0.95, 1.2]} position={[-1.3, 0, -1.82]} />

      <WallShelf position={[0.85, 1.8, -2.14]} />

      <Desk
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, -1.1]}
        position={[2.75, 0, -1.95]}
      />

      <GamingChair rotation={[0, -Math.PI / 3, 0]} position={[1.5, 0, -1.3]} />

      <SpotLight
        ref={macLightRef}
        isOn={activeSpotLight == 'MacOS'}
        position={[1, 2.3, -0.5]}
      />
      <group ref={macGroupRef} position={[1, 0.72, -1.8]}>
        <MacComputer ref={displayRef} />
        <MacOverlay
          position={[-0.2, 0.3, 0.5]}
          onOverlayClick={(e) => {
            e.stopPropagation();
            setCurrentCameraPosition('MacOS');
          }}
          onPointerOverOverlay={() => setActiveSpotLight('MacOS')}
          onPointerOutOverlay={() => setActiveSpotLight(null)}
        />
      </group>

      <Bed
        scale={[0.85, 1.25, 1.1]}
        rotation={[0, Math.PI, 0]}
        position={[0, 0, 1.18]}
      />

      <Keyboard rotation={[0, Math.PI, 0]} position={[-1.9, 0, 2]} />

      <Stool position={[-1.9, 0, 1.5]} />

      <BookShelf position={[2.55, 0, 0.7]} />

      <TV
        scale={0.012}
        rotation={[0, (Math.PI * 3) / 4, 0]}
        position={[2.7, 0.7, 1.45]}
      />

      <GlassTable scale={0.3} position={[1.7, 0, 1.5]} />
    </group>
  );
}
