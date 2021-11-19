# vite-plugin-federation

A Vite plugin which support Module Federation.

Inspired by Webpack [Module Federation](https://webpack.js.org/concepts/module-federation/) feature.

## Installation

### Use npm

```
npm install @originjs/vite-plugin-federation --save-dev
```

### Use yarn

```shell
yarn add @originjs/vite-plugin-federation --dev
```

## Usage

### change the configuration

- For a Vite project, in `vite.config.js` :

```js
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: 'module-name',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.vue',
      },
      remotes:{
          foo: 'remote_foo'
      }
      shared: ['vue']
    })
  ],
})

```

- For a Rollup project, in `rollup.config.js` :

```js
import federation from '@originjs/vite-plugin-federation'


export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    dir: 'dist'
  },
  plugins: [
    federation({
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/button'
      },
      shared: ['react']
    })
  ]
}
```

### asynchronous references

Vue2, for example:

```vue
<script>
export default {
  name: 'App',
  components: {
    RemoteButtonScoped: () => import('remote-simple/remote-simple-button-scoped'),
  }
}
</script>
```



### Use Remote module components

Vue2, for example:

```
<template>
  <div>
  		<RemoteButtonScoped />
  </div>
</template>
```

## Options

### exposes

#### name
- Type: `string`

Required as the module name of the remote module.

#### filename
- Type: `string`
- Default: `remoteEntry.js`

As the entry file of the remote module, not required, default is `remoteEntry.js` .

As the remote module, the list of components exposed to the public, required for the remote module.

```js
  exposes: {
      // 'exposed component name':'component path'
      './remote-simple-button': './src/components/Button.vue',
      './remote-simple-section': './src/components/Section.vue'
  },
```

### remotes

The remote module entry file referenced as a local module.

```js
remotes: {
    // 'remote module name':'remote entry'
    'remote-simple': 'http://localhost:5011/remoteEntry.js',
},
```

### shared

Dependencies shared by local and remote modules. Local modules need to configure the dependencies of all used remote modules; remote modules need to configure the dependencies of externally provided components.

#### import
- Type: `boolean`
- Default: `true`

Whether to add shared to the module, only for the `remote` side, `remote` will reduce some of the packaging time when this configuration is turned on, because there is no need to package some of the `shared`, but once there is no `shared` module available on the `host` side, it will report an error directly, because there is no fallback module available.

#### shareScope
- Type: `string`
- Default: `default`

The shared domain name, just keep the `remote` and `host` sides the same.

#### version
- Type: `string`
- Default:  `version` of the `package.json` file in the shared package

Only works on `host` side. you need to configure it manually only if you can't get `version`.

#### requiredVersion
- Type: `string`
- Default: `null`

Only for the `remote` side, it specifies the required version of the `host shared` used, when the version of the `host` side does not meet the `requiredVersion` requirement, it will use its own `shared` module, provided that it is not configured with `import=false`, which is not enabled by default.

## Examples

+ [basic-host-remote](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/basic-host-remote)
+ [simple-react](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/simple-react)
+ [vue3-demo](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/vue3-demo)
+ [vue2-demo](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/vue2-demo)


## Construct

vite-plugin-federation dependencies are required during the development and build process, and global installation is recommended.

- rollup
- vite

Part of example requires dependencies, recommended for global installation.

- lerna
- rimraf

Github CI build, not engineering required:

- playwright-chromium

## Wiki
[Design framework](https://github.com/originjs/vite-plugin-federation/wiki)