'use client'
import Styles from './ContactDropdown.module.css'
import {useState} from "react";

export default function ContactDropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id={Styles['dropdown']}>
            <button id={Styles['dropdown-toggle']}
                 onClick={toggleDropdown}
            >
                Contact
            </button>

            {isOpen && (
                <ul id={Styles['dropdown-menu']}>
                    <li id={Styles['dropdown-item']}>test</li>
                </ul>
            )}
        </div>
    );
}