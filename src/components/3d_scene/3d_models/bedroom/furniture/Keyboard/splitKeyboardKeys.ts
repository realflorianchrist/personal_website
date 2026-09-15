import * as THREE from 'three';

type KeyGeometry = {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
};

// Like useGLTF's source geometries, these are shared between keyboard instances.
const cache = new WeakMap<THREE.BufferGeometry, KeyGeometry[]>();

/** Separate disconnected keys while retaining the original normals and UVs. */
export function splitKeyboardKeys(
  source: THREE.BufferGeometry,
  translation: readonly [number, number, number],
): KeyGeometry[] {
  const cached = cache.get(source);
  if (cached) return cached;

  const positions = source.getAttribute('position');
  const parents = Array.from({ length: positions.count }, (_, index) => index);
  const root = (index: number): number => {
    while (parents[index] !== index) {
      parents[index] = parents[parents[index]];
      index = parents[index];
    }
    return index;
  };
  const join = (a: number, b: number) => {
    parents[root(a)] = root(b);
  };

  // UV seams and hard edges duplicate vertices; weld only for connectivity.
  const vertices = new Map<string, number>();
  for (let i = 0; i < positions.count; i++) {
    const id = [positions.getX(i), positions.getY(i), positions.getZ(i)]
      .map((value) => Math.round(value * 1e6))
      .join(',');
    const previous = vertices.get(id);
    if (previous !== undefined) join(i, previous);
    else vertices.set(id, i);
  }

  const indices = source.index
    ? Array.from(source.index.array)
    : Array.from({ length: positions.count }, (_, index) => index);
  for (let i = 0; i < indices.length; i += 3) {
    join(indices[i], indices[i + 1]);
    join(indices[i], indices[i + 2]);
  }
  const components = new Map<number, number[]>();
  for (const index of indices) {
    const id = root(index);
    const component = components.get(id);
    if (component) component.push(index);
    else components.set(id, [index]);
  }

  const transform = new THREE.Matrix4().compose(
    new THREE.Vector3(...translation),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)),
    new THREE.Vector3(103.823, 100.534, 100),
  );
  const keys = Array.from(components.values(), (component) => {
    const geometry = new THREE.BufferGeometry();
    for (const [name, attribute] of Object.entries(source.attributes)) {
      const values = new Float32Array(component.length * attribute.itemSize);
      component.forEach((index, vertex) => {
        for (let channel = 0; channel < attribute.itemSize; channel++) {
          values[vertex * attribute.itemSize + channel] =
            attribute.getComponent(index, channel);
        }
      });
      geometry.setAttribute(
        name,
        new THREE.BufferAttribute(values, attribute.itemSize),
      );
    }
    geometry.applyMatrix4(transform);
    geometry.computeBoundingBox();
    const bounds = geometry.boundingBox!;
    // The back edge is the hinge. Positive rotation.x presses the front down.
    const position: [number, number, number] = [
      (bounds.min.x + bounds.max.x) / 2,
      (bounds.min.y + bounds.max.y) / 2,
      bounds.min.z,
    ];
    geometry.translate(-position[0], -position[1], -position[2]);
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    return { geometry, position };
  });
  cache.set(source, keys);
  return keys;
}
