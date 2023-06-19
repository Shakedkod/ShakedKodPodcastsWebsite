import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images, sections } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div 
                onClick={() => window.location.reload()}
                className="app__navbar-logo cursor-pointer"
            >
                <img 
                    src={images.logo} 
                    alt="logo" 
                />
            </div>
            <ul className="app__navbar-links">
                {sections.map((item) => (
                    <li 
                        key ={`link-${item}`}
                        className="app__flex"
                    >
                        <div/>
                        <a 
                            href={item.path}
                            className="text-white hover:text-secColor"
                        >{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 
                    onClick={() => setToggle(true)}
                />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ 
                            duration: 0.85, 
                            ease: "easeOut" 
                        }}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        
                        <ul>
                            {sections.map((item) => (
                                <li key ={`${item.name}`}>
                                    <a 
                                        href={item.path}
                                        onClick={() => setToggle(false)}
                                        className="text-white hover:text-secColor"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;