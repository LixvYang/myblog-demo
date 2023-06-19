const n=JSON.parse('{"key":"v-0f4688c6","path":"/posts/program/golang/sort/top10-sorting.html","title":"十大排序","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2021-11-23T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang","top10-sort"]},"headers":[{"level":3,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":3,"title":"冒泡排序","slug":"冒泡排序","link":"#冒泡排序","children":[]},{"level":3,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]},{"level":3,"title":"希尔排序---- 改进的插入排序","slug":"希尔排序-改进的插入排序","link":"#希尔排序-改进的插入排序","children":[]},{"level":3,"title":"归并排序","slug":"归并排序","link":"#归并排序","children":[]},{"level":3,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":3,"title":"堆排序","slug":"堆排序","link":"#堆排序","children":[]}],"git":{"createdTime":1686705181000,"updatedTime":1686715484000,"contributors":[{"name":"yanglixin","email":"yanglixin@qiniu.com","commits":3}]},"readingTime":{"minutes":7.58,"words":2275},"filePathRelative":"posts/program/golang/sort/top10-sorting.md","localizedDate":"2021年11月23日","excerpt":"<h1> 十大排序</h1>\\n<h3> 选择排序</h3>\\n<p>这是最简单也最没用的算法, 时间复杂度有O(n^2), 同时也不稳定</p>\\n<p>选择排序的思路特别简单: 第一遍找到最小的值把它放在最前面, 再遍历一次找到第二小的数放到第二个位置......</p>\\n<p>那么我们怎么开始写这个程序呢?</p>\\n<p>首先第一步是要找到最小的那个数, 如果遍历到的arr[j]比最小位置还要小,那么就让minPosition = j, 所以</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code>minPosition <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span>\\narr <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">for</span> j <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> <span class=\\"token function\\">len</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span>  <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">[</span>minPosition<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n    minPosition <span class=\\"token operator\\">=</span> j\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};