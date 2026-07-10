import React from "react";
import cn from "@/utils/cn";
import { IoClose } from "react-icons/io5";
import ActionButton from "@/components/mac_os/programs/buttons/ActionButton";

export default function CloseButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <ActionButton
      icon={IoClose}
      className={cn("bg-destructive border-destructive-border text-destructive-border",
        className)}
      {...props}
    />
  );
}