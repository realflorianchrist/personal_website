import React from "react";
import cn from "@/utils/cn";
import { RiExpandLeftRightFill } from "react-icons/ri";
import ActionButton from "@/components/mac_os/programs/buttons/ActionButton";

export default function MaximizeButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <ActionButton
      icon={RiExpandLeftRightFill}
      iconProps={{
        className: 'rotate-45'
      }}
      className={cn("bg-maximize border-maximize-border text-maximize-border",
        className)}
      {...props}
    />
  );
}