##Mocha
[![mocha](https://camo.githubusercontent.com/e7a21f5febdfe8ecc4222bed2f3da59efa4d7930/687474703a2f2f662e636c2e6c792f6974656d732f336c316b306e32413155334d3149314c323130702f53637265656e25323053686f74253230323031322d30322d32342532306174253230322e32312e3433253230504d2e706e67)](http://mochajs.org/)

### 一. 此处目录结构为：
> **source**
> > arithmetic.js -- *被测试源文件*
> 
> **test**
> > arithmetic.test.js -- *单元测试文件*
> > 
> > mocha.opts -- *mocha的配置文件，相当于在命令行中添加在mocha后面的参数，详情见下面*

### 二. mocha的用法

#### 1. 需要安装的工具或库
* 安装mocha

`npm install -g mocha`

* 安装chai

`npm install chai`
> **chai**是一套TDD/BDD的断言框架，包含BDD风格的expect/should和TDD风格的assert。
> 
> **mocha**使用**chai**作为断言库，搭配起来更方便。

#### 2. 具体用法
1. 用命令执行指定测试文件 ```mocha filename```
2. 用命令执行指定目录下的测试文件 ```mocha directory```
3. 利用配置文件 ```mocha``` 此时，mocha会找test目录，并读取test目录下的mocha.opts配置文件，譬如此处的配置文件内容为：

```
--recursive // 递归，子目录中的文件也会被测试
--reporter spec // -R 报告格式，spec为默认，还有tap格式
--growl // -G 测试结果在桌面显示（似乎不管用）
--watch // -W 监控测试文件的变化
```
### 三. 此处示例代码
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

var arithmetic = require("../source/arithmetic"),
    chai = require("chai");

var expect = chai.expect,
    should = chai.should();

describe("算术", function() {
    describe("#除法函数", function() {
        it("4 除以 2 应该等于2", function() {{
            expect(arithmetic.divide(4, 2)).to.equal(2);
            expect(arithmetic.divide(new Number(4), 2)).to.equal(2);
        }});

        it("任意数除以 1 应该等于其自身对应的数字", function() {{
            let p = 1,
                x = new Number(3),
                t = Infinity;
            expect(arithmetic.divide(p, 1)).to.equal(p);
            expect(arithmetic.divide(x, 1)).to.equal(x.valueOf());
            expect(arithmetic.divide(t, 1)).to.equal(t.valueOf());
        }});

        it("参数必须为数字或Number型数据", function() {{
            let p = '',
                x = 'x',
                t = NaN;
            expect(function(){arithmetic.divide(p, 1)}).to.throw(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, p)}).to.throw(Error, /wrong type/);
            expect(function(){arithmetic.divide(x, 1)}).to.throw(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, x)}).to.throw(Error, /wrong type/);
            expect(function(){arithmetic.divide(t, 1)}).to.throw(Error, /wrong type/);
            expect(function(){arithmetic.divide(1, t)}).to.throw(Error, /wrong type/);
        }});

        it("除数不能为0", function() {{
            let p = new Number(0);
            expect(function(){arithmetic.divide(8, 0)}).to.throw(Error, /zero/);
            expect(function(){arithmetic.divide(8, p)}).to.throw(Error, /zero/);
        }});
    });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});
```
* 代码说明

> expect(arithmetic.divide(4, 2)).to.equal(2)等同于expect(arithmetic.divide(4, 2)).to.be.equal(2)，写时可以用最贴近于人类语言的方式。
> 
> 如果需要对抛异常的函数进行expect时，那么要将throw Error的函数包在一个匿名函数里，例如，expect(function(){arithmetic.divide(p, 1)}).to.throw(Error, /wrong type/)里把arithmetic.divide(p, 1)。
> 
> [1,2,3].indexOf(5).should.equal(-1)和expect([1,2,3].indexOf(0)).to.equal(-1)是相同的，只不过是不同风格。