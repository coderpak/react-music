## 搭建react项目

**项目环境：react18+typescript+react-router-dom+redux(RTK)+eslint+prettier+Commitizen **

### 1. 使用脚手架创建项目

```
create-react-app project-name --template typescript
```

### 2. 使用craco修改webpack配置

1. **安装**

```
npm i -D @craco/craco
```

2. **在根目录下新建文件 **`craco.config.js`
3. **修改 **`package.json`

```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

### 3. 配置别名

1. **修改 **`craco.config.js`

```
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
}
```

2. **修改** `tsconfig.json`

```
"compilerOptions": {
    ...
    
  "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
}
```

### 4. 集成react-router

```
npm install react-router-dom
```

### 5.集成redux

```
npm install @reduxjs/toolkit react-redux
```

### 6. 配置代码规范

#### 6.1 集成 editorconfig

**EditorConfig 有助于为** `不同 IDE 编辑器`上处理同一项目的多个开发人员维护一致的编码风格。

**在项目根目录新建文件： **`.editorconfig`

```
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

**VSCode需要安装一个插件：EditorConfig for VS Code**

![image-20221219203838176](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221219203838176.png?lastModify=1673075978)

#### 6.2 集成 prettier

**Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。**

**1.安装prettier **

```
npm install prettier -D
```

**2.新增** `.prettierrc`文件：

* **useTabs：使用tab缩进还是空格缩进，选择false；**
* **tabWidth：tab是空格的情况下，是几个空格，选择2个；**
* **printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；**
* **singleQuote：使用单引号还是双引号，选择true，使用单引号；**
* **trailingComma：在多行输入的尾逗号是否添加，设置为 **`none`，比如对象类型的最后一个属性后面是否加一个 `，`；
* **semi：语句末尾是否要加分号，默认值true，选择false表示不加；**

```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

**3.创建** `.prettierignore`忽略文件 （使用命令格式化时，必须添加）

```
/build/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

**4.VSCode需要安装prettier的插件**

![image-20221219205143644](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221219205143644.png?lastModify=1673075978)

**5.VSCode进行配置：**

![image-20221219204429601](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221219204429601.png?lastModify=1673075978)

![image-20221219204513340](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221219204513340.png?lastModify=1673075978)

**6.这个时候按ctrl+s保存，vscode则会自动读取** `prettierrc`去进行格式化，那么我们安装了 prettier则有什么用呢？ 实际上，安装的prettier是要通过命令执行格式化操作

`package.json`新增一条命令：

```
"scripts": {
    ...

    "prettier": "prettier --write ."
}
```

**执行** `npm run prettier` 就会对所有文件进行格式化

#### 6.3集成 ESLint

1. **安装eslint**

```
npm install eslint -D
```

2. **初始化eslint**

```
npx eslint --init
```

![image-20230105211249230](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20230105211249230.png?lastModify=1673075978)

**生成的** `.eslintrc.js`文件, 这里env选项添 `node`

```
module.exports = {
  env: {
    browser: true,
    ++ node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  }
}
```

**2.VSCode需要安装ESLint插件：**

![image-20221219210049336](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221219210049336.png?lastModify=1673075978)

**3.解决eslint和prettier冲突的问题：**

**安装插件：**

```
npm install eslint-plugin-prettier eslint-config-prettier -D
```

**在** `.eslintrc.js`配置prettier插件：

```
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
    +++ 'plugin:prettier/recommended'
  ],
```

**这样ESLint就会去读取prettier的配置文件，保持一致，不会产生冲突**

#### 6.4 git Husky和eslint

**虽然我们已经要求项目使用eslint了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：**

* **也就是我们希望保证代码仓库中的代码都是符合eslint规范的；**
* **那么我们需要在组员执行 **`git commit` 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；

`package.json`新增一条命令：

```
"scripts": {
    ...

   "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
}
```

**在命令行执行** `npm run lint` 即可自动对项目内文件代码修改为符合规范的代码，所以我们通过husky工具让在git提交时，执行这条命令即可。

**那么如何做到这一点呢？可以通过Husky工具：**

