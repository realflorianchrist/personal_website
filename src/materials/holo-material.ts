import * as THREE from "three";

export type HoloMaterialOptions = {
  color?: THREE.ColorRepresentation;
  opacity?: number;
  fresnelPower?: number;
  fresnelIntensity?: number;
  scanlineStrength?: number;
  scanlineScale?: number;
  additive?: boolean;
  doubleSide?: boolean;
};

export function createHoloMaterial(opts: HoloMaterialOptions = {}) {
  const {
    color = "#35e7ff",
    opacity = 0.4,
    fresnelPower = 2.2,
    fresnelIntensity = 1.35,
    scanlineStrength = 0.12,
    scanlineScale = 80,
    additive = true,
    doubleSide = true,
  } = opts;

  const uniforms = {
    uColor: { value: new THREE.Color(color) },
    uOpacity: { value: opacity },
    uFresnelPower: { value: fresnelPower },
    uFresnelIntensity: { value: fresnelIntensity },
    uScanlineStrength: { value: scanlineStrength },
    uScanlineScale: { value: scanlineScale },
    uTime: { value: 0 },
  };

  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec3 vNormalW;
      varying vec3 vViewDirW;
      varying vec3 vPosW;

      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vPosW = worldPos.xyz;

        vNormalW = normalize(mat3(modelMatrix) * normal);
        vViewDirW = normalize(cameraPosition - worldPos.xyz);

        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform vec3  uColor;
      uniform float uOpacity;
      uniform float uFresnelPower;
      uniform float uFresnelIntensity;
      uniform float uScanlineStrength;
      uniform float uScanlineScale;
      uniform float uTime;

      varying vec3 vNormalW;
      varying vec3 vViewDirW;
      varying vec3 vPosW;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      void main() {
        float ndv = clamp(dot(normalize(vNormalW), normalize(vViewDirW)), 0.0, 1.0);
        float fresnel = pow(1.0 - ndv, uFresnelPower) * uFresnelIntensity;

        float scan = sin((vPosW.y * uScanlineScale) + (uTime * 2.0)) * 0.5 + 0.5;
        scan = pow(scan, 6.0);
        float scanAdd = scan * uScanlineStrength;

        float n = (hash(vPosW.xz * 3.0 + uTime * 0.05) - 0.5) * 0.06;

        vec3 col = uColor * (0.55 + fresnel + scanAdd + n);
        
        float alphaBase = clamp(uOpacity + fresnel * 0.35, 0.0, 1.0);
        float alpha = alphaBase * uOpacity;
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: doubleSide ? THREE.DoubleSide : THREE.FrontSide,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}
