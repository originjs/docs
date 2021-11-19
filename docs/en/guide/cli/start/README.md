# Getting start

Before starting, make sure you have completed the [installation](https://originjs.github.io/docs/en/installation.html). Now let us try to create a new app and launch it by these steps.

## Create a new app

If you want to create a new web application and initialize it, you should run:

```shell
ori init [options] <app-name>
```

There are some prompts so that you can define the version, license and plugins of the project. The Origin.js application will be based on Vue3 and Vite2, and the initial files will be generated according to your definition. The project dependencies will be installed before initialization finished, so you can launch it directly.

### Options

```
-d, --default      skip init project options
-a, --all-plugins  create project with all plugins
-u, --uninstalled  skip install denpendencies
-h, --help         display help for command
```

The option `-a / --all-plugins` specifies that it will create a new app with default configuration and all of the plugins will be imported. So once it was used, `-d / --default` must be used simultaneously. Otherwise some error will be thrown. In other words, if some apps would be created with all plugins defaultly, you should execute `ori init -d -a <app-name>`.

## Launch it

For development, just change path into your project root directory and launch it:

```shell
cd <app-name>
npm run dev  #yarn dev
```

We also provide Origin.js command to create a Vite server. It might support creating Webpack server as well in the future.

```shell
ori dev [options]
```

### Options

```
-n, --no-browser          not open the app in the browser automatically
-c, --auto-close [delay]  close server with time delay
```

## Build

For production, building the package:

```shell
npm run build  #yarn build
```

You can also use our Origin.js command, which called Vite bundler. It might support Webpack bundler as well in the future.

```shell
ori build
```
