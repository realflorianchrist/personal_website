import cn from '@/utils/cn';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

export default function SafariSearchbar({
    className,
    ...props
}: React.ComponentProps<"div">
) {

    const [value, setValue] = useState('');

    return (
        <div
            className={cn('flex items-center rounded-full w-[40%] border-0.5 border-border text-sm p-2 whitespace-nowrap',
                'focus-within:outline-2 focus-within:outline-accent',
                className
            )}
            onPointerDown={e => e.stopPropagation()}
            {...props}
        >
            <IoMdSearch className='size-4 text-muted-foreground mr-2' />
            <input
                className='flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
                type='search'
                placeholder='Suchbegriff oder Websitenamen eingeben'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>

    );
}
