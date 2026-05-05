import React, { ReactNode } from "react";
import cn from "@/utils/cn";

type Props = React.ComponentProps<"div"> & {
  children?: ReactNode;
}

export default function Dock({ children, className, ...props }: Props) {
  return (
    <div className={cn("flex items-center w-fit h-fit p-3 rounded-2xl bg-popover/20 border-[0.5px] border-border z-100", className)}
         {...props}
    >
      <div className={"flex items-center gap-4"}>
        {children}
      </div>
    </div>
  );
}