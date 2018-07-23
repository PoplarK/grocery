# NPM 发包

老是忘记步骤，每次都要网上重新查一次，这里记录一下，统一从这里查看

## 登录

```
npm login
/* 然后
 * 输入 用户名
 * 输入 密码
 * 输入 邮箱
 */
```

## 修改 package.json

示例一
```
{
  "name": "jaja-cli",
  "version": "0.0.2",
  "description": "a command to init, build, deploy a project",
  "main": "index.js",
  "bin": {
    "jaja": "./bin/jaja.js"
  }, // 除非需要暴露出可执行文件，否则不需要
  "dependencies": {
    "colors": "^1.1.2",
    "commander": "^2.11.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "command"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/poplark/jaja-cli.git"
  },
  "author": "poplark",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/poplark/jaja-cli.git/issues"
  },
  "homepage": "https://github.com/poplark/jaja-cli.git#readme"
}

```

示例二
```
{
  "name": "unique-classnames",
  "version": "1.0.3",
  "description": "A simple utility for conditionally joining classNames together, all classNames won't be duplicated.",
  "main": "lib/index.js",
  "scripts": {
    "test": "node test/index.js",
    "build": "gulp umd"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/poplark/unique-classnames.git"
  },
  "files": [
    "lib"
  ], // 指定需要发布的目录或文件，不包含在此列表中的文件将会被忽略掉（不会被发布）
  // 默认情况下，README.md, package.json 即使不指定，也会被提交
  // 此处有疑问，以下文件需要指定吗
  // 1. yarn.lock
  // 2. package-lock.json
  "keywords": [
    "css",
    "classnames",
    "unique",
    "util",
    "react"
  ],
  "author": "poplark",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/poplark/unique-classnames/issues"
  },
  "homepage": "https://github.com/poplark/unique-classnames#readme",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "gulp": "^3.9.1",
    "gulp-babel": "^7.0.1",
    "gulp-umd": "^0.2.1"
  }
}

```

## 发布

```
npm publish
```

## 更新

### patch

```
npm version patch
npm publish
```

### minor version

```
npm version minor
npm publish
```

### major version

```
npm version major
npm publish
```

## To be continue....
