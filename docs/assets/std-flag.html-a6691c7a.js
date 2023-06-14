import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-9b617fb4.js";const t={},o=e(`<h1 id="go-flag-包详解" tabindex="-1"><a class="header-anchor" href="#go-flag-包详解" aria-hidden="true">#</a> Go flag 包详解</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>flag</code> 包是 Go 语言标准库中的一个包，用于解析命令行参数。它提供了一种方便的方式来定义和解析命令行参数，使得开发命令行工具和应用程序更加简单和灵活。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>flag</code> 包的主要功能包括：</p><ul><li>定义命令行参数的类型和默认值</li><li>解析命令行参数，并将其赋值给对应的变量</li><li>提供帮助信息和用法说明</li></ul></div><h3 id="简单例子" tabindex="-1"><a class="header-anchor" href="#简单例子" aria-hidden="true">#</a> 简单例子</h3><p>下面是一个示例，假设我们要编写一个简单的命令行工具，用于计算两个整数的和。我们可以使用 <code>flag</code> 包来定义并解析命令行参数。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义命令行参数</span>
	num1 <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;num1&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;第一个整数&quot;</span><span class="token punctuation">)</span>
	num2 <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;num2&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;第二个整数&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 解析命令行参数</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 计算和</span>
	sum <span class="token operator">:=</span> <span class="token operator">*</span>num1 <span class="token operator">+</span> <span class="token operator">*</span>num2

	<span class="token comment">// 输出结果</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;和:&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们首先使用 <code>flag.Int</code> 函数定义了两个命令行参数 <code>num1</code> 和 <code>num2</code>，分别表示两个整数。这些参数的默认值为 0，而第三个参数是用于帮助信息的描述。</p><p>接下来，我们调用 <code>flag.Parse()</code> 函数来解析命令行参数。它会在命令行中查找定义的参数，并将相应的值赋给对应的变量。</p><p>最后，我们将两个整数相加，并输出结果。</p><p>现在我们可以在命令行中运行该程序，并指定命令行参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-num1</span><span class="token operator">=</span><span class="token number">10</span> <span class="token parameter variable">-num2</span><span class="token operator">=</span><span class="token number">20</span>
和: <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例演示了如何使用 <code>flag</code> 包来定义和解析命令行参数，使得我们可以灵活地通过命令行来控制程序的行为。我们可以通过<code>flag</code>包进一步开发自己的命令行工具和应用程序。</p><p><code>flag</code> 包还支持以下几种常用的命令行参数类型：</p><ol><li><p>布尔类型（<code>bool</code>）：</p><ul><li>用法：<code>flag.Bool(name string, value bool, usage string) *bool</code></li><li>示例：<code>verbose := flag.Bool(&quot;verbose&quot;, false, &quot;显示详细信息&quot;)</code></li><li>描述：布尔类型的命令行参数用于表示某个选项是否开启或关闭。如果命令行中指定了该选项，则对应的布尔变量会被设置为 <code>true</code>，否则为 <code>false</code>。</li></ul></li><li><p>整数类型（<code>int</code>）：</p><ul><li>用法：<code>flag.Int(name string, value int, usage string) *int</code></li><li>示例：<code>count := flag.Int(&quot;count&quot;, 0, &quot;重试次数&quot;)</code></li><li>描述：整数类型的命令行参数用于表示整数值。通过命令行指定的整数值会被解析并赋值给对应的整数变量。</li></ul></li><li><p>字符串类型（<code>string</code>）：</p><ul><li>用法：<code>flag.String(name string, value string, usage string) *string</code></li><li>示例：<code>name := flag.String(&quot;name&quot;, &quot;&quot;, &quot;姓名&quot;)</code></li><li>描述：字符串类型的命令行参数用于表示文本字符串。命令行中指定的字符串值会被解析并赋值给对应的字符串变量。</li></ul></li><li><p>浮点数类型（<code>float64</code>）：</p><ul><li>用法：<code>flag.Float64(name string, value float64, usage string) *float64</code></li><li>示例：<code>price := flag.Float64(&quot;price&quot;, 0.0, &quot;价格&quot;)</code></li><li>描述：浮点数类型的命令行参数用于表示浮点数值。命令行中指定的浮点数值会被解析并赋值给对应的浮点数变量。</li></ul></li><li><p>其他类型：</p><ul><li><code>Int64</code>、<code>Uint</code>、<code>Uint64</code>：类似于整数类型，但是支持更大的整数范围。</li><li><code>Duration</code>：用于表示时间段的类型，可以解析包含时间单位的字符串，如 <code>&quot;10s&quot;</code>、<code>&quot;1h30m&quot;</code>。</li><li><code>IP</code>、<code>IPMask</code>：用于表示 IP 地址和 IP 子网掩码的类型。</li><li><code>Var</code>：用于自定义类型的命令行参数，需要实现 <code>flag.Value</code> 接口。</li></ul></li></ol><p>通过使用这些不同类型的命令行参数，可以满足各种不同类型数据的需求，并且 <code>flag</code> 包提供了简单易用的方法来解析和处理这些命令行参数。</p><p>以下是一个示例，展示了 <code>flag</code> 包中常用的命令行参数类型：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义命令行参数</span>
	verbose <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;显示详细信息&quot;</span><span class="token punctuation">)</span>
	count <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;重试次数&quot;</span><span class="token punctuation">)</span>
	name <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">)</span>
	price <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Float64</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;价格&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 解析命令行参数</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 输出解析后的命令行参数</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Verbose:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>verbose<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Count:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>count<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Name:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>name<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Price:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>price<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们定义了四个不同类型的命令行参数：</p><ul><li><code>verbose</code> 是一个布尔类型的参数，用于表示是否显示详细信息。</li><li><code>count</code> 是一个整数类型的参数，用于表示重试次数。</li><li><code>name</code> 是一个字符串类型的参数，用于表示姓名。</li><li><code>price</code> 是一个浮点数类型的参数，用于表示价格。</li></ul><p>通过使用 <code>flag.Bool</code>、<code>flag.Int</code>、<code>flag.String</code> 和 <code>flag.Float64</code> 函数，我们定义了这些不同类型的命令行参数，并为每个参数指定了名称、默认值和帮助信息。</p><p>接下来，我们调用 <code>flag.Parse()</code> 函数来解析命令行参数。然后，我们使用指针解引用的方式获取每个命令行参数的值，并将其打印出来。</p><p>现在我们可以在命令行中运行该程序，并指定不同的命令行参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-verbose</span> <span class="token parameter variable">-count</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">-name</span><span class="token operator">=</span>John <span class="token parameter variable">-price</span><span class="token operator">=</span><span class="token number">9.99</span>
