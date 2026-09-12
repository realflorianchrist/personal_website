export default function GlassFilter() {
  return (
    <svg aria-hidden='true' className='absolute h-0 w-0'>
      <defs>
        <filter id='glass-distortion'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.005'
            numOctaves='2'
            result='noise'
          />

          <feDisplacementMap in='SourceGraphic' in2='noise' scale='15' />
        </filter>
      </defs>
    </svg>
  );
}
