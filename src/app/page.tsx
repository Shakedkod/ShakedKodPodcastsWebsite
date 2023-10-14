import CopyrightingAndInfo from "@/components/CopyrightingAndInfo";
import Header from "@/components/Header";
import MyPodcasts from "@/components/MyPodcasts";
import PodcastsImOn from "@/components/PodcastsImOn";

export default function Home()
{
    return (
        <>
            <Header/>
            <MyPodcasts/>
            <CopyrightingAndInfo/>
            <PodcastsImOn/>
        </>
    );
}