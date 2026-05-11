# 🎙️ Podcast Manager API

<div align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
</div>

<br>

Uma API RESTful elegante e performática desenvolvida **100% com o módulo nativo `http` do Node.js**, sem o uso de frameworks externos como Express ou Fastify. O projeto foca em arquitetura limpa, separação de responsabilidades e boas práticas de desenvolvimento utilizando TypeScript.

---

## 📖 Sobre o Projeto
Este é um projeto desenvolvido como desafio final do Bootcamp de Node.js da **DIO**. O principal objetivo é construir um gerenciador de episódios de podcasts compreendendo os fundamentos do Node.js por debaixo dos panos, implementando padrões de projeto (MVC/Arquitetura em Camadas) e garantindo segurança e escalabilidade através da tipagem estática do TypeScript.

## ✨ Funcionalidades
- **Listagem de Podcasts**: Retorna todos os episódios de podcasts disponíveis na base de dados.
- **Busca e Filtragem**: Permite buscar episódios de um podcast específico via *Query String*.
- **Arquitetura Escalável**: Código extremamente estruturado dividido em `Controllers`, `Services`, `Repositories` e `Models`.
- **Zero Dependências de Roteamento**: Roteamento construído "do zero" utilizando apenas a API `http` nativa do Node.js.
- **Padronização de Respostas**: Retornos padronizados utilizando enums para `StatusCodes` e `ContentTypes`.

## 🚀 Tecnologias Utilizadas
- **[Node.js](https://nodejs.org/en/)**: Execução JavaScript *Server-side* (utilizando módulos nativos `http`, `fs`, `path`).
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior previsibilidade e menos bugs.
- **[tsx](https://github.com/esbuild-kit/tsx)**: Motor de execução de TypeScript super rápido para ambiente de desenvolvimento.

## 📁 Estrutura do Projeto

A aplicação foi desenhada visando a separação clara de conceitos:

```text
src/
├── controllers/    # Lida com os dados da requisição HTTP (req, res)
├── models/         # Interfaces e contratos de dados (ex: PodcastTransferModel)
├── repositories/   # Camada de persistência (leitura do arquivo .json)
├── routes/         # Centralização dos endpoints disponíveis (Enums)
├── services/       # Regras de negócio da aplicação
├── utils/          # Utilitários globais (Status Code, Content Type, etc)
├── app.ts          # Arquivo principal que gerencia o fluxo das rotas
└── server.ts       # Inicialização do servidor na porta definida
```

---

## ⚙️ Como Executar na Sua Máquina

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm** ou **yarn**

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd "1- Gerenciador de Podcast - Node com Type e HTTP Module"
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente:**
   Crie um arquivo chamado `.env` na raiz do projeto com as seguintes chaves:
   ```env
   PORT=8080
   CHARACTER_ENCODING=utf-8
   ```

5. **Inicie o servidor localmente:**
   ```bash
   npm run dev
   ```
   > 🚀 *O servidor estará rodando em `http://localhost:8080`*

---

## 🌐 Endpoints da API

### 1. Listar todos os episódios
Retorna a lista completa de todos os episódios de podcasts cadastrados no sistema.
- **Método**: `GET`
- **Rota**: `/api/list`

### 2. Filtrar episódios por podcast
Retorna os episódios filtrados pelo nome do podcast fornecido no parâmetro de busca.
- **Método**: `GET`
- **Rota**: `/api/podcasts?p=nome_do_podcast`
- **Exemplo de Uso**: 
  ```http
  GET http://localhost:8080/api/podcasts?p=flow
  ```

---

## 👨‍💻 Autor

Desenvolvido com 🩵 como parte dos desafios avançados do Bootcamp de Node.js da Digital Innovation One (DIO).
