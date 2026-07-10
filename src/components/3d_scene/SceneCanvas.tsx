"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/3d_scene/Scene";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "@/components/3d_scene/CanvasLoader/CanvasLoader";
import useOrbitControlsStore from "@/stores/orbitControlsStore";

export default function SceneCanvas() {

  const { setControls } = useOrbitControlsStore();

  return (
    <div className={"w-screen h-screen"}>
      <Canvas camera={{
        position: [-3, 3, 3]
      }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={(ref) => setControls(ref)}
            // minDistance={2}
            // maxDistance={6}
            // minPolarAngle={Math.PI / 4}
            // maxPolarAngle={Math.PI / (2 * 1.01)}
          />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
