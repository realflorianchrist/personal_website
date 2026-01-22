import React, { JSX, useEffect, useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import Table from "@/components/3d_scene/3d_models/holo_table/Table";
import HoloModel from "@/components/3d_scene/3d_models/holo_table/HoloModel";
import useSelectedProfessionStore, { professions } from "@/stores/selectedProfessionStore";
import modelUrls from "@/constants/model-urls";
import { useHoloAnimations } from "@/animations/holoAnimations";

type Props = JSX.IntrinsicElements["group"];

export default function HoloTable(props: Props) {

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
    <group {...props}>
      <Table scale={10} />

      <HoloModel
        ref={setHoloRef(professions.drawer.id)}
        professionId={professions.drawer.id}
        src={modelUrls.excavator}
        scale={0.02}
        rotation={[0, Math.PI / 2, 0]}
      />

      <HoloModel
        ref={setHoloRef(professions.student.id)}
        professionId={professions.student.id}
        src={modelUrls.graduationHat}
        scale={0.25}
      />

      <HoloModel
        ref={setHoloRef(professions.softwareEngineer.id)}
        professionId={professions.softwareEngineer.id}
        src={modelUrls.computer}
        scale={0.5}
      />
    </group>
  );
}
