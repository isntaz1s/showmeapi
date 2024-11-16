# :eyes: showmeapi

showmeapi is a REST API application which contains of some api endpoints

## Get Started 🚀
Some ways to develop this project on your own device

### Git Clone

First and foremost you have to clone this repo by running the following command:

```sh
git clone https://github.com/isntazis/showmeapi
```
</br>

Once done of clone the repo you have to installing all dependencies needed just by typing the following command:

```sh
npm install
```
</br>

### Starting development mode  

If you have finished cloning this repo, the next step is the installation process for dependencies.

Once done of those process, make sure you have to running this project on development mode by typing this line in your own terminal

```sh
npm run dev
```

Once finished, make sure you check the log on the terminal.

for example log process:  
```Server listening at http://localhost:[port]```

Then you open your own browser by typing:

<pre>
  http://localhost:[port]/checkhealth
</pre>
</br>

### Create and assign env variables

First one you must be create *.env* file then you assign these variables

```sh
NODE_ENV=development
PORT=
DATABASE_URL=
JWT_SECRET=
```

Don't forget to fill all that required env variables.

### Starting testing mode

The next step After development mode is testing mode, which aims to analyze and check the errors of code.  

To start testing mode just by typing these lines on your terminal:

```sh
// test all
npm run test

// test coverage
npm run test:cov

// end to end test
npm run test:e2e
```
</br>

### Starting production mode  

After completing development and testing mode, the next process is production mode.  

To start production mode just by typing these lines on your terminal:

```sh
// lint
npm run lint

// formatting
npm run format

// building
npm run build
```
</br>

## Technologies ⚛️
These are some of the technologies which i used to build this project.

- Node.js  
Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

- TypeScript  
TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.

- Fastify.js  
Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.

- Neon Postgres
Neon is a fully managed, open-source, serverless PostgreSQL database that helps teams build scalable and reliable applications.

and other libraries or dependencies.
