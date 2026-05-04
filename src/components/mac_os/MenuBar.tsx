"use client";
import { FaApple } from "react-icons/fa";
import React, { ReactNode, useEffect, useState } from "react";
import cn from "@/utils/cn";
import { formatDate } from "@/utils/dateFormatter";

type Props = React.ComponentProps<"div"> & {
  children?: ReactNode;
}

export default function MenuBar({ children, className, ...props }: Props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000 * 20);
    return () => clearInterval(interval);
  }, []);

  const d = formatDate(date);

  return (
    <div className={cn("flex w-full text-sm items-center px-4 py-2", className)}
         {...props}
    >
      <FaApple size={20} />

      <div className={"ml-auto flex"}>
        <span>{d?.weekday} {d?.datePart}</span>
        <span className={'ml-2'}>{d?.time}</span>
      </div>
    </div>
  );
}