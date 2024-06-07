'use client'
import styles from './NavBar.module.css'
import {usePathname, useRouter} from "next/navigation";
import {useMainRef, useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {RefObject, useEffect, useRef, useState} from "react";
import {isInViewport} from "@/app/utils/use-is-element-in-view";
import {useOutsideClick} from "@/app/utils/use-outsite-click";

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

    const contactButtonRef = useRef<HTMLDivElement>(null);
    const dropDownRef = useRef<HTMLUListElement>(null);

    useOutsideClick([contactButtonRef, dropDownRef], () => {
        setIsOpen(false);
    });

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

    const handleHomeClick = () => {
        if (path === '/') {
            scrollToSection(introductionRef!)
        } else {
            router.push('/')
        }
    }

    const handleWorkClick = () => {
        if (path === '/') {
            scrollToSection(projectPreviewsRef!);
        } else {
            setShouldScrollToProjectPreviews(true);
            router.push('/');
        }
    };

    return (
        <div id={styles['nav-bar']}
             className={`${isOpen ? styles['expand'] : ''} text-xs space-x-10`}>

            <div onClick={handleHomeClick}
                 className={isIntroductionVisible && !isOpen ? styles['active'] : ''}
            >
                Home
            </div>

            <div onClick={handleWorkClick}
                 className={isProjectPreviewsVisible && !isOpen ? styles['active'] : ''}
            >
                Work
            </div>

            <div onClick={() => router.push('/about')}
                 className={path === '/about' && !isOpen ? styles['active'] : ''}

            >
                About
            </div>

            <div id={styles['dropdown']}
                 className={isOpen ? styles['active'] : ''}
                 onClick={toggleDropdown}
                 ref={contactButtonRef}
            >
                Contact
            </div>


            <ul id={styles['dropdown-menu']}
                className={isOpen ? 'show' : 'hidden'}
                ref={dropDownRef}
            >
                <li id={styles['dropdown-item']}>
                    <a href="mailto:florian_christ@outlook.com">florian_christ@outlook.com</a>
                </li>
                <li id={styles['dropdown-item']}>
                    <a href={'https://www.linkedin.com/in/florian-christ-983651194/'} target={'_blank'}>
                        linkedin
                    </a>
                </li>
                <li id={styles['dropdown-item']}>
                    <a href={'https://github.com/realflorianchrist'} target={'_blank'}>
                        github
                    </a>
                </li>
            </ul>
        </div>
    );
}