"use client";
import React, { ReactNode } from 'react';
import { FaApple } from 'react-icons/fa';
import { useDate } from '@/hooks/useDate';
import useProgramsStore from '@/stores/programsStore';
import cn from '@/utils/cn';
import LanguageSwitch from './LanguageSwitch';

type Props = React.ComponentProps<"div"> & {
  children?: ReactNode;
};

export default function MenuBar({ children, className, ...props }: Props) {

  const { focusedProgramId } = useProgramsStore();

  const d = useDate();

  const focusedProgram = useProgramsStore(s =>
    Object.values(s.programs).find(p => p.id === focusedProgramId));

  return (
    <div className={cn("flex w-full text-sm items-center px-4 py-2 select-none", className)}
      {...props}
    >
      <div className={"flex gap-4"}>
        <FaApple size={20} />
        <span className={'font-bold'}>{focusedProgram?.name}</span>
      </div>

      {/* <LanguageSwitch /> */}

      <div className={"ml-auto flex"}>
        <span>{d?.weekday} {d?.datePart}</span>
        <span className={"ml-2"}>{d?.time}</span>
      </div>
    </div>
  );
}