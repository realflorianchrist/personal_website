'use client'
import styles from './NavBar.module.css'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {RefObject} from "react";

export default function NavBar() {
    const path = usePathname();

    const { introductionRef } = useIntroductionRef();
    const { projectPreviewsRef } = useProjectPreviewsRef();

    const scrollToSection = (section: RefObject<HTMLDivElement> ) => {
        section?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id={styles['nav-bar']} className={'fixed flex top-10 self-center text-xs space-x-10'}>
            <div onClick={() => scrollToSection(introductionRef!)} className={'cursor-pointer'}>Home</div>
            <div onClick={() => scrollToSection(projectPreviewsRef!)} className={'cursor-pointer'}>Work</div>
            <Link href={'/about'} className={path === '/about' ? 'font-bold' : ''}>About</Link>
            <Link href={'/contact'} className={path === '/contact' ? 'font-bold' : ''}>Contact</Link>
        </div>
    );
}