import cn from '@/utils/cn';
import * as React from 'react';

export default function Icon({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">
) {
    return (
        <div
            className={cn("size-10 rounded-lg overflow-hidden bg-white", className)}
            {...props}
        />
    );
}
