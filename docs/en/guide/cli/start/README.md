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

## Plugins

You can choose the plugins as follows when initializing an application. CLI will apply the default configurations to `vite.config.ts` for those plugins you selected. You can also refer to their documentations to config the plugins manually.

### GlobalStyle

Automatically add `CSS`, `SASS`, `LESS`, `Stylus` files in `assets` directory which named starting with `global` to the Vite global style.

> Supported by `@originjs/vite-plugin-global-style` . See [vite-plugin-global-style](https://originjs.github.io/docs/en/guide/plugins/vite-plugin-global-style/) .

### Layouts & Pages

Automate generate route config for Vue components in `pages` directory, and support layouts in the same time.

> Supported by `@originjs/vite-plugin-pages` . See [vite-plugin-pages](https://originjs.github.io/docs/en/guide/plugins/vite-plugin-pages/) .

### Components

Auto-import Vue components defined in `components` directory.

> Supported by `vite-plugin-components` . See [vite-plugin-components](https://github.com/antfu/vite-plugin-components) .

### Markdown

Capability of loading markdown files in Vue components.

> Supported by `vite-plugin-md` . See [vite-plugin-md](https://github.com/antfu/vite-plugin-md).

### Content

Capability of converting `yaml`, `xml`, `xlsx`, `ini`, `toml`, `csv`, `plist` and `properties` files to `ES6 modules`.

> Supported by `@originjs/vite-plugin-content` . See [vite-plugin-content](https://originjs.github.io/docs/en/guide/plugins/vite-plugin-content/) .

### Module Federation

Capability of loading remote modules in application.

> Supported by `@originjs/vite-plugin-federation` . See [vite-plugin-federation](https://originjs.github.io/docs/en/guide/plugins/vite-plugin-federation/) .

## Launch it

For development, just change path into your project root directory and launch it:

```shell
cd <app-name>
npm run dev  #yarn dev
```

Then you can debug your project in the browser. The Vite server will execute lightning fast HMR when you update the page files.

Origin.js also provides command to create a Vite server. It might support creating Webpack server as well in the future.

```shell
ori dev [options]
```

The server is based on Vite, so you can set [Vite server options](https://vitejs.dev/config/#server-host) in `vite.config.ts` to config your server.

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

The bundler is based on Vite, so you can set [Vite build options](https://vitejs.dev/config/#build-target) in `vite.config.ts` to config building to satisfy your demand.