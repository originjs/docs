# @originjs/cli

## 安装

```shell
npm install -g @originjs/cli
```

or

```shell
yarn global add @originjs/cli
```

## 用法

```shell
ori --help  # 显示帮助
init [options] <app-name> # 初始化新项目
dev # "ori dev" 的别名
build # "ori build" 的别名
tovite [options] # 将当前项目转换为 vite
tovue3 [options] # 将当前项目转换为 Vue 3
help [command] # 显示指定命令的帮助信息
```

### 初始化

创建一个 `Vue3 & Vite` 项目:

- [Vue 3](https://github.com/vuejs/vue-next) & [Vite2](https://github.com/vitejs/vite) 创建的框架
- [File based routing and layouts](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-pages)
- [Markdown support](https://github.com/antfu/vite-plugin-md)
- [Global css/sass/less/stylus support](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-global-style)
- [Open yaml/xml/xlsx/... as a ES module](https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-content)
- [Auto-imported Vue components](https://github.com/antfu/unplugin-vue-components)
- [Vue i18n](https://github.com/intlify/vue-i18n-next) & [Vuex](https://github.com/vuejs/vue-next) intergrated
- TypeScript 支持
