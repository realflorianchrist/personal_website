import {useEffect, RefObject} from 'react';

export const useOutsideClick = (refs: RefObject<HTMLElement>[], callback: () => void) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const isOutside = refs.every(ref =>
                ref.current && !ref.current.contains(event.target as Node)
            );
            if (isOutside) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [refs, callback]);
};
