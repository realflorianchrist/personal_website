import { create } from "zustand";
import { Program, ProgramId, Vec2, Dim2, Rect } from "@/types/program";
import { ResizeHandleType } from "@/components/mac_os/programs/ResizeHandle";

type ResizeState = {
  programId: ProgramId;
  type: ResizeHandleType;

  startMouseX: number;
  startMouseY: number;

  startWidth: number;
  startHeight: number;

  startX: number;
  startY: number;
};

type ProgramsState = {
  programs: Record<ProgramId, Program>;
  openProgramIds: ProgramId[];
  focusedProgramId: ProgramId | null;
  dragOffset: Vec2 | null;
  usableScreenRect: Rect | null;
  resizeState: ResizeState | null;

  openProgram: (id: ProgramId) => void;
  closeProgram: (id: ProgramId) => void;
  focusProgram: (id: ProgramId) => void;
  setDragOffset: (offset: Vec2 | null) => void;
  setUsableScreenRect: (rect: Rect) => void;
  setWindowPosition: (id: ProgramId, position: Vec2) => void;
  setWindowDimensions: (id: ProgramId, dimensions: Dim2) => void;
  setResizeState: (state: ResizeState | null) => void;
};

const initialPrograms: Record<ProgramId, Program> = {
  0: {
    id: 0,
    name: "About me",
    windowDimensions: { width: 900, height: 600 },
    windowPosition: { x: 150, y: 50 },
    isResizable: true
  },
  1: {
    id: 1,
    name: "Contact",
    windowDimensions: { width: 800, height: 500 },
    windowPosition: { x: 200, y: 100 },
    isResizable: true
  }
};

const useProgramsStore = create<ProgramsState>((set, get) => ({
  programs: initialPrograms,
  openProgramIds: [],
  focusedProgramId: null,
  dragOffset: null,
  usableScreenRect: null,
  resizeState: null,

  openProgram: (id) => {
    const { openProgramIds } = get();

    set({
      openProgramIds: openProgramIds.includes(id)
        ? openProgramIds
        : [...openProgramIds, id],
      focusedProgramId: id
    });
  },

  closeProgram: (id) => {
    set({
      openProgramIds: get().openProgramIds.filter((programId) => programId !== id),
      focusedProgramId:
        get().focusedProgramId === id ? null : get().focusedProgramId
    });
  },

  focusProgram: (id) => {
    set({ focusedProgramId: id });
  },

  setDragOffset: (offset) => set({ dragOffset: offset }),

  setUsableScreenRect: (rect) => set({ usableScreenRect: rect }),

  setWindowPosition: (id, position) => {
    const program = get().programs[id];
    const screen = get().usableScreenRect;

    const margin = 80;

    const nextPosition = screen
      ? {
        x: clamp(
          position.x,
          -program.windowDimensions.width + margin,
          screen.width - margin
        ),
        y: clamp(
          position.y,
          0,
          screen.height - margin
        )
      }
      : position;

    set({
      programs: {
        ...get().programs,
        [id]: {
          ...program,
          windowPosition: nextPosition
        }
      }
    });
  },

  setWindowDimensions: (id, dimensions) => {
    set({
      programs: {
        ...get().programs,
        [id]: {
          ...get().programs[id],
          windowDimensions: dimensions
        }
      }
    });
  },

  setResizeState: (state) => set({ resizeState: state })
}));

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export default useProgramsStore;