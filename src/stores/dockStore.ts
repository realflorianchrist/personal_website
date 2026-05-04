import { create } from "zustand";

type DockState = {
  activeProgramms: number[];
};

const useDockStore = create<DockState>((set, get) => ({
  activeProgramms: []
}));

export default useDockStore;