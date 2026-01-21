import React, { useEffect, useRef } from "react";
import Table from "@/components/3d_scene/3d_models/Table";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/3d_scene/3d_models/Floor";
import * as THREE from "three";
import { Vector3 } from "three";
import HoloModel from "@/components/3d_scene/3d_models/HoloModel";
import modelUrls from "@/constants/model-urls";
import useSelectedProfessionStore from "@/stores/selectedProfessionStore";
import { useHoloAnimations } from "@/animations/holoAnimations";

export default function Scene() {
  const { profession } = useSelectedProfessionStore();

  const openPosition: Vector3 = new Vector3(0, 0.6, 0);
  const closedPosition: Vector3 = new Vector3(0, 0.3, 0);
  const { open, close, initClosed } = useHoloAnimations(openPosition, closedPosition);

  const excavatorRef = useRef<THREE.Group>(null);
  const macbookRef = useRef<THREE.Group>(null);
  const graduationHatRef = useRef<THREE.Group>(null);


  useEffect(() => {
    if (excavatorRef.current) initClosed(excavatorRef);
    if (macbookRef.current) initClosed(macbookRef);
    if (graduationHatRef.current) initClosed(graduationHatRef);
  }, [initClosed]);

  useEffect(() => {
    const id = profession?.id;

    if (!id) {
      if (excavatorRef.current) close(excavatorRef);
      if (macbookRef.current) close(macbookRef);
      if (graduationHatRef.current) close(graduationHatRef)
      return;
    }

    if (id === 1) {
      if (macbookRef.current) close(macbookRef);
      if (excavatorRef.current) open(excavatorRef);
      if (graduationHatRef.current) close(graduationHatRef);
    }

    if (id === 2) {
      if (excavatorRef.current) close(excavatorRef);
      if (macbookRef.current) open(macbookRef);
      if (graduationHatRef.current) close(graduationHatRef);
    }

    if (id === 3) {
      if (excavatorRef.current) close(excavatorRef);
      if (macbookRef.current) close(macbookRef);
      if (graduationHatRef.current) open(graduationHatRef);
    }
  }, [profession?.id, open, close]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={5} color={"#37eaea"} />

      <Floor />

      <group
      >
        <Table scale={10} />

        <HoloModel
          ref={excavatorRef}
          src={modelUrls.excavator}
          scale={0.015}
          rotation={[0, Math.PI / 2, 0]}
        />

        <HoloModel
          ref={macbookRef}
          src={modelUrls.macbook}
        />

        <HoloModel
          ref={graduationHatRef}
          src={modelUrls.graduationHat}
          scale={0.2}
        />
      </group>
    </>
  );
}
