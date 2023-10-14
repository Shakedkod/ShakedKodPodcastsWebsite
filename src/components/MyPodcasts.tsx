import Image from "next/image";

import { MyPodcastId, PODCASTS } from "@/constants";
import Link from "next/link";

const MyPodcasts = () => {
    return (
        <section id="podcasts" className="padding-container max-container flexCenter flex-col">
            <div className="my-5 text-yellow-50 font-philo bold-64">
                My Podcasts
            </div>
            <ul className="flexCenter flex-row gap-16">
                {MyPodcastId.map((podcastId) => (
                    <li key={podcastId} className="rounded-3xl bg-[#10586163] pt-8 px-5 pb-3 text-center max-w-[18rem]">
                        <Link href={`/podcast/${podcastId}`} className="flexCenter flex-col">
                            <Image
                                src={PODCASTS[podcastId].image}
                                width={200}
                                height={200}
                                alt={PODCASTS[podcastId].title}
                                className="rounded-1xl mb-4 w-[85%] hover:w-full transition-[width] duration-500 ease-in-out"
                            />
                            <div className="py-2">
                                <div className="text-yellow-50 bold-32">
                                    {PODCASTS[podcastId].title}
                                </div>
                                <div className="text-white bold-24 line-clamp-1">
                                    {PODCASTS[podcastId].description}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MyPodcasts;