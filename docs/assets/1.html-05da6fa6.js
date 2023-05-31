const n=JSON.parse('{"key":"v-1e4077e6","path":"/posts/golang/tool/grpc/1.html","title":"GRPC教程 1- Go语言原生RPC原理","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-03-27T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang","grpc"]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"posts/golang/tool/grpc/1.md","localizedDate":"2023年3月27日","excerpt":"<h1> GRPC教程 1- Go语言原生RPC原理</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>本篇文章介绍一下RPC的概念以及在Go语言如何使用标准库中的RPC.</p>\\n<p>RPC是全称叫Remote Procedure Call，远程过程调用，它允许像调用本地服务一样去调用远程服务，相对应的就是本地调用。</p>\\n</div>\\n<p>本地调用的例子:</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token string\\">\\"fmt\\"</span>\\n\\t<span class=\\"token string\\">\\"os\\"</span>\\n\\t<span class=\\"token string\\">\\"time\\"</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">type</span> Args <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tA <span class=\\"token builtin\\">int</span>\\n\\tB <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">Add</span><span class=\\"token punctuation\\">(</span>args <span class=\\"token operator\\">*</span>Args<span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> args<span class=\\"token punctuation\\">.</span>A <span class=\\"token operator\\">+</span> args<span class=\\"token punctuation\\">.</span>B \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>os<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Getpid</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">Add</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&amp;</span>Args<span class=\\"token punctuation\\">{</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\ttime<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sleep</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span> <span class=\\"token operator\\">*</span> time<span class=\\"token punctuation\\">.</span>Second<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};