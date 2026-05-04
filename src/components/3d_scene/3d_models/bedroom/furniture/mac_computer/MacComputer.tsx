import { JSX } from "react";
import MagicKeyboard from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MagicKeyboard";
import ProDisplay from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/ProDisplay";
import MacPro from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MacPro";
import MagicMouse from "@/components/3d_scene/3d_models/bedroom/furniture/mac_computer/MagicMouse";
import Display from "@/components/3d_scene/Display";

export default function MacComputer(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props} dispose={null}>
      <MagicKeyboard />
      <MagicMouse
        rotation={[0, -Math.PI / 2, 0]}
        position={[0.4, 0, 0]}
      />
      <ProDisplay
        position={[0, 0, -0.2]}
      />
      <Display
        dimensions={[0.685, 0.383]}
        position={[0, 0.3864, -0.195]}
      />

      <MacPro
        rotation={[0, Math.PI / 2, 0]}
        position={[-0.65, 0, -0.2]}
      />
    </group>
  );
}