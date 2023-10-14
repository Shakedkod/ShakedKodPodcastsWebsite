import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

import Button from "./Button";
import Link from "next/link";

const Header = () => {
    return (
        <section className="relative -top-10 left-0 z-0">
            <Image
                src="/assets/cover.png"
                alt="ShakedKod's Podcasts"
                width={200}
                height={200}
                className="w-full h-auto"
            />
            <div className="absolute flex md:bg-[#00000093] py-8 pl-5 pr-7 gap-3 rounded-3xl 4xl:rounded-5xl shadow-md top-[-10%] xs:top-5 md:right-[5%] lg:top-32 4xl:top-96 text-center md:text-right w-full md:w-auto">
                    <div className="flexBetween flex-col w-full">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full md:w-auto">
                                <p className="bold-20 xs:bold-32 md:bold-64 4xl:bold-180 text-yellow-50 w-full">פודקאסט ללא נושא</p>
                            </div>
                            <p className="regular-14 xs:regular-18 md:bold-20 4xl:regular-64 mt-1 4xl:mt-7">פרקים קצרים על נושאים מעניינים</p>
                        </div>

                        <Link 
                            href="/podcast/PWAS"
                            className="flex w-1/2 md:w-3/4 flex-col mt-2 xs:mt-5 md:mt-8 4xl:mt-16 md:hover:w-full transition-[width] duration-500 ease-in-out"
                        >
                            <Button
                                type="button"
                                title="האזינו עכשיו"
                                variant="btn_yellow regular-16 hover:regular-20 md:bold-32 md:hover:bold-40 4xl:bold-88 4xl:hover:bold-120 4xl:mb-5 transition-all duration-500 ease-in-out"
                            />
                        </Link>
                    </div>
                </div>
                
                {/* an icon at the bottom of the image*/}
                <div className="absolute bottom-0 w-full flexCenter z-0">
                    <Link href="/#podcasts">
                        <BsChevronDown className="text-white text-4xl md:text-6xl 4xl:text-8xl animate-bounce" />
                    </Link>
                </div>
        </section>
    );
};

export default Header;