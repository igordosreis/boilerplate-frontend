###### English

# Frontend Boilerplate for Next.js 13, Typescript and Sass

A simple boilerplate designed to get frontend projects up and running quickly using Next.js, Typescript and Sass, while providing a consistent developer experience, with tools like Volta, Husky, Lint-staged and ESLint.

### Features

- Consistent code standards: on every commit Husky executes Lint-staged, running linters, formating with Prettier and type checking all staged files.
- Linters: ESLint for .tsx and .ts files and Stylelint for .scss and .css files
- Standardized commit messages with Commitlint and Angular Conventional Commits
- Docker: easily run the project inside a dedicated container
- Node version locking with Volta

- Sass: Syntactically Awesome Style Sheets aka CSS with superpowers

- SVGR: use .svg images as React components

- Next pages router

### Requirements

- Node ^16

- npm ^8

- Docker if you want to run the app in a container

- Volta if you want to automatically manage Node and npm versions

### Getting started

#### With Docker:

To use this boilerplate:

```shell
git clone https://github.com/igordosreis/boilerplate-frontend project-name
cd project-name
npm install
docker compose up -d
```

Or click the 'Use this template' button at the top of this repository and then clone the newly created repository. After cloning, run:

```shell
npm install
docker compose up -d
```

To run the project in development mode:

```shell
docker compose up -d
```

#### Locally:

To use this boilerplate:

```shell
git clone https://github.com/igordosreis/boilerplate-frontend project-name
cd project-name
npm install
```

Or click the 'Use this template' button at the top of this repository and then clone the newly created repository. After cloning, run:

```shell
npm install
```

If you want to use Volta:

```shell
curl https://get.volta.sh | bash
```

To run the project locally in development mode:

```shell
npm run dev
```

---

###### Português

# Boilerplate Frontend para Next.js 13, Typescript e Sass

Um boilerplate simples concebido para rapidamente iniciar projetos frontend usando Next.js, Typescript e Sass e também para prover uma experiência de desenvolvimento consistente, através de ferramentas como Volta, Husky, Lint-staged e ESLint.

### Funcionalidades

- Padrões de código consistentes: em cada commit o Husky executa o Lint-staged, rodando linters, formatando com Prettier e fazendo checagem de tipos em todos os arquivos staged.
- Linters: ESLint para arquivos .tsx e .ts and Stylelint para arquivos .scss e .css
- Mensagens de commit padronizadas com Commitlint e Angular Conventional Commits
- Versão do Node fixa com o Volta

- Sass: Syntactically Awesome Style Sheets também conhecido como CSS com super poderes

- SVGR: use imagens .svg como componentes de React

- Pages router do Next

### Requirements

- Node ^16

- npm ^8

- Docker caso você queira rodar o app em um container

- Volta caso você queira automaticamente gerenciar as versões do Node e do npm

### Como utilizar

#### Com Docker:

Para usar esse boilerplate:

```shell
git clone https://github.com/igordosreis/boilerplate-frontend project-name
cd nome-do-projeto
docker compose up -d
```

Ou clique no botão 'Use this template' no topo desse repositório e então clone o repositório criado. Após clonar, rode:

```shell
docker compose up -d
```

Para rodar o projeto localmente em modo de desenvolvimento:

```shell
docker compose up -d
```

#### Localmente:

Para usar esse boilerplate:

```shell
git clone https://github.com/igordosreis/boilerplate-frontend nome-do-projeto
cd nome-do-projeto
npm install
```

Ou clique no botão 'Use this template' no topo desse repositório e então clone o repositório criado. Após clonar, rode:

```shell
npm install
```

Caso você queira usar o Volta:

```shell
curl https://get.volta.sh | bash
```

Para rodar o projeto localmente em modo de desenvolvimento:

```shell
npm run dev
```
