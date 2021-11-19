# vite-plugin-pages

为 `pages` 目录中的 Vue 组件自动生成路由配置，同时支持布局的 Vite 插件。

- 以 `_` 开头命名的组件为动态页面
- 以 `$` 开头命名的组件为嵌套路由
- 文件名为 `_` 的组件为错误捕获页面
- 默认布局将被应用至 `pages` 目录下的所有 Vue 组件
- 自定义布局只生效于在 `layout` 块语句中定义相应了布局的 Vue 组件中

## 安装

### 使用 npm

```shell
npm install @originjs/vite-plugin-pages --save-dev
```

### 使用 yarn

```shell
yarn add @originjs/vite-plugin-pages --dev
```

## 在项目中使用

首先，在 `vite.config.js` 文件中引入 `@originjs/vite-plugin-pages` 。

```js
// vite.config.js
import pages from '@originjs/vite-plugin-pages'

export default {
    plugins: [
        pages(
            /* options */
        )
    ]
}
```

然后引入 `vite-plugin-pages` 生成的 `routes` ，并以此创建 `router` 实例。

```js

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'plugin-pages'

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

现在我们就可以在 `pages` 和 `layouts` 目录下分别编写页面组件和布局组件了。

## 路由转换规则

参考以下示例：

1. 通用的文件名：`/user/foo.vue` -> `/user/foo`
2. 以 `_` 开头命名的文件：`/user/_id.vue` -> `/user/:id`
3. 文件名为 `index.vue`：`/user/index.vue` -> `/user`
4. 文件名为 `_`：`/_.vue` -> `/:pathMatch(.*)*`

## 其他

1. 同一个目录下的文件和文件夹不能同名。
   例如，如果已经存在 `/user/` ，那么不能添加 `user.vue` 文件。
2. 目录不能作为 `index` 。
