"use client";

import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
import '@/styles/audio-player.scss';

import { PODCASTS } from "@/constants";
import Link from "next/link";

const Page = ({ params }: { params: {id: string; epId: string;} }) => {
    if (!params.id || !params.epId) return null;
    const podId = params.id;
    const epId = PODCASTS[podId].episodes.length - (parseInt(params.epId.replace("Ep", "")));
    const episodeProps = PODCASTS[podId].episodes[epId];

    return (
        <div className="flex flex-col md:flex-row">
            {PODCASTS[podId].language === "he" ? (
                <>
                    <div className="w-full md:hidden">
                        <Image
                            src={episodeProps.image}
                            alt={episodeProps.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-end justify-start w-full md:w-1/2 pr-10 text-right">
                        <div className="flex flex-col md:flex-row items-center md:items-end">
                            <Link href={`/podcast/${podId}`}>
                                <p className="hidden md:block regular-14 text-gray-20 cursor-pointer hover:text-red-500">{PODCASTS[podId].title}</p>
                            </Link>
                            <p className="hidden md:block md:regular-64 text-gray-50">/</p>
                            <h1 className="regular-32 md:regular-64 text-yellow-50 font-archay">
                                {episodeProps.title}
                            </h1>
                            <Link href={`/podcast/${podId}`}>
                                <p className="md:hidden regular-14 text-gray-20 cursor-pointer hover:text-red-500 mb-5">{PODCASTS[podId].title}</p>
                            </Link>
                        </div>
                        <div className="" dangerouslySetInnerHTML={{ __html: episodeProps.description }}/>
                    </div>
                    <div className="w-1/2 hidden md:block">
                        <Image
                            src={episodeProps.image}
                            alt={episodeProps.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="fixed bottom-0 w-full">
                        <AudioPlayer
                            src={episodeProps.audio.url}
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
                            src={episodeProps.image}
                            alt={episodeProps.title}
                            width={100}
                            height={100}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/2 pl-10 text-left">
                        <div className="flex flex-row items-end">
                            <h1 className="regular-64 text-yellow-50 font-archay">
                                {episodeProps.title}
                            </h1>
                            <p className="regular-64 text-gray-50">\</p>
                            <Link href={`/podcast/${podId}`}>
                                <p className="regular-20 text-gray-20 cursor-pointer hover:text-red-500">{PODCASTS[podId].title}</p>
                            </Link>
                        </div>
                        <div className="" dangerouslySetInnerHTML={{ __html: episodeProps.description }}/>
                    </div>
                    <div className="fixed bottom-0 w-full">
                        <AudioPlayer
                            src={episodeProps.audio.url}
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