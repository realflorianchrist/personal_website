import React, { useEffect, useRef } from "react";
import Table from "@/components/3d_scene/3d_models/Table";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/3d_scene/3d_models/Floor";
import * as THREE from "three";
import { Vector3 } from "three";
import HoloModel from "@/components/3d_scene/3d_models/HoloModel";
import modelUrls from "@/constants/model-urls";
import useSelectedProfessionStore, { professions } from "@/stores/selectedProfessionStore";
import { useHoloAnimations } from "@/animations/holoAnimations";

export default function Scene() {
  const { profession } = useSelectedProfessionStore();

  const openPosition: Vector3 = new Vector3(0, 0.6, 0);
  const closedPosition: Vector3 = new Vector3(0, 0.3, 0);
  const { open, close, initClosed } = useHoloAnimations(openPosition, closedPosition);


  const holoByIdRef = useRef(new Map<number, THREE.Group>());

  const setHoloRef = (id: number) => (node: THREE.Group | null) => {
    const map = holoByIdRef.current;
    if (node) map.set(id, node);
    else map.delete(id);
  };

  useEffect(() => {
    holoByIdRef.current.forEach((g) => {
      initClosed(g);
    });
  }, [initClosed]);


  useEffect(() => {
    const selectedId = profession?.id;

    holoByIdRef.current.entries().forEach(([id, ref]) => {
      if (!ref) return;

      if (Number(id) === selectedId) {
        open(ref);
      } else {
        close(ref);
      }
    });
  }, [profession?.id, open, close, holoByIdRef]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={5} color={"#37eaea"} />

      <Floor />

      <group>
        <Table scale={10} />

        <HoloModel
          ref={setHoloRef(professions.drawer.id)}
          professionId={professions.drawer.id}
          src={modelUrls.excavator}
          scale={0.015}
          rotation={[0, Math.PI / 2, 0]}
        />

        <HoloModel
          ref={setHoloRef(professions.student.id)}
          professionId={professions.student.id}
          src={modelUrls.graduationHat}
          scale={0.2}
        />

        <HoloModel
          ref={setHoloRef(professions.softwareEngineer.id)}
          professionId={professions.softwareEngineer.id}
          src={modelUrls.macbook}
        />
      </group>
    </>
  );
}
