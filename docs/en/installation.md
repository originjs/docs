# Installation

Origin.js is a [Node.js](https://nodejs.org/en/) application. It is possible to complete installation and setup through these methods.

## Download directly

Import `originjs` in `<script>` tag and it will be installed automatically:

```html
<script src="/path/to/originjs.js"></script>
```

## NPM

```bash
npm install -g @originjs/cli
```

## Yarn

```bash
yarn global add @originjs/cli
```

## Dev build

You need to clone source of Origin.js directly from GitHub and build it yourself, if you want to use the latest features.

> Origin.js uses `pnpm` as package manager, please install `pnpm` first.

```bash
# clone from github
git clone https://github.com/originjs/origin.js.git node_modules/origin.js
# change directory
cd node_modules/origin.js
# install dependencies
pnpm install
# build
pnpm run build
# build cli package
pnpm run build:cli
```
