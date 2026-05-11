import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const encoding = process.env.CHARACTER_ENCODING as BufferEncoding;

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {


    const rawData = fs.readFileSync(pathData, encoding);
    let jsonfile = JSON.parse(rawData);


    if (podcastName) {
        jsonfile = jsonfile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonfile;
};

