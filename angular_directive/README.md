# Angular Directive
[![angular](https://angularjs.org/img/AngularJS-large.png)](https://angularjs.org/)

## 基本定义及参数解释

AngularJS 的指令定义基本上是这样的：

```
angular.module("moduleX", [])
	.directive("directiveX", function() {
		return {
			// 这里面填写若干参数
		}
	});
```
return 里返回的对象包含的参数是这样的：

1. restrict —— 指明该指令是作为元素，属性，类，注释或组合使用。
2. priority —— 指令执行的优先级，譬如一个标签里用了多个指令时，通过设置这个，可以让哪个指令先执行，哪个后执行（到目前为止都没怎么用过）。
3. template —— 指令使用的模板，一般模板较小时使用，大的时候用下面的 templateUrl 。
4. templatUrl —— 指定指令使用哪个模板文件。
5. replace —— 当为 true 时，要求指令的模板完全代替掉使用指令的标签，譬如 <div class="label" directiveX></div> ，那么执行时，这个标签将被删除，在这个标签的位置上插入指令使用的模板。
6. **transclude（变换）** —— 将使用指令的标签的子元素移动到模板里的某个特定位置（写了 ng-transclude 的位置，看别人代码得出的结论，待验证）。
7. scope —— 为指令创建独立的作用域，而不是继承父作用域，好处是减少了父作用域的污染（这个我用的还是挺多的）。
8. **require** —— 这个挺复杂的，到目前为止，我的理解是，通过它可以，可以操作其他的指令，从而实现指令之间的通信，譬如 require: "ngModel"，那么在指令的 controller 里，可以获取 ngModel 这个指令的 controller ，进而进行对其操作。
9. link —— 我的理解是，它对应的函数就是指令的 controller ，我一般用这个，别人的解释是：指令的本质其实是一个**替换**过程，这个过程分2个阶段，分别为 compile （编译）和 link （连接）阶段，compile 阶段进行标签解析和变换，link 阶段进行数据绑定等操作。
10. **compile** —— 这个也没用过，上一条也提到了，以后再补充吧。
11. **controller** —— 上面的 link 中说到其对应的函数就是指令的 controller ，那么这个 **controller** 是干嘛的，我也不是太清楚，以后补充。

总之，加粗的都是一些我还不太确定，知道不加粗的怎么用，基本上使用指令时不存在什么问题。但要了解高级用法，加粗的是必须要理解的，待我多实践加多看别人的解释，完全理解后再补充加粗部分的内容吧。

查看一些基本示例，请戳----->[这里](https://jsfiddle.net/poplark/5Lrat2fw/)

## 参见
[angularJS directive详解](http://my.oschina.net/u/1992917/blog/406421)

[Angular学习心得之directive——require选项的细节](http://my.oschina.net/u/2342955/blog/411508)