Verbose: <span class="token boolean">true</span>
Count: <span class="token number">3</span>
Name: John
Price: <span class="token number">9.99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过修改命令行参数的值，你可以尝试不同类型的参数并观察输出结果。</p><h3 id="var形式" tabindex="-1"><a class="header-anchor" href="#var形式" aria-hidden="true">#</a> Var形式</h3><p><code>flag</code>不仅仅支持直接类型的形式解析，还支持直接解析覆盖值的形式来解析命令行数据，比如<code>BoolVar</code>。</p><p>示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义命令行参数</span>
	<span class="token keyword">var</span> verbose <span class="token builtin">bool</span>
	flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>verbose<span class="token punctuation">,</span> <span class="token string">&quot;verbose&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;显示详细信息&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> count <span class="token builtin">int</span>
	flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">,</span> <span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;重试次数&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 解析命令行参数</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 输出解析后的命令行参数</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Verbose:&quot;</span><span class="token punctuation">,</span> verbose<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Count:&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们使用 <code>BoolVar</code> 和 <code>IntVar</code> 函数创建了布尔类型和整数类型的命令行参数。</p><p><code>BoolVar</code> 函数用于创建一个布尔类型的命令行参数，并将解析后的值存储在对应的布尔变量中。它的参数包括一个布尔变量的指针，命令行参数的名称，命令行参数的默认值以及对该命令行参数的简短描述。</p><p><code>IntVar</code> 函数用于创建一个整数类型的命令行参数，并将解析后的值存储在对应的整数变量中。它的参数包括一个整数变量的指针，命令行参数的名称，命令行参数的默认值以及对该命令行参数的简短描述。</p><p>通过调用 <code>flag.Parse()</code> 函数，我们可以解析命令行参数并将其赋值给相应的变量。</p><p>下面是在命令行中运行该程序并指定不同的命令行参数的示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-verbose</span> <span class="token parameter variable">-count</span><span class="token operator">=</span><span class="token number">3</span>
