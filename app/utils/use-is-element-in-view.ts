import {RefObject} from "react";

export const isInViewport = (element: RefObject<HTMLDivElement>, offset: number = 0) => {
    if (!element.current) return false;

    const rect = element.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top + offset! <= windowHeight &&
        rect.bottom - offset! >= 0
    );
};