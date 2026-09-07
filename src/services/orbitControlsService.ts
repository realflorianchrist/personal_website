import type { OrbitControls } from "three-stdlib";

let controls: OrbitControls | null = null;

let previousState: {
  rotate: boolean;
  zoom: boolean;
  pan: boolean;
  minDistance: number;
} | null = null;

export const setOrbitControls = (value: OrbitControls | null) => {
  controls = value;
};

export const getOrbitControls = () => controls;

export const pauseOrbitControls = () => {
  if (!controls) return;

  previousState = {
    rotate: controls.enableRotate,
    zoom: controls.enableZoom,
    pan: controls.enablePan,
    minDistance: controls.minDistance,
  };

  controls.enableRotate = false;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.minDistance = 0;
};

export const resumeOrbitControls = () => {
  if (!controls || !previousState) return;

  controls.enableRotate = previousState.rotate;
  controls.enableZoom = previousState.zoom;
  controls.enablePan = previousState.pan;
  controls.minDistance = previousState.minDistance;

  previousState = null;
};
