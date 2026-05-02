import { JSX } from "react";
import Shelf from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/Shelf";
import Spiderman from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/Spiderman";
import Ezio from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/Ezio";
import Itachi from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/Itachi";
import Obito from "@/components/3d_scene/3d_models/bedroom/furniture/wall_shelf/Obito";

export default function WallShelf(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <Shelf
        scale={[1.3, 1, 1]}
        position={[0, -0.07, 0]}
      />
      <Spiderman
        position={[0.5, 0, 0]}
      />
      <Ezio
        rotation={[0, Math.PI / 3 + Math.PI, 0]}
        position={[0.15, -0.022, 0.05]}
      />
      <Itachi
        position={[-0.1, 0, 0]}
      />
      <Obito
        position={[-0.35, 0, 0]}
      />
    </group>
  );
}