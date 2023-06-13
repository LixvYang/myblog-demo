import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as s,b as n,e as c,f as i}from"./app-85378582.js";const l={},u=i(`<h1 id="go-reflect-反射包详解" tabindex="-1"><a class="header-anchor" href="#go-reflect-反射包详解" aria-hidden="true">#</a> Go reflect 反射包详解</h1><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。</p><p>你现在知道定义了，接下来就需要适应这个新名词出现在自己的世界里，然后尽快适应它。</p><p>如何尽快适应呢？就是通过大量练习，尽可能让自己在实践中使用到。</p><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>ps: 本文最后的反射示例是我们公司内部使用框架的一个小demo，可以通过方法名自动注册HTTP方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="反射怎么用" tabindex="-1"><a class="header-anchor" href="#反射怎么用" aria-hidden="true">#</a> 反射怎么用</h2><p>在Go语言中每个字段都有：</p><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>1. 类型
2. 值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>A <span class="token operator">:=</span> <span class="token number">10</span> <span class="token comment">// a 的类型就是int，值就是10，这是go语言的语法糖帮助我们简单创建的类型</span>
<span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">// 实际上应该是这样创建, 在声明值的时候标注类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Reflect的两个主要类型是<code>reflect.Type</code>和<code>reflect.Value </code>，可以让我们获取任意对象的Type和Value。</p><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h2><p>当我们想要获取一个变量的类型信息时，可以使用reflect.TypeOf函数来实现。下面是一个使用reflect.TypeOf的示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">42</span>
	<span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, Reflect!&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 输出: int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 输出: string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上reflect不仅仅只有Type还有一个Kind。Kind你可以理解为字段的底层类型。比如下面这个例子</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token keyword">var</span> a myFloat64 <span class="token comment">// 自定义类型</span>
	<span class="token keyword">var</span> b <span class="token operator">*</span><span class="token builtin">float64</span>  <span class="token comment">// 指针</span>

	<span class="token function">reflectType</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 输出：TypeOf: main.myFloat64, 类型：myFloat64，种类：float64</span>
	<span class="token function">reflectType</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 输出：TypeOf: TypeOf: *float64, 类型：，种类：ptr</span>

	<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Name <span class="token builtin">string</span>
		Age  <span class="token builtin">int</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> p <span class="token operator">=</span> Person<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;Lixin&quot;</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>  <span class="token number">21</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">reflectType</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// TypeOf: TypeOf: main.Person, 类型：Person，种类：struct</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以注意到，像<mark>slice，map，指针等变量的<code>.Name</code>返回都是空</mark>，它们在Go语言中都被视为类型的底层实现或衍生类型，而不是具体的命名类型。</p><p>为什么要这样做呢呢？</p><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>对于数组和切片类型，它们的名称在Go语言中是以表达式形式表示的，例如[5]int表示长度为5的整型数组，[]string表示字符串切片。由于这些类型是通过表达式定义的，而不是具体的命名类型，所以它们的.Name()方法返回空。

对于map类型，它的名称是map，而不包含具体的键类型和值类型信息。因为映射类型在Go语言中是一种内置类型，并且可以使用不同的键类型和值类型进行实例化，所以它的.Name()方法返回空。

对于指针类型，它的名称是加上指针指向的类型的名称。例如，对于int类型的指针变量，它的名称是*int。然而，由于指针类型本身没有具体的命名，只是指向其他类型的引用，所以它的.Name()方法返回空。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样设计的目的是为了遵循Go语言的类型系统和语法约定。</p><p>类型里不仅仅有Type，通过反射，我们可以进一步使用.Kind()方法获取这些类型的种类信息，以便进一步判断和处理。 比如下面的示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Score <span class="token builtin">int</span>    <span class="token string">\`json:&quot;score&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	stu1 <span class="token operator">:=</span> student<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  <span class="token string">&quot;Lixin&quot;</span><span class="token punctuation">,</span>
		Score<span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// student struct</span>

	<span class="token keyword">switch</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Struct<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Type is a struct&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			field <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s index:%d type:%v json tag:%v\\n&quot;</span><span class="token punctuation">,</span> field<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> field<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> field<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> field<span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Int<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Type is an int&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// Handle int type accordingly</span>
	<span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Bool<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Type is a bool&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// Handle bool type accordingly</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Unknown type&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>student <span class="token keyword">struct</span>
Type is a <span class="token keyword">struct</span>
name<span class="token punctuation">:</span>Name index<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">type</span><span class="token punctuation">:</span><span class="token builtin">string</span> json tag<span class="token punctuation">:</span>name
name<span class="token punctuation">:</span>Score index<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">type</span><span class="token punctuation">:</span><span class="token builtin">int</span> json tag<span class="token punctuation">:</span>score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，你可以可以进一步在reflect包中得知go的真正的Kind的定义</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// go reflect标准库源码</span>
<span class="token comment">// A Kind represents the specific kind of type that a Type represents.</span>
<span class="token comment">// The zero Kind is not a valid kind.</span>
<span class="token keyword">type</span> Kind <span class="token builtin">uint</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Invalid Kind <span class="token operator">=</span> <span class="token boolean">iota</span>
	Bool
	Int
	Int8
	Int16
	Int32
	Int64
	Uint
	Uint8
	Uint16
	Uint32
	Uint64
	Uintptr
	Float32
	Float64
	Complex64
	Complex128
	Array
	Chan
	Func
	Interface
	Map
	Pointer
	Slice
	String
	Struct
	UnsafePointer
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> Value</h2><p>Reflect的Value类型就是Go中每个字段的值信息，我们可以通过<code>ValueOf()</code>来获得原始值信息。</p><p>以下是其中一些常用的方法：</p><ul><li>Interface()：返回一个interface{}类型的值，表示reflect.Value持有的原始值。可以通过类型断言将其转换为具体类型。</li><li>Bool()：返回bool类型的原始值。</li><li>Int()：返回int类型的原始值。</li><li>Float()：返回float64类型的原始值。</li><li>String()：返回string类型的原始值。</li><li>Type()：返回reflect.Type类型，表示reflect.Value持有的值的类型。</li></ul><p>下面这个例子，你就应该明白怎么用了：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用 reflect.ValueOf 获取 reflect.Value</span>
	v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>

	<span class="token comment">// 获取原始值</span>
	value <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 42</span>

	<span class="token comment">// 使用类型断言将原始值转换为具体类型</span>
	<span class="token keyword">if</span> i<span class="token punctuation">,</span> ok <span class="token operator">:=</span> value<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 输出: 84</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 使用其他方法获取原始值</span>
	b <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 输出: true</span>

	f <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Float</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 输出: 3.14</span>

	s <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// 输出: hello</span>

	t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token comment">// 输出: int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过反射来更改变量的底层值" tabindex="-1"><a class="header-anchor" href="#通过反射来更改变量的底层值" aria-hidden="true">#</a> 通过反射来更改变量的底层值</h3><p>你还可以通过反射来修改其底层的值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">}</span>

	<span class="token comment">// 使用反射获取变量的指针值</span>
	<span class="token comment">// 这里必须是指针，因为我们是通过底层指针去更改值的</span>
	v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span>

	<span class="token comment">// 检查是否是指针类型并且可寻址</span>
	<span class="token keyword">if</span> v<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>Ptr <span class="token operator">&amp;&amp;</span> v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CanSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取指针指向的值</span>
		elem <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token comment">// 获取字段的值并修改</span>
		nameField <span class="token operator">:=</span> elem<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> nameField<span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nameField<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>String <span class="token punctuation">{</span>
			nameField<span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		ageField <span class="token operator">:=</span> elem<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Age&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> ageField<span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> ageField<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>Int <span class="token punctuation">{</span>
			ageField<span class="token punctuation">.</span><span class="token function">SetInt</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// 输出: {Name:Bob Age:30}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isvaild" tabindex="-1"><a class="header-anchor" href="#isvaild" aria-hidden="true">#</a> isVaild</h3><p>你可能注意到了我们上个例子中有个没有提到的方法<code>IsValid()</code></p><p><code>func (v Value) IsValid() bool</code>返回v是否持有一个值。如果v是Value零值会返回假，此时v除了IsValid、String、Kind之外的方法都会导致panic。</p><p><code>func (v Value) IsNil() bool</code> IsNil()报告v持有的值是否为nil。v持有的值的分类必须是通道、函数、接口、映射、指针、切片之一；否则IsNil函数会导致panic。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// *int类型空指针</span>
	<span class="token keyword">var</span> a <span class="token operator">*</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;var a *int IsNil:&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsNil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//var a *int IsNil: true</span>
	<span class="token comment">// nil值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;nil IsValid:&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// nil IsValid: false</span>
	<span class="token comment">// 实例化一个匿名结构体</span>
	b <span class="token operator">:=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 尝试从结构体中查找&quot;abc&quot;字段</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不存在的结构体成员:&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 不存在的结构体成员: false</span>
	<span class="token comment">// 尝试从结构体中查找&quot;abc&quot;方法</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不存在的结构体方法:&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 不存在的结构体方法: false</span>
	<span class="token comment">// map</span>
	c <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 尝试从map中查找一个不存在的键</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;map中不存在的键：&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MapIndex</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token string">&quot;娜扎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// map中不存在的键： false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体反射" tabindex="-1"><a class="header-anchor" href="#结构体反射" aria-hidden="true">#</a> 结构体反射</h2><p>当我们从reflect获得类型信息后，如果类型是结构体的话，那我们可以将通过NumField()和Field()方法获得结构体成员的详细信息，甚至通过类型的实例来获得类型的方法。</p><p>比如下面这个例子：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name   <span class="token builtin">string</span>
	Age    <span class="token builtin">int</span>
	Height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, my name is&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>   <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>    <span class="token number">30</span><span class="token punctuation">,</span>
		Height<span class="token punctuation">:</span> <span class="token number">1.75</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取结构体字段信息</span>
	t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Struct fields:&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		field <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Type: %s\\n&quot;</span><span class="token punctuation">,</span> field<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> field<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 根据字段名获取结构体字段信息</span>
	field<span class="token punctuation">,</span> ok <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Age&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\nField by name:&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Type: %s\\n&quot;</span><span class="token punctuation">,</span> field<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> field<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取结构体方法信息</span>
	v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\nMethods:&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		method <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Type: %s\\n&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> method<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 根据方法名获取结构体方法信息</span>
	method<span class="token punctuation">,</span> ok <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;SayHello&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\nMethod by name:&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s, Type: %s\\n&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> method<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 输出</span>
Struct fields<span class="token punctuation">:</span>
Name<span class="token punctuation">:</span> Name<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token builtin">string</span>
Name<span class="token punctuation">:</span> Age<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token builtin">int</span>
Name<span class="token punctuation">:</span> Height<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token builtin">float64</span>

Field by name<span class="token punctuation">:</span>
Name<span class="token punctuation">:</span> Age<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token builtin">int</span>

Methods<span class="token punctuation">:</span>
Name<span class="token punctuation">:</span> SayHello<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>main<span class="token punctuation">.</span>Person<span class="token punctuation">)</span>

Method by name<span class="token punctuation">:</span>
Name<span class="token punctuation">:</span> SayHello<span class="token punctuation">,</span> Type<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>main<span class="token punctuation">.</span>Person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面这个例子，你可以看出reflect的威力。</p><h2 id="通过reflect自动注册http路由" tabindex="-1"><a class="header-anchor" href="#通过reflect自动注册http路由" aria-hidden="true">#</a> 通过reflect自动注册HTTP路由</h2><p>甚至比如我可以通过构建一个结构体，给这个结构体写几个方法，只要将方法名称写成一定的格式，就可以帮我自动注册HTTP方法，比如我有个结构体Service，只要在这个结构体下写Get_XXX,就可以注册路径为<code>/xxx的get</code>服务，下面就是一个示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Service <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Service<span class="token punctuation">)</span> <span class="token function">Get_Hubs</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Handling GET request for /hubs&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Service<span class="token punctuation">)</span> <span class="token function">Post_Name</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Handling POST request for /name&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">RegisterHTTPHandlers</span><span class="token punctuation">(</span>service <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	svcType <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span>
	svcValue <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> svcType<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		method <span class="token operator">:=</span> svcType<span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		methodName <span class="token operator">:=</span> method<span class="token punctuation">.</span>Name

		<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token string">&quot;Get_&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token string">&quot;Post_&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			parts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>parts<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>

			path <span class="token operator">:=</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			handler <span class="token operator">:=</span> svcValue<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">)</span>
			http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">switch</span> r<span class="token punctuation">.</span>Method <span class="token punctuation">{</span>
				<span class="token keyword">case</span> http<span class="token punctuation">.</span>MethodGet<span class="token punctuation">:</span>
					<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token string">&quot;Get_&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">handler</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Method Not Allowed&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusMethodNotAllowed<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token keyword">case</span> http<span class="token punctuation">.</span>MethodPost<span class="token punctuation">:</span>
					<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> <span class="token string">&quot;Post_&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">handler</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Method Not Allowed&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusMethodNotAllowed<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token keyword">default</span><span class="token punctuation">:</span>
					http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Method Not Allowed&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusMethodNotAllowed<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	service <span class="token operator">:=</span> <span class="token operator">&amp;</span>Service<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">RegisterHTTPHandlers</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Listening on http://localhost:8889&quot;</span><span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8889&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个 Service 结构体，其中包含了 Get_Hubs() 和 Post_Name() 两个方法。然后，我们编写了 RegisterHTTPHandlers() 函数来根据方法的名称自动注册 HTTP 处理程序。</p><p>然后这个程序就注册了<code>get hubs</code> 和 <code>post name</code>的方法，你可以使用<code>curl</code>或者<code>postman</code>工具来不断向8889分别发送对应的请求，会发现终端打印了这些。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>Listening on http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8889</span>
Handling POST request <span class="token keyword">for</span> <span class="token operator">/</span>name
Handling GET request <span class="token keyword">for</span> <span class="token operator">/</span>hubs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再接着继续想想，既然可以注册Get和Post请求方法，那是不是我们还可以进一步操作比如动态绑定参数等等。通过反射，我们都可以做到。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本文章介绍了Go语言中的反射包（reflect）的使用。反射允许程序在运行时检查和操作其结构、变量、方法等信息。通过反射，可以动态地获取类型信息、操作对象的字段和方法。</p><p>我们首先解释了反射的定义和作用，并提到了反射包中的两个主要类型：<code>reflect.Type</code>和<code>reflect.Value</code>。<code>reflect.TypeOf</code>函数用于获取变量的类型信息，而<code>reflect.ValueOf</code>函数用于获取变量的值信息。</p><p>介绍了如何使用反射来获取变量的类型信息和值信息。通过示例代码展示了如何使用<code>reflect.TypeOf</code>和<code>reflect.ValueOf</code>函数，并介绍了<code>reflect.Type</code>和<code>reflect.Value</code>类型的常用方法，如<code>Interface()</code>、<code>Bool()</code>、<code>Int()</code>、<code>Float()</code>和<code>String()</code>等。</p><p>还提到了<code>IsValid()</code>和<code>IsNil()</code>方法的使用，用于判断反射值是否有效或为nil。</p><p>然后介绍了如何使用反射来更改变量的底层值。通过示例代码演示了如何通过反射获取变量的指针值，并使用<code>SetString()</code>和<code>SetInt()</code>等方法修改结构体的字段值。</p><p>接着，我们详细介绍了结构体反射。通过示例代码展示了如何使用反射获取结构体的字段信息和方法信息，包括使用<code>NumField()</code>、<code>Field()</code>、<code>Method()</code>和<code>MethodByName()</code>等方法。</p><p>最后，我给出了一个应用示例，通过反射自动注册HTTP方法的功能。通过解析结构体的方法名称，将满足特定命名格式的方法自动注册为相应的HTTP服务。</p><p>总的来说，我详细介绍了Go语言中反射包的使用方法，包括获取类型信息、值信息，修改变量值以及结构体的反射等操作。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>反射是一项强大的功能，可以在某些场景下提供灵活性和便利性。但需要注意，由于反射使用了运行时信息，会带来一定的性能损耗，因此在性能敏感的场景中需要谨慎使用。</p></div>`,63),d={href:"https://www.liwenzhou.com/posts/Go/reflect/",target:"_blank",rel:"noopener noreferrer"};function k(r,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,s("p",null,[n("参考： "),s("a",d,[n("https://www.liwenzhou.com/posts/Go/reflect/"),c(a)]),n(" 李文周博客")])])}const f=t(l,[["render",k],["__file","std-reflect.html.vue"]]);export{f as default};
