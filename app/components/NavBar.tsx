"use client";
import styles from "./NavBar.module.css";
import {usePathname, useRouter} from "next/navigation";
import {useMainRef, useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {RefObject, useEffect, useRef, useState} from "react";
import {isInViewport} from "@/app/utils/use-is-element-in-view";
import {useOutsideClick} from "@/app/utils/use-outsite-click";


const paths = {
    home: '/',
    work: '/work',
    skills: '/skills',
    about: '/about',
}

export default function NavBar() {
    const path = usePathname();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const contactButtonRef = useRef<HTMLDivElement>(null);
    const dropDownRef = useRef<HTMLUListElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useOutsideClick([contactButtonRef, dropDownRef], () => {
        setIsOpen(false);
    });


    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div id={styles["nav-bar"]}
             className={`${isOpen ? styles["expand"] : ""} text-xs space-x-5 md:space-x-8 lg:space-x-10`}>

            {Object.entries(paths).map(([key, value]) => {
                const isActive =
                    (path === value || (value !== '/' && path.startsWith(value)))
                    && !isOpen;

                return (
                    <div
                        key={key}
                        onClick={() => router.replace(value)}
                        className={isActive ? styles["active"] : ""}
                    >
                        {capitalize(key)}
                    </div>
                );
            })}

            <div id={styles["dropdown"]}
                 className={isOpen ? styles["active"] : ""}
                 onClick={toggleDropdown}
                 ref={contactButtonRef}
            >
                Contact
            </div>


            <ul id={styles["dropdown-menu"]}
                className={isOpen ? "show" : "hidden"}
                ref={dropDownRef}
            >
                <li id={styles["dropdown-item"]}>
                    <a href="mailto:florian_christ@outlook.com">florian_christ@outlook.com</a>
                </li>
                <li id={styles["dropdown-item"]}>
                    <a href={"https://www.linkedin.com/in/florian-christ-983651194/"} target={"_blank"}>
                        linkedin
                    </a>
                </li>
                <li id={styles["dropdown-item"]}>
                    <a href={"https://github.com/realflorianchrist"} target={"_blank"}>
                        github
                    </a>
                </li>
            </ul>
        </div>
    );
}