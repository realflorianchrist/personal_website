import * as THREE from "three";
import React, { JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/model-urls";

type GLTFResult = GLTF & {
  nodes: {
    GkERnwlKXemCPLQ: THREE.Mesh
    RLqNWQTvdxhYzwN: THREE.Mesh
    IyklIWCEUuwKzOr: THREE.Mesh
    hpSdHYOSkCaurbw: THREE.Mesh
    yfhGvqUwPtBoviH: THREE.Mesh
    FRHIeNGciselOUD: THREE.Mesh
    evPqzCNQtlXjCVN: THREE.Mesh
    tOuBUEkZhOblDvy: THREE.Mesh
    vfkGgIpuayFHHsr: THREE.Mesh
    USjagBfuEQpHyxx: THREE.Mesh
    HJxexdgaCCQkOSU: THREE.Mesh
    bIyqxwRZNkokZiN: THREE.Mesh
    bIyqxwRZNkokZiN_1: THREE.Mesh
    hGwEfDVTEHoAURp: THREE.Mesh
    nUppYpnAsUEoqrW: THREE.Mesh
    RVNPTVBkPRthSTH: THREE.Mesh
  }
  materials: {
    PCHVWnITFZwJroA: THREE.MeshStandardMaterial
    KDNlYFMSPLuuFmB: THREE.MeshStandardMaterial
    YZsKmgdmwlRdfBy: THREE.MeshStandardMaterial
    WMVfKEaOnnOqrKt: THREE.MeshStandardMaterial
    YHgwkvASVOaousL: THREE.MeshStandardMaterial
    sJborloitmuOJQw: THREE.MeshStandardMaterial
    CxxRfrqFwbeSPbx: THREE.MeshStandardMaterial
    jvJBYyOCabObecq: THREE.MeshStandardMaterial
    XeZeLWSRqDmtPEC: THREE.MeshStandardMaterial
    MSkMQXmvZdOsszM: THREE.MeshStandardMaterial
    nssRtVtXVzpjuEl: THREE.MeshStandardMaterial
    rdnAZnoRcBBxxCG: THREE.MeshStandardMaterial
    MhvKwGVMtQjnlCe: THREE.MeshStandardMaterial
    hbSPEctpwjkeQeL: THREE.MeshStandardMaterial
  }
}

export default function ProDisplay(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelUrls.proDisplay) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} position={[0, 0.385, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GkERnwlKXemCPLQ.geometry}
          material={materials.PCHVWnITFZwJroA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RLqNWQTvdxhYzwN.geometry}
          material={materials.KDNlYFMSPLuuFmB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IyklIWCEUuwKzOr.geometry}
          material={materials.YZsKmgdmwlRdfBy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hpSdHYOSkCaurbw.geometry}
          material={materials.WMVfKEaOnnOqrKt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yfhGvqUwPtBoviH.geometry}
          material={materials.YHgwkvASVOaousL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FRHIeNGciselOUD.geometry}
          material={materials.sJborloitmuOJQw}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.evPqzCNQtlXjCVN.geometry}
          material={materials.CxxRfrqFwbeSPbx}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tOuBUEkZhOblDvy.geometry}
          material={materials.jvJBYyOCabObecq}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vfkGgIpuayFHHsr.geometry}
          material={materials.jvJBYyOCabObecq}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.USjagBfuEQpHyxx.geometry}
          material={materials.XeZeLWSRqDmtPEC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HJxexdgaCCQkOSU.geometry}
          material={materials.MSkMQXmvZdOsszM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bIyqxwRZNkokZiN.geometry}
          material={materials.nssRtVtXVzpjuEl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bIyqxwRZNkokZiN_1.geometry}
          material={materials.nssRtVtXVzpjuEl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hGwEfDVTEHoAURp.geometry}
          material={materials.rdnAZnoRcBBxxCG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nUppYpnAsUEoqrW.geometry}
          material={materials.MhvKwGVMtQjnlCe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RVNPTVBkPRthSTH.geometry}
          material={materials.hbSPEctpwjkeQeL}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.proDisplay);