import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as s,d as e,f as p}from"./app-e5a598ef.js";const l={},u=p(`<h1 id="剑指offer-刷题笔记" tabindex="-1"><a class="header-anchor" href="#剑指offer-刷题笔记" aria-hidden="true">#</a> 剑指offer 刷题笔记</h1><p>关于剑指offer,其实今年前半年刷过一次,但许久未做题就遗忘了许多,这次边做题边记录一下做题过程,一方面可以让自己忘了的时候有可以复习的地方,再者也可以让读者查看作者的写题思路,供他人参考.</p><ul><li><a href="#1">03. 数组中重复的数字</a></li><li><a href="#2">04. 二维数组中的查找</a></li><li><a href="#3">05. 替换空格</a></li><li><a href="#4">4</a></li><li><a href="#5">5</a></li><li><a href="#6">6</a></li><li><a href="#7">7</a></li><li><a href="#8">8</a></li><li><a href="#9">9</a></li><li><a href="#10">10</a></li></ul><p><span id="1"></span></p><h3 id="_03-数组中重复的数字" tabindex="-1"><a class="header-anchor" href="#_03-数组中重复的数字" aria-hidden="true">#</a> [03. 数组中重复的数字]</h3><p>找出数组中重复的数字。</p><p>在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本题可以直接用map做, 遍历的时候直接把数字放进map里如果出现过,直接返回</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findRepeatNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
      <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    m<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r={href:"https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/jian-zhi-offer-golangbao-mu-xi-lie-ti-ji-rwo5/",target:"_blank",rel:"noopener noreferrer"},d=p(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">func</span> <span class="token function">findRepeatNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
       <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
           <span class="token keyword">for</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>i<span class="token punctuation">{</span>           <span class="token comment">//注意这里一定不能将for改为if</span>
               <span class="token keyword">if</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">==</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">{</span>
                   <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>    <span class="token comment">//返回重复元素</span>
               <span class="token punctuation">}</span>
               nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token comment">//不等就交换</span>
           <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="2"></span></p><h3 id="_04-二维数组中的查找" tabindex="-1"><a class="header-anchor" href="#_04-二维数组中的查找" aria-hidden="true">#</a> [04. 二维数组中的查找]</h3><p>在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

给定 target = 5，返回 true。

给定 target = 20，返回 false。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本题可以直接俩for循环暴力去解题, 但如果真这样做就只能回去等通知了, 所以为了不避免回家等通知,我们得学会用一次for循环去解题</p></blockquote><p>通过观察可以发现, 本题的二维数组是有规律排列的, 即<strong>每一行都按照从左到右 非递减 的顺序排序</strong>,这样我们可以通过一个for循环去控制遍历方向,所以遍历的起始位置也有讲究,即必须一个方向比自己大,另一个方向比自己小,这样才可以控制. 比如选择左下角的18为起始位置, target为5 , 那么18比5大,则往上走, 再继续10 比5大 则继续向上......</p><p>所以代码是这样的:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findNumberIn2DArray</span><span class="token punctuation">(</span>matrix <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    x<span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">for</span> x <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> y <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target <span class="token punctuation">{</span>
            y<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            x<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没什么好讲的了, 代码已经没法再简单了哈哈哈</p><p><span id="3"></span></p><h3 id="_05-替换空格" tabindex="-1"><a class="header-anchor" href="#_05-替换空格" aria-hidden="true">#</a> [05. 替换空格]</h3><p>请实现一个函数，把字符串 s 中的每个空格替换成&quot;%20&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;We are happy.&quot;
输出：&quot;We%20are%20happy.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本题可以直接创建一个slice去做, 一个for循环当遇到空格就加入&#39;%20&#39;, 若不是空格就加入s[i]</p><p>当然如果这样本题就太简单了, 其实可以通过遍历一次计算空格的个数spaceCount, 创建一个slice空间大小是spaceCount*2+len(s), 接着从后往前遍历s去解题, 看了代码就知道了</p><p>为什么用字节数组做? 因为字节数组比较方便比较</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    spaceCount <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> b <span class="token punctuation">{</span>
        <span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            spaceCount<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    tmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> spaceCount<span class="token operator">*</span><span class="token number">2</span><span class="token operator">+</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span>  <span class="token punctuation">{</span>
        <span class="token keyword">if</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            i<span class="token operator">--</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span>
            tmp<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;2&#39;</span>
            tmp<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;%&#39;</span>
            i<span class="token operator">--</span>
            j<span class="token operator">-=</span><span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="4"></span></p><h3 id="_06-从尾到头打印链表" tabindex="-1"><a class="header-anchor" href="#_06-从尾到头打印链表" aria-hidden="true">#</a> [06. 从尾到头打印链表]</h3><p>输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,3,2]
输出：[2,3,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题其实有俩思路,但其实差不多,一个是直接遍历链表从头到尾,放入数组里,然后反转数组.</p><p>还有一个是反转链表, 然后...装入数组...你看其实差不多吧?</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reversePrint</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    rhead <span class="token operator">:=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> rhead <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> rhead<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        rhead <span class="token operator">=</span> rhead<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pre <span class="token operator">*</span>ListNode
    cur <span class="token operator">:=</span> head
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> pre
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="6"></span></p><h3 id="_07-重建二叉树" tabindex="-1"><a class="header-anchor" href="#_07-重建二叉树" aria-hidden="true">#</a> [07. 重建二叉树]</h3><p>输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。</p><p>假设输入的前序遍历和中序遍历的结果中都不含重复的数字。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题要注意,前序遍历,第一个元素就是根节点元素,知道这个做题就好做了,其实就是递归过程</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> inorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>preorder<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>

    nodeValue <span class="token operator">:=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    left <span class="token operator">:=</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">,</span> inorder<span class="token punctuation">)</span>
    root <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>
        Val<span class="token punctuation">:</span> nodeValue<span class="token punctuation">,</span>
        Left<span class="token punctuation">:</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token punctuation">[</span><span class="token punctuation">:</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Right<span class="token punctuation">:</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token punctuation">[</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>target <span class="token builtin">int</span><span class="token punctuation">,</span> inorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> inorder <span class="token punctuation">{</span>
        <span class="token keyword">if</span> v <span class="token operator">==</span> target <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="7"></span></p>`,33),k={id:"_09-用两个栈实现队列",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_09-用两个栈实现队列","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
[&quot;CQueue&quot;,&quot;appendTail&quot;,&quot;deleteHead&quot;,&quot;deleteHead&quot;,&quot;deleteHead&quot;]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实需要做的事情, 不过是用俩栈, 搞成队列...</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> CQueue <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    stIn <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    stOut <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> CQueue <span class="token punctuation">{</span>
    <span class="token keyword">return</span> CQueue<span class="token punctuation">{</span>
        stIn<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        stOut<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CQueue<span class="token punctuation">)</span> <span class="token function">AppendTail</span><span class="token punctuation">(</span>value <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    this<span class="token punctuation">.</span>stIn <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stIn<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CQueue<span class="token punctuation">)</span> <span class="token function">DeleteHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stOut<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stIn<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stIn<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            this<span class="token punctuation">.</span>stOut <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stOut<span class="token punctuation">,</span> this<span class="token punctuation">.</span>stIn<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stIn<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            this<span class="token punctuation">.</span>stIn <span class="token operator">=</span> this<span class="token punctuation">.</span>stIn<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stIn<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    value <span class="token operator">:=</span> this<span class="token punctuation">.</span>stOut<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stOut<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    this<span class="token punctuation">.</span>stOut <span class="token operator">=</span> this<span class="token punctuation">.</span>stOut<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stOut<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="8"></span></p>`,5),h={id:"_10-i-斐波那契数列",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_10-i-斐波那契数列","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>最简单的动态规划题了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n
    <span class="token punctuation">}</span>
    mod <span class="token operator">:=</span> <span class="token number">1000000007</span>
    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">%</span>mod
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="9"></span></p>`,3),y={id:"_10-ii-青蛙跳台阶问题",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#_10-ii-青蛙跳台阶问题","aria-hidden":"true"},"#",-1),x={href:"https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/",target:"_blank",rel:"noopener noreferrer"},q=p(`<p>其实和上一个题差不多</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">numWays</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n
    <span class="token punctuation">}</span>

    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>

    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="10"></span></p>`,3),N={id:"_11-旋转数组的最小数字",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#_11-旋转数组的最小数字","aria-hidden":"true"},"#",-1),z={href:"https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},A=p(`<p>旋转数字最小数字</p><p>首先，创建两个指针 leftleft, rightright 分别指向 numbersnumbers 首尾数字，然后计算出两指针之间的中间索引值 middlemiddle，然后我们会遇到以下三种情况：</p><p>middlemiddle &gt; rightright ：代表最小值一定在 middlemiddle 右侧，所以 leftleft 移到 middle+1middle+1 的位置。</p><p>middlemiddle &lt; rightright ：代表最小值一定在 middlemiddle 左侧或者就是 middlemiddle，所以 rightright 移到 middlemiddle 的位置。</p><p>middlemiddle 既不大于 leftleft 指针的值，也不小于 rightright 指针的值，代表着 middlemiddle 可能等于 leftleft 指针的值，或者 rightright 指针的值，我们这时候只能让 rightright 指针递减，来一个一个找最小值了。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">minArray</span><span class="token punctuation">(</span>numbers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    low <span class="token operator">:=</span> <span class="token number">0</span>
    high <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">for</span> low <span class="token operator">&lt;</span> high <span class="token punctuation">{</span>
        mid <span class="token operator">:=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span>high<span class="token operator">-</span>low<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
        <span class="token keyword">if</span> numbers<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> numbers<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            high <span class="token operator">=</span> mid
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> numbers<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> numbers<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            low <span class="token operator">=</span> mid
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            high<span class="token operator">--</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">[</span>low<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="11"></span></p>`,7),L={id:"_12-矩阵中的路径",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#_12-矩阵中的路径","aria-hidden":"true"},"#",-1),I={href:"https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。</p><p>单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。</p><p>例如，在下面的 3×4 的矩阵中包含单词 &quot;ABCCED&quot;（单词中的字母已标出）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这应该是一个比较典型的回溯算法的题目</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">exist</span><span class="token punctuation">(</span>board <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> word <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    used <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> used <span class="token punctuation">{</span>
        used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> canFind <span class="token keyword">func</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
    canFind <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> r <span class="token operator">&gt;=</span> m <span class="token operator">||</span> r <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;=</span> n <span class="token operator">||</span> c <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// used[r][c]是为了避免回溯到自己或者之前的</span>
        <span class="token keyword">if</span> board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">!=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> used<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        used<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">if</span> <span class="token function">canFind</span><span class="token punctuation">(</span>r<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">canFind</span><span class="token punctuation">(</span>r<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">canFind</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">canFind</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            used<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">canFind</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个canFind函数,</p><p><span id="12"></span></p>`,8),T={id:"_14-i-剪绳子",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#_14-i-剪绳子","aria-hidden":"true"},"#",-1),O={href:"https://leetcode.cn/problems/jian-sheng-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},V=p(`<p>给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n&gt;1并且m&gt;1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]<em>k[1]</em>...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1

示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一道很明显的动态规划题目</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">cuttingRope</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
	dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>j<span class="token operator">*</span><span class="token punctuation">(</span>i<span class="token operator">-</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> j<span class="token operator">*</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="13"></span></p>`,5),H={id:"_14-ii-剪绳子-ii",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#_14-ii-剪绳子-ii","aria-hidden":"true"},"#",-1),M={href:"https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/",target:"_blank",rel:"noopener noreferrer"},D=p(`<p>给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n&gt;1并且m&gt;1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]<em>k[1]</em>...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。</p><p>答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。</p><p>和上一题差不多...</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func cuttingRope(n int) int {
if n==2 {
        return 1
    }else if n==3{
        return 2
    }
    var re int64
    re = 1
    for n&gt;4 {
        n=n-3
        re = re*3
        re =re % 1000000007
    }
    return int(int64(n) * re % 1000000007)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="14"></span></p>`,5),E={id:"_15-二进制中1的个数",tabindex:"-1"},Q=n("a",{class:"header-anchor",href:"#_15-二进制中1的个数","aria-hidden":"true"},"#",-1),F={href:"https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},P=p(`<p>编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 &#39;1&#39; 的个数（也被称为 汉明重量).）。</p><p>这道题设计位运算, 根据 与运算 定义，设二进制数字 n，则有：</p><ul><li>若 n&amp;1=0n&amp;1=0 ，则 nn 二进制 最右一位 为 00 ；</li><li>若 n&amp;1=1n&amp;1=1 ，则 nn 二进制 最右一位 为 11 。</li></ul><p>根据以上特点，考虑以下 循环判断 ： 判断 n 最右一位是否为 1 ，根据结果计数。 将 n 右移一位（本题要求把数字 n 看作无符号数，因此使用 无符号右移 操作）。 初始化数量统计变量 res= 。 循环逐位判断： 当 n=0 时跳出。</p><pre><code>res += n &amp; 1 ： 若 n&amp;1=1，则统计数 res 加一。
n &gt;&gt;= 1 ： 将二进制数字 n 无符号右移一位 。
</code></pre><p>返回统计数量 res。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>n <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> n <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            res<span class="token operator">++</span>
        <span class="token punctuation">}</span> 
        n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="15"></span></p>`,8),W={id:"_16-数值的整数次方",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#_16-数值的整数次方","aria-hidden":"true"},"#",-1),K={href:"https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/",target:"_blank",rel:"noopener noreferrer"},G=p(`<p>实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000

示例 2：

输入：x = 2.10000, n = 3
输出：9.26100

示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题需要考虑n为负数的情况, 按位运算的问题</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x <span class="token builtin">float64</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> res <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>n
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> n<span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            res <span class="token operator">*=</span> x
        <span class="token punctuation">}</span>
        x <span class="token operator">*=</span> x
        n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="16"></span></p>`,5),J={id:"_17-打印从1到最大的n位数",tabindex:"-1"},X=n("a",{class:"header-anchor",href:"#_17-打印从1到最大的n位数","aria-hidden":"true"},"#",-1),Y={href:"https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Z=p(`<p>输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="17"></span></p>`,3),$={id:"_18-删除链表的节点",tabindex:"-1"},nn=n("a",{class:"header-anchor",href:"#_18-删除链表的节点","aria-hidden":"true"},"#",-1),sn={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},an=p(`<p>给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。</p><p>返回删除后的链表的头节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9.

示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和链表的常规操作一样需要定义虚拟头节点.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummyHead <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>ListNode<span class="token punctuation">)</span>
    dummyHead<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    cur <span class="token operator">:=</span> dummyHead

    <span class="token keyword">for</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Next <span class="token operator">==</span> val <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="18"></span></p>`,6),en={id:"_19-正则表达式匹配",tabindex:"-1"},pn=n("a",{class:"header-anchor",href:"#_19-正则表达式匹配","aria-hidden":"true"},"#",-1),tn={href:"https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof",target:"_blank",rel:"noopener noreferrer"},on=p(`<p>请实现一个函数用来匹配包含&#39;. &#39;和&#39;<em>&#39;的正则表达式。模式中的字符&#39;.&#39;表示任意一个字符，而&#39;</em>&#39;表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串&quot;aaa&quot;与模式&quot;a.a&quot;和&quot;ab<em>ac</em>a&quot;匹配，但与&quot;aa.a&quot;和&quot;ab*a&quot;均不匹配。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入:
s = &quot;aa&quot;
p = &quot;a&quot;
输出: false
解释: &quot;a&quot; 无法匹配 &quot;aa&quot; 整个字符串。

输入:
s = &quot;aab&quot;
p = &quot;c*a*b&quot;
输出: true
解释: 因为 &#39;*&#39; 表示零个或多个，这里 &#39;c&#39; 为 0 个, &#39;a&#39; 被重复一次。因此可以匹配字符串 &quot;aab&quot;。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isMatch</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> p <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>

    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> dp <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token operator">&amp;&amp;</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;.&#39;</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//</span>
                <span class="token keyword">if</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;.&#39;</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
						dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
					<span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="19"></span></p><p>TODO</p>`,5),cn={id:"_20-表示数值的字符串",tabindex:"-1"},ln=n("a",{class:"header-anchor",href:"#_20-表示数值的字符串","aria-hidden":"true"},"#",-1),un={href:"https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/",target:"_blank",rel:"noopener noreferrer"},rn=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

    若干空格
    一个 小数 或者 整数
    （可选）一个 &#39;e&#39; 或 &#39;E&#39; ，后面跟着一个 整数
    若干空格

小数（按顺序）可以分成以下几个部分：

    （可选）一个符号字符（&#39;+&#39; 或 &#39;-&#39;）
    下述格式之一：
        至少一位数字，后面跟着一个点 &#39;.&#39;
        至少一位数字，后面跟着一个点 &#39;.&#39; ，后面再跟着至少一位数字
        一个点 &#39;.&#39; ，后面跟着至少一位数字

整数（按顺序）可以分成以下几个部分：

    （可选）一个符号字符（&#39;+&#39; 或 &#39;-&#39;）
    至少一位数字

部分数值列举如下：

    [&quot;+100&quot;, &quot;5e2&quot;, &quot;-123&quot;, &quot;3.1416&quot;, &quot;-1E-16&quot;, &quot;0123&quot;]

部分非数值列举如下：

    [&quot;12e&quot;, &quot;1a3.14&quot;, &quot;1.2.3&quot;, &quot;+-5&quot;, &quot;12e+5.4&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="20"></span></p>`,2),dn={id:"_21-调整数组顺序使奇数位于偶数前面",tabindex:"-1"},kn=n("a",{class:"header-anchor",href:"#_21-调整数组顺序使奇数位于偶数前面","aria-hidden":"true"},"#",-1),vn={href:"https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/",target:"_blank",rel:"noopener noreferrer"},mn=p(`<p>输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二分法, i, j双指针, 分别指向0, len(nums)-1, 同时当nums[i]为偶数, nums[j] 为奇数时, 交换, 并且当nums[i]为奇数 i++, num[j]为偶数, j--</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">exchange</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
       i<span class="token punctuation">,</span>j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
      <span class="token keyword">for</span> i<span class="token operator">&lt;</span>j <span class="token punctuation">{</span>       <span class="token comment">//循环条件</span>
          <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">%</span><span class="token number">2</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">{</span>   <span class="token comment">//满足则发生交换</span>
              nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span><span class="token number">2</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">{</span>     <span class="token comment">//i往后走</span>
              i<span class="token operator">++</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>     <span class="token comment">//j往前走</span>
              j<span class="token operator">--</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> nums
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="21"></span></p>`,5),bn={id:"_22-链表中倒数第k个节点",tabindex:"-1"},hn=n("a",{class:"header-anchor",href:"#_22-链表中倒数第k个节点","aria-hidden":"true"},"#",-1),gn={href:"https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},fn=p(`<p>输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。</p><p>例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定一个链表: 1-&gt;2-&gt;3-&gt;4-&gt;5, 和 k = 2.

返回链表 4-&gt;5.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链表的常规题, 定义一个虚拟头节点, 通过虚拟节点搞事情</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getKthFromEnd</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    dummy<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    pre<span class="token punctuation">,</span> cur <span class="token operator">:=</span> dummy<span class="token punctuation">,</span> head

    <span class="token keyword">for</span> k<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        k<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> pre<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getKthFromEnd</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    cur <span class="token operator">:=</span> head

    <span class="token keyword">for</span> k <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        k<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="22"></span></p>`,8),_n={id:"_24-反转链表",tabindex:"-1"},yn=n("a",{class:"header-anchor",href:"#_24-反转链表","aria-hidden":"true"},"#",-1),wn={href:"https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"},xn=p(`<p>定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
输出: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>好像没什么解释的, pre相当与虚拟头节点, 但充当一个缓冲的作用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pre <span class="token operator">*</span>ListNode
    cur <span class="token operator">:=</span> head

    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> pre
        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    node <span class="token operator">:=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token operator">&gt;</span>Next<span class="token punctuation">)</span>
    head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next <span class="token operator">=</span> head
    head<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token boolean">nil</span>
    <span class="token keyword">return</span> node
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="23"></span></p>`,5),qn={id:"_25-合并两个排序的链表",tabindex:"-1"},Nn=n("a",{class:"header-anchor",href:"#_25-合并两个排序的链表","aria-hidden":"true"},"#",-1),jn={href:"https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"},zn=p(`<p>输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例1：

输入：1-&gt;2-&gt;4, 1-&gt;3-&gt;4
输出：1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以声明一个虚拟头节点, 然后迭代法不断迭代</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1 <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> l2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    head <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
    cur <span class="token operator">:=</span> head

    <span class="token keyword">for</span> l1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> l1<span class="token punctuation">.</span>Val <span class="token operator">&gt;=</span> l2<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> l2
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> l1
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>Next
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> l1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> l2
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> l2 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> l1
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用递归法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1 <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> l2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> l1<span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span>   <span class="token comment">//递归终止条件</span>
        <span class="token keyword">return</span> l2
    <span class="token punctuation">}</span> 
    <span class="token keyword">if</span> l2<span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span>    <span class="token comment">//递归终止条件</span>
        <span class="token keyword">return</span> l1 
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> l1<span class="token punctuation">.</span>Val<span class="token operator">&gt;</span>l2<span class="token punctuation">.</span>Val<span class="token punctuation">{</span>  <span class="token comment">//交换两节点</span>
        l1<span class="token punctuation">,</span>l2<span class="token operator">=</span>l2<span class="token punctuation">,</span>l1
    <span class="token punctuation">}</span>
    l1<span class="token punctuation">.</span>Next<span class="token operator">=</span><span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>Next<span class="token punctuation">,</span>l2<span class="token punctuation">)</span>  <span class="token comment">//递归</span>
    <span class="token keyword">return</span> l1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="24"></span></p>`,7),An={id:"_26-树的子结构",tabindex:"-1"},Ln=n("a",{class:"header-anchor",href:"#_26-树的子结构","aria-hidden":"true"},"#",-1),Bn={href:"https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/",target:"_blank",rel:"noopener noreferrer"},In=p(`<p>输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)</p><p>B是A的子结构， 即 A中有出现和B相同的结构和节点值。</p><p>例如: 给定的树 A:</p><pre><code> 3
