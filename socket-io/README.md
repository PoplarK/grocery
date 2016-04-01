# Socket.IO
[![socket.io](http://cdn.socket.io/website/imgs/logo.svg)](http://socket.io/)

这篇不是为了写 Socket.IO（说不定以后会补上），主要是由于要用 Socket.IO 实际类似于聊天的功能，去查看网页版微信时，发现他并没有使用 Socket.IO，而使用了一种非常讨巧的方法。目测是这样实现的：

网页上一直向接口 https://webpush.weixin.qq.com/cgi-bin/mmwebwx-bin/synccheck 发送 GET 请求。

1. 若在一条请求期间，微信没有收到消息或任何推送，过约 40 秒，服务器会自动返回响应。然后网页重新向该接口发送请求（轮询）。
2. 若在一条请求期间，微信收到了消息，那么服务器会立即响应该 GET 请求。网页则会发一条 POST 请求到接口 https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsync 以获取消息。然后网页会继续向接口 https://webpush.weixin.qq.com/cgi-bin/mmwebwx-bin/synccheck 发送 GET 请求。

本想着使用 NodeJS 来实现，奈何没有找到延迟返回响应的方法。(setTimeout 会阻塞整个应用)