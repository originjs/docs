# 安装

Origin.js 在 [Node.js](https://nodejs.org/en/) 环境下运行，可以通过以下几种方式完成安装和配置。

## 直接下载

直接在 `<script>` 标签载入文件:

```html
<script src="/path/to/originjs.js"></script>
```

## NPM

```bash
npm install -g @originjs/cli
```

## Yarn

```bash
yarn global add @originjs/cli
```

## 源码构建

如果你希望使用最新的功能进行开发，可以通过 `GitHub` 克隆 `origin.js` 的源码并自行构建：

> Origin.js 项目由 `pnpm` 托管，请先配置 `pnpm` 环境。

```bash
# 从 github 拷贝项目到本地
git clone https://github.com/originjs/origin.js.git node_modules/origin.js
# 切换目录
cd node_modules/origin.js
# 安装依赖
pnpm install
# 构建项目
pnpm run build
# 构建完整的 cli 模块
pnpm run build:cli
```
