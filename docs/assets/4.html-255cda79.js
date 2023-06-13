import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,a as n,b as o,e as p,f as s}from"./app-85378582.js";const c={},u=s(`<h1 id="grpc教程-4-grpc-gateway教程与transcoding" tabindex="-1"><a class="header-anchor" href="#grpc教程-4-grpc-gateway教程与transcoding" aria-hidden="true">#</a> GRPC教程 4 - GRPC-Gateway教程与Transcoding</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>GRPC-Gateway是protoc的一个插件，类似protoc-gen-go和protoc-gen-go-grpc插件，前者是生成.pb.go后者是生成.grpc.pb.go文件。</p></div><p>那么这两个插件是帮助proto文件生成go语言的插件，那么GRPC-Gateway呢，它是一个可以根据proto文件的定义生成一个反向代理器的，服务器可以将 RESTful JSON API 转换为 GRPC。</p><p>这里你会有三个疑惑？什么是反向代理器？为什么要根据proto文件生成反向代理器？为什么要将RESTful JSON API转换成GRPC？</p><p>其实这一个图就可以解释</p><figure><img src="https://ts1.cn.mm.bing.net/th/id/R-C.37541e0178c028842f13f773275f5cb3?rik=rZAPx2ssc92Fpg&amp;pid=ImgRaw&amp;r=0" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例" aria-hidden="true">#</a> 基本示例</h2><p>我们继续使用我们一开始的hello.proto文件来做示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── client
│   ├── go.mod
│   ├── main.go
│   └── pb
│       ├── hello_grpc.pb.go
│       ├── hello.pb.go
│       └── hello.proto
├── go.work
└── server
    ├── go.mod
    ├── go.sum
    ├── main.go
    └── pb
        ├── hello_grpc.pb.go
        ├── hello.pb.go
        └── hello.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次我们发现我们每次调用server进程下的服务，每次都需要重新定义一个客户端再去调用，那能不能说，就是像gin这种框架一样，使用简单的JSON body请求就可以请求GRPC呢，这就是grpc gateway的作用了，我们来演示一下怎么来用grpc-gateway。</p><p>首先添加 gRPC-Gateway 注释，这些注释定义了我们GRPC服务如何映射为JSON的请求和响应。使用protobuf的时候，GRPC service必须用google.api.HTTP来定义。</p><p>这里我用POST /v1/hello 来 映射到 Hello 的GRPC服务。</p><p>修改后的service Greeter是这样</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;google/api/annotations.proto&quot;</span><span class="token punctuation">;</span>

service Greetering <span class="token punctuation">{</span>
  rpc Hello <span class="token punctuation">(</span>HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>HelloResp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    option <span class="token punctuation">(</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>http<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      post<span class="token punctuation">:</span> <span class="token string">&quot;/api/v1/hello&quot;</span>
      body<span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里 google/api/annotations.proto 却是在go/include/下，也就是我们下载proto时，解压下来的文件夹。和include 同一目录。所以我们需要去跟github上去下载。</p>`,15),d={href:"https://github.com/googleapis/googleapis/tree/master/google/api",target:"_blank",rel:"noopener noreferrer"},r=s(`<p>随后需要重新加上grpc-gateway插件器创建对应的pb.gw.go文件。</p><p>在这里你需要下载grpc-gateway</p><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc --go_out=. --go_opt=paths=source_relative \\
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \\
  --grpc-gateway_out=. --grpc-gateway_opt=paths=source_relative \\
  pb/hello.proto 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们开始编写main.go，我们加入gateway的方式就是新起一个goroutine 去开启gateway代理</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">DialContext</span><span class="token punctuation">(</span>
			context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">&quot;0.0.0.0:7890&quot;</span><span class="token punctuation">,</span>
			grpc<span class="token punctuation">.</span><span class="token function">WithBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>insecure<span class="token punctuation">.</span><span class="token function">NewCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to dial server:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		gwmux <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">NewServeMux</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		err <span class="token operator">=</span> pb<span class="token punctuation">.</span><span class="token function">RegisterGreeteringHandler</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> gwmux<span class="token punctuation">,</span> conn<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to register gateway:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		gwServer <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
			Addr<span class="token punctuation">:</span>    <span class="token string">&quot;:8090&quot;</span><span class="token punctuation">,</span>
			Handler<span class="token punctuation">:</span> gwmux<span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 8090端口提供gRPC-Gateway服务</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Serving gRPC-Gateway on http://0.0.0.0:8090&quot;</span><span class="token punctuation">)</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>gwServer<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们用curl脚本命令，或者电脑上可以下载下postman去测试一下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -X POST http://127.0.0.1:8090/api/v1/hello &#39;{&quot;name&quot;: &quot;Lixin&quot;}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="transcoding" tabindex="-1"><a class="header-anchor" href="#transcoding" aria-hidden="true">#</a> Transcoding</h2><p>下面接着来讲一下更多的匹配规则，在上个例子中，我们并没有讲解更多的路径匹配，比如<code>/api/:name</code>或者传递query参数，我们来讲解一下这样的方式</p><p>首先我们先修改一下对应之前的pb/hello.proto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>message HelloReq {
  string name = 1;
  int64 age = 2;
  string msg = 3;
}

message HelloResp {
  string msg = 1;
}

service Greetering {
  rpc Hello (HelloReq) returns (HelloResp) {
    option (google.api.http) = {
      get: &quot;/api/v1/hello/{name}&quot;
    };
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来方便我们进行查看如何去使用http transcoding 规则查询。</p><p>我们再次进行编码 <code>protoc ...</code>, 运行服务</p><p>接着启动服务，用curl去测试一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --location &#39;http://127.0.0.1:8090/api/v1/hello/lixin&#39;

{&quot;msg&quot;:&quot;0 / lixin /  Hello&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到获取到了对应的name字段，那如果我们传入query参数呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --location &#39;http://127.0.0.1:8090/api/v1/hello/lixin?age=12&#39;

{&quot;msg&quot;:&quot;12 / lixin /  Hello&quot;}

curl --location &#39;http://127.0.0.1:8090/api/v1/hello/lixin?age=12&amp;msg=message&#39;
{&quot;msg&quot;:&quot;12 / lixin / message Hello&quot;} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们这样就可以给http 路由传递 query参数去访问对应的grpc服务。</p><p>那还有没有别的用法？,我们继续修改proto文件 <code>get: &quot;/api/v1/hello/{name=names/*}&quot;</code>, 接着我们传递</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --location &#39;http://127.0.0.1:8090/api/v1/hello/names/lixin?age=12&amp;msg=message&#39;

{&quot;msg&quot;: &quot;12 / names/lixin / message Hello&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们修改了对应的:name为{names/*}，这样我们就让<code>names/lixin</code>顺利传递给了name参数。</p><p>接下来，我们看看body的用法，我们一般不会用get方法去传递body，所以下面我们接着再来修改一下proto文件，让对应的http 方法称为post，然后加上body参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service Greetering {
  rpc Hello (HelloReq) returns (HelloResp) {
    option (google.api.http) = {
      post: &quot;/api/v1/hello/{name}&quot;
      body: &quot;msg&quot;
    };
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来观察一下这个option里面的东西，post路径为<code>/api/v1/hello/{name}</code>, 这意味着，我们可以给path传递name，然后给body传递msg参数，那剩下的age呢？我们可以用query路径传递进去，就是这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>message HelloReq {
  string name = 1;   // path 
  int64 age = 2; // query  
  string msg = 3; // body
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --location &#39;http://127.0.0.1:8090/api/v1/hello/lixin?age=12&#39; \\
--header &#39;Content-Type: text/plain&#39; \\
--data &#39;&quot;eeeesae&quot;&#39;

{ &quot;msg&quot;: &quot;12 / lixin / eeeesae Hello&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们传递的data，就是对应到msg参数里面的。</p><p>下面我们再修改一下proto文件, 将body修改为*</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service Greetering {
  rpc Hello (HelloReq) returns (HelloResp) {
    option (google.api.http) = {
      post: &quot;/api/v1/hello/{name}&quot;
      body: &quot;*&quot;
    };
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新生成gw.go <code>protoc ...</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --location &#39;http://127.0.0.1:8090/api/v1/hello/lixin?age=12&#39; \\
--header &#39;Content-Type: application/json&#39; \\
--data &#39;{
    &quot;name&quot;: &quot;Lixinsss&quot;,
    &quot;age&quot;: 21,
    &quot;msg&quot;: &quot;This is a message.&quot;
}&#39;

可以看到，虽然body是*, 但是body里面只有传递age和msg有效，当body是*时，query参数就没有效果了。
{&quot;msg&quot;: &quot;21 / lixin / This is a message. Hello&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p><p>我们本篇文章，主要是介绍了GRPC-Gateway,下载gatwway插件，学习使用gateway,并且学习了传递HTTP的多种方式</p>`,34);function v(g,m){const a=t("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[n("a",d,[o("https://github.com/googleapis/googleapis/tree/master/google/api"),p(a)])]),r])}const h=e(c,[["render",v],["__file","4.html.vue"]]);export{h as default};
