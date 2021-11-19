# vite-plugin-global-style

支持自动引入以 `global` 为开头命名的 `CSS`、`SASS`、`LESS`、`Stylus` 文件作为 Vite 全局样式的 Vite 插件。

- 全局 `CSS` 样式将在 `index.html` 文件中引入，并对所有页面生效
- 全局 `SASS/LESS/Stylus` 样式将以 `XXXX @import` 的形式在每一个 `SASS/LESS` 文件中引入

## 安装

### 使用 npm

```shell
npm install @originjs/vite-plugin-global-style --save-dev
```

### 使用 yarn

```shell
yarn add @originjs/vite-plugin-global-style --dev
```

## 在项目中使用

在 `vite.config.js` 文件中引入 `@originjs/vite-plugin-global-style` 。

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

接下来就可以在 `assets` 目录下创建你的全局样式。

## 配置项

### sourcePath

- 类型： `string`
- 默认值： `/src/assets`

`assets`文件夹相对项目根目录的相对路径。

### cssEnabled

- 类型：`boolean`
- 默认值：`true`

允许自动加载 `CSS` 全局样式。

### sassEnabled

- 类型：`boolean`
- 默认值：`true`

允许自动加载 `SASS` 全局样式。

### lessEnabled

- 类型：`boolean`
- 默认值：`true`

允许自动加载 `LESS` 全局样式。

### stylusEnabled

- 类型：`boolean`
- 默认值：`true`

允许自动加载 `Stylus` 全局样式。

### recursive

- 类型：`boolean`
- 默认值：`true`

允许递归查找 `sourcePath` 下嵌套目录内的所有全局样式。
