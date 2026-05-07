import React from "react";
import cn from "@/utils/cn";
import { HiOutlineMinusSm } from "react-icons/hi";

export default function MinimizeButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn("group flex justify-center items-center bg-minimize",
        "border border-minimize-border rounded-full w-fit h-fit p-[1.5px] text-minimize-border",
        "active:opacity-85",
        className)}
      {...props}
    >
      <HiOutlineMinusSm size={12} className={"opacity-0 group-hover:opacity-100"} />
    </button>
  );
}