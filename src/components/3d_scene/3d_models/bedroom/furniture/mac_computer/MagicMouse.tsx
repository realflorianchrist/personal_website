import * as THREE from "three";
import React, { JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";

type GLTFResult = GLTF & {
  nodes: {
    Node_0_Mat_0: THREE.Mesh;
    Node_1_Mat1_0: THREE.Mesh;
    Node_2_Mat2_0: THREE.Mesh;
    Node_3_Mat3_0: THREE.Mesh;
    Node_4_Mat4_0: THREE.Mesh;
    Node_5_Mat3_0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    ["Mat.1"]: THREE.MeshStandardMaterial;
    ["Mat.2"]: THREE.MeshStandardMaterial;
    ["Mat.3"]: THREE.MeshStandardMaterial;
    ["Mat.4"]: THREE.MeshStandardMaterial;
  };
};

export default function MagicMouse(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(modelUrls.magicMouse) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="applemousefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="temp_export">
                  <group name="Geom">
                    <group name="Node_0">
                      <mesh
                        name="Node_0_Mat_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_0_Mat_0.geometry}
                        material={materials.material}
                      />
                    </group>
                    <group name="Node_1">
                      <mesh
                        name="Node_1_Mat1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_1_Mat1_0.geometry}
                        material={materials["Mat.1"]}
                      />
                    </group>
                    <group name="Node_2">
                      <mesh
                        name="Node_2_Mat2_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_2_Mat2_0.geometry}
                        material={materials["Mat.2"]}
                      />
                    </group>
                    <group name="Node_3">
                      <mesh
                        name="Node_3_Mat3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_3_Mat3_0.geometry}
                        material={materials["Mat.3"]}
                      />
                    </group>
                    <group name="Node_4">
                      <mesh
                        name="Node_4_Mat4_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_4_Mat4_0.geometry}
                        material={materials["Mat.4"]}
                      />
                    </group>
                    <group name="Node_5">
                      <mesh
                        name="Node_5_Mat3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Node_5_Mat3_0.geometry}
                        material={materials["Mat.3"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.magicMouse);
