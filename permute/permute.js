function copy(b) {
    var result = [];
    var len = b.length;
    for(var i=0;i<len;i++) {
        result.push(b[i]);
    };
    return result;
}

function permute(arr) {
    var result = [];
    var len = arr.length;
    if (len > 1) {
        var p = arr.shift();
        var x = permute(arr);
        for(var j=0,jLen=x.length;j<jLen;j++) {
            for(var k=0,kLen=x[j].length;k<=kLen;k++) {
                var temp = copy(x[j]); 
                temp.splice(k, 0, p);
                result.push(temp);
            }
        }
    } else {
        result.push([arr[0]]);
    }
    return result;
}

function calculate(num1, num2, multi) {
    var x = num2 * multi;
    if(num1 === x) {
        console.log(num1, num2, multi);
    }
}

var p = ['1','2','3','4','5','6','7','8','9'];
var x = permute(p);
x.forEach(function(i){
    var str = i.join('');
    var a = parseInt(str.slice(0,5));
    var b = parseInt(str.slice(5,9));
    calculate(a,b,2);
});