/ \\
</code></pre><p>4 5 / <br> 1 2 给定的树 B：</p><p>4 / 1 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false

示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span>A <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> B <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// 特例处理： 当 树 AA 为空 或 树 BB 为空 时，直接返回 falsefalse ；</span>
    <span class="token comment">// 返回值： 若树 BB 是树 AA 的子结构，则必满足以下三种情况之一，因此用或 || 连接；</span>

    <span class="token comment">// 以 节点 AA 为根节点的子树 包含树 BB ，对应 recur(A, B)；</span>
    <span class="token comment">// 树 BB 是 树 AA 左子树 的子结构，对应 isSubStructure(A.left, B)；</span>
    <span class="token comment">// 树 BB 是 树 AA 右子树 的子结构，对应 isSubStructure(A.right, B)；</span>
  
    <span class="token keyword">if</span> A <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> B <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">var</span> recue <span class="token keyword">func</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    recue <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 递归参数 俩节点</span>
        <span class="token comment">// 2. 递归判断 当B为nil, 说明递归到了子节点的子节点完成匹配 return true</span>
        <span class="token comment">//            当 A为nil || A.Val == B.Val 说明匹配失败 返回 return false</span>

        <span class="token comment">// 3. 递归逻辑</span>
        <span class="token comment">// 判断 AA 和 BB 的左子节点是否相等，即 recur(A.left, B.left) ；</span>
        <span class="token comment">// 判断 AA 和 BB 的右子节点是否相等，即 recur(A.right, B.right) ；</span>
        <span class="token keyword">if</span> B <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> A <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> A<span class="token punctuation">.</span>Val <span class="token operator">!=</span> B<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">recue</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> B<span class="token punctuation">.</span>Left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">recue</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> B<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">recue</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> B<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="25"></span></p>`,9),Sn={id:"_27-二叉树的镜像",tabindex:"-1"},Tn=n("a",{class:"header-anchor",href:"#_27-二叉树的镜像","aria-hidden":"true"},"#",-1),Rn={href:"https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/",target:"_blank",rel:"noopener noreferrer"},On=p(`<p>请完成一个函数，输入一个二叉树，该函数输出它的镜像。</p><p>例如输入：</p><pre><code> 4