* **husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push**

**如何使用husky呢？**

**这里我们可以使用自动配置命令：**

```
npx husky-init && npm install
```

**这里会做三件事：**

**1.安装husky相关的依赖**

**2.在项目目录下创建 **`.husky` 文件夹

**3.在package.json中添加一个脚本：**`prepare`

**接下来，我们需要去完成一个操作：在进行commit时，执行lint脚本：**

![image-20221231160644704](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231160644704.png?lastModify=1673075978)

**这个时候我们执行git commit的时候会自动对代码进行lint校验。**

#### 6.5 git commit规范

##### 6.5.1 代码提交风格

**通常我们的git commit会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。**

![image-20221231162654857](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231162654857.png?lastModify=1673075978)

**但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen**

* **Commitizen 是一个帮助我们编写规范 commit message 的工具；**

**1.安装Commitizen**

```
npm install commitizen -D
```

**2.安装cz-conventional-changelog，并且初始化cz-conventional-changelog：**

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

**这个命令会帮助我们安装cz-conventional-changelog：**

![image-20221231163304033](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163304033.png?lastModify=1673075978)

**并且在package.json中进行配置：**

![image-20221231163421805](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163421805.png?lastModify=1673075978)

**这个时候我们提交代码需要使用 **`npx cz`：

* **第一步是选择type，本次更新的类型**

| **Type**     | **作用**                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| **feat**     | **新增特性 (feature)**                                                                     |
| **fix**      | **修复 Bug(bug fix)**                                                                      |
| **docs**     | **修改文档 (documentation)**                                                               |
| **style**    | **代码格式修改(white-space, formatting, missing semi colons, etc)**                        |
| **refactor** | **代码重构(refactor)**                                                                     |
| **perf**     | **改善性能(A code change that improves performance)**                                      |
| **test**     | **测试(when adding missing tests)**                                                        |
| **build**    | **变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）**                           |
| **ci**       | **更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等** |
| **chore**    | **变更构建流程或辅助工具(比如更改测试环境)**                                               |
| **revert**   | **代码回退**                                                                               |

* **第二步选择本次修改的范围（作用域）**

![image-20221231163744383](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163744383.png?lastModify=1673075978)

* **第三步选择提交的信息（真正的commit 描述）**

![image-20221231163843857](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163843857.png?lastModify=1673075978)

* **第四步提交详细的描述信息**

![image-20221231163913381](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163913381.png?lastModify=1673075978)

* **第五步是否是一次重大的更改**

![image-20221231163952639](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231163952639.png?lastModify=1673075978)

* **第六步是否影响某个open issue**

![image-20221231164019676](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231164019676.png?lastModify=1673075978)

**即可完成提交，通过 **`git reflog` 查看提交内容和格式

**我们也可以在scripts中构建一个命令来执行 cz：**

![image-20221231164354215](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221231164354215.png?lastModify=1673075978)

**以后提交执行 **`npm run commit` 即可

##### 6.5.2. 代码提交验证

**如果我们按照cz来规范了提交风格，但是依然有同事通过 **`git commit` 按照不规范的格式提交应该怎么办呢？

* **我们可以通过commitlint来限制提交；**

**1.安装 @commitlint/config-conventional 和 @commitlint/cli**

```
npm i @commitlint/config-conventional @commitlint/cli -D
```

**2.在根目录创建commitlint.config.js文件，配置commitlint**

```
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

**3.执行命令：使用husky生成commit-msg文件，验证提交信息：**

```
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

### 7. 区分开发环境和生产环境

**方式1.webpack默认为我们提供以下环境变量**

```
console.log(process.env.NODE_ENV) // string production 或者 development
```

**方式2：创建环境文件，vite会根据环境进行读取，文件命名规则如下**

![image-20221221195221592](file:///C:/Users/pak/Desktop/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/img/react-ts%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/image-20221221195221592.png?lastModify=1673075978)

**写入变量时，要以** `REACT_APP_`开头, 例如 `REACT_APP_BASE_URL=http://aaa`

**访问：**

```
console.log(import.meta.env)
```
