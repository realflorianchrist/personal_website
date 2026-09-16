import type { OrbitControls } from 'three-stdlib';

let controls: OrbitControls | null = null;

let previousState: {
  rotate: boolean;
  zoom: boolean;
  pan: boolean;
  minDistance: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  minAzimuthAngle: number;
  maxAzimuthAngle: number;
} | null = null;

export const setOrbitControls = (value: OrbitControls | null) => {
  controls = value;
};

export const getOrbitControls = () => controls;

export const pauseOrbitControls = () => {
  if (!controls || previousState) return;

  previousState = {
    rotate: controls.enableRotate,
    zoom: controls.enableZoom,
    pan: controls.enablePan,
    minDistance: controls.minDistance,
    minPolarAngle: controls.minPolarAngle,
    maxPolarAngle: controls.maxPolarAngle,
    minAzimuthAngle: controls.minAzimuthAngle,
    maxAzimuthAngle: controls.maxAzimuthAngle,
  };

  controls.enableRotate = false;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.minDistance = 0;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI;
  controls.minAzimuthAngle = -Infinity;
  controls.maxAzimuthAngle = Infinity;
};

export const resumeOrbitControls = () => {
  if (!controls || !previousState) return;

  controls.enableRotate = previousState.rotate;
  controls.enableZoom = previousState.zoom;
  controls.enablePan = previousState.pan;
  controls.minDistance = previousState.minDistance;
  controls.minPolarAngle = previousState.minPolarAngle;
  controls.maxPolarAngle = previousState.maxPolarAngle;
  controls.minAzimuthAngle = previousState.minAzimuthAngle;
  controls.maxAzimuthAngle = previousState.maxAzimuthAngle;

  previousState = null;
};
