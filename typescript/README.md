# Typescript - Import & Export

## Import and export between ts and es6 files

### Import es6 file into ts file

#### 首先，需要在 tsconfig.js 文件的 compilerOptions 中添加 "allowJs": true 如下：
```
{
  "compilerOptions": {
    "allowJs": true,
    ...
  },
  ...
}
```

#### 其次， 假设有 es6 file - es6.js：
```
class ES6 {
  ...
}
```

1. 若

```
export default ES6
```
那么在 ts file 中需要：

```
import * as ES6 from 'es6.js'
```

2. 若

```
export { ES6 } // 或 直接在声明 class 时 export, 如
export class ES6 {
  ...
}
```
那么
```
import { ES6 } from 'es6.js'
```

### Import ts file into es6 file

假设有 ts file - ts.ts:

```
@Component({
  ...
})
export class TS {
  ...
}
```

那么在 js file 中可以：
```
import { TS } from 'ts';
```


## Import ts file in commonJS file

to be continue...

