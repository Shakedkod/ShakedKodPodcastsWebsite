import { PODCASTS, RSSDataProps } from "@/constants";
import RSS from "rss";

const generateRssFeed = async (data: RSSDataProps) => {
    // create a new feed with the basic info
    const feed = new RSS({
        title: data.title,
        description: data.description,
        feed_url: data.feed_url,
        site_url: data.site_url,
        image_url: data.image,
        managingEditor: data.editor,
        webMaster: data.web_master,
        copyright: data.copyright,
        language: data.language,
        categories: data.categories,
        pubDate: new Date().toString(),
        ttl: 60,
        custom_namespaces: {
            "itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
            "googleplay": "http://www.google.com/schemas/play-podcasts/1.0"
        },
        custom_elements: [
            {'itunes:subtitle': data.description},
            {'itunes:author': data.author.name},
            {'itunes:summary': data.description},
            {
                'itunes:owner': [
                    {'itunes:name': data.author.name},
                    {'itunes:email': data.author.email}
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
                            text: data.categories[0]
                        }
                    },
                    {
                        "itunes:category": {
                            _attr: {
                                text: data.categories[1]
                            }
                        }
                    }
                ]
            },
            {'itunes:explicit': data.explicit},
            {'itunes:type': data.type},
            {"googleplay:author": data.author.name},
        ]
    });

    // add episodes
    data.episodes.forEach(
        (episode: any) => {
            feed.item({
                title: episode.title,
                description: episode.description,
                url: episode.url,
                guid: episode.url,
                categories: episode.categories,
                author: episode.author,
                date: episode.date,
                enclosure: {
                    url: episode.audio.url,
                    size: episode.audio.size,
                    type: episode.audio.type
                },
                custom_elements: [
                    {'itunes:author': episode.author},
                    {'itunes:subtitle': episode.subtitle},
                    {
                        "itunes:image": {
                            _attr: {
                                href: episode.image
                            }
                        }
                    },
                    {"itunes:duration": episode.duration},
                    {"itunes:explicit": episode.explicit},
                    {"itunes:episodeType": episode.episodeType},
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
    const rss = await generateRssFeed(PODCASTS[params.id]);

    res.setHeader("Content-Type", "text/xml");
    res.write(rss);
    res.end();


    return { props: {} };
}

export default Page;