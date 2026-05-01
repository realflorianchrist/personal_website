"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/3d_scene/Scene";
import Camera from "@/components/3d_scene/Camera";
import { OrbitControls } from "@react-three/drei";

export default function SceneCanvas() {
  return (
    <div className={"w-screen h-screen"}>
      <Canvas camera={{
        position: [-3, 3, 3]
      }}>
        {/*<Camera />*/}
        <OrbitControls
          // minDistance={2}
          // maxDistance={6}
          // minPolarAngle={Math.PI / 4}
          // maxPolarAngle={Math.PI / (2 * 1.01)}
        />
        <Scene />
      </Canvas>
    </div>
  );
}
