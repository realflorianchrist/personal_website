'use client'
import React from "react";
import useSelectedProfessionStore from "@/stores/selectedProfessionStore";

export default function Nav() {
  const { setProfession } = useSelectedProfessionStore();

  return (
    <div className={'fixed top-0 right-0 flex flex-col z-10'}>
      <button onClick={() => setProfession(0)}>Zeichner</button>
      <button onClick={() => setProfession(1)}>Student</button>
      <button onClick={() => setProfession(2)}>Softwareentwickler</button>
    </div>
  );
}
