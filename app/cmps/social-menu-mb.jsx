'use client'

import { social } from "../data/data";
import { useState } from "react";
import { ButtonCmp } from './button-cmp'

export function Social_MB() {

    const [showIcons, setShowIcons] = useState(false);

    const toggleIcons = () => {
        setShowIcons(!showIcons);
    };

    return (
        <>
            <section className="social-mb">
                <ButtonCmp className="fab" onClick={toggleIcons} >+</ButtonCmp>
                {showIcons && (
                    <ul className="social-icons">
                        {social.map((icon, idx) => {
                            return (
                                <ButtonCmp className={`social-icon ${showIcons ? `open` : `close`}`} onClick={() => window.open(`${icon.link}`, '_blank')} key={idx} title={`${icon.title}`}>
                                    {icon.icon}
                                </ButtonCmp>
                            );
                        })}
                    </ul>
                )}
            </section >
        </>
    )
}

export default Social_MB