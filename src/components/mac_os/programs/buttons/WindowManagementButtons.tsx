"use client";
import React, { ReactNode } from "react";
import cn from "@/utils/cn";
import CloseButton from "@/components/mac_os/programs/buttons/CloseButton";
import MinimizeButton from "@/components/mac_os/programs/buttons/MinimizeButton";
import MaximizeButton from "@/components/mac_os/programs/buttons/MaximizeButton";
import useProgramsStore from "@/stores/programsStore";
import { ProgramId } from "@/types/program";

type Props = React.ComponentProps<"div"> & {
  children?: ReactNode;
  programId: ProgramId;
};

export default function WindowManagementButtons({ programId, className, ...props }: Props) {

  const { closeProgram, maximizeProgram, minimizeProgram } = useProgramsStore();

  return (
    <div
      className={cn("group flex gap-2", className)}
      {...props}
    >
      <CloseButton
        onPointerDown={e => e.stopPropagation()}
        onClick={() => closeProgram(programId)}
      />
      <MinimizeButton
        onPointerDown={e => e.stopPropagation()}
        onClick={() => minimizeProgram(programId)}
      />
      <MaximizeButton
        onPointerDown={e => e.stopPropagation()}
        onClick={() => maximizeProgram(programId)}
      />
    </div>
  );
}