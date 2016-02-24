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