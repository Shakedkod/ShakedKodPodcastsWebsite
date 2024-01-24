import { client, getEpisodeAudio, urlFor } from "@/utils/sanity/client";
import { Episode, Podcast } from "@/utils/sanity/types";
import RSS from "rss";

const generateRssFeed = async (data: Podcast) => {
    const feed = new RSS({
        title: data.title,
        description: data.description,
        feed_url: data.feed_url || "https://podcasts.shakedkod.tech",
        site_url: data.site_url || "https://podcasts.shakedkod.tech",
        image_url: data.image,
        managingEditor: data.editor,
        webMaster: data.web_master,
        copyright: data.copyright,
        language: data.language,
        categories: data.categories,
        pubDate: new Date(),
        ttl: 60,
        custom_namespaces: {
            "itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
            "googleplay": "http://www.google.com/schemas/play-podcasts/1.0"
        },
        custom_elements: [
            {'itunes:subtitle': data.description},
            {'itunes:author': data.author?.name},
            {'itunes:summary': data.description},
            {
                'itunes:owner': [
                    {'itunes:name': data.author?.name},
                    {'itunes:email': data.author?.email}
                ]
            },
            {
                "itunes:image": {
                    _attr: {
                        href: data.image
                    }
                }
            },
            {
                "itunes:category": [
                    {
                        _attr: {
                            text: data.categories? data.categories[0] : ""
                        }
                    },
                    {
                        "itunes:category": {
                            _attr: {
                                text: data.categories? data.categories[1] : ""
                            }
                        }
                    }
                ]
            },
            {'itunes:explicit': data.explicit},
            {'itunes:type': data.type},
            {"googleplay:author": data.author?.name},
        ]
    });

    // add episodes
    data.episodes?.forEach(
        async (episode: Episode, index) => {
            const date = new Date(episode.pub_date)
            
            if (date <= new Date()) feed.item({
                title: episode.title || "",
                description: episode.description || "",
                url: episode.link || "",
                guid: episode.link || "",
                categories: episode.categories,
                author: episode.author,
                date: episode.pub_date ? date : new Date(),
                enclosure: {
                    url: episode.enclosure.url,
                    size: episode.enclosure?.length,
                    type: episode.enclosure?.type
                },
                custom_elements: [
                    {'itunes:author': episode.author},
                    {'itunes:subtitle': episode.subtitle},
                    {
                        "itunes:image": {
                            _attr: {
                                href: urlFor(episode.image).url()
                            }
                        }
                    },
                    {"itunes:duration": episode.duration},
                    {"itunes:explicit": episode.explicit},
                    {"itunes:episodeType": episode.episode_type},
                    {"itunes:season": episode.season},
                    {"googleplay:description": episode.google_description},
                ]
            });
        }
    );

    // return the feed
    return feed.xml();
};

const Page = () => {};

export async function getServerSideProps({ params, res }: { params: {id: string}; res: any })
{
    if (!params.id || params.id.length === 0)
    {
        res.statusCode = 404;
        res.end("Not Found");
        return { props: {} };
    }

    const podcasts = await client.fetch<Podcast[]>(`*[_type == "podcast" && url_name match '${params.id}*']`);
    if (!podcasts || podcasts.length === 0) {
        res.statusCode = 404;
        res.end("Not Found");
        return { props: {} };
    }
    
    const rss = await generateRssFeed(podcasts[0]);

    res.setHeader("Content-Type", "text/xml");
    res.write(rss);
    res.end();


    return { props: {} };
}

export default Page;