Verbose: <span class="token boolean">true</span>
Count: <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过修改命令行参数的值，您可以尝试不同的布尔值和整数值，并观察输出结果。这将帮助您更好地理解和使用 <code>flag</code> 包中的 <code>BoolVar</code> 和 <code>IntVar</code> 函数。</p><h3 id="自定义类型解析" tabindex="-1"><a class="header-anchor" href="#自定义类型解析" aria-hidden="true">#</a> 自定义类型解析</h3><p>flag.TypeVar 是 flag 包中用于自定义类型的命令行参数的函数。通过实现 flag.Value 接口，我们可以创建自己的类型，并在命令行参数中使用。</p><p><code>flag.Value</code>接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Value interface {
	String() string
	Set(string) error
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是一个示例，展示了如何使用 flag.TypeVar 创建自定义类型的命令行参数：</p><p><code>flag.TypeVar</code> 是 <code>flag</code> 包中用于自定义类型的命令行参数的函数。通过实现 <code>flag.Value</code> 接口，我们可以创建自己的类型，并在命令行参数中使用。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// CustomType 是自定义的类型</span>
<span class="token keyword">type</span> CustomType <span class="token builtin">int</span>

<span class="token comment">// String 返回 CustomType 的字符串表示</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c CustomType<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Set 解析命令行参数并设置 CustomType 的值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CustomType<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">// 在这里可以进行自定义类型的解析和处理</span>
	<span class="token comment">// 这里简单地将命令行参数转换为整数并赋值给 CustomType</span>
	num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token operator">*</span>c <span class="token operator">=</span> <span class="token function">CustomType</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义命令行参数</span>
	<span class="token keyword">var</span> custom CustomType
	flag<span class="token punctuation">.</span><span class="token function">Var</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>custom<span class="token punctuation">,</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;自定义参数&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// 解析命令行参数</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 输出解析后的命令行参数</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Custom:&quot;</span><span class="token punctuation">,</span> custom<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个名为 <code>CustomType</code> 的自定义类型，并实现了 <code>flag.Value</code> 接口的两个方法：<code>String</code> 和 <code>Set</code>。</p><p><code>String</code> 方法用于返回自定义类型 <code>CustomType</code> 的字符串表示，这里我们将其转换为整数类型的字符串。</p><p><code>Set</code> 方法用于解析命令行参数并设置自定义类型 <code>CustomType</code> 的值。在这个示例中，我们将命令行参数转换为整数，并将其赋值给 <code>CustomType</code> 变量。</p><p>接下来，我们使用 <code>flag.Var</code> 函数注册自定义类型的命令行参数。通过传入一个实现了 <code>flag.Value</code> 接口的变量的指针，我们告诉 <code>flag</code> 包应该如何解析和处理该类型的命令行参数。</p><p>最后，我们调用 <code>flag.Parse()</code> 函数来解析命令行参数。在解析完成后，我们可以通过直接访问自定义类型的变量来获取解析后的值，并将其打印出来。</p><p>现在我们可以在命令行中运行该程序，并指定自定义类型的命令行参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-custom</span><span class="token operator">=</span><span class="token number">42</span>
Custom: <span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果你只是想获得命令行参数，就不需要<code>flag</code>包了，<code>os.Args</code>就可以解决：</p><p><code>os.Args</code> 是一个字符串切片，用于访问命令行参数。它存储了程序启动时传递给程序的所有命令行参数，包括程序名称本身。</p><p>以下是一个示例，展示了如何使用 <code>os.Args</code> 来获取和遍历命令行参数：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取命令行参数</span>
	args <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args

	<span class="token comment">// 遍历命令行参数</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;参数 %d: %s\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们使用 <code>os.Args</code> 获取了所有的命令行参数，并将它们存储在 <code>args</code> 变量中。</p><p>然后，我们使用 <code>range</code> 循环遍历 <code>args</code> 切片，获取每个命令行参数的索引和值。通过 <code>%d</code> 和 <code>%s</code> 占位符，我们将参数的索引和值打印出来。</p><p>现在我们可以在命令行中运行该程序，并指定不同的命令行参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go arg1 arg2 arg3
参数 <span class="token number">0</span>: main.go
参数 <span class="token number">1</span>: arg1
参数 <span class="token number">2</span>: arg2
参数 <span class="token number">3</span>: arg3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>main.go</code> 是程序的名称，<code>arg1</code>、<code>arg2</code> 和 <code>arg3</code> 是用户传递给程序的自定义命令行参数。通过遍历 <code>os.Args</code> 切片，我们可以获取和处理这些命令行参数。</p><p>使用 <code>os.Args</code> 可以访问和处理命令行参数，从而根据程序的需求来执行相应的逻辑操作。</p>`,60),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","std-flag.html.vue"]]);export{r as default};
