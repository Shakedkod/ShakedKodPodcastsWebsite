import Image from "next/image";
import Link from "next/link";

import { getPodcast, urlFor } from "@/utils/sanity/client";

function getIcon(label: string)
{
    switch (label)
    {
        case "spotify": return "/assets/spotify.svg";
        case "apple": return "/assets/apple.svg";
        case "youtube": return "/assets/youtube-music.svg";
        case "google": return "/assets/google.svg";
        case "pocket": return "/assets/pocket.svg";
        case "rss": return "/assets/rss.svg";
        default: return "/assets/android.svg";
    }
}

const Page = async ({ params }: { params: {id: string} }) => {
    if (!params.id) return null;
    const podcast = await getPodcast(params.id);

    if (!podcast) return null;

    return (
        <>
            <header className="flex flex-row relative -top-10 left-0 z-0">
                <Image
                    src={urlFor(podcast.site_cover).url()}
                    alt={podcast.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className={`flexCenter flex-col absolute top-0 right-0 text-center w-full h-full bg-[#0000005e]`}>
                    <div className="flexCenter absolute md:relative top-12 md:top-0 flex-col">
                        <h1 
                            className={`regular-32 md:regular-100 text-yellow-50 ${podcast.language === "he" ? "font-archay" : "font-philo"}`}
                        >
                            {podcast.title}
                        </h1>
                        <div className="border-2 border-gray-500 w-2/3"/>
                        <p className="regular-18 md:regular-32">{podcast.description}</p>
                        <div className="pt-2 md:pt-10">
                            <ul className="flex flex-row gap-3 md:gap-5 h-[3.5rem] md:h-[3.5rem]">
                                {podcast.links?.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} target="_blank">
                                            <div className="w-10 md:w-12 h-10 md:h-12">
                                                <Image
                                                    src={getIcon(link.label)}
                                                    alt={link.url}
                                                    width={32}
                                                    height={32}
                                                    className="w-6 md:w-10 h-6 md:h-10 md:hover:w-12 md:hover:h-12 object-contain transition-all duration-300 ease-in-out"
                                                />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-col items-center justify-start">
                <h2 className="bold-52 md:bold-64 text-cyan-500 font-philo mb-3">Episodes</h2>
                <ul className="pt-2 flex flex-col items-center justify-between gap-6">
                    {podcast.language === "he" ? podcast.episodes.map((episode, index) => {
                        if (new Date(episode.pub_date) <= new Date()) return (
                            <li className="md:h-[270px] text-right" key={index}>
                                <Link href={`/podcast/${params.id}/Ep${podcast.episodes.length - index}`} className="bg-slate-900 rounded-3xl w-[300px] md:w-auto md:h-[220px] group md:hover:h-[250px] transition-[height] duration-500 ease-in-out flex flex-col md:flex-row p-[10px] relative">
                                    <Image
                                        src={urlFor(episode.image || "ERROR").url()}
                                        alt={episode.title || "ERROR"}
                                        width={300}
                                        height={300}
                                        className="rounded-xl md:hidden md:group-hover:w-[230px] group-hover:h-[230px] transition-all duration-700 ease-in-out" />
                                    <div className="absolute top-[10rem] md:top-0 regular-24 z-0 h-full text-[#75757541] flex flex-col justify-center items-center gap-0">
                                        <p className="absolute top-[10rem] md:top-5">season</p>
                                        <span className="bold-180">{episode.season}</span>
                                    </div>
                                    <div className="z-30 flex flex-col items-end justify-center pr-3 md:w-[45rem] md:group-hover:w-[48rem]">
                                        <h3 className="regular-32">{episode.title}</h3>
                                        <div className="w-[250px] md:w-auto h-[150px] md:h-[100px] md:group-hover:h-[100px] overflow-clip" dangerouslySetInnerHTML={{ __html: episode.description || "" }} />
                                    </div>
                                    <Image
                                        src={urlFor(episode.image || "ERROR").url()}
                                        alt={episode.title || "ERROR"}
                                        width={200}
                                        height={200}
                                        className="rounded-xl hidden md:flex w-[200px] h-[200px] group-hover:w-[230px] group-hover:h-[230px] transition-all duration-700 ease-in-out" />
                                </Link>
                            </li>
                        );
                    }) : podcast.episodes.map(function (episode, index) {
                        if (new Date(episode.pub_date) <= new Date()) return (
                            <li className="h-[270px] text-left" key={index}>
                                <Link href={`/podcast/${params.id}/Ep${podcast.episodes?.length || 1 - index}`} className="bg-slate-900 rounded-3xl h-[220px] group hover:h-[250px] transition-[height] duration-500 ease-in-out flex flex-row p-[10px] relative">
                                    <Image
                                        src={urlFor(episode.image || "ERROR").url()}
                                        alt={episode.title || "ERROR"}
                                        width={200}
                                        height={200}
                                        className="rounded-xl w-[200px] h-[200px] group-hover:w-[230px] group-hover:h-[230px] transition-all duration-700 ease-in-out" />
                                    <div className="absolute left-[52rem] group-hover:left-[57rem] transition-all duration-300 ease-in-out regular-24 z-0 h-full text-[#75757541] flex flex-col justify-center items-center gap-0">
                                        <p className="absolute top-5">season</p>
                                        <span className="bold-180">{episode.season}</span>
                                    </div>
                                    <div className="z-30 flex flex-col items-start justify-center pl-3 w-[45rem] group-hover:w-[48rem]">
                                        <h3 className="regular-32">{episode.title}</h3>
                                        <div className="h-[100px] group-hover:h-[100px] overflow-clip" dangerouslySetInnerHTML={{ __html: episode.description || "" }} />
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Page;