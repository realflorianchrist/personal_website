'use client'
import styles from './NavBar.module.css'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useMainRef, useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {RefObject, useEffect, useState} from "react";
import {isInViewport} from "@/app/utils/isElementInView";

export default function NavBar() {
    const path = usePathname();
    const router = useRouter();

    const [isIntroductionVisible, setIsIntroductionVisible] = useState(path === '/');
    const [isProjectPreviewsVisible, setIsProjectPreviewsVisible] = useState(path.includes('/work'));
    const [shouldScrollToProjectPreviews, setShouldScrollToProjectPreviews] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const {mainRef} = useMainRef();
    const {introductionRef} = useIntroductionRef();
    const {projectPreviewsRef} = useProjectPreviewsRef();

    const scrollToSection = (element: RefObject<HTMLDivElement>) => {
        element?.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsIntroductionVisible(isInViewport(introductionRef!, 50));
            setIsProjectPreviewsVisible(isInViewport(projectPreviewsRef!, 50));
        };

        if (mainRef?.current) {
            mainRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainRef?.current) {
                mainRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [mainRef, introductionRef, projectPreviewsRef]);

    useEffect(() => {
        setIsIntroductionVisible(path === '/');
        setIsProjectPreviewsVisible(path.includes('/work'));

        if (shouldScrollToProjectPreviews && path === '/') {
            scrollToSection(projectPreviewsRef!);
            setShouldScrollToProjectPreviews(false);
        }
    }, [path, shouldScrollToProjectPreviews, projectPreviewsRef]);

    const handleWorkClick = () => {
        if (path === '/') {
            scrollToSection(projectPreviewsRef!);
        } else {
            setShouldScrollToProjectPreviews(true);
            router.push('/');
        }
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

            <div onClick={handleWorkClick}
                 className={`cursor-pointer ${isProjectPreviewsVisible ? 'font-bold' : ''}`}
            >
                Work
            </div>

            <Link href={'/about'}
                  className={path === '/about' ? 'font-bold' : ''}
            >
                About
            </Link>


            <button id={styles['dropdown']}
                    onClick={toggleDropdown}
            >
                Contact
            </button>


            {isOpen && (
                <ul id={styles['dropdown-menu']}>
                    <li id={styles['dropdown-item']}>florian_christ@outlook.com</li>
                    <li id={styles['dropdown-item']}>
                        <Link href={'https://www.linkedin.com/in/florian-christ-983651194/'}>
                            linkedin
                        </Link>
                    </li>
                    <li id={styles['dropdown-item']}>github</li>
                </ul>
            )}
        </div>
    );
}