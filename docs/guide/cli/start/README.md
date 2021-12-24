# 快速开始

在开始使用之前，请确认你已经完成[安装](https://originjs.github.io/docs/installation.html)。接下来我们通过以下步骤，尝试创建一个新项目并启动和构建它。

## 创建应用

运行以下命令创建并初始化一个 web 应用：

```shell
ori init [options] <app-name>
```

在创建过程中，你可以根据命令行给出的提示，自定义配置你项目的版本、证书、测试框架和需要引入的插件，CLI 将记录你的配置并按需生成初始目录和文件，创建一个基于 Vue3 和 Vite2 的 Origin.js 应用。

项目依赖会自动安装，所以初始化完成之后就可以直接启动。

### 指令选项

```
-d, --default      使用默认配置创建，跳过手动配置
-a, --all-plugins  创建引入全部插件的项目
-u, --uninstalled  初始化完成时不进行依赖自动安装
-h, --help         显示指令帮助信息
```

指令选项 `-a / --all-plugins` 意味着创建一个使用默认配置下的版本和证书并且引入所有插件的项目，所以它必须与指令选项 `-d / --default` 同时使用，否则 CLI 将会抛出错误。创建一个默认引入全部插件的项目，应执行 `ori init -d -a <app-name>` 。

## 启动项目

开发模式下，切换路径至你的项目根目录，并启动项目：

```shell
cd <app-name>
npm run dev  #yarn dev
```

接下来就可以在你的浏览器中查看和调试项目，Vite 服务器会监听页面文件的更新，并对模块执行轻量快速的热更新。

Origin.js 同样提供了指令来创建一个 Vite 服务器，这个指令在将来可能支持 Webpack 服务器的创建。

```shell
ori dev [options]
```

服务器是基于 Vite 创建的，所以如果想要配置你的服务器，只需要在 `vite.config.ts` 文件中进行 [Vite 服务器配置](https://cn.vitejs.dev/config/#server-host)。

### 指令选项

```
-n, --no-browser          指定服务器启动app后不在浏览器中自动打开
-c, --auto-close [delay]  server在指定时间之后自动关闭
```

## 构建项目

生产模式下，打包项目：

```shell
npm run build  #yarn build
```

调用 Vite 打包工具的 Origin.js 指令也可以使用，这个指令在将来可能支持调用 Webpack 打包。

```shell
ori build
```

Origin.js 调用了 Vite 提供的构建工具，所以在 `vite.config.ts` 文件中进行 [Vite 构建配置](https://cn.vitejs.dev/config/#build-target)，程序就可以根据你的配置选项来构建符合需求的项目。

## 运行测试

如果选用了测试框架，项目文件中将包含 Vue 组件的测试用例，输入以下指令运行测试：

```shell
npm run test  #yarn test
```

默认输出测试用例的覆盖情况。

Origin.js 提供 Jest 和 Vitest 两种方式，可以参考 [Jest 配置项](https://jestjs.io/zh-Hans/docs/configuration) 在 `jest.config.js` 文件中配置测试选项，或者参考 [Vitest 配置项](https://vitest.dev/config/) 在 `vite.config.ts` 文件中进行配置。
