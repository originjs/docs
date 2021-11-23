# Tools

In addition to CLI for the web application framework, Origin.js also provides some utilities as follows:
- Webpack to vite conversion tool
- A migration tool from Vue2 to Vue3

## Convert Webpack to Vite

Origin.js supports converting a Webpack project to Vite project with tools `webpack-to-vite`, and it provides conversion details to help you convert smoothly.

Execute this command to convert:

```shell
ori tovite [options]
```

### Options

```
-v, --version            display version number
-d --rootDir <path>      the directory of project to be converted
-t --projectType <type>  the type of the project, use vue-cli or webpack (default: vue-cli)
-e --entry <type>        entrance of the entire build process, webpack or vite will start from those entry files to build, if no entry file is specified, src/main.ts or src/main.js will be used as default
-h, --help               display help for command
```

> For more details, see [webpack-to-vite](https://originjs.github.io/docs/en/guide/tools/webpack-to-vite/).

## Upgrade Vue2 to Vue3

Origin.js supports upgrading most of the Vue2 syntax to Vue3 syntax directly with tools `vue-codemod`. It provides vue-codemod transformation and a small amount of manual modification to complete the smooth migration.

Execute this command to migrate:

```shell
ori tovue3 [options]
```

### Options

```
-t, --transformation        Name or path of the transformation module [string]
-p, --params                Custom params to the transformation
-a, --runAllTransformation  run all transformation module            [boolean]
-f, --reportFormatter       Specify an output report formatter
                                                  [string] [default: "detail"]
-h, --help                  Show help                                [boolean]
-v, --version               Show version number                      [boolean]
```

> For more details, see [vue-codemod](https://originjs.github.io/docs/en/guide/tools/vue-codemod/).
