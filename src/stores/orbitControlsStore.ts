import { create } from "zustand";
import type { OrbitControls } from "three-stdlib";

type OrbitControlsState = {
  controls: OrbitControls | null;
  prev?: {
    rotate: boolean;
    zoom: boolean;
    pan: boolean;
    minDistance: number;
  };
  setControls: (controls: OrbitControls | null) => void;
  pauseControls: () => void;
  resumeControls: () => void;
};

const useOrbitControlsStore = create<OrbitControlsState>((set, get) => ({
  controls: null,
  setControls: (controls) => set({ controls }),
  pauseControls: () => {
    const c = get().controls;
    if (!c) return;

    set({
      prev: {
        rotate: c.enableRotate,
        zoom: c.enableZoom,
        pan: c.enablePan,
        minDistance: c.minDistance,
      }
    });

    c.enableRotate = false;
    c.enableZoom = false;
    c.enablePan = false;
    c.minDistance = 0;
  },
  resumeControls: () => {
    const c = get().controls;
    const prev = get().prev;
    if (!c || !prev) return;

    c.enableRotate = prev.rotate;
    c.enableZoom = prev.zoom;
    c.enablePan = prev.pan;
    c.minDistance = prev.minDistance;
  }
}));

export default useOrbitControlsStore;