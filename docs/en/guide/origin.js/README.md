# @originjs/cli

## Install

```shell
npm install -g @originjs/cli
```

or

```shell
yarn global add @originjs/cli
```

## Usage

```shell
ori --help  # show help
init [options] <app-name> # init a new project
dev # alias of "ori dev" in the current project
build # alias of "ori build" in the current project
tovite [options] # use vite in the current project
tovue3 [options] # use vue-next in the current project
help [command] # display help for command
```

### Init

Create a `Vue3 & Vite` project that support :

- A Vue framework built with [Vue 3](https://github.com/vuejs/vue-next) & [Vite2](https://github.com/vitejs/vite)
- [File based routing and layouts](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-pages)
- [Markdown support](https://github.com/antfu/vite-plugin-md)
- [Global css/sass/less/stylus support](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-global-style)
- [Open yaml/xml/xlsx/... as a ES module](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-content)
- [Auto-imported Vue components](https://github.com/antfu/unplugin-vue-components)
- [Vue i18n](https://github.com/intlify/vue-i18n-next) & [Vuex](https://github.com/vuejs/vue-next) intergrated
- TypeScript support
