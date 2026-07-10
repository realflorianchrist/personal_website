import { MouseEventHandler, ReactNode } from "react";
import cn from "@/utils/cn";
import ToolTip from "@/components/mac_os/ToolTip";

export type DockIconProps = {
  programName: string;
  className?: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function DockIcon(
  {
    programName,
    children,
    className,
    active,
    onClick
  }: Readonly<
    DockIconProps & {
      children: ReactNode;
    }>) {

  return (
    <button onClick={onClick} className="relative group flex flex-col items-center">
      <div className="absolute -top-14 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
        <ToolTip text={programName} />
      </div>

      {children}

      {active && (
        <div className="absolute -bottom-2.5 size-1 bg-gray-400 rounded-full" />
      )}
    </button>
  );
}