import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-eed3bdb5.js";const p={},e=t(`<h1 id="grpc教程-1-go语言原生rpc原理" tabindex="-1"><a class="header-anchor" href="#grpc教程-1-go语言原生rpc原理" aria-hidden="true">#</a> GRPC教程 1- Go语言原生RPC原理</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>本篇文章介绍一下RPC的概念以及在Go语言如何使用标准库中的RPC.</p><p>RPC是全称叫Remote Procedure Call，远程过程调用，它允许像调用本地服务一样去调用远程服务，相对应的就是本地调用。</p></div><p>本地调用的例子:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	A <span class="token builtin">int</span>
	B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>args <span class="token operator">*</span>Args<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> args<span class="token punctuation">.</span>A <span class="token operator">+</span> args<span class="token punctuation">.</span>B 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Args<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到结果是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>107088
30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么与此相对应的RPC调用即，不是同一进程下的服务调用。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	A <span class="token builtin">int</span>
	B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ServiceA <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s ServiceA<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>a <span class="token operator">*</span>Args<span class="token punctuation">,</span> reply <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>reply <span class="token operator">=</span> a<span class="token punctuation">.</span>A <span class="token operator">+</span> a<span class="token punctuation">.</span>B
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ServiceB <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s ServiceB<span class="token punctuation">)</span> <span class="token function">Sub</span><span class="token punctuation">(</span>a <span class="token operator">*</span>Args<span class="token punctuation">,</span> reply <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>reply <span class="token operator">=</span> a<span class="token punctuation">.</span>A <span class="token operator">-</span> a<span class="token punctuation">.</span>B
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	serviceA <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>ServiceA<span class="token punctuation">)</span>
	serviceB <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>ServiceB<span class="token punctuation">)</span>
	rpc<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>serviceA<span class="token punctuation">)</span>
	rpc<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>serviceB<span class="token punctuation">)</span>
	rpc<span class="token punctuation">.</span><span class="token function">HandleHTTP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:7890&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;listen error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	http<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// client.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	A<span class="token punctuation">,</span> B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 建立HTTP连接</span>
	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> rpc<span class="token punctuation">.</span><span class="token function">DialHTTP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:7890&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;dialing:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> client<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 同步调用</span>
	args <span class="token operator">:=</span> <span class="token operator">&amp;</span>Args<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> reply <span class="token builtin">int</span>
	err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceA.Add&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token operator">&amp;</span>reply<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceA.Add error:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceA.Add: %d+%d=%d\\n&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>A<span class="token punctuation">,</span> args<span class="token punctuation">.</span>B<span class="token punctuation">,</span> reply<span class="token punctuation">)</span>

	<span class="token comment">// 异步调用</span>
	<span class="token keyword">var</span> reply2 <span class="token builtin">int</span>
	divCall <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Go</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceB.Sub&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token operator">&amp;</span>reply2<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	replyCall <span class="token operator">:=</span> <span class="token operator">&lt;-</span>divCall<span class="token punctuation">.</span>Done <span class="token comment">// 接收调用结果</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceB.Sub error:&quot;</span><span class="token punctuation">,</span> replyCall<span class="token punctuation">.</span>Error<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;ServiceB.Sub: %d+%d=%d\\n&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>A<span class="token punctuation">,</span> args<span class="token punctuation">.</span>B<span class="token punctuation">,</span> reply2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，client调用的是server下的服务，即不是同一个进程下的服务，这样的好处有很多，比如如果一个项目过大，那么维护起来会有很大的成本，可以将服务给分离成很多服务，来降低服务之间的耦合度，这也是我们常说的微服务。</p>`,10),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","1.html.vue"]]);export{k as default};
