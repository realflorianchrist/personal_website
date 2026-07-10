import React from "react";
import cn from "@/utils/cn";
import { IconBaseProps, IconType } from "react-icons";

type Props = React.ComponentProps<"button"> & {
  icon: IconType;
  iconProps?: IconBaseProps;
}

export default function ActionButton({ className, icon: Icon, iconProps, ...props }: Props) {

  const { className: iconClass, ...rest } = iconProps ?? {};

  return (
    <button
      className={cn("group flex justify-center items-center",
        "border rounded-full w-fit h-fit",
        "active:opacity-85",
        className)}
      {...props}
    >
      <Icon
        size={13}
        className={cn("opacity-0 group-hover:opacity-100", iconClass)}
        {...rest}
      />
    </button>
  );
}