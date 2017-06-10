# Angular 2.x/4.x
[![angular](https://angular.cn/resources/images/logos/angular/angular.svg)](https://angular.cn/)

---
（每个部分仅记录我认为的重点部分，使整个文章尽可能的短，所以可能造成没有上下文看不懂的情况）


## [ViewChild](https://angular.cn/docs/ts/latest/api/core/index/ViewChild-decorator.html) / [ViewChildrend](https://angular.cn/docs/ts/latest/api/core/index/ViewChildren-decorator.html)

## [ContentChild](https://angular.cn/docs/ts/latest/api/core/index/ContentChild-decorator.html) / [ContentChildrend](https://angular.cn/docs/ts/latest/api/core/index/ContentChildren-decorator.html)

### 参见
[Angular2中ViewChild与ContentChild的区别](http://blog.csdn.net/rainb00000w/article/details/52452032)

[Angular 2 ContentChild & ContentChildren](https://segmentfault.com/a/1190000008707828)


## [HostListener](https://angular.cn/docs/ts/latest/api/core/index/HostListener-interface.html) / [HostBinding](https://angular.cn/docs/ts/latest/api/core/index/HostBinding-interface.html)

HostListener 是属性装饰器，用来为宿主元素添加事件监听。
HostBinding 是属性装饰器，用来动态设置宿主元素的属性值。

基本使用方法，在 component 或 directive 中声明：
```
@HostListener('click', ['$event.target']) onClick(el: HTMLElement) {
  // do something
}

@HostBinding('attr.role') role = 'button';
@HostBinding('class.pressed') isPressed: boolean;
```

***HostListener 还可以监听宿主元素外，其它对象产生的事件，如 window 或 document 对象：***
```
@HostListener('document:click', ['$event']) onClick(evt: Event) {
  // do something
}
```
此处可以用于像 modal , popover 一类的组件。

### 参见
[Angular 2 HostListener & HostBinding](https://segmentfault.com/a/1190000008878888)


## Shadow DOM

一句话解释，shadow DOM 就是某些浏览器在渲染 document 时在某些 DOM 元素中插入了一棵 DOM 元素子树，但这个子树并不在主 DOM 树中，无法 JS 获取或控制它。

如：在 chrome 浏览器中，如果使用 ```<input type="number">``` ，会发现在调试器中可以看到它可以被展开，并看到子 DOM 树：

```
#shadow-root (user-agent)
  <div id="text-field-container pseudo="-webkit-textfield-decoration-container">...</div>
```

### 参见
[神秘的 shadow-dom 浅析](http://www.cnblogs.com/coco1s/p/5711795.html)

[[译]什么是Shadow Dom？](https://www.toobug.net/article/what_is_shadow_dom.html)