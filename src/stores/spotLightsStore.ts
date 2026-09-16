import { create } from 'zustand';

export type SpotLightType = 'MacOS' | 'Keyboard' | 'TV';

type SpotLightsState = {
  activeSpotLight: SpotLightType | null;
  setActiveSpotLight: (spotLight: SpotLightType | null) => void;
};

const useSpotLightsStore = create<SpotLightsState>((set, get) => ({
  activeSpotLight: null,
  setActiveSpotLight: (spotLight) => set({ activeSpotLight: spotLight }),
}));

export default useSpotLightsStore;
