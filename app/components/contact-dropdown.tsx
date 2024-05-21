'use client'
import Styles from './ContactDropdown.module.css'
import {useState} from "react";

export default function ContactDropdown() {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div onMouseEnter={() => setIsActive(true)}
             onMouseLeave={() => setIsActive(false)}>

            <div>
                Contact
            </div>

            {isActive
                ? <div id={Styles['contact-dropdown']}>
                    <div>test</div>

                </div>
                : <></>
            }
        </div>
    );
}