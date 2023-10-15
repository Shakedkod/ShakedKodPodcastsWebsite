import Image from "next/image";

import { PodcastsImOnId, PODCASTS } from "@/constants";
import Link from "next/link";

const PodcastsImOn = () => {
    return (
        <section id="podcasts-colab" className="padding-container max-container flexCenter flex-col mt-10">
            <h2 className="my-5 text-yellow-50 font-philo bold-64 capitalize text-center">
                Podcasts in collaboration with me
            </h2>
            <ul className="flexCenter flex-col md:flex-row gap-16 w-[95%]">
                {PodcastsImOnId.map((podcastId) => (
                    <li key={podcastId} className="rounded-3xl bg-[#10586163] w-[300px] h-[400px] p-2 text-center">
                        <Link href={`/podcast/${podcastId}`} className="flexCenter flex-col">
                            <Image
                                src={PODCASTS[podcastId].image}
                                width={200}
                                height={200}
                                alt={PODCASTS[podcastId].title}
                                className="rounded-1xl mb-4 mt-2 w-[85%] md:hover:w-full transition-[width] duration-500 ease-in-out"
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

export default PodcastsImOn;