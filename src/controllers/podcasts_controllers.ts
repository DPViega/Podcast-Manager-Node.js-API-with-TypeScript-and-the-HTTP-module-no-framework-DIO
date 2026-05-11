import { IncomingMessage, ServerResponse } from "http";

import { serviceListEps } from "../services/eps_list-service";
import { serviceFilterEps } from "../services/eps_filter-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

import { ContentType } from "../utils/content-type";

const defaultContent = { "content-type": ContentType.JSON }

export const getEpList = async (

    req: IncomingMessage,
    res: ServerResponse

) => {

    const content: PodcastTransferModel = await serviceListEps();

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();

};


export const getFilterEpisodes = async (

    req: IncomingMessage,
    res: ServerResponse

) => {

    const content: PodcastTransferModel = await serviceFilterEps(req.url);

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();

};
