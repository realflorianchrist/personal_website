import { create } from 'zustand';

export type CameraPosition = 'default' | 'MacOS' | 'Keyboard' | 'TV';

type OverlayState = {
  currentCameraPosition: CameraPosition;

  setCurrentCameraPosition: (position: CameraPosition) => void;
};

const useCameraPositionStore = create<OverlayState>((set) => ({
  currentCameraPosition: 'default',

  setCurrentCameraPosition: (position) =>
    set({ currentCameraPosition: position }),
}));

export default useCameraPositionStore;
