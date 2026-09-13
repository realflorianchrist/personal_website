import { create } from 'zustand';

type OverlayState = {
  isWelcomeOverlayVisible: boolean;
  isMacOverlayVisible: boolean;
  isBackButtonOverlayVisible: boolean;

  setIsWelcomeOverlayVisible: (isVisible: boolean) => void;
  setIsMacOverlayVisible: (isVisible: boolean) => void;
  setIsBackButtonOverlayVisible: (isVisible: boolean) => void;
};

const useOverlayStore = create<OverlayState>((set) => ({
  isWelcomeOverlayVisible: true,
  isMacOverlayVisible: true,
  isBackButtonOverlayVisible: false,

  setIsWelcomeOverlayVisible: (isVisible) =>
    set({ isWelcomeOverlayVisible: isVisible }),
  setIsMacOverlayVisible: (isVisible) =>
    set({ isMacOverlayVisible: isVisible }),
  setIsBackButtonOverlayVisible: (isVisible) =>
    set({ isBackButtonOverlayVisible: isVisible }),
}));

export default useOverlayStore;
