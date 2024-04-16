export const FooterLinks = [
    {
        name: "Podcasts",
        children: [
            {
                label: "My Podcasts",
                icon: null,
                path: "https://podcast.shakedkod.tech/#podcasts",
            },
            {
                label: "Podcasts in collaboration with me",
                icon: null,
                path: "https://podcast.shakedkod.tech/#podcasts-colab",
            },
            {
                label: "Radio Ben Zvi",
                icon: null,
                path: "https://linktr.ee/Radio.benzvi"
            },
            {
                label: "Radio Ben Zvi Youtube",
                icon: null,
                path: "https://www.youtube.com/channel/UC201HUhnv757FkBdZOJZfIg"
            }
        ]
    },
    {
        name: "Info",
        children: [
            {
                label: "About",
                icon: null,
                path: "/about",
            },
            {
                label: "Myself as a developer",
                icon: null,
                path: "https://programs.shakedkod.tech/#info",
            },
            {
                label: "Myself as a podcaster",
                icon: null,
                path: "https://podcast.shakedkod.tech/#inf",
            },
            {
                label: "Contact",
                icon: null,
                path: "/contact",
            }
        ]
    }
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Me',
    links: [
        { label: 'By Email', value: 'shakedkod.yt@gmail.com', link: "mailto:shakedkod.yt@gmail.com" },
        { label: "By Instagram", value: "@shakedkod", link: "https://www.instagram.com/shakedkod" },
        { label: "By Linkedin", value: "@shakedkod", link: "https://www.linkedin.com/in/shakedkod" }
    ],
};

export const SOCIALS = [
    {
        icon: "/assets/instagram.svg",
        path: "https://www.instagram.com/shakedkod",
    },
    {
        icon: "/assets/github.svg",
        path: "https://github.com/shakedkod"
    },
    {
        icon: "/assets/linkedin.svg",
        path: "https://www.linkedin.com/in/shakedkod"
    },
    {
        icon: "/assets/youtube.svg",
        path: "https://www.youtube.com/@ShakedKod"
    },
    {
        icon: "/assets/twitter.svg",
        path: "https://twitter.com/m_ShakedKod"
    }
];

export const NavItems = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Programsㅤ",
        path: "https://shakedkod.tech/program",
    },
    {
        title: "ㅤPodcasts",
        path: "/#podcasts",
    },
    {
        title: "Contact",
        path: "https://shakedkod.tech/contact",
    },
]

export const MyPodcastId = [
    "PWAS",
    "ATWAS"
]; 

export const PodcastsImOnId = [
    "ST"
];

export type RSSDataProps = {
    title: string;
    description: string;
    feed_url: string;
    site_url: string;
    links: {
        label: string;
        url: string;
    }[];
    language: string;
    image: string;
    cover: string;
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
    episodes: {
        title: string;
        description: string;
        google_description: string;
        url: string;
        categories: string[];
        author: string;
        date: string;
        audio: {
            url: string;
            size: number;
            type: string;
        };
        subtitle: string;
        image: string;
        duration: string;
        explicit: "yes" | "no" | "clean";
        episodeType: "full" | "trailer" | "bonus";
        season: number;
    }[];
};