import React from "react";
import cn from "@/utils/cn";
import { HiOutlineMinusSm } from "react-icons/hi";
import ActionButton from "@/components/mac_os/programs/buttons/ActionButton";

export default function MinimizeButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <ActionButton
      icon={HiOutlineMinusSm}
      className={cn("bg-minimize border-minimize-border text-minimize-border",
        className)}
      {...props}
    />
  );
}