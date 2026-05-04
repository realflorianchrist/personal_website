import React from "react";
import cn from "@/utils/cn";
import { IoClose } from "react-icons/io5";

export default function CloseButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn("group flex justify-center items-center bg-destructive-foreground",
        "border border-destructive rounded-full w-fit h-fit p-[1.5px] text-destructive",
        "active:opacity-85",
        className)}
      {...props}
    >
      <IoClose size={12} className={"opacity-0 group-hover:opacity-100"} />
    </button>
  );
}