import React from "react";
import Floor from "@/components/3d_scene/3d_models/Floor";
import HoloTable from "@/components/3d_scene/3d_models/holo_table/HoloTable";
import { ComputerRound } from "@/components/3d_scene/3d_models/computer/ComputerRound";
import Screen from "@/components/3d_scene/3d_models/computer/Screen";

export default function Scene() {

  return (
    <>
      <ambientLight intensity={5} color={"#37eaea"} />

      <Floor />

      <HoloTable
        rotation={[0, Math.PI / 3, 0]}
        position={[-2, 0, -2]}
      />

      <ComputerRound />
      <Screen
        position={[0, 1, -0.2]}
      />
    </>
  );
}
