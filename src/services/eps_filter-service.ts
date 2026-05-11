import { repoPodcast } from "../repositories/podcasts-repository"
import { Parameters } from "../utils/parameters";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEps = async (

    podcastName: string | undefined

): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {

        statusCode: 0,
        body: []

    };

    //buscando os dados
    const queryString = podcastName?.split(Parameters.QUERY_STRING)[1] || "";

    const data = await repoPodcast(queryString);

    //verifico se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.SUCCESS : StatusCode.NOT_FOUND;

    responseFormat.body = data;

    return responseFormat;
}