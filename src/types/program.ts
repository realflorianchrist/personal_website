export type Dim2 = {
  width: number;
  height: number;
}

export type Vec2 = {
  x: number;
  y: number;
}

export type ProgramId = number;

export type Program = {
  id: ProgramId;
  name: string;
  windowDimensions: Dim2;
  windowPosition: Vec2;
  isResizable?: boolean;
  isMinimized?: boolean;
};