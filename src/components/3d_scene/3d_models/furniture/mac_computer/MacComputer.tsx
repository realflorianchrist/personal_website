import { JSX } from "react";
import MagicKeyboard from "@/components/3d_scene/3d_models/furniture/mac_computer/MagicKeyboard";
import ProDisplay from "@/components/3d_scene/3d_models/furniture/mac_computer/ProDisplay";
import MacPro from "@/components/3d_scene/3d_models/furniture/mac_computer/MacPro";
import MagicMouse from "@/components/3d_scene/3d_models/furniture/mac_computer/MagicMouse";

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
      <MacPro
        rotation={[0, Math.PI / 2, 0]}
        position={[-0.65, 0, -0.2]}
      />
    </group>
  );
}