</code></pre><p>/ <br> 2 7 / \\ / <br> 1 3 6 9 镜像输出：</p><pre><code> 4
</code></pre><p>/ <br> 7 2 / \\ / <br> 9 6 3 1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>

    <span class="token keyword">var</span> traverse <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> 
    <span class="token comment">// 1. 递归参数 node</span>
    traverse <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 递归终止逻辑 node == nil</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3. 单层执行逻辑</span>
        node<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right <span class="token operator">=</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="26"></span></p>`,9),Vn={id:"_28-对称的二叉树",tabindex:"-1"},Hn=n("a",{class:"header-anchor",href:"#_28-对称的二叉树","aria-hidden":"true"},"#",-1),Cn={href:"https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Mn=p(`<p>请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。</p><p>例如，二叉树 [1,2,2,3,4,4,3] 是对称的。</p><pre><code>1
</code></pre><p>/ <br> 2 2 / \\ / <br> 3 4 4 3 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:</p><pre><code>1
</code></pre><p>/ <br> 2 2 \\ <br> 3 3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1. 递归参数, 俩节点</span>
    <span class="token keyword">var</span> traverse <span class="token keyword">func</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    traverse <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 递归终止逻辑 left == nil &amp;&amp; right == nil true</span>
         <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2. 递归终止逻辑 left == nil || right == nil false</span>
        <span class="token keyword">if</span> left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> left<span class="token punctuation">.</span>Val <span class="token operator">!=</span> right<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3. 单层逻辑</span>
        <span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>Right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">traverse</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="27"></span></p>`,9),Dn={id:"_29-顺时针打印矩阵",tabindex:"-1"},En=n("a",{class:"header-anchor",href:"#_29-顺时针打印矩阵","aria-hidden":"true"},"#",-1),Qn={href:"https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/",target:"_blank",rel:"noopener noreferrer"},Fn=p(`<p>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span>matrix <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    res<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    top<span class="token punctuation">,</span>bottom<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right <span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>  <span class="token comment">//初始边界</span>
    <span class="token keyword">for</span> bottom<span class="token operator">&gt;=</span>top <span class="token operator">&amp;&amp;</span> right<span class="token operator">&gt;=</span>left<span class="token punctuation">{</span>                             <span class="token comment">//循环条件，下大于等于上，右大于等于左</span>
        <span class="token keyword">for</span> i<span class="token operator">:=</span>left<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>right<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>   <span class="token comment">//top行的从左到右遍历</span>
            res<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        top<span class="token operator">++</span>                       <span class="token comment">//top行遍历完了，top往下移动</span>
        <span class="token keyword">for</span> i<span class="token operator">:=</span>top<span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>bottom<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>   <span class="token comment">//right列的从上到下遍历</span>
            res<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        right<span class="token operator">--</span>                       <span class="token comment">//right列遍历完了，right向左移动</span>
        <span class="token keyword">if</span> left<span class="token operator">&gt;</span>right <span class="token operator">||</span> top<span class="token operator">&gt;</span>bottom<span class="token punctuation">{</span>  <span class="token comment">//这里一定要做一个判断，因为如果只剩下一个元素就会出错</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> i<span class="token operator">:=</span>right<span class="token punctuation">;</span>i<span class="token operator">&gt;=</span>left<span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">{</span>      <span class="token comment">//bottom行的从右往左遍历</span>
            res<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        bottom<span class="token operator">--</span>                         <span class="token comment">//bottom往上移动</span>
        <span class="token keyword">for</span> i<span class="token operator">:=</span>bottom<span class="token punctuation">;</span>i<span class="token operator">&gt;=</span>top<span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">{</span>        <span class="token comment">//left列的从下到上遍历</span>
            res<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        left<span class="token operator">++</span>                             <span class="token comment">//left向右移动</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="28"></span></p>`,4),Pn={id:"_30-包含min函数的栈",tabindex:"-1"},Wn=n("a",{class:"header-anchor",href:"#_30-包含min函数的栈","aria-hidden":"true"},"#",-1),Un={href:"https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/",target:"_blank",rel:"noopener noreferrer"},Kn=p(`<p>定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --&gt; 返回 -3.
minStack.pop();
minStack.top();      --&gt; 返回 0.
minStack.min();   --&gt; 返回 -2.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个minArr, 放的是最小的数字</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MinStack <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    stack <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    minArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>


<span class="token comment">/** initialize your data structure here. */</span>
<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MinStack <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MinStack<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span> <span class="token operator">||</span> x <span class="token operator">&lt;</span> this<span class="token punctuation">.</span>minArr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        this<span class="token punctuation">.</span>minArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        this<span class="token punctuation">.</span>minArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">,</span> this<span class="token punctuation">.</span>minArr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    this<span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stack<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    this<span class="token punctuation">.</span>stack <span class="token operator">=</span> this<span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    this<span class="token punctuation">.</span>minArr <span class="token operator">=</span> this<span class="token punctuation">.</span>minArr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> this<span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> this<span class="token punctuation">.</span>minArr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>minArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="29"></span></p>`,5),Gn={id:"_31-栈的压入、弹出序列",tabindex:"-1"},Jn=n("a",{class:"header-anchor",href:"#_31-栈的压入、弹出序列","aria-hidden":"true"},"#",-1),Xn={href:"https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},Yn=p(`<p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -&gt; 4,
push(5), pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1

示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过辅助stack做</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">validateStackSequences</span><span class="token punctuation">(</span>pushed <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> popped <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    stack <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> pushed <span class="token punctuation">{</span>
        stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> v<span class="token punctuation">)</span>

        <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> popped<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            stack <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="30"></span></p>`,5),Zn={id:"_32-i-从上到下打印二叉树",tabindex:"-1"},$n=n("a",{class:"header-anchor",href:"#_32-i-从上到下打印二叉树","aria-hidden":"true"},"#",-1),ns={href:"https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},ss=p(`<p>从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \\
  9  20
    /  \\
   15   7

返回：

[3,9,20,15,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>层序遍历没啥好解释的</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>

    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    stack <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> root<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            stack <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
            res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="31"></span></p>`,5),as={id:"_32-ii-从上到下打印二叉树-ii",tabindex:"-1"},es=n("a",{class:"header-anchor",href:"#_32-ii-从上到下打印二叉树-ii","aria-hidden":"true"},"#",-1),ps={href:"https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/",target:"_blank",rel:"noopener noreferrer"},ts=p(`<p>请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \\
  9  20
    /  \\
   15   7

返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> root<span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span><span class="token comment">//防止为空</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    queue <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
        tmpArr <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            tmpArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tmpArr<span class="token punctuation">)</span>
        tmpArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="32"></span></p>`,4),os={id:"_32-iii-从上到下打印二叉树-iii",tabindex:"-1"},is=n("a",{class:"header-anchor",href:"#_32-iii-从上到下打印二叉树-iii","aria-hidden":"true"},"#",-1),cs={href:"https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/",target:"_blank",rel:"noopener noreferrer"},ls=p(`<p>请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \\
  9  20
    /  \\
   15   7

返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> root<span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span><span class="token comment">//防止为空</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    queue <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
        tmpArr <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            node <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            tmpArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tmpArr<span class="token punctuation">)</span>
        tmpArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token function">reverse</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">for</span> l <span class="token operator">&lt;</span> r <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
        l<span class="token operator">++</span>
        r<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="33"></span></p>`,4),us={id:"_33-二叉搜索树的后序遍历序列",tabindex:"-1"},rs=n("a",{class:"header-anchor",href:"#_33-二叉搜索树的后序遍历序列","aria-hidden":"true"},"#",-1),ds={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},ks=p(`<p>输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参考以下这颗二叉搜索树：

     5
    / \\
   2   6
  / \\
 1   3

