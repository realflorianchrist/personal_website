import React from "react";
import cn from "@/utils/cn";
import { RiExpandLeftRightFill } from "react-icons/ri";

export default function MaximizeButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn("group flex justify-center items-center bg-maximize",
        "border border-maximize-border rounded-full w-fit h-fit p-[1.5px] text-maximize-border",
        "active:opacity-85",
        className)}
      {...props}
    >
      <RiExpandLeftRightFill size={12} className={"opacity-0 group-hover:opacity-100 -rotate-45"} />
    </button>
  );
}