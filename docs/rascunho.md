# 🎙️ PodManager

> Um app estilo Netflix para centralizar diferentes episódios de podcasts separados por categorias.

---

### 🎯 Domínio

Podcasts feitos em formato de vídeo.

### ✨ Features

- **Catálogo Organizado:** Listar os episódios em sessões de categorias.
  - *Exemplos: Saúde, Fitness, Mentalidade, Humor.*
- **Busca e Filtros:** Filtrar episódios pelo nome do Canal/Podcast.

## Como

#### Feature:

**Catálogo Organizado:** Listar os episódios em sessões de categorias.

### Como vou implementar:

Vou retornar em uma API Rest o nome do PodCast, nome do EP, IMG da Capa, categoria, link do video.

GET: retorna lista de ep;

response:

```
`js
[
{
	podcastName: "Flow",
	videoId: "pQSuQmUfS30",
	episode: "CBUM - Flow #319",
	cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
	link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
	category: ["saúde","bodybuilder", "esporte"]
},
{
	podcastName: "Flow",
	videoId: "4KDGTdiOV4I",
	episode: "RUBENS BARRICHELLO - Flow #339",
	cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
	link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
	category: ["esporte","corrida"]
},
]
```
