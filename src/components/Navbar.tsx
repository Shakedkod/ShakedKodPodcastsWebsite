"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { NavItems } from "@/constants";

const Navbar = () => {
    useGSAP(() => {
        gsap.from("#head", {
            translateY: "-100%",
            duration: 1.2,
        });

        gsap.from("#logo-link", {
            opacity: 0,
            duration: 1.8,
        });

        gsap.from(".navI", {
            opacity: 0,
            translateY: "105%",
            delay: 0.7,
            duration: 0.4,
            stagger: 0.1
        });
    }, []);

    return (
        <header className="w-full bg-slate-900 pt-3 pb-2 px-5" id="head">
            <nav className="w-full h-12 flex flex-row">
                {/* Desktop Navbar */}
                <div className="w-full h-full px-14 hidden md:flex flex-row">
                    <ul className="flex w-1/2 h-full ml-10 lg:ml-0 flex-row items-center justify-between lg:px-12 xl:px-32 3xl:px-64">
                        {NavItems.map((item, i) => {
                            if (i > (NavItems.length / 2 - 1)) return null;
                            return (
                                <li className="navI" key={item.path}>
                                    <Link href={item.path} className="mx-2 text-xl font-philo text-white hover:text-transparent hover:bg-clip-text  hover:bg-[linear-gradient(25deg,_#ffed00_0%,_#ff9c00_35%,_#ff9c00_58%,_#ffed00_100%)]">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="flex w-1/2 h-full ml-10 lg:ml-0 flex-row items-center justify-between lg:px-12 xl:px-32 3xl:px-64" id="navI-2">
                        {NavItems.map((item, i) => {
                            if (i > (NavItems.length / 2 - 1)) return (
                                <li className="navI" key={item.path}>
                                    <Link href={item.path} className="mx-2 text-xl font-philo text-white hover:text-transparent hover:bg-clip-text  hover:bg-[linear-gradient(25deg,_#ffed00_0%,_#ff9c00_35%,_#ff9c00_58%,_#ffed00_100%)]">
                                        {item.title}
                                    </Link>
                                </li>
                            );

                            return null;
                        })}
                    </ul>
                </div>

                {/* Phone Hamburger Menu */}
                <div className="">

                </div>

                {/* Logo Image */}
                <Link
                    href="/"
                    className="h-full w-auto absolute top-2 ml-auto left-[50%]"
                    id="logo-link"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="ShakedKod's Podcasts"
                        width={100}
                        height={100}
                        priority={true}
                        className="
                            h-3/4 w-auto translate-x-[-1.5rem]
                            cursor-pointer rounded-full 
                            hover:bg-[radial-gradient(#ffaa482d_40%,_#FFFFFF00_70%)] hover:shadow-lg
                            hover:h-[100%] hover:translate-y-[-0.4rem] hover:translate-x-[-2.1rem] 
                            transition-all duration-300 ease-in-out
                        "
                        style={{
                            transition: "background-image 0.5s ease-in-out, box-shadow 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out"
                        }}
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;