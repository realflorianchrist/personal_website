import { AboutMeSectionId } from '@/i18n/I18nType';
import { create } from "zustand";


type FinderState = {
    activeSection: AboutMeSectionId;
    setActiveSection: (section: AboutMeSectionId) => void;
};

const useFinderStore = create<FinderState>((set) => ({
    activeSection: "about",

    setActiveSection: (section) => {
        set({ activeSection: section });
    },
}));

export default useFinderStore;