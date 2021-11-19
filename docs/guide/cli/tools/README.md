# 使用工具

除了 Web 应用框架的脚手架之外，Origin.js 还集成了如下工具：
- Webpack 到 Vite 的转换工具
- Vue2 升 Vue3 的迁移工具

## Webpack 转换 Vite

Origin.js 封装了 `webpack-to-vite` 工具，支持 Webpack 项目到 Vite 项目的一键转换，并且展示详细的转换过程来辅助转换顺利进行。

使用指令进行转换：

```shell
ori tovite [options]
```

### 指令选项

```
-v, --version            显示版本号
-d --rootDir <path>      要转换的项目目录
-t --projectType <type>  项目类型，传入 vue-cli 或 webpack（默认：vue-cli）
-e --entry <type>        整个构建过程的入口，webpack 或 vite 会从那些入口文件开始构建，如果没有指定入口文件，则默认使用 src/main.ts 或 src/main.js
-h, --help               显示指令帮助信息
```

> 详细内容会在 [webpack-to-vite](https://originjs.github.io/docs/en/guide/tools/webpack-to-vite/) 中介绍。

## Vue2 升级 Vue3

Origin.js 封装了 `vue-codemod` 工具，支持 Vue2 项目到 Vue3 项目的一键转换。工具能够将绝大多数 Vue2 语法直接升级成 Vue3 语法，配合少量的手动修改完成 Vue2 到 Vue3 的平滑迁移。

使用指令进行转换：

```shell
ori tovue3 [options]
```

### 指令选项

```
-t, --transformation        需要转换的模块的名称或路径 [string]
-p, --params                自定义参数配置转换
-a, --runAllTransformation  对所有模块进行转换       [boolean]
-f, --reportFormatter       指定输出转换报告的格式
                                 [string] [default: "detail"]
-h, --help                  显示指令帮助信息         [boolean]
-v, --version               显示版本号               [boolean]
```

> 详细内容会在 [vue-codemod](https://originjs.github.io/docs/en/guide/tools/vue-codemod/) 中介绍。
