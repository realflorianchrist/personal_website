import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import modelUrls from "@/constants/modelUrls";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_76: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_94: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_98: THREE.Mesh;
    Object_100: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_107: THREE.Mesh;
    Object_109: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_113: THREE.Mesh;
    Object_115: THREE.Mesh;
    Object_117: THREE.Mesh;
    Object_120: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_124: THREE.Mesh;
    Object_126: THREE.Mesh;
    Object_128: THREE.Mesh;
    Object_130: THREE.Mesh;
    Object_133: THREE.Mesh;
    Object_135: THREE.Mesh;
    Object_137: THREE.Mesh;
    Object_139: THREE.Mesh;
    Object_141: THREE.Mesh;
    Object_143: THREE.Mesh;
    Object_147: THREE.Mesh;
    Object_149: THREE.Mesh;
    Object_151: THREE.Mesh;
    Object_153: THREE.Mesh;
    Object_155: THREE.Mesh;
    Object_158: THREE.Mesh;
    Object_160: THREE.Mesh;
    Object_162: THREE.Mesh;
    Object_164: THREE.Mesh;
    Object_166: THREE.Mesh;
    Object_170: THREE.Mesh;
    Object_172: THREE.Mesh;
    Object_174: THREE.Mesh;
    Object_176: THREE.Mesh;
    Object_178: THREE.Mesh;
    Object_181: THREE.Mesh;
    Object_183: THREE.Mesh;
    Object_185: THREE.Mesh;
    Object_187: THREE.Mesh;
    Object_189: THREE.Mesh;
    Object_192: THREE.Mesh;
    Object_194: THREE.Mesh;
    Object_196: THREE.Mesh;
    Object_198: THREE.Mesh;
    Object_200: THREE.Mesh;
    Object_203: THREE.Mesh;
    Object_205: THREE.Mesh;
    Object_207: THREE.Mesh;
    Object_209: THREE.Mesh;
    Object_211: THREE.Mesh;
    Object_213: THREE.Mesh;
    Object_216: THREE.Mesh;
    Object_218: THREE.Mesh;
    Object_220: THREE.Mesh;
    Object_222: THREE.Mesh;
    Object_224: THREE.Mesh;
    Object_226: THREE.Mesh;
    Object_229: THREE.Mesh;
    Object_232: THREE.Mesh;
    Object_234: THREE.Mesh;
    Object_236: THREE.Mesh;
    Object_238: THREE.Mesh;
    Object_240: THREE.Mesh;
    Object_242: THREE.Mesh;
    Object_244: THREE.Mesh;
    Object_246: THREE.Mesh;
    Object_248: THREE.Mesh;
    Object_250: THREE.Mesh;
    Object_252: THREE.Mesh;
    Object_254: THREE.Mesh;
    Object_256: THREE.Mesh;
    Object_258: THREE.Mesh;
    Object_260: THREE.Mesh;
    Object_263: THREE.Mesh;
    Object_265: THREE.Mesh;
    Object_267: THREE.Mesh;
    Object_269: THREE.Mesh;
    Object_271: THREE.Mesh;
    Object_273: THREE.Mesh;
    Object_275: THREE.Mesh;
    Object_277: THREE.Mesh;
    Object_279: THREE.Mesh;
    Object_282: THREE.Mesh;
    Object_284: THREE.Mesh;
    Object_286: THREE.Mesh;
    Object_288: THREE.Mesh;
    Object_290: THREE.Mesh;
    Object_293: THREE.Mesh;
    Object_296: THREE.Mesh;
    Object_298: THREE.Mesh;
    Object_300: THREE.Mesh;
    Object_302: THREE.Mesh;
    Object_304: THREE.Mesh;
    Object_306: THREE.Mesh;
    Object_308: THREE.Mesh;
    Object_310: THREE.Mesh;
  };
  materials: {
    dfPyDpLDFdJnymz: THREE.MeshStandardMaterial;
    IcjctVhBKdmZxSe: THREE.MeshStandardMaterial;
    aGhiqjVgeUOnjmq: THREE.MeshStandardMaterial;
    HNTzgLrmuVYaoAJ: THREE.MeshStandardMaterial;
    eDMPfsXSDBGbjoS: THREE.MeshStandardMaterial;
    LeEpAqTZvpUgIHr: THREE.MeshStandardMaterial;
    ZrYzvSROTDqODuV: THREE.MeshStandardMaterial;
    PlscZKCkDvyYAPH: THREE.MeshStandardMaterial;
    wxGmKIeytYUmxsA: THREE.MeshStandardMaterial;
    sVHmZDLPadAJwAB: THREE.MeshStandardMaterial;
    LdkVQOZTEMPzskO: THREE.MeshStandardMaterial;
    RtdcYDBMXjeYZGl: THREE.MeshStandardMaterial;
    WcUNshBklpBOGai: THREE.MeshStandardMaterial;
    GxTKlcCyLEmzGvK: THREE.MeshStandardMaterial;
    qEjkkTOOFfvUKLv: THREE.MeshStandardMaterial;
    dUNCuNqDoXaMPTP: THREE.MeshStandardMaterial;
    qQMLnQQNJCeQZlf: THREE.MeshStandardMaterial;
    LNwIhajVGzdwYkW: THREE.MeshStandardMaterial;
    vTeynUkQqoWEQvO: THREE.MeshStandardMaterial;
    PwDdEkNhQvBWTJh: THREE.MeshStandardMaterial;
    CLyHDKnMKNyMLJm: THREE.MeshStandardMaterial;
    JvSuPGqBQPzetyM: THREE.MeshStandardMaterial;
    sOpKEfeBXGpUCAO: THREE.MeshStandardMaterial;
    NyKPAEGbdFglWKv: THREE.MeshStandardMaterial;
    OhyyOHrJQDIiIGh: THREE.MeshStandardMaterial;
    kqSJDZxCIwUHobQ: THREE.MeshStandardMaterial;
    meePpLeXBgRsLLV: THREE.MeshStandardMaterial;
    reMTGioWJutynNM: THREE.MeshStandardMaterial;
    XyanMTNygllvpah: THREE.MeshStandardMaterial;
    xbEqEiRAfzMHawA_0: THREE.MeshStandardMaterial;
    xCizVSQPKOdyiMO: THREE.MeshStandardMaterial;
    nxnNtoKyvmjSgRn: THREE.MeshStandardMaterial;
    JfkstOULcjFBBgO: THREE.MeshStandardMaterial;
    qPOtqYHIvzVpdFz: THREE.MeshStandardMaterial;
    VmTFdaSmKlRsdIQ: THREE.MeshStandardMaterial;
    VULAXHWphnfvmSX: THREE.MeshStandardMaterial;
    rsxRXgvQPuWYblw: THREE.MeshStandardMaterial;
    jjLbLbZYVrBBgmm: THREE.MeshStandardMaterial;
    QMMTQykzaTqbssH: THREE.MeshStandardMaterial;
    QZhSRoxzaXmpyYh: THREE.MeshStandardMaterial;
    YrygsifRrYbeeDp: THREE.MeshStandardMaterial;
    iotHnHQLkbJZnYi: THREE.MeshStandardMaterial;
    hvfmCDaIkXuTRNK: THREE.MeshStandardMaterial;
    USwPLdCoSIxLHBr: THREE.MeshStandardMaterial;
    VIOwlcpDfwzdlAv: THREE.MeshStandardMaterial;
    CTdsXDnjGLpCfCD: THREE.MeshStandardMaterial;
    TjPEZGncNvObzCC: THREE.MeshStandardMaterial;
  };
};

