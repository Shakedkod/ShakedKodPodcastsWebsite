"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Transition = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [displayChildren, setDisplayChildren] = useState(children);

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout( () => {
            setDisplayChildren(children);
        }, 5000);
    }, [children]);

    return (
        <div ref={container}>
            {displayChildren}
        </div>
    )
}

export default Transition