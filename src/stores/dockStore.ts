import { create } from "zustand";

type DockState = {
  activePrograms: number[];
};

const useDockStore = create<DockState>((set, get) => ({
  activePrograms: []
}));

export default useDockStore;