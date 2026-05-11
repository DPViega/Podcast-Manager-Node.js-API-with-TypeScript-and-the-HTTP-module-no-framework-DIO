# 🎙️ Podcast Manager API

<div align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
</div>

<br>

An elegant and performant RESTful API built **100% with Node.js native `http` module**, without relying on external frameworks like Express or Fastify. The project focuses on clean architecture, separation of concerns, and best development practices using TypeScript.

---

## 📖 About the Project

This project was developed as the final challenge for the **DIO** Node.js Bootcamp. The main goal is to build a podcast episode manager to deeply understand the fundamentals of Node.js under the hood, implementing design patterns (MVC / Layered Architecture) and ensuring safety and scalability through TypeScript's static typing.

## ✨ Features

- **Podcast Listing**: Returns all available podcast episodes from the database.
- **Search and Filtering**: Allows searching for episodes of a specific podcast via *Query String*.
- **Scalable Architecture**: Highly structured code divided into `Controllers`, `Services`, `Repositories`, and `Models`.
- **Zero Routing Dependencies**: Routing built "from scratch" using only the native Node.js `http` API.
- **Standardized Responses**: Standardized outputs using enums for `StatusCodes` and `ContentTypes`.

## 🚀 Technologies Used

- **[Node.js](https://nodejs.org/en/)**: Server-side JavaScript execution (using native `http`, `fs`, `path` modules).
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for better predictability and fewer bugs.
- **[tsx](https://github.com/esbuild-kit/tsx)**: Lightning-fast TypeScript execution engine for the development environment.

## 📁 Project Structure

The application was designed with a clear separation of concerns in mind:

```text
src/
├── controllers/    # Handles HTTP request and response data (req, res)
├── models/         # Interfaces and data contracts (e.g., PodcastTransferModel)
├── repositories/   # Persistence layer (reads the .json file)
├── routes/         # Centralization of available endpoints (Enums)
├── services/       # Application business rules
├── utils/          # Global utilities (Status Code, Content Type, etc)
├── app.ts          # Main file managing the routing flow
└── server.ts       # Server initialization on the defined port
```

---

## ⚙️ How to Run Locally

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Step-by-Step

1. **Clone this repository:**

   ```bash
   git clone https://github.com/DPViega/Gerenciador-de-Podcasts---API-NodeJS-Com-Typescript-e-HTTP-Module-DIO.git
   ```
2. **Navigate to the project folder:**

   ```bash
   cd "Gerenciador-de-Podcasts---API-NodeJS-Com-Typescript-e-HTTP-Module-DIO"
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Configure Environment Variables:**
   Create a file named `.env` in the root of the project with the following keys:

   ```env
   PORT=8080
   CHARACTER_ENCODING=utf-8
   ```
5. **Start the server locally:**

   ```bash
   npm run dev
   ```

   > 🚀 *The server will be running at `http://localhost:8080`*
   >

---

## 🌐 API Endpoints

### 1. List all episodes

Returns the complete list of all registered podcast episodes in the system.

- **Method**: `GET`
- **Route**: `/api/list`

### 2. Filter episodes by podcast

Returns episodes filtered by the podcast name provided in the search parameter.

- **Method**: `GET`
- **Route**: `/api/podcasts?p=podcast_name`
- **Usage Example**:
  ```http
  GET http://localhost:8080/api/podcasts?p=flow
  ```

---

## 👨‍💻 Author

Developed with 🩵 as part of the advanced challenges for the Digital Innovation One (DIO) Node.js Bootcamp.
