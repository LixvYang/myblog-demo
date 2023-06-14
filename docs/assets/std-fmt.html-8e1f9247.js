import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-9b617fb4.js";const p={},e=t(`<h1 id="go-fmt-包详解" tabindex="-1"><a class="header-anchor" href="#go-fmt-包详解" aria-hidden="true">#</a> Go fmt 包详解</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>相信很多人入坑Go语言都是从官网的<code>fmt.Println(&quot;Hello World&quot;)</code>入门的</p><p>这篇文章带你好好了解一下<code>fmt</code>包还可以做哪些事情。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。</p></div><h1 id="fmt-包概述" tabindex="-1"><a class="header-anchor" href="#fmt-包概述" aria-hidden="true">#</a> fmt 包概述</h1><p>fmt 包实现了类似于C语言的格式化<mark>输入输出</mark>函数。</p><h2 id="print-系列函数" tabindex="-1"><a class="header-anchor" href="#print-系列函数" aria-hidden="true">#</a> Print 系列函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func Print(a ...interface{}) (n int, err error)
func Printf(format string, a ...interface{}) (n int, err error)
func Println(a ...interface{}) (n int, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Print 系列函数会将内容输出到标准输出，Print 函数直接输出内容，Printf 支持格式化输出，Println 每次输出的内容都会加一个换行符。</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;789&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;456&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>123456789123
123
456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sprint-系列函数" tabindex="-1"><a class="header-anchor" href="#sprint-系列函数" aria-hidden="true">#</a> Sprint 系列函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func Sprint(a ...interface{}) string
func Sprintf(format string, a ...interface{}) string
func Sprintln(a ...interface{}) string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sprint 系列函数会将内容输出为字符串，区别在于 Sprint 直接输出内容，Sprintf 将后面的内容映射到对应的占位符，Sprintln 会在内容后面添加一个换行符。</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>s1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
s2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s,age:%d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lixin&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>
s3 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintln</span><span class="token punctuation">(</span><span class="token string">&quot;456&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>123 name:Lixin,age:21 456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fprint-系列函数" tabindex="-1"><a class="header-anchor" href="#fprint-系列函数" aria-hidden="true">#</a> Fprint 系列函数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Fprint</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fprintf</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fprintln</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fprint 系列函数会将内容输出到实现了 io.Writer 接口的变量，常见用法是向文件中写入内容，也可以向终端输出内容（很少见）。</p><p>例如，向标准输出写入内容：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;向标准输出写入内容&quot;</span><span class="token punctuation">)</span>
fileObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./output.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
name <span class="token operator">:=</span> <span class="token string">&quot;Lixin&quot;</span>
<span class="token comment">// 向打开的文件句柄中写入内容</span>
fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>fileObj<span class="token punctuation">,</span> <span class="token string">&quot;往文件中写入信息\\nname: %s\\nage: %d&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>向标准输出写入内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件 <code>output.txt</code> 的内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>往文件中写入信息
name: Lixin
age: 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><p>Errorf 类似于 Printf，但返回一个包含该字符串的错误。</p><p>通常我们</p><p>会返回这样的错误：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> err <span class="token builtin">error</span>
<span class="token comment">// ...</span>
<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scan-系列函数" tabindex="-1"><a class="header-anchor" href="#scan-系列函数" aria-hidden="true">#</a> Scan 系列函数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Scan</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Scanf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Scanln</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Scan 系列函数用于从标准输入中扫描文本，并根据 format 参数指定的格式将对应的值映射到 a... 的参数中。</p><p>Scan 函数根据空格来区分输入的值，Scanf 根据 format 来区分值，Scanln 根据回车来停止扫描。</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s, age: %d&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code>Lixin 21</code>，输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: Lixin, age: 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Scanf 的示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Scanf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s age:%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s, age: %d&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code>name:Lixin age:21</code>，输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: Lixin, age: 21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fscan-系列函数" tabindex="-1"><a class="header-anchor" href="#fscan-系列函数" aria-hidden="true">#</a> Fscan 系列函数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Fscan</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fscanln</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fscanf</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fscan 系列函数可以从标准输入中读取数据，例如文件或命令行中的输入。</p><p>如果想从文件中读取内容：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> s <span class="token builtin">string</span>
f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./output.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_RDWR<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>

reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Fscan</span><span class="token punctuation">(</span>reader<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;读取的字符串是：%s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文件 <code>output.txt</code> 的内容是 <code>file.Outputn ame: Lixinage: 21</code>，则输出为 <code>读取的字符串是：file.Outputn</code>，因为 Fscan 默认使用空格作为分隔符，无法识别空格后的内容。</p><p>如果想从标准输入中读取内容，可以使用以下代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> s <span class="token builtin">string</span>
reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Fscan</span><span class="token punctuation">(</span>reader<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;你的输入内容是：%s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code>Hello, Lixin</code>，输出 <code>你的输入内容是：Hello</code>，同样因为该函数无法识别空格。</p><p>Fscanln 函数是根据换行符来停止扫描的，Fscanf 类似于 Scanf，用于映射对应的换行符，这两个函数用法类似。</p><p>另外，这里提一下 bufio 包中的 ReadString 函数，用于从指定的 io.Reader 中读取一行字符串，直到遇到指定的分隔符为止。函数签名如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Reader<span class="token punctuation">)</span> <span class="token function">ReadString</span><span class="token punctuation">(</span>delim <span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，如果想读取文件 <code>output.txt</code> 的第一行，并以空格作为分隔符，可以这样写：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./output.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
line<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;读取的字符串是：%s&quot;</span><span class="token punctuation">,</span> line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文件 <code>output.txt</code> 的内容是 <code>file.Outputn ame: Lixinage: 21</code>，则输出为 <code>读取的字符串是：file.Outputn</code>，因为 ReadString 在遇到空格时停止读取。</p><h2 id="sscan-系列函数" tabindex="-1"><a class="header-anchor" href="#sscan-系列函数" aria-hidden="true">#</a> Sscan 系列函数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Sscan</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Sscanln</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Sscanf</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sscan 是用于从字符串中读取数据并格式化到指定变量中的函数。</p><p>例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>str <span class="token operator">:=</span> <span class="token string">&quot;1 2 3&quot;</span>
<span class="token keyword">var</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span>
n<span class="token punctuation">,</span> err <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sscan</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;读取了 %d 个数，分别是：%d,%d,%d&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该函数，输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>读取了 3 个数，分别是：1,2,3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Go 语言的 <code>fmt</code> 包中，有一些常见的占位符可以用于格式化输出。以下是一些常用的占位符及其使用方式：</p><ul><li><code>%v</code>：通用的占位符，可以用于格式化任意类型的值。它会根据值的类型自动选择适当的格式。</li><li><code>%d</code>：用于格式化整数类型（包括有符号整数和无符号整数）。</li><li><code>%f</code>：用于格式化浮点数类型。</li><li><code>%s</code>：用于格式化字符串类型。</li><li><code>%t</code>：用于格式化布尔类型。</li><li><code>%c</code>：用于格式化字符类型。</li><li><code>%p</code>：用于格式化指针类型。</li></ul><p>以下是一些示例说明如何使用这些占位符：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>name <span class="token operator">:=</span> <span class="token string">&quot;Lixin&quot;</span>
age <span class="token operator">:=</span> <span class="token number">21</span>
pi <span class="token operator">:=</span> <span class="token number">3.14159</span>
isStudent <span class="token operator">:=</span> <span class="token boolean">true</span>

fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Age: %d\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>  <span class="token comment">// 输出：Name: Lixin, Age: 21</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Pi: %.2f\\n&quot;</span><span class="token punctuation">,</span> pi<span class="token punctuation">)</span>                  <span class="token comment">// 输出：Pi: 3.14</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Is student: %t\\n&quot;</span><span class="token punctuation">,</span> isStudent<span class="token punctuation">)</span>     <span class="token comment">// 输出：Is student: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在格式化字符串中，占位符用百分号 <code>%</code> 后跟一个字母表示。在 <code>%d</code> 和 <code>%f</code> 等占位符后可以加上一些附加参数来控制格式化的方式。例如，<code>%f</code> 占位符可以使用 <code>.2</code> 来限制浮点数只保留两位小数。</p><p>除了 <code>Printf</code> 函数，还有其他的函数如 <code>Sprintf</code> 和 <code>Fprintf</code> 也可以使用这些占位符。<code>Sprintf</code> 函数将格式化的结果作为字符串返回，而 <code>Fprintf</code> 函数将格式化的结果写入一个指定的 <code>io.Writer</code>。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>result <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Age: %d&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment">// 输出：Name: Lixin, Age: 21</span>

file<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;Name: %s, Age: %d&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这些是 <code>fmt</code> 包中常见的函数和使用方式。具体可以去看官网页面，里面写的很详细</p>`,76),o=[e];function c(i,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","std-fmt.html.vue"]]);export{d as default};
