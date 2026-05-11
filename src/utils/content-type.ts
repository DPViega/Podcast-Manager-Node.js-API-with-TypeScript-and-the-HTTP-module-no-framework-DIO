export enum ContentType {
  // Mais usados em APIs
  JSON              = "application/json",
  FORM_URLENCODED   = "application/x-www-form-urlencoded",
  FORM_DATA         = "multipart/form-data",
  TEXT              = "text/plain",
  HTML              = "text/html",
  XML               = "application/xml",
  CSV               = "text/csv",

  // Binários / arquivos
  PDF               = "application/pdf",
  ZIP               = "application/zip",
  OCTET_STREAM      = "application/octet-stream", // arquivo genérico / download

  // Imagens
  PNG               = "image/png",
  JPEG              = "image/jpeg",
  GIF               = "image/gif",
  SVG               = "image/svg+xml",
  WEBP              = "image/webp",

  // Áudio / Vídeo
  MP4               = "video/mp4",
  MP3               = "audio/mpeg",
  WEBM              = "video/webm",
}