import Football from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/Football";
import Kallax from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/Kallax";
import PS5 from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/PS5";
import PS5Controller from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/PS5Controller";
import Books from "@/components/3d_scene/3d_models/bedroom/furniture/book_shelf/Books";
import { ThreeElements } from "@react-three/fiber";

export default function BookShelf(props: Readonly<ThreeElements["group"]>) {
  return (
    <group {...props} dispose={null}>
      <Football position={[0, 1.24, -1.2]} />

      <Kallax rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.56, 0]} />

      <Books position={[0, 0.75, -1.09]} />

      <Books scale={[1, 1, -1]} position={[0, 0.75, -0.05]} />

      <PS5 rotation={[0, -Math.PI / 2, 0]} position={[0.15, 1.12, -0.1]} />

      <PS5Controller
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, 1.15, -0.4]}
      />
    </group>
  );
}
