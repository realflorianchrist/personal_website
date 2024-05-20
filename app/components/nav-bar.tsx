'use client'
import styles from './NavBar.module.css'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useMainRef, useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {RefObject, useEffect, useState} from "react";

export default function NavBar() {
    const path = usePathname();
    const router = useRouter();

    const [isIntroductionVisible, setIsIntroductionVisible] = useState(path === '/');
    const [isProjectPreviewsVisible, setIsProjectPreviewsVisible] = useState(false);
    const {mainRef} = useMainRef();
    const {introductionRef} = useIntroductionRef();
    const {projectPreviewsRef} = useProjectPreviewsRef();

    const scrollToSection = (element: RefObject<HTMLDivElement>) => {
        element?.current?.scrollIntoView({behavior: 'smooth'});
    };

    // const mainElement = document.querySelector('main');
    useEffect(() => {
        if (mainRef?.current) {
            mainRef.current.onscroll = () => {
                setIsIntroductionVisible(isInViewport(introductionRef!));
                setIsProjectPreviewsVisible(isInViewport(projectPreviewsRef!));
            };
        }
    }, [mainRef]);

    const isInViewport = (element: RefObject<HTMLDivElement>) => {
        if (!element.current) return false;

        const rect = element.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (
            rect.top + 50 <= windowHeight &&
            rect.bottom - 50 >= 0
        );
    };

    return (
        <div id={styles['nav-bar']} className={'fixed flex top-10 self-center text-xs space-x-10'}>
            <div onClick={path === '/'
                ? () => scrollToSection(introductionRef!)
                : () => router.push('/')
            }
                 className={`cursor-pointer ${isIntroductionVisible ? 'font-bold' : ''}`}
            >
                Home
            </div>
            <div onClick={path === '/'
                ? () => scrollToSection(projectPreviewsRef!)
                : () => {
                    router.push('/')
                    scrollToSection(projectPreviewsRef!)
                }
            }
                 className={`cursor-pointer ${isProjectPreviewsVisible ? 'font-bold' : ''}`}
            >
                Work
            </div>
            <Link href={'/about'} className={path === '/about' ? 'font-bold' : ''}>About</Link>
            <Link href={'/contact'} className={path === '/contact' ? 'font-bold' : ''}>Contact</Link>
        </div>
    );
}