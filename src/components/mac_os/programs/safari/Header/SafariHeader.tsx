import * as React from 'react';
import { useProgramContext } from '../../Program';
import { useHandleDrag } from '@/hooks/useHandleDrag';
import cn from '@/utils/cn';
import WindowManagementButtons from '../../buttons/WindowManagementButtons';
import SafariSearchbar from './SafariSearchbar';

export default function SafariHeader({
    children,
    className,
    onPointerDown,
    onPointerUp,
    ...props
}: React.ComponentProps<"div"> & {
    children?: React.ReactNode;
}) {

    const { programId } = useProgramContext();

    const { handleDrag } = useHandleDrag(programId);

    return (
        <div
            className={cn("w-full h-13 flex p-4 items-center", className)}
            onPointerDown={(e) => {
                onPointerDown?.(e);

                handleDrag(e);
            }}
            onPointerUp={(e) => {
                onPointerUp?.(e);

                if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                    e.currentTarget.releasePointerCapture(e.pointerId);
                }
            }}
            {...props}
        >
            <WindowManagementButtons programId={programId} />
            <SafariSearchbar className='ml-auto mr-auto' />
            {children}
        </div>
    );
}