示例 1：

输入: [1,6,3,2,5]
输出: false

示例 2：

输入: [1,3,2,6,5]
输出: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="34"></span></p>`,3),vs={id:"_34-二叉树中和为某一值的路径",tabindex:"-1"},ms=n("a",{class:"header-anchor",href:"#_34-二叉树中和为某一值的路径","aria-hidden":"true"},"#",-1),bs={href:"https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/",target:"_blank",rel:"noopener noreferrer"},hs=p(`<p>给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。</p><p>叶子节点 是指没有子节点的节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">pathSum</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> targetSum <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    path <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> targetSum<span class="token operator">-</span>root<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> count <span class="token builtin">int</span><span class="token punctuation">,</span> path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> res <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        tmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">copy</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
        <span class="token operator">*</span>res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>res<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        count <span class="token operator">-=</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> count<span class="token punctuation">,</span> path<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        count <span class="token operator">+=</span> node<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val
        path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

     <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
        count <span class="token operator">-=</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> count<span class="token punctuation">,</span> path<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        count <span class="token operator">+=</span> node<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val
        path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="35"></span></p>`,5),gs={id:"_35-复杂链表的复制",tabindex:"-1"},fs=n("a",{class:"header-anchor",href:"#_35-复杂链表的复制","aria-hidden":"true"},"#",-1),_s={href:"https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"},ys=p(`<p>请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// map中存的是（原节点-&gt;新节点）的映射关系，此时新节点只有val，指针并没有安排上</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">*</span>Node<span class="token punctuation">]</span><span class="token operator">*</span>Node<span class="token punctuation">)</span>
    <span class="token keyword">for</span> cur <span class="token operator">:=</span> head<span class="token punctuation">;</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> cur<span class="token punctuation">.</span>Val<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将新节点串起来，组成新链表</span>
    <span class="token keyword">for</span> cur <span class="token operator">:=</span> head<span class="token punctuation">;</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>Next <span class="token operator">=</span> m<span class="token punctuation">[</span>cur<span class="token punctuation">.</span>Next<span class="token punctuation">]</span>
        m<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">.</span>Random <span class="token operator">=</span> m<span class="token punctuation">[</span>cur<span class="token punctuation">.</span>Random<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> m<span class="token punctuation">[</span>head<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="36"></span></p>`,3),ws={id:"_36-二叉搜索树与双向链表",tabindex:"-1"},xs=n("a",{class:"header-anchor",href:"#_36-二叉搜索树与双向链表","aria-hidden":"true"},"#",-1),qs={href:"https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"},Ns=n("p",null,"TODO",-1),js=n("p",null,[n("span",{id:"37"})],-1),zs={id:"_37-序列化二叉树",tabindex:"-1"},As=n("a",{class:"header-anchor",href:"#_37-序列化二叉树","aria-hidden":"true"},"#",-1),Ls={href:"https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Bs=n("p",null,"TODO",-1),Is=n("p",null,[n("span",{id:"38"})],-1),Ss={id:"_38-字符串的排列",tabindex:"-1"},Ts=n("a",{class:"header-anchor",href:"#_38-字符串的排列","aria-hidden":"true"},"#",-1),Rs={href:"https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},Os=p(`<p>输入一个字符串，打印出该字符串中字符的所有排列。 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例:

