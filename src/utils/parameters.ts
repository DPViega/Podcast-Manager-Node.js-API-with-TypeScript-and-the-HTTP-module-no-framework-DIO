export enum Parameters {
    // Paginação
    QUERY_STRING = "?p=",
    PAGE = "page",
    LIMIT = "limit",
    OFFSET = "offset",
    CURSOR = "cursor",

    // Busca e filtro
    SEARCH = "search",
    FILTER = "filter",
    SORT = "sort",
    ORDER = "order",       // "asc" | "desc"
    FIELDS = "fields",      // quais campos retornar

    // Autenticação via query
    API_KEY = "api_key",
    TOKEN = "token",

    // Outros comuns
    LANG = "lang",        // idioma
    VERSION = "version",     // versão da API
    FORMAT = "format",      // "json" | "xml" | "csv"
    CALLBACK = "callback",    // JSONP
}