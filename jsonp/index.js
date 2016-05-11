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