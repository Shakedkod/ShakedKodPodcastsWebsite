"use client";

import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
import '@/styles/audio-player.scss';

import Link from "next/link";
import { getEpisode, getEpisodeAudio, getPodcast, urlFor } from "@/utils/sanity/client";
import { useEffect, useState } from "react";
import { Episode, Podcast } from "@/utils/sanity/types";

const Page = ({ params }: { params: { id: string; epId: string; } }) => {
    const [podcast, setPodcast] = useState<Podcast | null>(null);
    const [episode, setEpisode] = useState<Episode | null>(null);
    const [fileRef, setFileRef] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!params.id || !params.epId) return;

            const fetchedPodcast = await getPodcast(params.id);
            if (!fetchedPodcast) return;

            const fetchedEpisode = await getEpisode(fetchedPodcast, parseInt(params.epId.replace('Ep', '')));
            if (!fetchedEpisode) return;

            const fetchedFileRef = await getEpisodeAudio(params.id, parseInt(params.epId.replace('Ep', '')));
            if (!fetchedFileRef) return;

            setPodcast(fetchedPodcast);
            setEpisode(fetchedEpisode);
            setFileRef(fetchedFileRef);
        };

        fetchData();
    }, [params.id, params.epId]);

    if (!podcast || !episode || !fileRef) {
        return <div>Loading...</div>; // You might want to replace this with a loading indicator or handle differently
    }

    return (
        <div className="flex flex-col md:flex-row">
            {podcast.language === "he" ? (
                <>
                    <div className="w-full md:hidden">
                        <Image
                            src={urlFor(episode.image).url()}
                            alt={episode.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-end justify-start w-full md:w-1/2 pr-10 text-right">
                        <div className="flex flex-col md:flex-row items-center md:items-end">
                            <Link href={`/podcast/${params.id}`}>
                                <p className="hidden md:block regular-14 text-gray-20 cursor-pointer hover:text-red-500">{podcast.title}</p>
                            </Link>
                            <p className="hidden md:block md:regular-64 text-gray-50">/</p>
                            <h1 className="regular-32 md:regular-64 text-yellow-50 font-archay">
                                {episode.title}
                            </h1>
                            <Link href={`/podcast/${params.id}`}>
                                <p className="md:hidden regular-14 text-gray-20 cursor-pointer hover:text-red-500 mb-5">{podcast.title}</p>
                            </Link>
                        </div>
                        <div className="" dangerouslySetInnerHTML={{ __html: episode.description }} />
                    </div>
                    <div className="w-1/2 hidden md:block">
                        <Image
                            src={urlFor(episode.image).url()}
                            alt={episode.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="fixed bottom-0 w-full">
                        <AudioPlayer
                            src={fileRef}
                            onPlay={e => console.log("onPlay")}
                            className="w-full shadow-md"
                            layout="horizontal"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/2">
                        <Image
                            src={urlFor(episode.image).url()}
                            alt={episode.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/2 pl-10 text-left">
                        <div className="flex flex-row items-end">
                            <h1 className="regular-64 text-yellow-50 font-archay">
                                {episode.title}
                            </h1>
                            <p className="regular-64 text-gray-50">\</p>
                            <Link href={`/podcast/${params.id}`}>
                                <p className="regular-20 text-gray-20 cursor-pointer hover:text-red-500">{podcast.title}</p>
                            </Link>
                        </div>
                        <div className="" dangerouslySetInnerHTML={{ __html: episode.description }} />
                    </div>
                    <div className="fixed bottom-0 w-full">
                        <AudioPlayer
                            src={fileRef}
                            onPlay={e => console.log("onPlay")}
                            className="w-full shadow-md"
                            layout="horizontal"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Page;