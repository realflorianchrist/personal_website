import React, { createContext, ReactNode, useContext } from "react";
import useProgramsStore from "@/stores/programsStore";
import cn from "@/utils/cn";
import WindowManagementButtons from "@/components/mac_os/programs/buttons/WindowManagementButtons";
import { ProgramId } from "@/types/program";

export {
  MacOSWindow,
  MacOSWindowSidebarContainer,
  MacOSWindowSidebarHeader,
  MacOSWindowSidebarContent,
  MacOSWindowContentContainer,
  MacOSWindowContentHeader,
  MacOSWindowContent
};

type ContextType = {
  programId: ProgramId
}

const MacOSWindowContext = createContext<ContextType | null>(null);

function useMacOSWindow() {
  const context = useContext(MacOSWindowContext);

  if (!context) {
    throw new Error("MacOSWindow components must be used inside MacOSWindow");
  }

  return context;
}

const useHandleDrag = (
  programId: ProgramId
) => {

  const { setDragOffset, usableScreenRect } = useProgramsStore();

  const program = useProgramsStore(s => s.programs[programId]);

  return {
    handleDrag: (e: React.PointerEvent<HTMLDivElement>) => {
      if (!usableScreenRect) return;

      setDragOffset({
        x: e.clientX - usableScreenRect.x - program.windowPosition.x,
        y: e.clientY - usableScreenRect.y - program.windowPosition.y
      });
    }
  };
};

function MacOSWindow(
  {
    children,
    className,
    programId,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
    programId: ProgramId;
  }) {
  return (
    <MacOSWindowContext.Provider value={{ programId }}>
      <div
        className={cn("flex w-full h-full bg-popover border-0.5 border-border rounded-3xl overflow-hidden p-2",
          className)}
        {...props}
      >
        {children}
      </div>
    </MacOSWindowContext.Provider>
  );
}

function MacOSWindowSidebarContainer(
  {
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {
  return (
    <div
      className={cn("flex flex-col border-0.5 border-border rounded-2xl h-full",
        className)}
      {...props}
    >
      {children}
    </div>
  );
}

function MacOSWindowSidebarHeader(
  {
    children,
    className,
    onPointerDown,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {

  const { programId } = useMacOSWindow();

  const { handleDrag } = useHandleDrag(programId);

  return (
    <div
      className={"h-10 flex p-2"}
      onPointerDown={(e) => {
        onPointerDown?.(e);
        handleDrag(e);
      }}
      {...props}
    >
      <WindowManagementButtons programId={programId} />
      {children}
    </div>
  );
}

function MacOSWindowSidebarContent(
  {
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {
  return (
    <div
      className={cn("flex-1 w-56 px-3 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function MacOSWindowContentContainer(
  {
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {
  return (
    <div
      className={cn("flex flex-col flex-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function MacOSWindowContentHeader(
  {
    children,
    className,
    onPointerDown,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {

  const { programId } = useMacOSWindow();

  const { handleDrag } = useHandleDrag(programId);

  return (
    <div
      className={cn("h-10 flex items-center px-3", className)}
      onPointerDown={(e) => {
        onPointerDown?.(e);
        handleDrag(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function MacOSWindowContent(
  {
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {
  return (
    <div
      className={cn("flex flex-1 p-3 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}