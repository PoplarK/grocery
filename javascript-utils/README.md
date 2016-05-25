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
> ```<!--[if lt IE 9]> do something <![endif]-->```