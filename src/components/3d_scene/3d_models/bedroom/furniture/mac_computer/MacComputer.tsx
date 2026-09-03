import { JSX } from "react";
import MagicKeyboard from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MagicKeyboard";
import ProDisplay from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/ProDisplay";
import MacPro from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MacPro";
import MagicMouse from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MagicMouse";
import Display from "@/components/3d_scene/Display";
import { ThreeElements } from '@react-three/fiber';

export default function MacComputer({ ref, ...props }: ThreeElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <MagicKeyboard />

      <MagicMouse
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.4, 0, 0]}
      />

      <ProDisplay position={[0, 0, -0.2]} />

      <group
        ref={ref}
        position={[0, 0.3864, -0.195]}
      >
        <Display dimensions={[0.685, 0.383]} />
      </group>

      <MacPro
        rotation={[0, Math.PI / 2, 0]}
        position={[-0.65, 0, -0.2]}
      />
    </group>
  );
}