export default function MacPro(props: Readonly<ThreeElements["group"]>) {
  const { nodes, materials } = useGLTF(
    modelUrls.macPro,
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.045, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.dfPyDpLDFdJnymz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.IcjctVhBKdmZxSe}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.IcjctVhBKdmZxSe}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.HNTzgLrmuVYaoAJ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.eDMPfsXSDBGbjoS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.LeEpAqTZvpUgIHr}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.PlscZKCkDvyYAPH}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.wxGmKIeytYUmxsA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.sVHmZDLPadAJwAB}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.LdkVQOZTEMPzskO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.wxGmKIeytYUmxsA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.RtdcYDBMXjeYZGl}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials.WcUNshBklpBOGai}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.GxTKlcCyLEmzGvK}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.qEjkkTOOFfvUKLv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.dUNCuNqDoXaMPTP}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.qQMLnQQNJCeQZlf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_94.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_120.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_122.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_124.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_126.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_130.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_133.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_135.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_137.geometry}
            material={materials.PwDdEkNhQvBWTJh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_139.geometry}
            material={materials.CLyHDKnMKNyMLJm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_141.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_143.geometry}
            material={materials.sOpKEfeBXGpUCAO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_147.geometry}
            material={materials.NyKPAEGbdFglWKv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_149.geometry}
            material={materials.OhyyOHrJQDIiIGh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_151.geometry}
            material={materials.kqSJDZxCIwUHobQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_153.geometry}
            material={materials.meePpLeXBgRsLLV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_155.geometry}
            material={materials.reMTGioWJutynNM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_158.geometry}
            material={materials.NyKPAEGbdFglWKv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_160.geometry}
            material={materials.OhyyOHrJQDIiIGh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_162.geometry}
            material={materials.kqSJDZxCIwUHobQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_164.geometry}
            material={materials.meePpLeXBgRsLLV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_166.geometry}
            material={materials.reMTGioWJutynNM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_170.geometry}
            material={materials.XyanMTNygllvpah}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_172.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_174.geometry}
            material={materials.qQMLnQQNJCeQZlf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_176.geometry}
            material={materials.xbEqEiRAfzMHawA_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_178.geometry}
            material={materials.xCizVSQPKOdyiMO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_181.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_183.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_185.geometry}
            material={materials.nxnNtoKyvmjSgRn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_187.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_189.geometry}
            material={materials.JfkstOULcjFBBgO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_192.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_194.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_196.geometry}
            material={materials.nxnNtoKyvmjSgRn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_198.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_200.geometry}
            material={materials.JfkstOULcjFBBgO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_203.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_205.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_207.geometry}
            material={materials.qPOtqYHIvzVpdFz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_209.geometry}
            material={materials.qPOtqYHIvzVpdFz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_211.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_213.geometry}
            material={materials.VmTFdaSmKlRsdIQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_216.geometry}
            material={materials.vTeynUkQqoWEQvO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_218.geometry}
            material={materials.LNwIhajVGzdwYkW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_220.geometry}
            material={materials.qPOtqYHIvzVpdFz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_222.geometry}
            material={materials.qPOtqYHIvzVpdFz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_224.geometry}
            material={materials.JvSuPGqBQPzetyM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_226.geometry}
            material={materials.VmTFdaSmKlRsdIQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_229.geometry}
            material={materials.VULAXHWphnfvmSX}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_232.geometry}
            material={materials.eDMPfsXSDBGbjoS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_234.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_236.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_238.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_240.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_242.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_244.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_246.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_248.geometry}
            material={materials.eDMPfsXSDBGbjoS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_250.geometry}
            material={materials.eDMPfsXSDBGbjoS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_252.geometry}
            material={materials.rsxRXgvQPuWYblw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_254.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_256.geometry}
            material={materials.jjLbLbZYVrBBgmm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_258.geometry}
            material={materials.QMMTQykzaTqbssH}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_260.geometry}
            material={materials.QZhSRoxzaXmpyYh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_263.geometry}
            material={materials.YrygsifRrYbeeDp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_265.geometry}
            material={materials.YrygsifRrYbeeDp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_267.geometry}
            material={materials.YrygsifRrYbeeDp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_269.geometry}
            material={materials.YrygsifRrYbeeDp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_271.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_273.geometry}
            material={materials.iotHnHQLkbJZnYi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_275.geometry}
            material={materials.hvfmCDaIkXuTRNK}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_277.geometry}
            material={materials.USwPLdCoSIxLHBr}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_279.geometry}
            material={materials.QZhSRoxzaXmpyYh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_282.geometry}
            material={materials.ZrYzvSROTDqODuV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_284.geometry}
            material={materials.VIOwlcpDfwzdlAv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_286.geometry}
            material={materials.VIOwlcpDfwzdlAv}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_288.geometry}
            material={materials.LdkVQOZTEMPzskO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_290.geometry}
            material={materials.LdkVQOZTEMPzskO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_293.geometry}
            material={materials.dUNCuNqDoXaMPTP}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_296.geometry}
            material={materials.CTdsXDnjGLpCfCD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_298.geometry}
            material={materials.wxGmKIeytYUmxsA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_300.geometry}
            material={materials.wxGmKIeytYUmxsA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_302.geometry}
            material={materials.CTdsXDnjGLpCfCD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_304.geometry}
            material={materials.TjPEZGncNvObzCC}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_306.geometry}
            material={materials.TjPEZGncNvObzCC}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_308.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_310.geometry}
            material={materials.aGhiqjVgeUOnjmq}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrls.macPro);
