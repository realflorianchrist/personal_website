import { ReactNode } from "react";
import cn from "@/utils/cn";
import ToolTip from "@/components/mac_os/ToolTip";

export type IconProps = {
  className?: string;
  active?: boolean;
}

export default function Icon(
  {
    children,
    className,
    active
  }: Readonly<
    IconProps & {
    children: ReactNode;
  }>) {

  return (
    <div className="relative group flex flex-col items-center">
      <div className="absolute -top-14 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
        <ToolTip text="hovered" />
      </div>

      <div className={cn("w-10 h-10 rounded-lg overflow-hidden bg-white", className)}>
        {children}
      </div>

      {active && (
        <div className="absolute -bottom-2.5 w-1 h-1 bg-background rounded-full" />
      )}
    </div>
  );
}