输入：s = &quot;abc&quot;
输出：[&quot;abc&quot;,&quot;acb&quot;,&quot;bac&quot;,&quot;bca&quot;,&quot;cab&quot;,&quot;cba&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个版本不正确,后面有时间再改</p><h1 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> DEBUG</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">permutation</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    used <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    res <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">,</span> used<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">,</span> path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> res <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> used <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token function">copy</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
        <span class="token operator">*</span>res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>res<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
        path <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> res<span class="token punctuation">,</span> used<span class="token punctuation">)</span>
        path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="39"></span></p>`,6),Vs={id:"_39-数组中出现次数超过一半的数字",tabindex:"-1"},Hs=n("a",{class:"header-anchor",href:"#_39-数组中出现次数超过一半的数字","aria-hidden":"true"},"#",-1),Cs={href:"https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},Ms=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个用map就可以解决的问题</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        <span class="token keyword">if</span> v <span class="token operator">&gt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> k
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="40"></span></p>`,4),Ds={id:"_40-最小的k个数",tabindex:"-1"},Es=n("a",{class:"header-anchor",href:"#_40-最小的k个数","aria-hidden":"true"},"#",-1),Qs={href:"https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Fs=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>堆排序</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getLeastNumbers</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token function">heap_sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token comment">// n 数组长度 i待维持下标</span>
<span class="token keyword">func</span> <span class="token function">heapify</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	largest <span class="token operator">:=</span> i
	lson <span class="token operator">:=</span> i<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	rson <span class="token operator">:=</span> i<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> lson <span class="token operator">&lt;</span> <span class="token builtin">len</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>lson<span class="token punctuation">]</span> <span class="token punctuation">{</span>
		largest <span class="token operator">=</span> lson
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> rson <span class="token operator">&lt;</span> <span class="token builtin">len</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>rson<span class="token punctuation">]</span> <span class="token punctuation">{</span>
		largest <span class="token operator">=</span> rson
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> largest <span class="token operator">!=</span> i <span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span>
		<span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> largest<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">heap_sort</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 建堆</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> n<span class="token operator">/</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
		<span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 排序</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="41"></span></p>`,4),Ps={id:"_41-数据流中的中位数",tabindex:"-1"},Ws=n("a",{class:"header-anchor",href:"#_41-数据流中的中位数","aria-hidden":"true"},"#",-1),Us={href:"https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Ks=n("p",null,"TODO",-1),Gs=n("p",null,[n("span",{id:"42"})],-1),Js={id:"_42-连续子数组的最大和",tabindex:"-1"},Xs=n("a",{class:"header-anchor",href:"#_42-连续子数组的最大和","aria-hidden":"true"},"#",-1),Ys={href:"https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/",target:"_blank",rel:"noopener noreferrer"},Zs=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态规划</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    max <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span>nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
            max <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="43"></span></p>`,4),$s={id:"_43-1-n-整数中-1-出现的次数",tabindex:"-1"},na=n("a",{class:"header-anchor",href:"#_43-1-n-整数中-1-出现的次数","aria-hidden":"true"},"#",-1),sa={href:"https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},aa=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

 

示例 1：

输入：n = 12
输出：5

示例 2：

输入：n = 13
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TODO</p><p><span id="44"></span></p>`,3),ea={id:"_44-数字序列中某一位的数字",tabindex:"-1"},pa=n("a",{class:"header-anchor",href:"#_44-数字序列中某一位的数字","aria-hidden":"true"},"#",-1),ta={href:"https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},oa=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

示例 1：

输入：n = 3
输出：3

示例 2：

输入：n = 11
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findNthDigit</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// digit 是有几位树  </span>
    <span class="token comment">// digitNum 是 几位树的总个数 比如 10 180 2700</span>
    <span class="token comment">// count 是减去的树</span>
    digit<span class="token punctuation">,</span>digitNum<span class="token punctuation">,</span>count <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span>
    <span class="token keyword">for</span> n<span class="token operator">&gt;</span>count<span class="token punctuation">{</span>
        n <span class="token operator">-=</span> count
        digit<span class="token operator">++</span>
        digitNum <span class="token operator">*=</span> <span class="token number">10</span>
        count <span class="token operator">=</span> <span class="token number">9</span><span class="token operator">*</span>digit<span class="token operator">*</span>digitNum
    <span class="token punctuation">}</span>
    <span class="token comment">// 求出num是多少</span>
    num <span class="token operator">:=</span> digitNum <span class="token operator">+</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span>digit
    <span class="token comment">// 求出 n-1是多少</span>
    index <span class="token operator">:=</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>digit

    numStr <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">int</span><span class="token punctuation">(</span>numStr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="45"></span></p>`,3),ia={id:"offer-46-把数字翻译成字符串",tabindex:"-1"},ca=n("a",{class:"header-anchor",href:"#offer-46-把数字翻译成字符串","aria-hidden":"true"},"#",-1),la={href:"https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",target:"_blank",rel:"noopener noreferrer"},ua=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是&quot;bccfi&quot;, &quot;bwfi&quot;, &quot;bczi&quot;, &quot;mcfi&quot;和&quot;mzi&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题和青蛙上台阶一样</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">translateNum</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    str <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    N <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        temp <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">string</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> temp <span class="token operator">&gt;=</span> <span class="token string">&quot;10&quot;</span> <span class="token operator">&amp;&amp;</span> temp <span class="token operator">&lt;=</span> <span class="token string">&quot;25&quot;</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>N<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="46"></span></p>`,4),ra={id:"_47-礼物的最大价值",tabindex:"-1"},da=n("a",{class:"header-anchor",href:"#_47-礼物的最大价值","aria-hidden":"true"},"#",-1),ka={href:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"},va=p(`<p>在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个题挺简单的, 思路只能向右向下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">maxValue</span><span class="token punctuation">(</span>grid <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    m<span class="token punctuation">,</span>n<span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span>  grid<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> j<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span> <span class="token punctuation">{</span>
        grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span> <span class="token punctuation">{</span>
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token function">max</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> grid<span class="token punctuation">[</span>m<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="47"></span></p>`,5),ma={id:"_48-最长不含重复字符的子字符串",tabindex:"-1"},ba=n("a",{class:"header-anchor",href:"#_48-最长不含重复字符的子字符串","aria-hidden":"true"},"#",-1),ha={href:"https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/",target:"_blank",rel:"noopener noreferrer"},ga=p(`<p>请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1:

输入: &quot;abcabcbb&quot;
输出: 3 
解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。

示例 2:

输入: &quot;bbbbb&quot;
输出: 1
解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滑动窗口做</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">byte</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    rk<span class="token punctuation">,</span> ans <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i  <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> rk<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>rk<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            m<span class="token punctuation">[</span>s<span class="token punctuation">[</span>rk<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
            rk<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        ans <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> rk<span class="token operator">-</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> x <span class="token operator">&lt;</span> y <span class="token punctuation">{</span>
        <span class="token keyword">return</span> y
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="48"></span></p>`,5),fa={id:"_49-丑数",tabindex:"-1"},_a=n("a",{class:"header-anchor",href:"#_49-丑数","aria-hidden":"true"},"#",-1),ya={href:"https://leetcode.cn/problems/chou-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},wa={href:"https://leetcode.cn/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/",target:"_blank",rel:"noopener noreferrer"},xa=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。


示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">nthUglyNumber</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        n2<span class="token punctuation">,</span> n3<span class="token punctuation">,</span> n5 <span class="token operator">:=</span> dp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">5</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> <span class="token function">min</span><span class="token punctuation">(</span>n3<span class="token punctuation">,</span> n5<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n2 <span class="token punctuation">{</span>
            a<span class="token operator">++</span>
        <span class="token punctuation">}</span> 
        <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n3 <span class="token punctuation">{</span>
            b<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n5 <span class="token punctuation">{</span>
            c<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>   
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="49"></span></p>`,3),qa={id:"_50-第一个只出现一次的字符",tabindex:"-1"},Na=n("a",{class:"header-anchor",href:"#_50-第一个只出现一次的字符","aria-hidden":"true"},"#",-1),ja={href:"https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/",target:"_blank",rel:"noopener noreferrer"},za=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = &quot;abaccdeff&quot;
输出：&#39;b&#39;

示例 2:

输入：s = &quot;&quot; 
输出：&#39; &#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">firstUniqChar</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">byte</span> <span class="token punctuation">{</span>
<span class="token keyword">var</span> res <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        res<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">++</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> res<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">{</span> <span class="token comment">//这里千万不能写成res[i]==1，因为res前面的元素顺序对应为abcd，他们的值可能为1但是不一定是在s中第一个出现一次的字符</span>
            <span class="token keyword">return</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token char">&#39; &#39;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="50"></span></p>`,3),Aa={id:"_51-数组中的逆序对",tabindex:"-1"},La=n("a",{class:"header-anchor",href:"#_51-数组中的逆序对","aria-hidden":"true"},"#",-1),Ba={href:"https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/",target:"_blank",rel:"noopener noreferrer"},Ia=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TODO</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reversePairs</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> start <span class="token operator">&gt;=</span> end <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    mid <span class="token operator">:=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
    cnt <span class="token operator">:=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
    tmp <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> start<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> end <span class="token punctuation">{</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            cnt <span class="token operator">+=</span> j <span class="token operator">-</span> <span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> mid<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        cnt <span class="token operator">+=</span> end <span class="token operator">-</span> <span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span>i <span class="token operator">-</span> start<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnt
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="51"></span></p>`,4),Sa={id:"_52-两个链表的第一个公共节点",tabindex:"-1"},Ta=n("a",{class:"header-anchor",href:"#_52-两个链表的第一个公共节点","aria-hidden":"true"},"#",-1),Ra={href:"https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},Oa=p(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token punctuation">,</span> headB <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    curA <span class="token operator">:=</span> headA
    curB <span class="token operator">:=</span> headB
    lenA<span class="token punctuation">,</span> lenB <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token comment">// 求A，B的长度</span>
    <span class="token keyword">for</span> curA <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>Next
        lenA<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> curB <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>Next
        lenB<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> step <span class="token builtin">int</span>
    <span class="token keyword">var</span> fast<span class="token punctuation">,</span> slow <span class="token operator">*</span>ListNode
    <span class="token comment">// 请求长度差，并且让更长的链表先走相差的长度</span>
    <span class="token keyword">if</span> lenA <span class="token operator">&gt;</span> lenB <span class="token punctuation">{</span>
        step <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB
        fast<span class="token punctuation">,</span> slow <span class="token operator">=</span> headA<span class="token punctuation">,</span> headB
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        step <span class="token operator">=</span> lenB <span class="token operator">-</span> lenA
        fast<span class="token punctuation">,</span> slow <span class="token operator">=</span> headB<span class="token punctuation">,</span> headA
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> step<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历两个链表遇到相同则跳出遍历</span>
    <span class="token keyword">for</span> fast <span class="token operator">!=</span> slow <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fast
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="52"></span></p>`,2),Va={id:"_53-i-在排序数组中查找数字-i",tabindex:"-1"},Ha=n("a",{class:"header-anchor",href:"#_53-i-在排序数组中查找数字-i","aria-hidden":"true"},"#",-1),Ca={href:"https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},Ma=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">search</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> m<span class="token punctuation">[</span>target<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者用二分法做</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">search</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> target <span class="token operator">==</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    lo<span class="token punctuation">,</span>hi <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    index <span class="token operator">:=</span><span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">for</span> lo <span class="token operator">&lt;=</span> hi <span class="token punctuation">{</span>
        i <span class="token operator">:=</span> <span class="token punctuation">(</span>lo<span class="token operator">+</span>hi<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token punctuation">{</span>
            index <span class="token operator">=</span> i
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>  <span class="token keyword">else</span> <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target <span class="token punctuation">{</span>
            hi <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            lo <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 分别向两边扩展</span>
    cnt <span class="token operator">:=</span><span class="token number">0</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span>index<span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span> target<span class="token punctuation">;</span>i<span class="token operator">--</span> <span class="token punctuation">{</span>
        cnt<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span> index<span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span> target<span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        cnt<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnt<span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="53"></span></p>`,5),Da={id:"_53-ii-0-n-1中缺失的数字",tabindex:"-1"},Ea=n("a",{class:"header-anchor",href:"#_53-ii-0-n-1中缺失的数字","aria-hidden":"true"},"#",-1),Qa={href:"https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},Fa=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
示例 1:

输入: [0,1,3]
输出: 2

示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化： 左边界 left = 0 ，右边界 right = len(nums)−1 ；代表闭区间 [left, right] 。 循环二分： 当 left ≤ right 时循环 （即当闭区间 [left, j] 为空时跳出） ；</p><pre><code>计算中点 mid = (left + right)//2 ，其中 &quot;//&quot; 为向下取整除法；
若 nums[mid] = mid ，说明mid前面的元素肯定都是完整的不少元素所以只需要继续二分右边的数组即可，则 “右子数组的首位元素” 一定在闭区间 [mid+1, right] 中，因此执行 left = mid+1；
若 nums[mid] != mid ，说明mid前面的元素就有少的所以只要继续二分左边的数组即可，则 “左子数组的末位元素” 一定在闭区间 [left, mid−1] 中，因此执行 right = mid−1；
</code></pre><p>返回值： 跳出时，变量 i 和 j 分别指向 “右子数组的首元素” 和 “左子数组的末元素” 。因此返回 i 即可。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">for</span> l <span class="token operator">&lt;=</span> r <span class="token punctuation">{</span>
        mid <span class="token operator">:=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> mid <span class="token punctuation">{</span>
            l <span class="token operator">=</span> mid<span class="token operator">+</span><span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> mid<span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> l
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="54"></span></p>`,6),Pa={id:"_54-二叉搜索树的第k大节点",tabindex:"-1"},Wa=n("a",{class:"header-anchor",href:"#_54-二叉搜索树的第k大节点","aria-hidden":"true"},"#",-1),Ua={href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},Ka=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \\
 1   4
  \\
   2
输出: 4

示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \\
     3   6
    / \\
   2   4
  /
 1
输出: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逆中序</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">kthLargest</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
     <span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>node <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
        k<span class="token operator">--</span>
        <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> node<span class="token punctuation">.</span>Val
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="55"></span></p>`,4),Ga={id:"_55-i-二叉树的深度",tabindex:"-1"},Ja=n("a",{class:"header-anchor",href:"#_55-i-二叉树的深度","aria-hidden":"true"},"#",-1),Xa={href:"https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/",target:"_blank",rel:"noopener noreferrer"},Ya=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \\
  9  20
    /  \\
   15   7

返回它的最大深度 3 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    leftH <span class="token operator">:=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    rightH <span class="token operator">:=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">max</span><span class="token punctuation">(</span>leftH<span class="token punctuation">,</span> rightH<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="56"></span></p>`,3),Za={id:"_55-ii-平衡二叉树",tabindex:"-1"},$a=n("a",{class:"header-anchor",href:"#_55-ii-平衡二叉树","aria-hidden":"true"},"#",-1),ne={href:"https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},se=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \\
  9  20
    /  \\
   15   7

返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \\
     2   2
    / \\
   3   3
  / \\
 4   4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 还需要查看是否平衡</span>
    <span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    lH <span class="token operator">:=</span> <span class="token function">getHigh</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    rH <span class="token operator">:=</span> <span class="token function">getHigh</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token function">abs</span><span class="token punctuation">(</span>rH <span class="token operator">-</span> lH<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">abs</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getHigh</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">getHigh</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getHigh</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="57"></span></p>`,3),ae={id:"_56-i-数组中数字出现的次数",tabindex:"-1"},ee=n("a",{class:"header-anchor",href:"#_56-i-数组中数字出现的次数","aria-hidden":"true"},"#",-1),pe={href:"https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},te=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TODO</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">singleNumbers</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> xor <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums<span class="token punctuation">{</span>
        xor <span class="token operator">^=</span> num
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> xor <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        flag <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span>
        xor <span class="token operator">&gt;&gt;=</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums<span class="token punctuation">{</span>
        <span class="token keyword">if</span> num <span class="token operator">&amp;</span> flag <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">{</span>
            x <span class="token operator">^=</span> num
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            y <span class="token operator">^=</span> num
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="58"></span></p>`,4),oe={id:"_56-ii-数组中数字出现的次数-ii",tabindex:"-1"},ie=n("a",{class:"header-anchor",href:"#_56-ii-数组中数字出现的次数-ii","aria-hidden":"true"},"#",-1),ce={href:"https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/",target:"_blank",rel:"noopener noreferrer"},le=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

示例 1：

输入：nums = [3,4,3,3]
输出：4

示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> bits <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums<span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
            bits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> num <span class="token operator">&amp;</span> <span class="token number">1</span>
            num <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">31</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">{</span>
        res <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span>
        res <span class="token operator">|=</span> bits<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="59"></span></p>`,3),ue={id:"_57-和为s的两个数字",tabindex:"-1"},re=n("a",{class:"header-anchor",href:"#_57-和为s的两个数字","aria-hidden":"true"},"#",-1),de={href:"https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},ke=p(`<p>输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双指针</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    lo<span class="token punctuation">,</span> hi <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">for</span> lo <span class="token operator">&lt;</span> hi <span class="token punctuation">{</span>
        s <span class="token operator">:=</span> nums<span class="token punctuation">[</span>lo<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>hi<span class="token punctuation">]</span>
        <span class="token keyword">if</span> s <span class="token operator">&gt;</span> target <span class="token punctuation">{</span>
            hi<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> s <span class="token operator">&lt;</span> target <span class="token punctuation">{</span>
            lo<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>nums<span class="token punctuation">[</span>lo<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>hi<span class="token punctuation">]</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="60"></span></p>`,5),ve={id:"_58-i-翻转单词顺序",tabindex:"-1"},me=n("a",{class:"header-anchor",href:"#_58-i-翻转单词顺序","aria-hidden":"true"},"#",-1),be={href:"https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/",target:"_blank",rel:"noopener noreferrer"},he=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串&quot;I am a student. &quot;，则输出&quot;student. a am I&quot;。

示例 1：

输入: &quot;the sky is blue&quot;
输出: &quot;blue is sky the&quot;

示例 2：

输入: &quot;  hello world!  &quot;
输出: &quot;world! hello&quot;
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：

输入: &quot;a good   example&quot;
输出: &quot;example good a&quot;
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="61"></span></p><h3 id="_58-i-翻转单词顺序-1" tabindex="-1"><a class="header-anchor" href="#_58-i-翻转单词顺序-1" aria-hidden="true">#</a> <a href="">58 - I. 翻转单词顺序</a></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串&quot;I am a student. &quot;，则输出&quot;student. a am I&quot;。
示例 1：

输入: &quot;the sky is blue&quot;
输出: &quot;blue is sky the&quot;

示例 2：

输入: &quot;  hello world!  &quot;
输出: &quot;world! hello&quot;
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token builtin">string</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">for</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            i<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        j <span class="token operator">=</span> i
        <span class="token keyword">for</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39; &#39;</span> <span class="token punctuation">{</span>
            i<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        res <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">TrimRight</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="62"></span></p>`,6),ge={id:"_58-ii-左旋转字符串",tabindex:"-1"},fe=n("a",{class:"header-anchor",href:"#_58-ii-左旋转字符串","aria-hidden":"true"},"#",-1),_e={href:"https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/",target:"_blank",rel:"noopener noreferrer"},ye=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串&quot;abcdefg&quot;和数字2，该函数将返回左旋转两位得到的结果&quot;cdefgab&quot;。

示例 1：

输入: s = &quot;abcdefg&quot;, k = 2
输出: &quot;cdefgab&quot;

示例 2：

输入: s = &quot;lrloseumgh&quot;, k = 6
输出: &quot;umghlrlose&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选转前面的, 再转后面的, 最后全转</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseLeftWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> l <span class="token operator">&lt;</span> r <span class="token punctuation">{</span>
        b<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
        l<span class="token operator">++</span>
        r<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="63"></span></p>`,4),we={id:"_59-i-滑动窗口的最大值",tabindex:"-1"},xe=n("a",{class:"header-anchor",href:"#_59-i-滑动窗口的最大值","aria-hidden":"true"},"#",-1),qe={href:"https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"},Ne=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键是要自己封装一个优先级队列</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 封装单调队列的方式解题</span>
<span class="token keyword">type</span> MyQueue <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    queue <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>MyQueue <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>MyQueue<span class="token punctuation">{</span>
        queue<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyQueue<span class="token punctuation">)</span> <span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> m<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyQueue<span class="token punctuation">)</span> <span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> m<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>queue<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyQueue<span class="token punctuation">)</span> <span class="token function">Empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>queue<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyQueue<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token operator">!</span>m<span class="token punctuation">.</span><span class="token function">Empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">&gt;</span> m<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        m<span class="token punctuation">.</span>queue <span class="token operator">=</span> m<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>queue<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    m<span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>queue<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>MyQueue<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>m<span class="token punctuation">.</span><span class="token function">Empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">==</span> m<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        m<span class="token punctuation">.</span>queue <span class="token operator">=</span> m<span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    queue <span class="token operator">:=</span> <span class="token function">NewMyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    res <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// 先将前k个元素放入队列</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 记录前k个元素的最大值</span>
    res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> k<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// 滑动窗口移除最前面的元素</span>
        queue<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token operator">-</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">// 滑动窗口添加最后面的元素</span>
        queue<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">// 记录最大值</span>
        res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="64"></span></p>`,4),je={id:"_60-n个骰子的点数",tabindex:"-1"},ze=n("a",{class:"header-anchor",href:"#_60-n个骰子的点数","aria-hidden":"true"},"#",-1),Ae={href:"https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},Le=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

 

示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]

示例 2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span id="65"></span></p>`,2);function Be(Ie,Se){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("本题还可以用原地交换去做,原地交换就是不断交换元素,直到nums[i]的位置到了i, 各部就班,如果有重复的直接返回 "),n("a",r,[s("这个题解写的不错"),e(a)])])]),d,n("h3",k,[v,s(),n("a",m,[s("09. 用两个栈实现队列"),e(a)])]),b,n("h3",h,[g,s(),n("a",f,[s("10- I. 斐波那契数列"),e(a)])]),_,n("h3",y,[w,s(),n("a",x,[s("10- II. 青蛙跳台阶问题"),e(a)])]),q,n("h3",N,[j,s(),n("a",z,[s("11. 旋转数组的最小数字"),e(a)])]),A,n("h3",L,[B,s(),n("a",I,[s("12. 矩阵中的路径"),e(a)])]),S,n("h3",T,[R,s(),n("a",O,[s("14- I. 剪绳子"),e(a)])]),V,n("h3",H,[C,s(),n("a",M,[s("14- II. 剪绳子 II"),e(a)])]),D,n("h3",E,[Q,s(),n("a",F,[s("15. 二进制中1的个数"),e(a)])]),P,n("h3",W,[U,s(),n("a",K,[s("16. 数值的整数次方"),e(a)])]),G,n("h3",J,[X,s(),n("a",Y,[s("17. 打印从1到最大的n位数"),e(a)])]),Z,n("h3",$,[nn,s(),n("a",sn,[s("18. 删除链表的节点"),e(a)])]),an,n("h3",en,[pn,s(),n("a",tn,[s("19. 正则表达式匹配"),e(a)])]),on,n("h3",cn,[ln,s(),n("a",un,[s("20. 表示数值的字符串"),e(a)])]),rn,n("h3",dn,[kn,s(),n("a",vn,[s("21. 调整数组顺序使奇数位于偶数前面"),e(a)])]),mn,n("h3",bn,[hn,s(),n("a",gn,[s("22. 链表中倒数第k个节点"),e(a)])]),fn,n("h3",_n,[yn,s(),n("a",wn,[s("24. 反转链表"),e(a)])]),xn,n("h3",qn,[Nn,s(),n("a",jn,[s("25. 合并两个排序的链表"),e(a)])]),zn,n("h3",An,[Ln,s(),n("a",Bn,[s("26. 树的子结构"),e(a)])]),In,n("h3",Sn,[Tn,s(),n("a",Rn,[s("27. 二叉树的镜像"),e(a)])]),On,n("h3",Vn,[Hn,s(),n("a",Cn,[s("28. 对称的二叉树"),e(a)])]),Mn,n("h3",Dn,[En,s(),n("a",Qn,[s("29. 顺时针打印矩阵"),e(a)])]),Fn,n("h3",Pn,[Wn,s(),n("a",Un,[s("30. 包含min函数的栈"),e(a)])]),Kn,n("h3",Gn,[Jn,s(),n("a",Xn,[s("31. 栈的压入、弹出序列"),e(a)])]),Yn,n("h3",Zn,[$n,s(),n("a",ns,[s("32 - I. 从上到下打印二叉树"),e(a)])]),ss,n("h3",as,[es,s(),n("a",ps,[s("32 - II. 从上到下打印二叉树 II"),e(a)])]),ts,n("h3",os,[is,s(),n("a",cs,[s("32 - III. 从上到下打印二叉树 III"),e(a)])]),ls,n("h3",us,[rs,s(),n("a",ds,[s("33. 二叉搜索树的后序遍历序列"),e(a)])]),ks,n("h3",vs,[ms,s(),n("a",bs,[s("34. 二叉树中和为某一值的路径"),e(a)])]),hs,n("h3",gs,[fs,s(),n("a",_s,[s("35. 复杂链表的复制"),e(a)])]),ys,n("h3",ws,[xs,s(),n("a",qs,[s("36. 二叉搜索树与双向链表"),e(a)])]),Ns,js,n("h3",zs,[As,s(),n("a",Ls,[s("37. 序列化二叉树"),e(a)])]),Bs,Is,n("h3",Ss,[Ts,s(),n("a",Rs,[s("38. 字符串的排列"),e(a)])]),Os,n("h3",Vs,[Hs,s(),n("a",Cs,[s("39. 数组中出现次数超过一半的数字"),e(a)])]),Ms,n("h3",Ds,[Es,s(),n("a",Qs,[s("40. 最小的k个数"),e(a)])]),Fs,n("h3",Ps,[Ws,s(),n("a",Us,[s("41. 数据流中的中位数"),e(a)])]),Ks,Gs,n("h3",Js,[Xs,s(),n("a",Ys,[s("42. 连续子数组的最大和"),e(a)])]),Zs,n("h3",$s,[na,s(),n("a",sa,[s("43. 1～n 整数中 1 出现的次数"),e(a)])]),aa,n("h3",ea,[pa,s(),n("a",ta,[s("44. 数字序列中某一位的数字"),e(a)])]),oa,n("h3",ia,[ca,s(),n("a",la,[s("Offer 46. 把数字翻译成字符串"),e(a)])]),ua,n("h3",ra,[da,s(),n("a",ka,[s("47. 礼物的最大价值"),e(a)])]),va,n("h3",ma,[ba,s(),n("a",ha,[s("48. 最长不含重复字符的子字符串"),e(a)])]),ga,n("h3",fa,[_a,s(),n("a",ya,[s("49. 丑数"),e(a)])]),n("p",null,[n("a",wa,[s("思路"),e(a)])]),xa,n("h3",qa,[Na,s(),n("a",ja,[s("50. 第一个只出现一次的字符"),e(a)])]),za,n("h3",Aa,[La,s(),n("a",Ba,[s("51. 数组中的逆序对"),e(a)])]),Ia,n("h3",Sa,[Ta,s(),n("a",Ra,[s("52. 两个链表的第一个公共节点"),e(a)])]),Oa,n("h3",Va,[Ha,s(),n("a",Ca,[s("53 - I. 在排序数组中查找数字 I"),e(a)])]),Ma,n("h3",Da,[Ea,s(),n("a",Qa,[s("53 - II. 0～n-1中缺失的数字"),e(a)])]),Fa,n("h3",Pa,[Wa,s(),n("a",Ua,[s("54. 二叉搜索树的第k大节点"),e(a)])]),Ka,n("h3",Ga,[Ja,s(),n("a",Xa,[s("55 - I. 二叉树的深度"),e(a)])]),Ya,n("h3",Za,[$a,s(),n("a",ne,[s("55 - II. 平衡二叉树"),e(a)])]),se,n("h3",ae,[ee,s(),n("a",pe,[s("56 - I. 数组中数字出现的次数"),e(a)])]),te,n("h3",oe,[ie,s(),n("a",ce,[s("56 - II. 数组中数字出现的次数 II"),e(a)])]),le,n("h3",ue,[re,s(),n("a",de,[s("57. 和为s的两个数字"),e(a)])]),ke,n("h3",ve,[me,s(),n("a",be,[s("58 - I. 翻转单词顺序"),e(a)])]),he,n("h3",ge,[fe,s(),n("a",_e,[s("58 - II. 左旋转字符串"),e(a)])]),ye,n("h3",we,[xe,s(),n("a",qe,[s("59 - I. 滑动窗口的最大值"),e(a)])]),Ne,n("h3",je,[ze,s(),n("a",Ae,[s("60. n个骰子的点数"),e(a)])]),Le])}const Oe=t(l,[["render",Be],["__file","offer.html.vue"]]);export{Oe as default};
