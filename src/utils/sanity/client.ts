import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { Podcast, PodcastAudio, WebsiteAsset, WebsiteImage } from './types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})

export const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export const getPodcast = async (podId: string) => {
    const podcasts = await client.fetch<Podcast[]>(`*[_type == "podcast" && url_name match '${podId}']`);

    if (!podcasts || podcasts.length === 0) return null;
    const podcast = podcasts[0];

    for (var prop in podcast)
        if (prop === null || prop === undefined || prop === "") return null;

    return podcast;
};

export const getEpisodes = async (podcast: Podcast) => {
    if (!podcast) return null;

    const episodes = podcast.episodes;
    if (!episodes || episodes.length === 0) return null;

    return episodes;
};

export const getEpisode = async (podcast: Podcast, epNum: number) => {
    const episodes = await getEpisodes(podcast);
    if (!episodes) return null;

    const episode = episodes[episodes.length - epNum];
    if (!episode) return null;

    return episode;
};

export const getEpisodeAudio = async (podId: string, epNum: number) => {
    const audio = await client.fetch<PodcastAudio[]>(`*[_type == 'audio' && file_name match '${podId}-${epNum}'] {file_name, "audioUrl": file.asset->url}`);

    if (!audio || audio.length === 0) return null;
    
    return `${audio[0].audioUrl}?dl=${podId}-${epNum}.mp3`;
};

export const getFileAsset = async (name: string) => {
    const asset = await client.fetch<WebsiteAsset[]>(`*[_type == 'website_asset' && name match '${name}'] {file_name, "url": file.asset->url}`);

    if (!asset || asset.length === 0) return null;
    
    return `${asset[0].url}?dl=${name}`;
};

export const getImageAsset = async (name: string) => {
    const asset = await client.fetch<WebsiteImage[]>(`*[_type == 'website_image' && name match '${name}']`);

    if (!asset || asset.length === 0) return null;
    
    return urlFor(asset[0].file).url();
};