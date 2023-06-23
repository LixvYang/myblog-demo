import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as s,b as n,d as i,f as a}from"./app-5bba858b.js";const l={},u=a(`<h1 id="grpc教程-3-流式grpc与错误处理" tabindex="-1"><a class="header-anchor" href="#grpc教程-3-流式grpc与错误处理" aria-hidden="true">#</a> GRPC教程 3- 流式GRPC与错误处理</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>解决vscode中，一个目录下多个mod文件的问题，怎么解决呢？ 如何 在一个目录下正常的有多个.mod 文件</li></ul><p>使用 go work init 命令</p></div><p>本篇文章开始，我们将要开始学习流式GRPC与GRPC的错误处理</p><h2 id="流式grpc" tabindex="-1"><a class="header-anchor" href="#流式grpc" aria-hidden="true">#</a> 流式GRPC</h2><p>什么是流式GRPC呢？</p><p>和之前我们写的普通的RPC服务写入直接返回不同，流式GRPC允许我们在一个RPC请求中建立一个Stream(流)，客户端和服务器端都可以向这个流中写入数据，当客户端写入数据时，服务器端只需要不断监听这个流就可以不断获取客户端发送的消息，直到关闭。</p><p>首先我们先说说HTTP/2,GRPC的底层就是HTTP/2协议，HTTP2支持服务器端主动向客户端去发送流数据。</p><p>举例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// proto文件，在Greetering服务中加一行</span>
  rpc StreamHello <span class="token punctuation">(</span>HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>stream HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后proto文件就变成了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// </span>
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
  rpc StreamHello <span class="token punctuation">(</span>HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>stream HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来用我们上一篇文章的方式，借助插件，自动生成go文件。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>protoc <span class="token operator">--</span>go_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span>go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token operator">--</span><span class="token keyword">go</span><span class="token operator">-</span>grpc_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span><span class="token keyword">go</span><span class="token operator">-</span>grpc_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative <span class="token operator">--</span>grpc<span class="token operator">-</span>gateway_out<span class="token operator">=</span><span class="token punctuation">.</span> <span class="token operator">--</span>grpc<span class="token operator">-</span>gateway_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们在server/server.go中实现StreamHello函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">StreamHello</span><span class="token punctuation">(</span>in <span class="token operator">*</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">,</span> stream proto<span class="token punctuation">.</span>Greetering_StreamHelloServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
		data <span class="token operator">:=</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloResp<span class="token punctuation">{</span>
			Msg<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;This is %d Msg&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在client/client.go中加入</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>stream<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">StreamHello</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Lixin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">GetMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行server.go代码，client.go代码就可以得到以下结果，我们的返回结果就是这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>os getpid:  330496
This is 10 Msg
This is 9 Msg
This is 8 Msg
This is 7 Msg
This is 6 Msg
This is 5 Msg
This is 4 Msg
This is 3 Msg
This is 2 Msg
This is 1 Msg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们来改一改代码，尝试去使用客户端的流式GRPC</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//proto文件</span>
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
  rpc StreamHello <span class="token punctuation">(</span>stream HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go的代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server.go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">StreamHello</span><span class="token punctuation">(</span>stream proto<span class="token punctuation">.</span>Greetering_StreamHelloServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
			stream<span class="token punctuation">.</span><span class="token function">SendAndClose</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloResp<span class="token punctuation">{</span>
				Msg<span class="token punctuation">:</span> <span class="token string">&quot;server end.&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Message end.&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>stream<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">StreamHello</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		data <span class="token operator">:=</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">{</span>
			Name<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;This is %d msg from client.&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		err <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	res<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">CloseAndRecv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;c failed: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;got reply: %v&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">GetMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双向流式GRPC</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>修改proto文件加入
rpc StreamHello <span class="token punctuation">(</span>stream HelloReq<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>stream HelloResp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server.go</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">StreamHello</span><span class="token punctuation">(</span>stream proto<span class="token punctuation">.</span>Greetering_StreamHelloServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	signalch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> os<span class="token punctuation">.</span>Signal<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	signal<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span>signalch<span class="token punctuation">,</span> os<span class="token punctuation">.</span>Interrupt<span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>SIGTERM<span class="token punctuation">)</span>
	msg <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>msg<span class="token punctuation">)</span>
			stream<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloResp<span class="token punctuation">{</span>
				Msg<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token comment">// 接收流式请求</span>
			in<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;client: &quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	signalType <span class="token operator">:=</span> <span class="token operator">&lt;-</span>signalch
	signal<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span>signalch<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Os Signal: &lt;%s&gt;&quot;</span><span class="token punctuation">,</span> signalType<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Exit....&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// client.go</span>

	msg <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>msg<span class="token punctuation">)</span>
			stream<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>HelloReq<span class="token punctuation">{</span>
				Name<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token comment">// 接收流式请求</span>
			in<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;server: &quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">GetMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	signalType <span class="token operator">:=</span> <span class="token operator">&lt;-</span>signalch
	signal<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span>signalch<span class="token punctuation">)</span>
	<span class="token comment">//cleanup before exit</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;On Signal &lt;%s&gt;&quot;</span><span class="token punctuation">,</span> signalType<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Exit command received. Exiting...&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grpc对比websocket" tabindex="-1"><a class="header-anchor" href="#grpc对比websocket" aria-hidden="true">#</a> GRPC对比WebSocket</h2><p>WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。</p><p>为什么传统的HTTP协议不能做到WebSocket实现的功能？这是因为HTTP协议是一个请求－响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。换句话说，浏览器不主动请求，服务器是没法主动发数据给浏览器的。</p><p>这样一来，要在浏览器中搞一个实时聊天，在线炒股（不鼓励），或者在线多人游戏的话就没法实现了，只能借助Flash这些插件。</p><p>也有人说，HTTP协议其实也能实现啊，比如用轮询或者Comet。轮询是指浏览器通过JavaScript启动一个定时器，然后以固定的间隔给服务器发请求，询问服务器有没有新消息。这个机制的缺点一是实时性不够，二是频繁的请求会给服务器带来极大的压力。</p><p>Comet本质上也是轮询，但是在没有消息的情况下，服务器先拖一段时间，等到有消息了再回复。这个机制暂时地解决了实时性问题，但是它带来了新的问题：以多线程模式运行的服务器会让大部分线程大部分时间都处于挂起状态，极大地浪费服务器资源。另外，一个HTTP连接在长时间没有数据传输的情况下，链路上的任何一个网关都可能关闭这个连接，而网关是我们不可控的，这就要求Comet连接必须定期发一些ping数据表示连接“正常工作”。</p><p>以上两种机制都治标不治本，所以，HTML5推出了WebSocket标准，让浏览器和服务器之间可以建立无限制的全双工通信，任何一方都可以主动发消息给对方。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gorilla/websocket&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// We&#39;ll need to define an Upgrader</span>
<span class="token comment">// this will require a Read and Write buffer size</span>
<span class="token keyword">var</span> upgrader <span class="token operator">=</span> websocket<span class="token punctuation">.</span>Upgrader<span class="token punctuation">{</span>
	ReadBufferSize<span class="token punctuation">:</span>  <span class="token number">1024</span><span class="token punctuation">,</span>
	WriteBufferSize<span class="token punctuation">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">wsEndpoint</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	upgrader<span class="token punctuation">.</span>CheckOrigin <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

	<span class="token comment">// upgrade this connection to a WebSocket</span>
	<span class="token comment">// connection</span>
	ws<span class="token punctuation">,</span> err <span class="token operator">:=</span> upgrader<span class="token punctuation">.</span><span class="token function">Upgrade</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// helpful log statement to show connections</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Client Connected&quot;</span><span class="token punctuation">)</span>

	<span class="token function">reader</span><span class="token punctuation">(</span>ws<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">homePage</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Home Page&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// define a reader which will listen for</span>
<span class="token comment">// new messages being sent to our WebSocket</span>
<span class="token comment">// endpoint</span>
<span class="token keyword">func</span> <span class="token function">reader</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>websocket<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// read in a message</span>
		messageType<span class="token punctuation">,</span> p<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">ReadMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// print out that message for clarity</span>
		reply <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;server reply: %s&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span>

		<span class="token keyword">if</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>messageType<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">setupRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> homePage<span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/ws&quot;</span><span class="token punctuation">,</span> wsEndpoint<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
	<span class="token function">setupRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流式 gRPC 和 WebSockets 都是用于实现客户端和服务器之间的双向通信，但它们有以下几个区别：</p><p>协议：gRPC 是基于 HTTP/2 协议的，而 WebSocket 是一种独立的协议。HTTP/2 是一个二进制协议，可提供更好的性能和安全性。</p><p>语言支持：gRPC 支持多种语言，包括 Java、Python、Go 等，而 WebSocket 主要支持 Web 技术栈，如 JavaScript。</p><p>应用场景：gRPC 通常用于在微服务架构中进行服务间通信，而 WebSocket 更多地用于实时通信应用程序，如在线游戏或聊天应用程序。</p><p>通信方式：在流式 gRPC 中，客户端和服务器之间的通信是通过流来完成的，客户端可以发送多个请求，服务器也可以发送多个响应。而在 WebSocket 中，客户端和服务器之间的通信是通过消息来完成的，消息可以是文本或二进制数据。</p><p>总之，gRPC 和 WebSocket 都有其各自的优势和适用场景。选择哪种技术应该根据应用程序的需求和设计来决定。</p><h2 id="grpc的错误处理" tabindex="-1"><a class="header-anchor" href="#grpc的错误处理" aria-hidden="true">#</a> GRPC的错误处理</h2><p>我们再来学一下GRPC的错误处理</p>`,45),r={href:"https://pkg.go.dev/google.golang.org/grpc/codes",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://pkg.go.dev/google.golang.org/grpc/codes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用codes时，需要配合status使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &quot;google.golang.org/grpc/status&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GRPC的方法，一般是返回err或者status类型的错误，然后调用GRPC的一方若<code>err!=nil</code>我们可以通过status.Convert方法读取对应的错误。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  s <span class="token operator">:=</span> status<span class="token punctuation">.</span><span class="token function">Convert</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>        <span class="token comment">// 将err转为status</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> s<span class="token punctuation">.</span><span class="token function">Details</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取details</span>
	<span class="token keyword">switch</span> info <span class="token operator">:=</span> d<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>errdetails<span class="token punctuation">.</span>QuotaFailure<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Quota failure: %s\\n&quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Unexpected type: %s\\n&quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//  代码中的例子</span>
<span class="token comment">// server.go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">StreamHello</span><span class="token punctuation">(</span>stream proto<span class="token punctuation">.</span>Greetering_StreamHelloServer<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	st <span class="token operator">:=</span> status<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>codes<span class="token punctuation">.</span>Aborted<span class="token punctuation">,</span> <span class="token string">&quot;error!!!!!!&quot;</span><span class="token punctuation">)</span>
	ds<span class="token punctuation">,</span> err <span class="token operator">:=</span> st<span class="token punctuation">.</span><span class="token function">WithDetails</span><span class="token punctuation">(</span>
		<span class="token operator">&amp;</span>errdetails<span class="token punctuation">.</span>BadRequest<span class="token punctuation">{</span>
			FieldViolations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>errdetails<span class="token punctuation">.</span>BadRequest_FieldViolation<span class="token punctuation">{</span>
				<span class="token punctuation">{</span>
					Description<span class="token punctuation">:</span> <span class="token string">&quot;Bad Request&quot;</span><span class="token punctuation">,</span>
					Field<span class="token punctuation">:</span> <span class="token string">&quot;bad&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> st<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ds<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// client.go</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// 接收流式请求</span>
		in<span class="token punctuation">,</span> err <span class="token operator">:=</span> stream<span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;braeak&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			s <span class="token operator">:=</span> status<span class="token punctuation">.</span><span class="token function">Convert</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>        <span class="token comment">// 将err转为status</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> s<span class="token punctuation">.</span><span class="token function">Details</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取details</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
				<span class="token keyword">switch</span> info <span class="token operator">:=</span> d<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token operator">*</span>errdetails<span class="token punctuation">.</span>BadRequest<span class="token punctuation">:</span>
					fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;BadRequest failure: %s\\n&quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;server: &quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">GetMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>在vscode下同一个目录下多个go.mod文件解决
服务端流式GRPC
客户端流式GRPC
双端流式GRPC
GRPC对比WebSocket
GRPC的错误处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function d(v,m){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("GRPC自己定义了一些常见的错误码，和我们可以在"),s("a",r,[n("codes"),i(t)]),n("找到。 需要使用时，需要引入codes包")]),k])}const f=p(l,[["render",d],["__file","3.html.vue"]]);export{f as default};
