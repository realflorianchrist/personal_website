import React, { JSX, useMemo } from "react";
import { createHoloMaterial } from "@/materials/holo-material";

export default function Screen(props: JSX.IntrinsicElements["mesh"]) {

  const holoMat = useMemo(() => createHoloMaterial({
    opacity: 0.5
  }), []);

  return (
    <mesh
      {...props}
      material={holoMat}
    >
      <planeGeometry args={[1, 0.5]} />
    </mesh>
  );
}
