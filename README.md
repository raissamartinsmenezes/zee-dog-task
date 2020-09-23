# Zee.dog Task 

[![Netlify Status](https://api.netlify.com/api/v1/badges/abe83ae3-2d9e-4198-aa3f-8b52ce49aac4/deploy-status)](https://app.netlify.com/sites/zee-dog-task/deploys) 

![zee-dog-demo](./docs/zee-dog.gif)

**[https://zee-dog-task.netlify.app](https://zee-dog-task.netlify.app)**

## Requisitos 

### Funcionalidades

PÁGINA 1 | Feito
------------ | ------
Crie uma lista para exibir os filmes, mostrando o nome, descrição, diretor e um botão para favoritar o filme | ✔️
Na lista de filmes, o usuário poderá clicar em um filme e entrar na tela de detalhes | ✔️

PÁGINA 2 | Feito
------------ | ------
A tela de detalhes deverá apresentar: Nome, descrição, diretor, produtores, ano de lançamento e a nota no Rotten Tomatoes | ✔️
A tela de detalhes deverá apresentar uma lista de todos os personagens do respectivo filme | ✔️
Edição persistente (local) dos campos presentes em um filme | ✔️

PÁGINA 3 | Feito
------------ | ------
Página de favoritos com a listagem de todos os filmes favoritados | ✔️
Botão para remover filme dos favoritos | ✔️
Ao clicar no filme, ir para Página 2 | ✔️

### Restrições

Restrições Técnicas | Feito
------------ | ------
Projeto deve ser 100% responsivo | ✔️
Não utilizar nenhuma biblioteca ou framework CSS | ✔️
Utilizar React e Redux | ✔️
Não utilizar create-react-app e criar sua configuração para o webpack | ✔️
Utilize sempre functional components com hooks | ✔️
Utilize react-router-dom para rotas | ✔️
Hospedar o projeto no Netlify ou Vercel | ✔️
Layout bem estruturado, com atenção à experiência do usuário | ✔️

### Diferenciais

Diferenciais | Feito
---------- | ------
Código com testes unitários (Jest) | ⚠️
Deploy para o Netlify ou Vercel com CI/CD | ✔️

## Construído com:

```
"devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-react": "^7.10.4",
    "@testing-library/react": "^11.0.4",
    "babel-jest": "^26.3.0",
    "babel-loader": "^8.1.0",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^4.3.0",
    "html-loader": "^1.3.0",
    "html-webpack-plugin": "^4.4.1",
    "jest": "^26.4.2",
    "react-test-renderer": "^16.13.1",
    "redux-devtools": "^3.7.0",
    "source-map-loader": "^1.1.0",
    "style-loader": "^1.2.1",
    "svg-url-loader": "^6.0.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "@babel/plugin-transform-runtime": "^7.11.5",
    "@babel/runtime": "^7.11.2",
    "@reduxjs/toolkit": "^1.4.0",
    "lodash": "^4.17.20",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-loading-skeleton": "^2.1.1",
    "react-redux": "^7.2.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "redux-persist": "^6.0.0"
  },
```

## Assets

- [STUDIO GHIBLI - API](https://ghibliapi.herokuapp.com/#) 
- [Rootten Tomato - Ícone](https://commons.wikimedia.org/wiki/File:Rotten_Tomatoes.svg)
- [Heart - Ícone](https://www.flaticon.com/free-icon/like_148836)

## Instalando o projeto

### Requisitos

Para executar esse projeto você vai precisar do [NODE](https://nodejs.org/en/) instalado em seu computador, se você não tiver, você pode clicar no link que será redirecionado para a página de instalação do node, depois de instalar, o ambiente já estará pronto para você começar.

### Instalação das dependências

Faça o download do projeto clonando o repositório, entre no diretório `./zee-dog-task` e no terminal rode:

```
yarn install
```

para instalar todas as dependências do projeto, ou então rode:

```
npm install
```
se você estiver usando [npm](https://www.npmjs.com/) como gerenciador de pacotes.

### Rodando o projeto

Para rodar o projeto em modo de desenvolvimento, entre no diretório `./zee-dog-task` e no terminal rode:

```
yarn start
```

para abrir o [http://localhost:8080](http://localhost:8080) e ver o projeto no browser, ou:

```
npm start
```

se você estiver usando [npm](https://www.npmjs.com/) como gerenciador de pacotes.

A página será recarregada se você fizer edições. Você também verá os erros no console.

### Rodando os testes

Para rodar os testes, entre no diretório `./zee-dog-task` e no terminal rode:

```
yarn test
```

ou então rode:

```
npm test
```
se você estiver usando [npm](https://www.npmjs.com/) como gerenciador de pacotes.

## Autora

[Raissa Martins](https://www.linkedin.com/in/raissamartinsmenezes/) - Desenvolvedora Front-end 🖤



