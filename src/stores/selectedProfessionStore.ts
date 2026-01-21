import { create } from "zustand/react";
import { Profession } from "@/types/profession";

type SelectedProfessionState = {
  profession: Profession | null;
  setProfession: (professionId: number) => void;
};

const professions: Profession[] = [
  { id: 1, name: "drawer" },
  { id: 2, name: "software engineer" },
  { id: 3, name: "student" },
];

const useSelectedProfessionStore = create<SelectedProfessionState>((set) => ({
  profession: professions[0],

  setProfession: (professionId) => {
    const profession = professions.find(
      (p) => p.id === professionId
    ) ?? null;

    set({ profession });
  },
}));

export default useSelectedProfessionStore;