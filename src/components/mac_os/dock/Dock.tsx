import React, { ReactNode } from "react";
import cn from "@/utils/cn";
import MinimizedWindows from './MinimizedWindows';
import Glass from '@/components/svg_filters/Glass';

type Props = React.ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
};

export default function Dock({ children, className, ...props }: Props) {
  return (
    <Glass
      id='macos-dock'
      className={cn("flex items-center h-16 p-3 rounded-2xl z-100",
        className)}
      {...props}
    >
      <div className={"flex items-center gap-4 h-full"}>
        {children}
        <MinimizedWindows />
      </div>
    </Glass>
  );
}