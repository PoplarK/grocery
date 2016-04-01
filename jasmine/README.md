# Jasmine
[![jasmine](http://jasmine.github.io/images/jasmine_vertical.png)](http://jasmine.github.io/)

## 一. 此处目录结构为：
> **source**
> > arithmetic.js -- *被测试源文件*
> 
> **spec**
> > **helpers** -- *存放自定义的helper*
> > 
> > **support**
> > > jasmine.json -- *jasmine的配置文件，详情见后面*
> > 
> > **test**
> > > arithmetic.test.js -- *单元测试文件*
> > 

## 二. jasmine的用法

### 1. 需要安装的工具
* 安装jasmine

`npm install -g jasmine`

* 用jasmine初始化一个工程

`jasmine init`
> 会生成spec目录，其中包含support目录，并且在support目录中初始化了一个jasmine.json配置文件。
> 
> **jasmine**包含BDD风格的expect断言库，所以不需要引入其它的。

### 2. 具体用法
1. 用命令执行指定测试文件 ```jasmine filename```
2. 利用配置文件 ```jasmine``` 此时，jasmine默认会找spec下的support目录，并读取support目录下的jasmine.json配置文件，譬如此处的配置文件内容为：

```
{
  "spec_dir": "spec", // 指定测试及helper文件所在的目录，譬如可以为 test 目录
  "spec_files": [
    "test/*.test.js" // 要跑的测试文件
  ],
  "helpers": [
    "helpers/**/*.js" // 要被加载的helper文件
  ],
  "stopSpecOnExpectationFailure": false, // 出现failure时中断 
  "random": false // 测试函数的运行顺序
}
```

> jasmine不能像mocha那样直接 `mocha directory` 来跑某个目录下的所有测试文件


## 三. 此处示例代码
* 其中arithmetic.js被测的部分代码为：

```
...
const divide = (x, y) => {
    if(isNaN(x) || isNaN(y)) {
        throw new Error("wrong type");
    }
    if(typeof x !== "number" && !(x instanceof Number)) {
        throw new Error("wrong type");
    }
    if(typeof y !== "number" && !(y instanceof Number)) {
        throw new Error("wrong type");
    }
    if(0 === y || 0 === y.valueOf()) {
        throw new Error("cannot divide by zero");
    }
    return x / y;
}
...
```
* arithmetic.test.js的测试代码为：

```
"use strict";

var arithmetic = require("../../source/arithmetic");

describe("算术", function() {
    describe("#除法函数", function() {
        it("4 除以 2 应该等于2", function() {{
            expect(arithmetic.divide(4, 2)).toBe(2);
            expect(arithmetic.divide(new Number(4), 2)).toEqual(2);
        }});

        it("任意数除以 1 应该等于其自身对应的数字", function() {{
            let p = 1,
                x = new Number(3),
                t = Infinity;
            expect(arithmetic.divide(p, 1)).toEqual(p);
            expect(arithmetic.divide(x, 1)).toEqual(x.valueOf());
            expect(arithmetic.divide(t, 1)).toEqual(t.valueOf());
        }});

        it("参数必须为数字或Number型数据", function() {{
            let p = '',
                x = 'x',
                t = NaN;
            expect(function(){arithmetic.divide(p, 1)}).toThrowError(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, p)}).toThrowError(Error, /wrong type/);
            expect(function(){arithmetic.divide(x, 1)}).toThrowError(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, x)}).toThrowError(Error, /wrong type/);
            expect(function(){arithmetic.divide(t, 1)}).toThrowError(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, t)}).toThrowError(Error, /wrong type/);
        }});

        it("除数不能为0", function() {{
            let p = new Number(0);
            expect(function(){arithmetic.divide(8, 0)}).toThrowError(Error, /zero/);
            expect(function(){arithmetic.divide(8, p)}).toThrowError(Error, /zero/);
        }});
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            // [1,2,3].indexOf(5).should.equal(-1);
            expect([1,2,3].indexOf(0)).toEqual(-1);
        });
    });
});
```
* 代码说明

> expect(arithmetic.divide(4, 2)).toEqual(2)类似于expect(arithmetic.divide(4, 2)).toBe(2)。
> 
> 与mocha中使用的chai类似，如果需要对抛异常的函数进行expect时，那么要将throw Error的函数包在一个匿名函数里，例如，expect(function(){arithmetic.divide(p, 1)}).toThrowError(Error, /wrong type/)里把arithmetic.divide(p, 1)包在了一个匿名函数里。
> 
> 由于jasmine没有BDD风格的should形式的断言，所以像mocha中的[1,2,3].indexOf(5).should.equal(-1)这种代码不能用于jasmine里。

## 参见 [mocha](https://github.com/PoplarK/grocery/blob/master/mocha/README.md)