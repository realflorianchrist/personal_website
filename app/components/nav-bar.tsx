'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
    const path = usePathname();

    return (
        <div id={'nav-bar'} className={'fixed top-10 self-center text-xs space-x-10'}>
            <Link href={'/'} className={path === '/' ? 'font-bold' : ''}>Home</Link>
            <Link href={'/work'} className={path === '/work' ? 'font-bold' : ''}>Work</Link>
            <Link href={'/about'} className={path === '/about' ? 'font-bold' : ''}>About</Link>
            <Link href={'/contact'} className={path === '/contact' ? 'font-bold' : ''}>Contact</Link>
        </div>
    );
}