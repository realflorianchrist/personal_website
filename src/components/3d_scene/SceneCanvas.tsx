'use client'
import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/3d_scene/Scene";

export default function SceneCanvas() {
  return (
    <div className={'w-screen h-screen'}>
      <Canvas camera={{ position: [-1.5, 1, 2] }}>
        <Scene />
      </Canvas>
    </div>
  );
}
