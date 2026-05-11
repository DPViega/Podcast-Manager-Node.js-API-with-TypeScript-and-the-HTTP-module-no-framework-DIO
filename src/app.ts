import { getEpList } from "./controllers/podcasts_controllers";
import { getFilterEpisodes as getFilterEps } from "./controllers/podcasts_controllers";
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
import { IncomingMessage, ServerResponse } from 'http';

export const app =  async (request: IncomingMessage, response: ServerResponse) => {

     //query_string
    //http://localhost:8080/api/episode?p=flow
    const baseUrl = request.url?.split("?")[0];
    
    //listar podcast
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
       await getEpList(request, response);
    }
    //filter podcast
    if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilterEps(request, response);
    }
};
