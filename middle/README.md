##水平，垂直居中

本文目的是搞清楚 CSS 中的水平，垂直居中

### 一. 此处目录结构为：
> index.html
> 
> my.css

### 二. 水平居中

#### 1. 内联元素（inline 或 inline-*）居中

这种最简单，就是相对于父级块元素居中对齐（父元素当然只能是块级元素，你找个行块元素当父元素试试？），那么就可以直接在 **父元素** 上用 **text-align** 。

```
.horizontal-inline {
	text-align: center;
}
```
#### 2. 块级元素居中
和上面相同，也可以直接在 **父元素** 上用 **text-align** 。

```
.horizontal-block-1 {
	text-align: center;
}
```
如果子元素的宽度固定，那么还在 **子元素** 上用 **margin** 。

```
.horizontal-block-2 {
	width: 100px;
	margin: 0 auto;
}

```

### 三. 垂直居中

#### 1. 内联元素（inline 或 inline-*）居中

### 四. 水平垂直居中

#### 1. 内联元素（inline 或 inline-*）居中
