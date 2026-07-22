import { create } from 'zustand';

type OverlayState = {
    isWelcomeOverlayVisible: boolean;
    isMacOverlayVisible: boolean;

    setIsWelcomeOverlayVisible: (isVisible: boolean) => void;
    setIsMacOverlayVisible: (isVisible: boolean) => void;
};

const useOverlayStore = create<OverlayState>((set) => ({
    isWelcomeOverlayVisible: true,
    isMacOverlayVisible: true,

    setIsWelcomeOverlayVisible: (isVisible) => set({ isWelcomeOverlayVisible: isVisible }),
    setIsMacOverlayVisible: (isVisible) => set({ isMacOverlayVisible: isVisible }),
}));

export default useOverlayStore;