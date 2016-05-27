# Javascript 常用的代码段

[![Javascript](https://www.codementor.io/assets/page_img/learn-javascript.png)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 浏览器判断

### 判断是否为手机浏览器

```
var isMobile = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
```

### 判断是否为 IE 浏览器

```
var isIE = function() {
    if (/msie/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
```
> 扩展 - html 中判断 IE 版本
>
```
<!--[if IE]> <h1>您正在使用IE浏览器</h1> <![endif]-->
<!--[if IE 5]> <h1>版本 5</h1> <![endif]-->
<!--[if IE 5.0]> <h1>版本 5.0</h1> <![endif]-->
<!--[if IE 5.5]> <h1>版本 5.5</h1> <![endif]-->
<!--[if IE 6]> <h1>版本 6</h1> <![endif]-->
<!--[if IE 7]> <h1>版本 7</h1> <![endif]-->
<!--[if IE 8]> <h1>版本 8</h1> <![endif]-->
<!--[if lt IE 9]> <h1>版本 9 以下</h1> <![endif]-->
```