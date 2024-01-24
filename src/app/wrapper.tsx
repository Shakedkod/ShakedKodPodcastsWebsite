"use client";

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from "next/image";

const Wrapper = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    
    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname}>
                <Navbar />
                    <main>
                        {children}
                    </main>
                <Footer />

                <motion.div 
                    className="absolute top-0 left-0 w-[50%] h-[100vh] bg-[#0f0f0f] origin-left z-50"
                    initial={{ scaleX: 0}}
                    animate={{ scaleX: 0}}
                    exit={{ scaleX: 1}}
                    transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div 
                    className="absolute top-0 right-0 w-[50%] h-[100vh] bg-[#0f0f0f] origin-right z-50"
                    initial={{ scaleX: 0}}
                    animate={{ scaleX: 0}}
                    exit={{ scaleX: 1}}
                    transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div 
                    className="absolute top-[42%] right-0 w-[55%] h-[50vh] bg-[#0f0f0f] origin-right z-[60] flex items-center justify-center"
                    initial={{ scaleX: 0}}
                    animate={{ scaleX: 0}}
                    exit={{ scaleX: 1}}
                    transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src="/assets/logo.png"
                        width={200}
                        height={200}
                        alt="ShakedKod's logo"
                        className="absolute top-0 left-0 cursor-pointer 4xl:w-[12rem] 4xl:h-[12rem]"
                    />
                </motion.div>

                <motion.div 
                    className="absolute top-0 left-0 w-[50%] h-[100vh] bg-[#0f0f0f] origin-left z-50"
                    initial={{ scaleX: 1}}
                    animate={{ scaleX: 0}}
                    exit={{ scaleX: 0}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div 
                    className="absolute top-0 right-0 w-[50%] h-[100vh] bg-[#0f0f0f] origin-right z-50"
                    initial={{ scaleX: 1}}
                    animate={{ scaleX: 0}}
                    exit={{ scaleX: 0}}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default Wrapper;