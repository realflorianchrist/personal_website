import { MouseEventHandler, ReactNode } from "react";
import cn from "@/utils/cn";
import ToolTip from "@/components/mac_os/ToolTip";

export type IconProps = {
  programName: string;
  className?: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Icon(
  {
    programName,
    children,
    className,
    active,
    onClick
  }: Readonly<
    IconProps & {
    children: ReactNode;
  }>) {

  return (
    <button onClick={onClick} className="relative group flex flex-col items-center">
      <div className="absolute -top-14 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
        <ToolTip text={programName} />
      </div>

      <div className={cn("size-10 rounded-lg overflow-hidden bg-white", className)}>
        {children}
      </div>

      {active && (
        <div className="absolute -bottom-2.5 size-1 bg-gray-400 rounded-full" />
      )}
    </button>
  );
}