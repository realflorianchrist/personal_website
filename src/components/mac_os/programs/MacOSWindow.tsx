import React, { ReactNode } from "react";
import cn from "@/utils/cn";
import WindowManagementButtons from "@/components/mac_os/programs/buttons/WindowManagementButtons";
import { useProgramContext } from "@/components/mac_os/programs/Program";
import { useHandleDrag } from '@/hooks/useHandleDrag';

export {
  MacOSWindow,
  MacOSWindowSidebarContainer,
  MacOSWindowSidebarHeader,
  MacOSWindowSidebarContent,
  MacOSWindowContentContainer,
  MacOSWindowContentHeader,
  MacOSWindowContent
};


function MacOSWindow(
  {
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {
  return (
    <div
      className={cn("flex w-full h-full bg-popover border-0.5 border-border rounded-3xl overflow-hidden p-2 shadow-xl shadow-black/60",
        className)}
      {...props}
    >
      {children}
    </div>
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
    onPointerUp,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {

  const { programId } = useProgramContext();

  const { handleDrag } = useHandleDrag(programId);

  return (
    <div
      className={cn("h-10 flex p-2", className)}
      onPointerDown={(e) => {
        onPointerDown?.(e);

        handleDrag(e);
      }}
      onPointerUp={(e) => {
        onPointerUp?.(e);

        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
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
      className={cn("flex-1 w-56 px-2 text-sm overflow-auto", className)}
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
    onPointerUp,
    ...props
  }: React.ComponentProps<"div"> & {
    children?: ReactNode;
  }) {

  const { programId } = useProgramContext();

  const { handleDrag } = useHandleDrag(programId);

  return (
    <div
      className={cn("h-10 flex items-center px-3 gap-2 text-lg", className)}
      onPointerDown={(e) => {
        onPointerDown?.(e);

        e.currentTarget.setPointerCapture(e.pointerId);

        handleDrag(e);
      }}
      onPointerUp={(e) => {
        onPointerUp?.(e);

        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
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
      className={cn("flex flex-1 p-3 text-sm overflow-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}