##水平，垂直居中

本文目的是搞清楚 CSS 中的水平，垂直居中

### 一. 此处目录结构为：
> index.html
> 
> my.css

### 二. 水平居中

#### 1. 子元素为内联元素（inline 或 inline-*）

这种最简单，就是相对于块级父元素居中对齐，那么就可以直接在 **父元素** 上用 **text-align** 。

```
.horizontal-inline {
	text-align: center;
}
```
#### 2. 子元素为块级元素

如果子元素的 **宽度固定** ，那么可以在 **子元素** 上用 **margin** 。

```
.horizontal-block {
	width: 100px;
	margin: 0 auto;
}

```
如果子元素的 **宽度不固定** ，那么子元素的长会充满父元素，那么也不存在居中的问题，若子元素中包含的为文字，想要其居中，则转换成了 **子元素为内联元素时居中** 的问题。

### 三. 垂直居中

#### 1. 单行

父元素 **高度固定** 时，子元素不管是内联元素还是块级元素都可以直接将父元素的 **line-height** 与 **height** 设置为同一值。

```
.vertical-single-1 {
	height: 50px;
	line-height: 50px;
}
```

父元素 **高度固定** 时，子元素不管是内联元素还是块级元素，还可以在父元素上用 **display** 和 **vertical-align** 结合的方法。特别的，这种方法同样适用于 **多行** 的情况。

```
.vertical-single-2 {
    display: table-cell;
    vertical-align: middle;
}
```

父元素 **高度固定** 时，若子元素的高度也固定了，那么还可以用 **padding-top** 与 **padding-bottom** 或 **margin-top** 与 **margin-bottom** 来调，但这种仅仅是看上去居中了，算不准的话会有些偏差，想精确的话，还要结合设置子元素的 **line-height** 来使用。

```
.vertical-single-3 {
    padding-top: 15px;
    padding-bottom: 15px;
}

.vertical-single-3 > div {
    height: 20px;
    line-height: 20px;
}
```

父元素 **高度不固定** 时，若子元素的高度固定，那么可以用 **absolute** 加 **负margin-top** 或 **margin auto** 的方法。

```
.vertical-single-4-parent {
    height: 100%;
    position: relative;
}

.vertical-single-4 {
    position: absolute;
    height: 20px;
    top: 50%;
    margin-top: -10px;
}
```
还可以

```
.vertical-single-5-parent {
    height: 100%;
    position: relative;
}

.vertical-single-5 {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 20px;
}
```

#### 2. 多行


### 四. 水平垂直居中


### 参见

[CSS垂直水平完全居中手册](https://mp.weixin.qq.com/s?__biz=MzAwNDcyNjI3OA==&mid=402280389&idx=1&sn=7d932e91a5cd2f10f1555155427bc679&scene=1&srcid=03161SbB5bviWOvKxDyhv9Gk&key=710a5d99946419d91494af75c845b0b7e92f69168c5190871cd48a2dc2ee5231fce6c85bf70e77f3744da39278ac322e&ascene=0&uin=MjY3MjUzMTE0MQ%3D%3D&devicetype=iMac+MacBookPro11%2C2+OSX+OSX+10.10.5+build(14F1509)&version=11020201&pass_ticket=a6bfdENE9KstErkVJ4XJl2sq4BHnvr96bc0s43SjxpyWePqXBNRNKt24yuggWoOC)

[盘点8种CSS实现垂直居中水平居中的绝对定位居中技术](http://blog.csdn.net/freshlover/article/details/11579669)

[CSS 元素垂直居中的 6种方法](http://blog.zhourunsheng.com/2012/03/css-%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E7%9A%84-6%E7%A7%8D%E6%96%B9%E6%B3%95/)
