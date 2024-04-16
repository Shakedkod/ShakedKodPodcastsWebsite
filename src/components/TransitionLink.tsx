"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut, animateMoveToSection } from "@/utils/animation";

interface Props 
{
    href: string;
    children: React.ReactNode;
    className: string;
    id?: string;
}

const Link = ({ href, children, className, id }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname === href) return;

        animatePageOut(href, router);
    };

    return (
        <button 
            onClick={handleClick}
            className={className}
            id={id ? id : ""}
        >
            {children}
        </button>
    );
};

const DownLink = ({ href, children, className, id }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname === href) return;

        animateMoveToSection(href, router);
    };

    return (
        <a 
            onClick={handleClick}
            className={className}
            id={id ? id : ""}
        >
            {children}
        </a>
    );
};

export default Link;

export { DownLink };