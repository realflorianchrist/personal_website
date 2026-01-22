"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/3d_scene/Scene";
import { Vector3 } from "three";
import Camera from "@/components/3d_scene/Camera";
import { OrbitControls } from "@react-three/drei";

export default function SceneCanvas() {
  return (
    <div className={"w-screen h-screen"}>
      <Canvas>
        {/*<OrbitControls />*/}
        <Camera />
        <Scene />
      </Canvas>
    </div>
  );
}
