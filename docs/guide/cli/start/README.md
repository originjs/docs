# 快速开始

在开始使用之前，请确认你已经完成[安装](https://originjs.org/installation.html)。接下来我们尝试创建一个新项目，并启动与构建它。

## 创建应用程序

运行以下命令，创建并初始化一个 Origin.js 应用程序：

```shell
ori init [options] <app-name>
```

在创建过程中，命令行会给出一些选项，供你自定义配置项目的版本、许可证、状态管理类型、测试框架和需要引入的插件。Origin.js 将根据您的配置生成项目文件，创建一个基于 Vue 3 和 Vite 2 的应用程序。

初始化完成意味着项目依赖已经完成安装，所以你可以直接[启动项目](https://originjs.org/guide/cli/start/#%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%AE)。

### 指令选项

```
-d, --default      使用默认配置创建，跳过手动配置
-a, --all-plugins  创建时引入全部插件
-u, --uninstalled  初始化时不自动进行依赖安装
-h, --help         显示指令帮助信息
```

注意：指令选项 `-a/--all-plugins` 意味着创建一个使用默认配置文件并且引入所有插件的项目，所以它必须与指令选项 `-d/--default` 同时使用，否则 CLI 将会抛出错误。换句话说，如果要创建一个默认引入全部插件的项目，应该执行 `ori init -d -a <app-name>` 。

## 配置插件

在初始化项目时，可以选择引入以下几种 Vite 插件。对于那些被选中的插件，CLI 将会应用默认的插件配置到 `vite.config.ts` 文件中。你也可以参考插件的配置文档，手动进行自定义配置。

### 全局样式

支持自动解析 `assets` 目录下以 `global` 为开头命名的 `CSS`、`SASS`、`LESS`、`Stylus` 文件作为 Vite 全局样式。

> 由 `@originjs/vite-plugin-global-style` 插件支持。更多内容查看 [vite-plugin-global-style](https://originjs.org/guide/plugins/vite-plugin-global-style/)。

### 路由及布局

为 `pages` 目录中的 Vue 组件自动生成路由配置，同时支持布局。

> 由 `@originjs/vite-plugin-pages` 插件支持。更多内容查看 [vite-plugin-pages](https://originjs.org/guide/plugins/vite-plugin-pages/)。

### 组件加载

支持自动引入在 `components` 目录中定义的 Vue 组件。

> 由 `vite-plugin-components` 插件支持。更多内容查看 [vite-plugin-components](https://github.com/antfu/vite-plugin-components)。

### Markdown

支持在 Vue 组件中加载 `Markdown` 文件。

> 由 `vite-plugin-md` 插件支持。更多内容查看 [vite-plugin-md](https://github.com/antfu/vite-plugin-md)。

### 文件转换 

支持将 `yaml`、`xml`、`xlsx`、`ini`、`toml`、`csv`、`plist` 和 `properties` 文件转换成 `ES6 modules` 。

> 由 `@originjs/vite-plugin-content` 插件支持。更多内容查看 [vite-plugin-content](https://originjs.org/guide/plugins/vite-plugin-content/)。

### 模块联邦

支持在当前应用程序中加载远程模块。

> 由 `@originjs/vite-plugin-federation` 插件支持。更多内容查看 [vite-plugin-federation](https://originjs.org/guide/plugins/vite-plugin-federation/)。

## 启动项目

开发模式下，切换路径至你的项目根目录，然后启动项目：

```shell
cd <app-name>
npm run dev  #yarn dev
```

接下来就可以在浏览器中查看和调试项目，Vite 服务监听变化，并对模块执行轻量快速的热更新。

Origin.js 同样提供了指令来创建 Vite 服务，这个指令在将来可能支持 Webpack 服务的创建。

```shell
ori dev [options]
```

服务基于 Vite 创建，所以你可以在 `vite.config.ts` 文件中进行 [Vite 服务器配置](https://cn.vitejs.dev/config/#server-host)。

### 指令选项

```
-n, --no-browser          指定服务启动后不在浏览器中打开项目
-c, --auto-close [delay]  server在指定时间之后自动关闭
```

## 构建项目

生产模式下，打包项目：

```shell
npm run build  #yarn build
```

也可以使用 Origin.js 指令调用 Vite 打包工具，这个指令在将来可能支持调用 Webpack 打包。

```shell
ori build
```

构建工具基于 Vite，所以你可以在 `vite.config.ts` 文件中进行 [Vite 构建配置](https://cn.vitejs.dev/config/#build-target)。

## 运行测试

如果选用了测试框架，项目中将包含 Vue 组件的测试用例文件，运行测试：

```shell
npm run test  #yarn test
```

Origin.js 提供 Jest 和 Vitest 两种测试方式，可以参考 [Jest 配置项](https://jestjs.io/zh-Hans/docs/configuration) 在 `jest.config.js` 文件中配置测试选项，或者参考 [Vitest 配置项](https://vitest.dev/config/) 在 `vite.config.ts` 文件中进行配置。
