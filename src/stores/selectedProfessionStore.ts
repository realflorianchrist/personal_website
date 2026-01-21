import { create } from "zustand/react";
import { Profession } from "@/types/profession";

type SelectedProfessionState = {
  profession: Profession | null;
  setProfession: (professionId: number) => void;
};

type profKey = "drawer" | "student" | "softwareEngineer";

export const professions: Record<profKey, Profession> = {
  drawer: {
    id: 0, name: "drawer"
  },
  student: {
    id: 1, name: "student"
  },
  softwareEngineer: {
    id: 2, name: "software engineer"
  }
};

const useSelectedProfessionStore = create<SelectedProfessionState>((set) => ({
  profession: professions.drawer,

  setProfession: (professionId) => {
    const profession = Object.values(professions).find(
      (p) => p.id === professionId
    ) ?? null;

    set({ profession });
  }
}));

export default useSelectedProfessionStore;