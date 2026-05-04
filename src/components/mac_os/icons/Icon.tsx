"use client";
import { ReactNode, useState } from "react";
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {isHovered &&
        <div className={"absolute bottom-20 justify-self-center"}>
          <ToolTip text={"hovered"} />
        </div>
      }
      <div>
        <div
          className={cn("w-10 h-10 rounded-lg overflow-hidden bg-white", className)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </div>
        {active &&
          <div className={"w-1 h-1 bg-background rounded-full absolute justify-self-center bottom-0.5"} />
        }
      </div>
    </div>
  );
}