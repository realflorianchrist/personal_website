import Door from '@/components/3d_scene/3d_models/bedroom/Door';
import Floor from '@/components/3d_scene/3d_models/bedroom/Floor';
import Wall from '@/components/3d_scene/3d_models/bedroom/Wall';
import Bed from '@/components/3d_scene/3d_models/bedroom/furniture/Bed';
import Desk from '@/components/3d_scene/3d_models/bedroom/furniture/Desk';
import GamingChair from '@/components/3d_scene/3d_models/bedroom/furniture/GamingChair';
import GlassTable from '@/components/3d_scene/3d_models/bedroom/furniture/GlassTable';
import Keyboard from '@/components/3d_scene/3d_models/bedroom/furniture/keyboard/Keyboard';
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
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Euler, Group, SpotLight as ThreeSpotLight, Vector3 } from 'three';
import SpotLight from '../../SpotLight';
import InfoOverlay3D from '../../overlays/InfoOverlay3D';
import { rotate } from 'three/tsl';

export default function Bedroom({
  isSceneReady,
  ...props
}: Readonly<ThreeElements['group'] & { isSceneReady: boolean }>) {
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

  const [isKeyboardPlaying, setIsKeyboardPlaying] = useState(false);
  const [chairPosition, setChairPosition] = useState<ChairPosition>('rotated');

  const ceilingSpotLightRef = useRef<ThreeSpotLight | null>(null!);

  const displayRef = useRef<Group | null>(null);
  const macGroupRef = useRef<Group | null>(null);
  const macLightRef = useRef<ThreeSpotLight | null>(null);
  const gamingChairRef = useRef<Group | null>(null);

  const keyboardRef = useRef<Group | null>(null);
  const keyboardGroupRef = useRef<Group | null>(null);
  const keyboardLightRef = useRef<ThreeSpotLight | null>(null);

  useLayoutEffect(() => {
    if (macLightRef.current && macGroupRef.current) {
      macLightRef.current.target = macGroupRef.current;
    }

    if (keyboardLightRef.current && keyboardGroupRef.current) {
      keyboardLightRef.current.target = keyboardGroupRef.current;
    }
  }, []);

  useEffect(() => {
    if (!isSceneReady) return;
    rotateGamingChair(chairPosition);
  }, [chairPosition, isSceneReady]);

  const zoomToTarget = (
    lookAtTarget: Vector3,
    targetPosition: Vector3,
    onComplete: () => void,
  ) => {
    const controls = getOrbitControls();

    if (!controls || !displayRef.current) return;

    const timeline = gsap.timeline({
      onComplete: onComplete,
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

  const zoomToDefault = () => {
    const controls = getOrbitControls();

    if (!controls) return;

    pauseOrbitControls();
    setIsBackButtonOverlayVisible(false);

    const lookAtTarget = new Vector3();
    const targetPosition = new Vector3(-3, 3, 3);

    const onComplete = () => {
      setActiveSpotLight(null);
      resumeOrbitControls();
    };

    zoomToTarget(lookAtTarget, targetPosition, onComplete);
    setChairPosition('rotated');
  };

  const zoomToMacOS = () => {
    const controls = getOrbitControls();

    if (!controls || !displayRef.current) return;

    pauseOrbitControls();
    setIsWelcomeOverlayVisible(false);

    const lookAtTarget = new Vector3();

    displayRef.current.getWorldPosition(lookAtTarget);

    const targetPosition = lookAtTarget.clone().add(new Vector3(0, 0, 0.27));

    const onComplete = () => {
      setIsBackButtonOverlayVisible(true);
    };

    zoomToTarget(lookAtTarget, targetPosition, onComplete);
    setChairPosition('desk');
  };

  type ChairPosition = 'desk' | 'rotated';

  const chairPositions = {
    desk: {
      position: new Vector3(1, 0, -1.3),
      rotation: new Euler(0, -Math.PI, 0),
    },
    rotated: {
      position: new Vector3(1.5, 0, -1.3),
      rotation: new Euler(0, -Math.PI / 3, 0),
    },
  } satisfies Record<ChairPosition, { position: Vector3; rotation: Euler }>;

  const rotateGamingChair = (position: ChairPosition) => {
    if (!gamingChairRef.current) return;

    let targetPos = chairPositions[position].position;
    let targetRot = chairPositions[position].rotation;

    const timeline = gsap.timeline();

    timeline.to(
      gamingChairRef.current.position,
      {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );

    timeline.to(
      gamingChairRef.current.rotation,
      {
        x: targetRot.x,
        y: targetRot.y,
        z: targetRot.z,
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0,
    );
  };

  const zoomToKeyboard = () => {
    const controls = getOrbitControls();

    if (!controls || !keyboardRef.current) return;

    pauseOrbitControls();
    setIsWelcomeOverlayVisible(false);

    const lookAtTarget = new Vector3();

    keyboardRef.current
      .getWorldPosition(lookAtTarget)
      .add(new Vector3(0, 0.5, 0));

    const targetPosition = lookAtTarget.clone().add(new Vector3(0, 0.5, -0.5));

    const onComplete = () => {
      setIsBackButtonOverlayVisible(true);
    };

    zoomToTarget(lookAtTarget, targetPosition, onComplete);
  };

  const cameraActions = {
    default: zoomToDefault,
    MacOS: zoomToMacOS,
    Keyboard: zoomToKeyboard,
  } satisfies Record<CameraPosition, () => void>;

  useEffect(() => {
    if (!isSceneReady) return;
    cameraActions[currentCameraPosition]();
  }, [currentCameraPosition, isSceneReady]);

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

      <GamingChair
        ref={gamingChairRef}
        rotation={[0, -Math.PI, 0]}
        position={[1, 0, -1.3]}
      />

      <SpotLight
        ref={macLightRef}
        isOn={activeSpotLight == 'MacOS'}
        position={[1, 2.3, -0.5]}
      />
      <group ref={macGroupRef} position={[1, 0.72, -1.8]}>
        <MacComputer ref={displayRef} />
        <InfoOverlay3D
          contentClassName={'cursor-pointer'}
          position={[-0.2, 0.3, 0.5]}
          onOverlayClick={(e) => {
            e.stopPropagation();
            setCurrentCameraPosition('MacOS');
          }}
          onPointerOverOverlay={() => setActiveSpotLight('MacOS')}
          onPointerOutOverlay={() => setActiveSpotLight(null)}
        >
          Entdecke meine Projekte und lerne mich kennen.
        </InfoOverlay3D>
      </group>

      <Bed
        scale={[0.85, 1.25, 1.1]}
        rotation={[0, Math.PI, 0]}
        position={[0, 0, 1.18]}
      />

      <SpotLight
        ref={keyboardLightRef}
        isOn={activeSpotLight == 'Keyboard'}
        position={[-0.5, 2.3, -0.5]}
        angle={Math.PI / 10}
        intensity={50}
      />
      <group
        ref={keyboardGroupRef}
        position={[-1.9, 0, 2]}
        onClick={() => {
          setIsKeyboardPlaying(!isKeyboardPlaying);
        }}
      >
        <Keyboard
          ref={keyboardRef}
          playing={isKeyboardPlaying}
          rotation={[0, Math.PI, 0]}
        />
        <InfoOverlay3D
          isVisable={currentCameraPosition != 'Keyboard'}
          contentClassName={'hover:scale-70 cursor-pointer'}
          position={[0, 0.75, -0.3]}
          onOverlayClick={(e) => {
            e.stopPropagation();
            setCurrentCameraPosition('Keyboard');
            setActiveSpotLight('Keyboard');
            setIsKeyboardPlaying(true);
          }}
          onPointerOverOverlay={() => setActiveSpotLight('Keyboard')}
          onPointerOutOverlay={() => setActiveSpotLight(null)}
        >
          Eine kleine Pause mit Musik.
        </InfoOverlay3D>
      </group>

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
