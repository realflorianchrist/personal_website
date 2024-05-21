'use client'
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
                ? <div id={'contact-dropdown'}>
                    <div>test</div>

                </div>
                : <></>
            }
        </div>
    );
}