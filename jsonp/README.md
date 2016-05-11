# JSONP
## 是什么？

JSONP -- JSON With Padding，就是打包在函数调用中的的 JSON（或者包裹的 JSON ）。从功能上说，它是用来解决跨域问题的一种方法。在 JavaScript 中，有一个很重要的安全性限制，被称为 “Same-Origin Policy”（同源策略）。这一策略对于 JavaScript 代码能够访问的页面内容做了很重要的限制，即 JavaScript 只能访问与包含它的文档在同一域下的内容。而 JSONP 可以解决访问不同域名下的内容的问题。

## 还是不知道是啥？
那先说说它有什么特点，举个例子就知道了。

### 主要有以下几个特点：

* 只能是 GET 请求
* 访问的 url 里需要指明 callback 函数的名称（该函数必须是一）
* 需要有后台的配合（要访问的域的后台要有对应的接口）
* 并非 XMLHTTPRequest 请求，用 javascript 实现的时候，其实是在 HTML 的 head 里添加 script 元素，并为其指明不同域的 src

## 示例
假设我们本地有个服务器跑在 localhost:3000 上。

后台代码 app.js 如下（NodeJS）:

```
var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

var server = http.createServer(function(req, res) {
    var content, query;
    res.statusCode = 200;
    var p = req.url.split("?");
    var x = p[0];
    p = p[1];
    query = querystring.parse(p);
    res.setHeader('Content-Type', 'text/plain');
    if (x === '/') {
        filePath = "index.html";
        content = fs.readFileSync(filePath);
        res.setHeader('Content-Type', 'text/html');
    } else if (x === "/jsonp") {
        var t;
        switch (query.type) {
            case "what":
                t = "you clicked what";
                break;
            case "who":
                t = "you clicked who";
                break;
            default:
                console.log("unknow");
        }
        content = t ? query["jsoncallback"] + "('" + t + "')" : query["jsoncallback"] + "('unknow')";
    } else {
        var t = x.substring(1);
        try {
            fs.statSync(t);
            return fs.createReadStream(t).pipe(res);
        } catch(err) {
            content = "no content";
        }
    }
    setTimeout(function() {
        res.end(content);
    }, 200);
});

server.listen(3000);
```
可以看到代码中针对 "/jsonp" ，专门做了处理，即为开放出来的 jsonp 的接口。

前端 index.html 如下：

```
<!DOCTYPE html>
<html>
    <head>
        <style>
            .btn {
                width: auto;
                height: auto;
                line-height: 1.5;
                display: inline-block;
                margin: 0 0 2px;
                padding: 6px 12px;
                overflow: hidden;
                border: 1px solid #e5e5e5;
                -webkit-border-radius: 4px;
                   -moz-border-radius: 4px;
                    -ms-border-radius: 4px;
                     -o-border-radius: 4px;
                        border-radius: 4px;
                font-size: 14px;
                font-weight: 400;
                text-align: center;
                vertical-align: middle;
                background-image: linear-gradient(#ffffff, #f2f2f2);
                cursor: pointer;
            }
            .btn:hover {
                background-image: none;
                color: #428bca;
            }
        </style>
    </head>
    <body>
        <div class="btn" id="p">
            click what
        </div>
        <div class="btn" id="pp">
            click who
        </div>
        <p id="out"> </p>
        <script src="jquery-1.11.3.min.js"></script>
        <script src="index.js"></script>
    </body>
</html>
```
想实现的效果为，点击不同的按钮，下面显示从 127.0.0.1:3000 返回的不同内容（电脑比较傻，会认为 localhost 和 127.0.0.1 为不同域名）。

### 1. 纯 Javascript 方式

```
function myCallback(arg) {
    var p = document.getElementById("out");
    p.innerText = arg;
};
document.getElementById("p").onclick = function() {
    var p = document.getElementsByTagName("head")[0];
    var x = document.createElement("script");
    x.src = "http://127.0.0.1:3000/jsonp?type=what&jsoncallback=myCallback";
    p.appendChild(x);
};
```

### 2. Jquery 方式

```
function myCallback(arg) {
    var p = document.getElementById("out");
    p.innerText = arg;
};
$(function() {
    $("#pp").click(function() {
        $.ajax({
                type: "post",
                dataType: "jsonp",
                jsonp: 'jsoncallback',
                jsonpCallback: "myCallback",
                url: "http://127.0.0.1:3000/jsonp?type=who"
            })
            .done(function(a, b, c) {
                console.log("done", a, b, c);
                // $("#out").text(a.content);
            })
            .fail(function(a, b, c) {
                console.log("fail", a, b, c);
            });
    });
});
```

## 总结

没啥好总结的，就是 Jquery 方式时，其实并不是真正意义是的 ajax 请求，也是在 head 里加了 script 元素，只不过访问后，jquery 又删除了那个子元素，看上去像是没做什么。（这个可以把后台的 app.js 中 setTimeout 的时间调长点，看页面中 head 里是不是）