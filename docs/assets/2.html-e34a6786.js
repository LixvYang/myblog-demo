import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,a as n,b as s,e,f as t}from"./app-85378582.js";const l={},u=t(`<h1 id="grpc教程-2-grpc下载以及入门grpc" tabindex="-1"><a class="header-anchor" href="#grpc教程-2-grpc下载以及入门grpc" aria-hidden="true">#</a> GRPC教程 2- gRPC下载以及入门gRPC</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>本篇文章我们开始学习gRPC，我们之前学到了RPC(远程过程调用)，那么gRPC是什么呢？gRPC是Google开源的现代高性能RPC框架，能够运行在任何环境中，使用HTTP2作为传输协议。</p><p>gRPC与RPC一样，可以像调用本地方法一样去调用另一个进程上的服务，这可以帮助你很轻松的创建微服务程序。gRPC只是定义类型和远程服务带有的参数和返回类型，我们需要在gRPC服务端程序中定义服务的逻辑，在客户端调用和服务器端相同的方法。</p></div><h2 id="安装grpc" tabindex="-1"><a class="header-anchor" href="#安装grpc" aria-hidden="true">#</a> 安装gRPC</h2><ol><li>安装Protocol Buffers</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://github.com/google/protobuf/releases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc-22.2-linux-x86_64.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>解压缩文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip protoc-22.2-linux-x86_64.zip -d protoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 protoc下的 bin目录下的 <code>protoc</code>文件加入到<code>$GOPATH/bin</code>目录下， 然后将include目录 放到<code>$GOPATH</code> 目录下，以便于我们编写proto文件时，可以找到对应的文件。</p>`,10),r={start:"3"},d={href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"},v={href:"https://grpc.io/docs/languages/go/quickstart/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>开始下载go的插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28 // 生成 .pb.go文件
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2 // 生成 _grpc.pb.go 文件
$ export PATH=&quot;$PATH:$(go env GOPATH)/bin&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go语言下的protobuf 环境就下载好了</p><ol start="4"><li>开始编写代码</li></ol><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>// protobuf编程的几个步骤
1. 编写.proto文件
2. 使用.proto文件生成对应语言的文件
3. 编写业务逻辑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先随便选个目录 创建两个文件夹，client和server,这两个文件夹将成为我们调用gRPC的客户端和服务端。</p><p>我们在client和server两个文件夹中分别mod init一下，并且创建对应的调用函数文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// /server</span>
<span class="token keyword">go</span> mod <span class="token builtin">int</span> server

<span class="token comment">// /client</span>
<span class="token keyword">go</span> mod <span class="token builtin">int</span> client

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在这两个目录下都创建一个proto文件夹。 首先然后在server/proto文件夹下创建一个hello.proto,在client/proto文件夹下创建一个hello.proto文件。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server/proto/hello.proto</span>
syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

option go_package <span class="token operator">=</span> <span class="token string">&quot;server/proto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> proto<span class="token punctuation">;</span>

<span class="token comment">// Hello Request</span>
message HelloReq <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Hello Response</span>
message HelloResp <span class="token punctuation">{</span>
  <span class="token builtin">string</span> msg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

service Greetering <span class="token punctuation">{</span>
  rpc Hello <span class="token punctuation">(</span>HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// client/proto/hello.proto</span>
syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

option go_package <span class="token operator">=</span> <span class="token string">&quot;client/proto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> proto<span class="token punctuation">;</span>

<span class="token comment">// Hello Request</span>
message HelloReq <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Hello Response</span>
message HelloResp <span class="token punctuation">{</span>
  <span class="token builtin">string</span> msg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

service Greetering <span class="token punctuation">{</span>
  rpc Hello <span class="token punctuation">(</span>HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，你需要对这两个.proto 通过我们刚刚下载的的protoc工具和插件去生成相应的go代码。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>protoc <span class="token operator">--</span>go_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span>go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token operator">--</span><span class="token keyword">go</span><span class="token operator">-</span>grpc_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span><span class="token keyword">go</span><span class="token operator">-</span>grpc_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token operator">--</span>grpc<span class="token operator">-</span>gateway_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span>grpc<span class="token operator">-</span>gateway_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative server<span class="token operator">/</span>proto<span class="token operator">/</span>hello<span class="token punctuation">.</span>proto client<span class="token operator">/</span>proto<span class="token punctuation">.</span>hello<span class="token punctuation">.</span>proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后分别在两个目录下执行<code>go mod tidy</code>，然后目录的结构就如下所示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── client
│   ├── client.go
│   ├── go.mod
│   ├── go.sum
│   └── proto
│       ├── hello_grpc.pb.go
│       ├── hello.pb.go
│       └── hello.proto
└── server
    ├── go.mod
    ├── go.sum
    ├── proto
    │   ├── hello_grpc.pb.go
    │   ├── hello.pb.go
    │   └── hello.proto
    └── server.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随后，我们开始写对应的逻辑</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server/server.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;server/proto&quot;</span>

	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	proto<span class="token punctuation">.</span>UnimplementedGreeteringServer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req <span class="token operator">*</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>proto<span class="token punctuation">.</span>HelloResp<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	msg <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, %s&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloResp<span class="token punctuation">{</span>
		Msg<span class="token punctuation">:</span> msg<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os getpid: &quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:7890&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> l<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	s <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	proto<span class="token punctuation">.</span><span class="token function">RegisterGreeteringServer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	err <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// client/client.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;client/proto&quot;</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc/credentials/insecure&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os getpid: &quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">Getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:7890&quot;</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>insecure<span class="token punctuation">.</span><span class="token function">NewCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	client <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">NewGreeteringClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Cheng Long&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span><span class="token function">GetMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在<code>server</code>文件夹下执行<code>go run server.go</code>在<code>client</code>文件夹下执行<code>go run client.go</code>就可以输出</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>Hello<span class="token punctuation">,</span>Cheng Long
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们就成功执行了gRPC代码。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>下载安装压缩gRPC的环境
开始编写gRPC的相关代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function m(g,b){const a=p("ExternalLinkIcon");return i(),c("div",null,[u,n("ol",r,[n("li",null,[s("下载protobuf go语言的插件 进入 "),n("a",d,[s("https://grpc.io"),e(a)]),s(" , 点击 go 进入"),n("a",v,[s("https://grpc.io/docs/languages/go/quickstart/"),e(a)])])]),k])}const q=o(l,[["render",m],["__file","2.html.vue"]]);export{q as default};
