"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CopyrightingAndInfo = () => {
    return (
        <section className="mt-12 w-full" id="info">
            {/*title*/}
            <div className="w-full flexCenter mb-3">
                <h2 className="my-5 text-yellow-50 font-philo bold-64 capitalize">
                    Some Info
                </h2>
            </div>
            <motion.div
                initial={{ position: 'relative', left: 900, opacity: 0.5 }}
                animate={{ position: 'relative', left: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-end content-end"
            >
                <div className="flex flex-col justify-start content-start text-right rounded-l-3xl p-5 w-[67%] md:w-[48%] mb-5 md:mb-0">
                    <h3 className="bold-32 text-yellow-50 pt-3">?מה תמצאו באתר הזה</h3>
                    <div className="regular-20 pt-1">
                        <p>.באתר זה נמצאים כל הפודקאסטים שאותם אני יוצר ופודקאסטים שאותם אני מפיק, עורך או עוזר בכל דרך אחרת</p>
                        <p className="mb-2">.אותם תוכלו לראות למטה</p>
                        <p>
                            הפודקאסטים שתמצאו באתר הזה הינם במגוון תחומים וסוגים שונים, בין אם קריין מקריא טקסט, אנשים מדברים בחדר באופן שרירותי ואפילו פודקאסט מתוסרט עם עלילה מקורית
                            <br/>
                            <strong>!האזנה נעימה</strong>
                        </p>
                        <br/>
                        <p>
                            .חלק מהפודקאסטים הינם בשיתוף עם 
                            <span className="text-cyan-400"> רדיו בן צבי</span>
                        </p>
                        <br/>
                        <br/>
                    </div>
                    <h3 className="bold-32 text-cyan-400 pt-3">?מה זה רדיו בן צבי</h3>
                    <div className="regular-20 pt-1">
                        <p></p>
                    </div>
                    <Image
                        src="/assets/bgPattern.png"
                        width={200}
                        height={200}
                        alt="bg"
                        className="hidden md:block absolute top-0 right-[-10rem] w-[57%] h-full z-[-10]"
                    />
                </div>
            </motion.div>
            <motion.div 
                className="w-full flex justify-start content-start"
                initial={{ position: 'relative', right: 900, opacity: 0.5 }}
                animate={{ position: 'relative', right: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col justify-start content-start text-left bg-pattern rounded-r-3xl p-5 w-[67%] md:w-[45%]">
                    <h3 className="bold-32 pr-5 text-yellow-50 pt-3 capitalize">What will you find in this site?</h3>
                    <div className="regular-20 pr-5 pt-1">
                        <p>In this website you will find all of the podcasts that I create & all of the podcast I help with or edit;</p>
                        <p className="mb-3">you can see them above and below this section.</p>
                        <p>
                            The podcasts you will find in this site are in a lot of topics and types, from just a couple of friends talking in a room to a full original story podcast.
                            <br/>
                            <strong>Enjoy your listening!</strong>
                        </p>
                        <br/>
                        <p>
                            Some of the podcasts are in collaboration with
                            <span className="text-cyan-400"> Radio Ben Zvi</span>.
                        </p>
                        <br/>
                        <br/>
                    </div>
                    <h3 className="bold-32 pr-5 text-cyan-400 pt-3">What is Radio Ben Zvi?</h3>
                    <div className="regular-20 pr-5 pt-1">
                        <p></p>
                    </div>
                    <Image
                        src="/assets/bgPattern.png"
                        width={200}
                        height={200}
                        alt="bg"
                        className="hidden md:block absolute top-0 left-[-10rem] w-[55%] h-full z-[-10]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default CopyrightingAndInfo;