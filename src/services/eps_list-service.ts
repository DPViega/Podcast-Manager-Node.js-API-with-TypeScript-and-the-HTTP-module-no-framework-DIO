import { repoPodcast } from "../repositories/podcasts-repository";

import { PodcastTransferModel } from "../models/podcast-transfer-model";

import { StatusCode } from "../utils/status-code";

export const serviceListEps = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {

        statusCode: 0,
        body: []

    };

    const data = await repoPodcast();

    responseFormat.statusCode =
        data.length !== 0 ? StatusCode.SUCCESS : StatusCode.NOT_FOUND;

    responseFormat.body = data;

    return responseFormat;

};