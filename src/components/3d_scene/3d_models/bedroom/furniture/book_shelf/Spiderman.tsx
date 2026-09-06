import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
  };
  materials: {
    accesorios: THREE.MeshStandardMaterial;
    piernas: THREE.MeshStandardMaterial;
    traje: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    carton: THREE.MeshStandardMaterial;
    Text_Caja: THREE.MeshStandardMaterial;
    acetato: THREE.MeshStandardMaterial;
  };
};

export default function Spiderman(props: ThreeElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    modelUrls.spiderman,
  ) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" scale={0.02}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Base_11" position={[-2.125, 0.25, 0]} scale={1.562}>
                <group
                  name="Base_base_0"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.accesorios}
                  />
                </group>
                <group
                  name="BRAZOS_y_torso001_1"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.piernas}
                  />
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.traje}
                  />
                </group>
                <group
                  name="Cabeza_cabeza_2"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials["Material.005"]}
                  />
                </group>
                <group
                  name="camara_3"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.accesorios}
                  />
                </group>
                <group
                  name="EXT_BRAZOS_Iron-Spider_con_lineas_versiontreas001_4"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.piernas}
                  />
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.traje}
                  />
                </group>
                <group
                  name="FunkoPopBox_(1)_5"
                  position={[-0.382, 1.686, -0.151]}
                  rotation={[Math.PI / 2, 0, 0.006]}
                  scale={1.176}
                >
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.carton}
                  />
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Text_Caja}
                  />
                </group>
                <group
                  name="Ladrillos_Cube001_6"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.accesorios}
                  />
                </group>
                <group
                  name="mano_Cuerpo_BERLIN_Funko_sin_lineas_v3002_7"
                  position={[0.004, 1.63, 0.07]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.763}
                >
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.piernas}
                  />
                  <mesh
                    name="Object_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.traje}
                  />
                </group>
                <group name="Plane008_8" scale={0.64}>
                  <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.acetato}
                  />
                </group>
                <group name="Plane009_9" scale={0.64}>
                  <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.acetato}
                  />
                </group>
                <group
                  name="Plane010_10"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.64}
                >
                  <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.acetato}
                  />
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.acetato}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.spiderman);
