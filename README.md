一个 react 项目模板

已集成：react18、typescript、react-router-dom、 redux(RTK)、craco、axios、eslint、prettier、commititizen 等

具体如下

```json
"dependencies": {
    "@reduxjs/toolkit": "^1.9.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.11",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "axios": "^1.2.2",
    "normalize.css": "^8.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.6.1",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.4",
    "web-vitals": "^2.1.4"
  },
"devDependencies": {
    "@commitlint/cli": "^17.4.0",
    "@commitlint/config-conventional": "^17.4.0",
    "@craco/craco": "^7.0.0",
    "@typescript-eslint/eslint-plugin": "^5.48.0",
    "@typescript-eslint/parser": "^5.48.0",
    "commitizen": "^4.2.6",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8.31.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.11",
    "husky": "^8.0.0",
    "prettier": "^2.8.1"
  },
```

命令：

```json
"scripts": {
    "start": "craco start",  //启动
    "build": "craco build",  //打包
    "test": "craco test",
    "eject": "react-scripts eject",
    "prettier": "prettier --write .", //格式化
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore", //格式化
    "prepare": "husky install",
    "commit": "cz" //git提交
  },
```
