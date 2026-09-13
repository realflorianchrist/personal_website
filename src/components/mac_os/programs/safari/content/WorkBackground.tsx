import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CanvasTexture, ShaderMaterial } from 'three';

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uText;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    vec2 screen = vUv * 2.0 - 1.0;

    float curvature = 0.75;
    float horizontalRay = screen.x * curvature;
    float depth = inversesqrt(1.0 + horizontalRay * horizontalRay);
    vec2 curved = vec2(
      tan(screen.x * atan(curvature)) / curvature,
      screen.y / depth
    );
    vec2 uv = curved * 0.5 + 0.5;
    float rows = 5.0;
    float row = floor(uv.y * rows);
    float direction = mod(row, 2.0) < 1.0 ? 1.0 : -1.0;
    float speed = 0.035 + 0.012 * mod(row * 3.0, 5.0);
    float columns = rows * uAspect / 3.2;
    vec2 textUv = vec2(
      fract(uv.x * columns + direction * uTime * speed + row * 0.23),
      fract(uv.y * rows)
    );

    float letters = texture2D(uText, textUv).a;
    float edgeShade = 1.0 - 0.32 * pow(abs(screen.x), 2.0);
    vec3 red = vec3(0.3, 0.008, 0.018);
    gl_FragColor = vec4(red * letters * edgeShade, 1.0);
  }
`;

export default function WorkBackground() {
  const { viewport } = useThree();
  const material = useRef<ShaderMaterial>(null);
  const [texture, setTexture] = useState<CanvasTexture | null>(null);
  const uniforms = useMemo(
    () => ({
      uText: { value: texture },
      uTime: { value: 0 },
      uAspect: { value: 1 },
    }),
    [texture],
  );

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 320;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.fillStyle = '#ffffff';
    context.font = '900 270px Arial, Helvetica, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('WORK', 512, 174, 920);

    const textTexture = new CanvasTexture(canvas);
    setTexture(textTexture);
    return () => textTexture.dispose();
  }, []);

  useFrame((_, delta) => {
    if (material.current) {
      material.current.uniforms.uTime.value += delta;
      material.current.uniforms.uAspect.value =
        viewport.width / viewport.height;
    }
  });

  if (!texture) return null;

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        toneMapped={false}
      />
    </mesh>
  );
}
