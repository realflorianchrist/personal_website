import { create } from "zustand";
import { Program, ProgramId, Vec2, Dim2, Rect } from "@/types/program";
import { ResizeHandleType } from "@/components/mac_os/programs/ResizeHandle";
import { clamp } from 'gsap/all';
import { MIN_WINDOW_SIZE, MAX_WINDOW_SIZE } from '@/constants/windowSize';

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

  setPrograms: (
    programs: Record<ProgramId, Program>
      | ((prev: Record<ProgramId, Program>) => Record<ProgramId, Program>)
  ) => void;
  openProgram: (id: ProgramId) => void;
  closeProgram: (id: ProgramId) => void;
  focusProgram: (id: ProgramId) => void;
  setDragOffset: (offset: Vec2 | null) => void;
  setUsableScreenRect: (rect: Rect) => void;
  setWindowPosition: (id: ProgramId, position: Vec2) => void;
  setWindowDimensions: (id: ProgramId, dimensions: Dim2) => void;
  maximizeProgram: (id: ProgramId) => void;
  setResizeState: (state: ResizeState | null) => void;
};

const useProgramsStore = create<ProgramsState>((set, get) => ({
  programs: {},
  openProgramIds: [0],
  focusedProgramId: null,
  dragOffset: null,
  usableScreenRect: null,
  resizeState: null,

  setPrograms: (updater) =>
    set(state => ({
      programs:
        typeof updater === "function"
          ? updater(state.programs)
          : updater,
    })),

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
          -program.windowDimensions.width + margin,
          screen.width - margin,
          position.x,
        ),
        y: clamp(
          0,
          screen.height - margin,
          position.y,
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

    const nextSize: Dim2 = {
      width: clamp(
        MIN_WINDOW_SIZE.width,
        MAX_WINDOW_SIZE.width,
        dimensions.width
      ),
      height: clamp(
        MIN_WINDOW_SIZE.height,
        MAX_WINDOW_SIZE.height,
        dimensions.height
      )
    };

    set({
      programs: {
        ...get().programs,
        [id]: {
          ...get().programs[id],
          windowDimensions: nextSize
        }
      }
    });
  },

  setResizeState: (state) => set({ resizeState: state }),

  maximizeProgram: (programId: ProgramId) => {

    const usableScreenRect = get().usableScreenRect;

    if (!usableScreenRect) return;

    get().setWindowDimensions(programId, { width: usableScreenRect.width, height: usableScreenRect.height });
    get().setWindowPosition(programId, { x: 0, y: 0 });
  },
}));

export default useProgramsStore;