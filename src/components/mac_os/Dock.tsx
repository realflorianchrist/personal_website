import React, { ReactNode } from "react";
import cn from "@/utils/cn";

type Props = React.ComponentProps<"div"> & {
  children?: ReactNode;
}

export default function Dock({ children, className, ...props }: Props) {
  return (
    <div className={cn("flex items-center w-fit h-fit p-3 rounded-2xl bg-gray-500/20 border-0.5 border-border z-100 backdrop-blur-sm",
      className)}
         {...props}
    >
      <div className={"flex items-center gap-4"}>
        {children}
      </div>
    </div>
  );
}