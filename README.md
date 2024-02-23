<h1 align="center">
  ![earth](https://github.com/RafaelaMirabile/Densidade_Populacional_Portugual_2021/assets/102774311/c6b2c3e0-2888-4dec-bdbb-3c7480940f9a)
  <a href="#"> R.WEBSIG </a>
</h1>

<h3 align="center">
    WEBSIG platform to visualize population density - Portugual 2021.
</h3>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#how-to-contribute">How to contribute</a> • 
 <a href="#author">Author</a>
</p>


## About

Bringing geographical information to all because knowledge should be free.

---

## How it works

This project is divided into two parts:
1. Backend (This repository);
2. Frontend (You can find here: https://github.com/RafaelaMirabile/mywallet-front).

---

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/), [MongoDB](https://www.mongodb.com/docs/).


## Database 

MongoDB: document-oriented NoSQL database. 

``` jsx

// Start mongodb server at terminal 
$ mongod --dbpath ~/.<dictory where mongodb is installed> 

//Connect to mongodb using the server it //self
$ mongo

//Create database with collections using //dump file

$ mongorestore --db mywallet --verbose \<path to project repossitory>\dump\mywallet

```

### Running the Backend (server)

``` jsx

// Clone this repository
$ git clone git@github.com:RafaelaMirabile/mywallet-back.git

// Access the project folder cmd/terminal
$ cd mywallet-back

// Install the dependencies
$ npm install

// Create a .env.dev file and fill it using your environment variables following the .env.example

// Run the application on development mode
$ npx nodemon src/index.js

// The server listen on port: 5000

```

---

### Running Tests (Jest | Supertest)

``` jsx
// Run tests
$ npm run test
```

---

## Tech Stack

The following tools were used in the construction of the project-api:

**Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)**
-   **[DotENV](https://github.com/motdotla/dotenv)**
-   **[UUID](https://github.com/uuidjs/uuid)**
-   **[Joi](https://github.com/hapijs/joi)**
-   **[Jest](https://github.com/facebook/jest)**
-   **[Translate](https://github.com/franciscop/translate)**


> See the file  [package.json](https://github.com/RafaelaMirabile/mywallet-back/blob/main/package.json)

**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   API Test:  **[Thunder Client](https://www.thunderclient.io/)**

---


## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feat/myFeatureName`
3. For each feature implemented, make a commit specifying what was done
4. Submit your changes: `git push -u origin feat/myFeatureName`

---

## Author

Developed by Rafaela C. Mirabile.
