# vite-plugin-global-style

`CSS`, `SASS`, `LESS`, `Stylus` files named starting with `global` are automatically added to the Vite global style.

- For global `CSS` styles, they will be added to the `index.html` and will affect all pages
- For global `SASS/LESS/Stylus` styles, they will be added to every `SASS/LESS` files using `@import XXXX`

## Installation

### Use npm

```shell
npm install @originjs/vite-plugin-global-style --save-dev
```

### Use yarn

```shell
yarn add @originjs/vite-plugin-global-style --dev
```

## Usage

Import `@originjs/vite-plugin-global-style` in `vite.config.js` .

```js
import assets from '@originjs/vite-plugin-global-style'

export default {
    plugins: [
        assets(
            /* options */
        )
    ]
}
```

Then you can create your global styles in `assets` directory.

## Options

### sourcePath

- Type: `string`
- Default: `/src/assets`

The relative path of the `assets` directory to the project.

### cssEnabled

- Type: `boolean`
- Default: `true`

Whether to automatically load the `CSS` global style.

### sassEnabled

- Type: `boolean`
- Default: `true`

Whether to automatically load the `SASS` global style.

### lessEnabled

- Type: `boolean`
- Default: `true`

Whether to automatically load the `LESS` global style.

### stylusEnabled

- Type: `boolean`
- Default: `true`

Whether to automatically load the `Stylus` global styles.

### recursive

- Type: `boolean`
- Default: `true`

Whether to recursively search the global styles in the `sourcePath` directory.
