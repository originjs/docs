# 快速开始

在开始使用之前，请确认你已经完成[安装](https://originjs.github.io/docs/installation.html)。接下来我们通过以下步骤，尝试创建一个新项目并启动和构建它。

## 创建应用

运行以下命令创建并初始化一个 web 应用：
```shell
ori init [options] <app-name>
```

在创建过程中，你可以根据命令行给出的提示来自定义配置你项目的版本、证书和需要引入的插件，CLI 将根据你的配置按需生成初始目录和文件，创建一个基于 Vue3 和 Vite2 的 Origin.js 应用。项目依赖会自动安装，所以初始化完成之后就可以直接启动。

### 指令选项

```
-d, --default      使用默认配置创建，跳过手动配置
-a, --all-plugins  创建引入全部插件的项目
-u, --uninstalled  初始化完成时不进行依赖自动安装
-h, --help         显示指令帮助信息
```

指令选项 `-a / --all-plugins` 意味着创建一个使用默认的版本和证书配置并且引入所有插件的项目，所以它必须与指令选项 `-d / --default` 同时使用，否则 CLI 将会抛出错误。创建一个默认引入全部插件的项目，应执行 `ori init -d -a <app-name>` 。

## 启动项目

开发模式下，切换路径至你的项目根目录，并运行：

```shell
cd <app-name>
npm run dev  #yarn dev
```

我们同样提供了 Origin.js 指令来创建一个 Vite 服务器，这个指令在将来可能支持 Webpack 服务器的创建。

```shell
ori dev [options]
```

### 指令选项

```
-n, --no-browser          不在浏览器中自动打开运行的app
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
