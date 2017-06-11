# Angular 2.x/4.x
[![angular](https://angular.cn/resources/images/logos/angular/angular.svg)](https://angular.cn/)

---
（每个部分仅记录我认为的重点部分，使整个文章尽可能的短，所以可能造成没有上下文看不懂的情况）


## [ViewChild](https://angular.cn/docs/ts/latest/api/core/index/ViewChild-decorator.html) / [ViewChildrend](https://angular.cn/docs/ts/latest/api/core/index/ViewChildren-decorator.html)

ViewChild 是属性装饰器，用来从模板视图中获取第一个匹配的元素，匹配元素的查询会在 ngAfterViewInit 钩子函数被调用前完成。
ViewChildren 用来从模板视图中获取匹配的多个元素，返回的是 QueryList (@angular/core) 集合。

基本使用方法，在 component 或 directve 中声明：
```
@ViewChild('someString') someView: ElementRef; // 使用模板变量名查询（即标签中的 #somestring）
@ViewChild('someString', { read: ViewContainerRef}) someView: ViewContainerRef; // 没懂
@ViewChild(someClass) someView: someClass; //使用类型查询 (directive or component class)

@ViewChildren(someClass) someViews: QueryList<someClass>;
```

## [ContentChild](https://angular.cn/docs/ts/latest/api/core/index/ContentChild-decorator.html) / [ContentChildrend](https://angular.cn/docs/ts/latest/api/core/index/ContentChildren-decorator.html)

ContentChild 是属性装饰器，用来从通过 Content Projection (内容投影) 方式设置的视图中获取匹配的元素。
内容投影 - 即通过 ng-content 方式在组件中插入内容（如，html标签或自定义组件等）

基本使用方法，在 component 或 directve 中声明：
```
@ContentChild(someClass) someContent: someClass;

@ContentChildren(someClass) someContents: QueryList<someClass>;
@ContentChildren(someClass, { descendants: false}) someContents: QueryList<someClass>; // descendants 决定是否查询后代元素，还是只查询一层，默认值为 true，表示会嵌套查询。
```

### ViewChild / ViewChildren 与 ContentChild / ContentChildren 的区别
1. ViewChild 是组件模板中的内容，而 ContentChild 是 Host 元素标签中的内容，ContentChild 可能不太好理解，譬如：
```
<parent-component>
  <div>xxxxx</div>
  <child-component></child-component>
  <div>yyyyy</div>
</parent-component>

若在 ParentComponent 里声明了 @ContentChild(ChildComponent) childContent: ChildComponent;
那么 childContent 是从 <parent-component> 标签包裹的三行里面找 ChildComponent （不过 ParentComponent 使用的模板中需要使用了 ng-content 指令）

```

### 参见
[Angular2中ViewChild与ContentChild的区别](http://blog.csdn.net/rainb00000w/article/details/52452032)(此文章里提到 shadow DOM 和 light DOM ，我表示不能赞同)

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