import React, { JSX } from "react";
import Floor from "@/components/3d_scene/3d_models/bedroom/Floor";
import Wall from "@/components/3d_scene/3d_models/bedroom/Wall";
import Wardrobe from "@/components/3d_scene/3d_models/bedroom/furniture/Wardrobe";
import Shelf from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/Shelf";
import Desk from "@/components/3d_scene/3d_models/bedroom/furniture/Desk";
import MacComputer from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MacComputer";
import Bed from "@/components/3d_scene/3d_models/bedroom/furniture/Bed";
import Keyboard from "@/components/3d_scene/3d_models/bedroom/furniture/Keyboard";
import Stool from "@/components/3d_scene/3d_models/bedroom/furniture/Stool";
import BookShelf from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/BookShelf";
import TV from "@/components/3d_scene/3d_models/bedroom/furniture/TV";
import GlassTable from "@/components/3d_scene/3d_models/bedroom/furniture/GlassTable";
import GamingChair from "@/components/3d_scene/3d_models/bedroom/furniture/GamingChair";
import Door from "@/components/3d_scene/3d_models/bedroom/Door";
import WallShelf from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/WallShelf";

export default function Bedroom(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <Floor width={5.5} depth={4.5} />

      <Wall
        dim={[5.5, 2.5, 0.2]}
        position={[0, 1.25, -2.35]}
      />

      <Door
        scale={[-1, 1, 1]}
        position={[2.23, 0, -2.32]}
      />

      <Wall
        dim={[4.7, 2.5, 0.2]}
        rotation={[0, -Math.PI / 2, 0]}
        position={[2.85, 1.25, -0.1]}
      />

      <Wardrobe
        scale={[1.6, 0.95, 1.2]}
        position={[-1.3, 0, -1.82]}
      />

      <WallShelf
        position={[0.85, 1.8, -2.14]}
      />

      <Desk
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, -1.1]}
        position={[2.75, 0, -1.95]}
      />

      <GamingChair
        rotation={[0, -Math.PI / 3, 0]}
        position={[1.5, 0, -1.3]}
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

      <BookShelf
        position={[2.55, 0, 0.7]}
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
    </group>
  );
}