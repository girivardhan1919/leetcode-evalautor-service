## How to setup a new Typescript Express project

1. 
```
npm init -y
```

2. 
```
npm install -D typescript
npm install concurrently

```

3. 
```
tsc --init
```

4. 
```
Add the following scripts in package.json

{
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\""
}

```

Note: Make relevant config changes in tsconfig.json

5. 
```
npm run dev
```


### npm i -D @types/express
### npm i -D nodemon
### npm i concurrently
### npm i dotenv

npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser



npm i eslint-plugin-simple-import-sort
$ npm i bullmq ioredis
$ npm i @types/ioredis

