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