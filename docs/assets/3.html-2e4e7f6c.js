const e=JSON.parse('{"key":"v-21aa2924","path":"/posts/golang/tool/grpc/3.html","title":"GRPC教程 3- 流式GRPC与错误处理","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-03-29T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang","grpc"]},"headers":[{"level":2,"title":"流式GRPC","slug":"流式grpc","link":"#流式grpc","children":[]},{"level":2,"title":"GRPC对比WebSocket","slug":"grpc对比websocket","link":"#grpc对比websocket","children":[]},{"level":2,"title":"GRPC的错误处理","slug":"grpc的错误处理","link":"#grpc的错误处理","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.04,"words":2112},"filePathRelative":"posts/golang/tool/grpc/3.md","localizedDate":"2023年3月29日","excerpt":"<h1> GRPC教程 3- 流式GRPC与错误处理</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<ul>\\n<li>解决vscode中，一个目录下多个mod文件的问题，怎么解决呢？\\n如何 在一个目录下正常的有多个.mod 文件</li>\\n</ul>\\n<p>使用 go work init 命令</p>\\n</div>\\n<p>本篇文章开始，我们将要开始学习流式GRPC与GRPC的错误处理</p>\\n<h2> 流式GRPC</h2>\\n<p>什么是流式GRPC呢？</p>\\n<p>和之前我们写的普通的RPC服务写入直接返回不同，流式GRPC允许我们在一个RPC请求中建立一个Stream(流)，客户端和服务器端都可以向这个流中写入数据，当客户端写入数据时，服务器端只需要不断监听这个流就可以不断获取客户端发送的消息，直到关闭。</p>"}');export{e as data};