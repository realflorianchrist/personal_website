import Bedroom from '@/components/3d_scene/3d_models/bedroom/Bedroom';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1} color={'#ffffff'} />

      <Bedroom />
    </>
  );
}
