import { useEffect, useRef, RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void): RefObject<T> => {
    const ref: RefObject<T> = useRef<T>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [callback]);

    return ref;
};
