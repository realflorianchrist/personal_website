import React from "react";
import Floor from "@/components/3d_scene/3d_models/Floor";
import Kallax from "@/components/3d_scene/3d_models/furniture/Kallax";
import Wardrobe from "@/components/3d_scene/3d_models/furniture/Wardrobe";
import Shelf from "@/components/3d_scene/3d_models/furniture/Shelf";
import Bed from "@/components/3d_scene/3d_models/furniture/Bed";
import TV from "@/components/3d_scene/3d_models/furniture/TV";
import GlassTable from "@/components/3d_scene/3d_models/furniture/GlassTable";
import Keyboard from "@/components/3d_scene/3d_models/furniture/Keyboard";
import Stool from "@/components/3d_scene/3d_models/furniture/Stool";
import Desk from "@/components/3d_scene/3d_models/furniture/Desk";
import PS5 from "@/components/3d_scene/3d_models/furniture/PS5";
import MacComputer from "@/components/3d_scene/3d_models/furniture/mac_computer/MacComputer";
import Wall from "@/components/3d_scene/3d_models/Wall";


export default function Scene() {

  return (
    <>
      <ambientLight intensity={2.5} color={"#ffffff"} />

      <Floor width={5.5} depth={4.5} />

      <Wall
        dim={[4.6, 2.5, 0.2]}
        position={[-0.45, 1.25, -2.35]}
      />

      <Wall
        dim={[0.9, 0.5, 0.2]}
        position={[2.3, 2.25, -2.35]}
      />

      <Wall
        dim={[4.7, 2.5, 0.2]}
        rotation={[0, -Math.PI / 2, 0]}
        position={[2.85, 1.25, -0.1]}
      />

      {/*<HoloTable*/}
      {/*  rotation={[0, Math.PI / 3, 0]}*/}
      {/*  position={[-2, 0, -2]}*/}
      {/*/>*/}

      <Wardrobe
        scale={[1.6, 0.95, 1.2]}
        position={[-1.3, 0, -1.82]}
      />

      <Shelf
        scale={[1.3, 1, 1]}
        position={[0.9, 0, -2.14]}
      />

      <Desk
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, -1.1]}
        position={[2.75, 0, -1.95]}
      />

      <MacComputer
        position={[1, 0.72, -1.8]}
      />

      <Bed
        scale={[0.85, 1.25, 1.1]}
        rotation={[0, Math.PI, 0]}
        position={[0, 0, 1.18]}
      />

      <Keyboard
        rotation={[0, Math.PI, 0]}
        position={[-1.9, 0, 2]}
      />

      <Stool
        position={[-1.9, 0, 1.5]}
      />

      <Kallax
        rotation={[-Math.PI / 2, 0, 0]}
        position={[2.55, 0.56, 0.7]}
      />

      <PS5
        rotation={[0, -Math.PI / 2, 0]}
        position={[2.7, 1.12, 0.6]}
      />

      <TV
        scale={0.012}
        rotation={[0, Math.PI * 3 / 4, 0]}
        position={[2.7, 0.7, 1.45]}
      />

      <GlassTable
        scale={0.3}
        position={[1.7, 0, 1.5]}
      />


      {/*<ComputerRound />*/}
      {/*<Screen*/}
      {/*  position={[0, 1, -0.2]}*/}
      {/*/>*/}
    </>
  );
}
