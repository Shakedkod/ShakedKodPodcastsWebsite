export type Episode = {
    _id: string;
    title: string;
    description: string;
    google_description: string;
    link: string;
    categories: string[];
    author: string;
    pub_date: string;
    enclosure: {
        length: number;
        type: "audio/mp3" | "audio/mpg" | "audio/wav";
    };
    subtitle: string;
    image: string;
    duration: number;
    explicit: "yes" | "no" | "clean";
    episode_type: "full" | "trailer" | "bonus";
    season: number;
};

export type Podcast = {
    _id: string;
    title: string;
    url_name: string;
    description: string;
    feed_url: string;
    site_url: string;
    links: {
        url: string;
        label: string;
    }[];
    language: string;
    image: string;
    site_cover: string;
    copyright: string;
    categories: string[];
    editor: string;
    web_master: string;
    author: {
        name: string;
        email: string;
        link: string;
    };
    explicit: "yes" | "no" | "clean";
    type: "episodic" | "serial";
    episodes: Episode[];
};

export type PodcastAudio = {
    title: string;
    audioUrl: string;
};