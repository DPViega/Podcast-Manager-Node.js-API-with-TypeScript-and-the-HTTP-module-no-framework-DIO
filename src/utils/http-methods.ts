export enum HttpMethod {
  // Principais — você vai usar todo dia
  GET     = "GET",      // buscar dados
  POST    = "POST",     // criar recurso
  PUT     = "PUT",      // substituir recurso completo
  PATCH   = "PATCH",    // atualizar parcialmente
  DELETE  = "DELETE",   // remover recurso

  // Secundários — aparecem em APIs mais completas
  HEAD    = "HEAD",     // igual ao GET, mas sem body na resposta
  OPTIONS = "OPTIONS",  // retorna os métodos permitidos na rota
}