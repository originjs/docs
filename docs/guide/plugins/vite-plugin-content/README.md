# vite-plugin-content

将 `yaml`、`xml`、`xlsx`、`ini`、`toml`、`csv`、`plist` 和 `properties` 文件转换成 `ES6 modules` 的 Vite 插件。

- 使用 `UTF-8` 编码读取文件
- 借助 `js-yaml` 转换 `yaml` 文件
- 借助 `xml2js` 转换 `xml` 文件
- 借助 `ini` 转换 `ini` 文件
- 借助 `@iarna/toml` 转换 `toml` 文件
- 借助 `csv-parse` 转换 `csv` 文件
- 借助 `jsplistaml` 转换 `plist` 文件
- 借助 `plist` 转换 `properties` 文件
- 借助 `sheetjs` 转换 `xlsx` 文件

## 安装

### 使用 npm

```shell
npm install @originjs/vite-plugin-content --save-dev
```

### 使用 yarn

```shell
yarn add @originjs/vite-plugin-content --dev
```

## 在项目中使用

首先，在 `vite.config.js` 文件中引入 `@originjs/vite-plugin-content` 。

```js
// vite.config.js
import content from '@originjs/vite-plugin-content'

export default {
    plugins: [
        content(
            /* options */
        )
    ]
}
```

然后引入 `yaml`、`xml`、`xlsx`、`ini`、`toml`、`csv`、`plist` 和 `properties` 文件作为 `ES6 modules` 使用。

```js
import yaml from 'assets/test.yaml'
import xml from 'assets/test.xml'
import xlsx from 'assets/test.xlsx'
import ini from 'assets/test.ini'
import toml from 'assets/test.toml'
import csv from 'assets/test.csv'
import plist from 'assets/test.plist'
import properties from 'assets/test.properties'

console.log(yaml)
console.log(xml)
console.log(xlsx)
console.log(ini)
console.log(toml)
console.log(csv)
console.log(plist)
console.log(properties)
```

## 配置项

### \[yaml/xml/xlsx/ini/toml/csv/plist/properties\].enabled

  - 类型：`boolean`
  - 默认值：`true`

  允许对 `yaml/xml/xlsx/ini/toml/csv/plist/properties` 进行转换。

### \[yaml/xml/xlsx/ini/toml/csv/plist/properties\].include

  - 类型：`string` | `Array[...string]`
  - 默认值：`null`

  以[最小匹配形式](https://github.com/isaacs/minimatch)或数组形式，指定在构建过程中需要被该插件操作的文件。默认所有文件都是目标文件。

### \[yaml/xml/xlsx/ini/toml/csv/plist/properties\].exclude

  - 类型：`string` | `Array[...string]`
  - 默认值：`null`

  以[最小匹配形式](https://github.com/isaacs/minimatch)或数组形式，指定在构建过程中需要被该插件忽略的文件。默认所有文件都不被忽略。

### yaml.loadMultiDocument

  - 类型：`boolean`
  - 默认值：`false`

  允许读取 `yaml` 作为多文档源，具体内容查阅[这里](https://github.com/nodeca/js-yaml)。

### xml.xml2jsOptions

  - 类型：`ParserOptions`
  - 默认值：`null`

  `xml2js` 配置项，具体内容查阅[这里](https://github.com/Leonidas-from-XIV/node-xml2js)。

### csv.csvOptions

  `csv-parse` 配置项，具体内容查阅[这里](https://csv.js.org/parse/options/)。

### xlsx.xlsxOptions

  `sheetjs` 配置项，具体内容查阅[这里](https://github.com/SheetJS/sheetjs#parsing-options)。
