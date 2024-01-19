import Image from "next/image";

import { PodcastsImOnId } from "@/constants";
import Link from "next/link";
import { Podcast } from "@/utils/sanity/types";
import { getPodcast, urlFor } from "@/utils/sanity/client";

const PodcastsImOn = async () => {
    var podcasts: Podcast[] = [];

    for (let i = 0; i < PodcastsImOnId.length; i++) 
    {
        const podcast = await getPodcast(PodcastsImOnId[i]);
        if (podcast) podcasts.push(podcast);
    }

    return (
        <section id="podcasts-colab" className="padding-container max-container flexCenter flex-col mt-10">
            <h2 className="my-5 text-yellow-50 font-philo bold-64 capitalize text-center">
                Podcasts in collaboration with me
            </h2>
            <ul className="flexCenter flex-col md:flex-row gap-16 w-[95%]">
                {podcasts.map((podcast) => (
                    <li key={podcast.url_name} className="rounded-3xl bg-[#10586163] w-[300px] h-[400px] p-2 text-center">
                        <Link href={`/podcast/${podcast.url_name}`} className="flexCenter flex-col">
                            <Image
                                src={urlFor(podcast.image).url()}
                                width={200}
                                height={200}
                                alt={podcast.title}
                                className="rounded-1xl mb-4 mt-2 w-[85%] md:hover:w-full transition-[width] duration-500 ease-in-out"
                            />
                            <div className="py-2">
                                <div className="text-yellow-50 bold-32">
                                    {podcast.title}
                                </div>
                                <div className="text-white bold-24 line-clamp-1">
                                    {podcast.description}
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