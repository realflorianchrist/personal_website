import cn from '@/utils/cn';
import * as React from 'react';

type GlassProps = React.ComponentProps<"div">;

export default function Glass({
    children,
    className,
    ...props
}: GlassProps) {
    return (
        <div
            className={cn(
                'bg-white/10 backdrop-blur-md',
                '[backdrop-filter:blur(3px)_url(#glass-distortion)]',
                '[box-shadow:inset_0_1px_0_gray]',
                className
            )}
            {...props}
        >
            {children}
        </div >
    );
}
