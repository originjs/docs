# Getting start

Before starting, please make sure you have completed the [installation](https://originjs.org/en/installation.html). Now let us try to create a new application and launch it.

## Create a new app

To create an Origin.js application, just run:

```shell
ori init [options] <app-name>
```

There are some options for you to define the version, license, type of store, test framework and plugins for the project. An Origin.js application will be based on Vue 3 and Vite 2, and the project files will be generated according to your configuration.

The initialization finished means that dependencies have been installed, so you can [launch it](https://originjs.org/en/guide/cli/start/#launch-it) directly.

### Options

```
-d, --default      skip init project options
-a, --all-plugins  create project with all plugins
-u, --uninstalled  skip install denpendencies
-h, --help         display help for command
```

Notice: The option `-a/--all-plugins` specifies that the project will be created with default configuration and import all of the plugins. Once it was used, `-d/--default` must be used simultaneously, otherwise some error will be thrown. In other words, if an application would be created with all plugins defaultly, you should execute `ori init -d -a <app-name>`.

## Plugins

Plugins as follows could be chosed when initializing an application. Default configuration for those plugins you selected will be applied to `vite.config.ts`. You can also refer to their documentations to config these plugins manually.

### GlobalStyle

Automatically add `CSS`, `SASS`, `LESS`, `Stylus` files in `assets` directory which named starting with `global` to the Vite global style.

> Supported by `@originjs/vite-plugin-global-style` . See [vite-plugin-global-style](https://originjs.org/en/guide/plugins/vite-plugin-global-style/) .

### Layouts & Pages

Automatically generate route config for Vue components in `pages` directory, support layouts in the same time.

> Supported by `@originjs/vite-plugin-pages` . See [vite-plugin-pages](https://originjs.org/en/guide/plugins/vite-plugin-pages/) .

### Components

Auto-import Vue components defined in `components` directory.

> Supported by `vite-plugin-components` . See [vite-plugin-components](https://github.com/antfu/vite-plugin-components) .

### Markdown

Capability of loading markdown files in Vue components.

> Supported by `vite-plugin-md` . See [vite-plugin-md](https://github.com/antfu/vite-plugin-md).

### Content

Capability of converting `yaml`, `xml`, `xlsx`, `ini`, `toml`, `csv`, `plist` and `properties` files to `ES6 modules`.

> Supported by `@originjs/vite-plugin-content` . See [vite-plugin-content](https://originjs.org/en/guide/plugins/vite-plugin-content/) .

### Module Federation

Capability of loading remote modules in application.

> Supported by `@originjs/vite-plugin-federation` . See [vite-plugin-federation](https://originjs.org/en/guide/plugins/vite-plugin-federation/) .

## Launch it

For development, change path into your project root directory and launch it:

```shell
cd <app-name>
npm run dev  #yarn dev
```

Then you can debug your project in the browser. Vite server will execute lightning fast HMR when you update the page files.

Origin.js is also able to create Vite server. It might support creating Webpack server as well in the future.

```shell
ori dev [options]
```

Server is based on Vite, so you can set [Vite server options](https://vitejs.dev/config/#server-host) in `vite.config.ts` to config your server.

### Options

```
-n, --no-browser          not open the app in the browser automatically
-c, --auto-close [delay]  close server with time delay
```

## Build

For production, build packages:

```shell
npm run build  #yarn build
```

You can also use Origin.js command, which called Vite bundler. It might support Webpack bundler as well in the future.

```shell
ori build
```

Bundler is based on Vite, so you can set [Vite build options](https://vitejs.dev/config/#build-target) in `vite.config.ts` to config building.

## Test

If a test framework is used, the project file will contain test use cases for the Vue component. To run test:

```shell
npm run test  #yarn test
```

Origin.js supports both Jest and Vitest for testing. By referencing [Jest Configuration](https://jestjs.io/zh-Hans/docs/configuration) configure test options in `jest.config.js`, or by referencing [Vitest Configuration](https://vitest.dev/config/) configure in `vite.config.ts`.
