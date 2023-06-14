---
icon: edit
date: 2021-11-14
isOriginal: true
category:
  - tutorial
tag:
  - leetcode
  - offer
---

# 剑指offer 刷题笔记

关于剑指offer,其实今年前半年刷过一次,但许久未做题就遗忘了许多,这次边做题边记录一下做题过程,一方面可以让自己忘了的时候有可以复习的地方,再者也可以让读者查看作者的写题思路,供他人参考.

- [03. 数组中重复的数字](#1)
- [04. 二维数组中的查找](#2)
- [05. 替换空格](#3)
- [4](#4)
- [5](#5)
- [6](#6)
- [7](#7)
- [8](#8)
- [9](#9)
- [10](#10)


<span id="1"></span>

### [03. 数组中重复的数字]

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

> 本题可以直接用map做, 遍历的时候直接把数字放进map里如果出现过,直接返回
```go
func findRepeatNumber(nums []int) int {
  m := make(map[int]int)
  for i := 0; i < len(nums); i++ {
    if _, ok := m[nums[i]]; ok {
      return nums[i]
    }
    m[nums[i]] = nums[i]
  }
  return 1
}
```

> 本题还可以用原地交换去做,原地交换就是不断交换元素,直到nums[i]的位置到了i, 各部就班,如果有重复的直接返回
[这个题解写的不错](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/jian-zhi-offer-golangbao-mu-xi-lie-ti-ji-rwo5/)
```go
 func findRepeatNumber(nums []int) int {
       for i:=0;i<len(nums);i++{
           for nums[i]!=i{           //注意这里一定不能将for改为if
               if nums[nums[i]]==nums[i]{
                   return nums[i]    //返回重复元素
               }
               nums[i],nums[nums[i]]=nums[nums[i]],nums[i]  //不等就交换
           }
      }
      return 1
 }
```

<span id="2"></span>

### [04. 二维数组中的查找]

在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

```
示例:

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
```

> 本题可以直接俩for循环暴力去解题, 但如果真这样做就只能回去等通知了, 所以为了不避免回家等通知,我们得学会用一次for循环去解题

通过观察可以发现, 本题的二维数组是有规律排列的, 即**每一行都按照从左到右 非递减 的顺序排序**,这样我们可以通过一个for循环去控制遍历方向,所以遍历的起始位置也有讲究,即必须一个方向比自己大,另一个方向比自己小,这样才可以控制. 比如选择左下角的18为起始位置, target为5 , 那么18比5大,则往上走, 再继续10 比5大 则继续向上......

所以代码是这样的:
```go
func findNumberIn2DArray(matrix [][]int, target int) bool {
    m, n := len(matrix), len(matrix[0])
    x, y := 0, n-1
    for x < m && y >= 0 {
        if matrix[x][y] == target {
            return true
        }
        if matrix[x][y] > target {
            y--
        } else {
            x++
        }
    }
    return false
}
```
没什么好讲的了, 代码已经没法再简单了哈哈哈

<span id="3"></span>

### [05. 替换空格]

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
```
输入：s = "We are happy."
输出："We%20are%20happy."
```

本题可以直接创建一个slice去做, 一个for循环当遇到空格就加入'%20', 若不是空格就加入s[i]

当然如果这样本题就太简单了, 其实可以通过遍历一次计算空格的个数spaceCount, 创建一个slice空间大小是spaceCount*2+len(s), 接着从后往前遍历s去解题, 看了代码就知道了

为什么用字节数组做? 因为字节数组比较方便比较

```go
func replaceSpace(s string) string {
    b := []byte(s)
    spaceCount := 0
    for _, v := range b {
        if v == ' ' {
            spaceCount++
        }
    }

    tmp := make([]byte, spaceCount*2+len(s))
    i, j := len(b)-1, len(tmp)-1
    for i >= 0  {
        if b[i] != ' ' {
            tmp[j] = b[i]
            i--
            j--
        } else {
            tmp[j] = '0'
            tmp[j-1] = '2'
            tmp[j-2] = '%'
            i--
            j-=3
        }
    }
    return string(tmp)
}
```

<span id="4"></span>

### [06. 从尾到头打印链表]

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

```
输入：head = [1,3,2]
输出：[2,3,1]
```

这道题其实有俩思路,但其实差不多,一个是直接遍历链表从头到尾,放入数组里,然后反转数组.

还有一个是反转链表, 然后...装入数组...你看其实差不多吧?

```go
func reversePrint(head *ListNode) []int {
    rhead := reverseList(head)
    res := make([]int, 0)
    for rhead != nil {
        res = append(res, rhead.Val)
        rhead = rhead.Next
    }
    return res
}

func reverseList(head *ListNode) *ListNode {
    var pre *ListNode
    cur := head
    for cur != nil {
        next := cur.Next
        cur.Next = pre
        pre = cur
        cur = next
    }
    return pre
}
```
<span id="6"></span>

### [07. 重建二叉树]

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

```
示例 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

本题要注意,前序遍历,第一个元素就是根节点元素,知道这个做题就好做了,其实就是递归过程

```go
func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) < 1 || len(inorder) < 1 {
        return nil
    }

    nodeValue := preorder[0]
    left := findIndex(nodeValue, inorder)
    root := &TreeNode{
        Val: nodeValue,
        Left: buildTree(preorder[1:left+1], inorder[:left+1]),
        Right: buildTree(preorder[left+1:], inorder[left+1:]),
    }
    return root
}

func findIndex(target int, inorder []int) int {
    for i, v := range inorder {
        if v == target {
            return i
        }
    }
    return -1
}
```
<span id="7"></span>

### [09. 用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

```
输入：
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
```

其实需要做的事情, 不过是用俩栈, 搞成队列...

```go
type CQueue struct {
    stIn []int
    stOut []int
}


func Constructor() CQueue {
    return CQueue{
        stIn: make([]int, 0),
        stOut: make([]int, 0),
    }
}


func (this *CQueue) AppendTail(value int)  {
    this.stIn = append(this.stIn, value)
}


func (this *CQueue) DeleteHead() int {
     if len(this.stOut) == 0 {
        if len(this.stIn) == 0 {
            return -1
        }
        for len(this.stIn) != 0 {
            this.stOut = append(this.stOut, this.stIn[len(this.stIn)-1])
            this.stIn = this.stIn[:len(this.stIn)-1]
        }
    }

    value := this.stOut[len(this.stOut)-1]
    this.stOut = this.stOut[:len(this.stOut)-1]
    return value
}
```

<span id="8"></span>

### [10- I. 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/)

最简单的动态规划题了

```go
func fib(n int) int {
    if n < 2 {
        return n
    }
    mod := 1000000007
    dp := make([]int, n+1)
    dp[0] = 0
    dp[1] = 1
    for i := 2; i <= n; i++ {
        dp[i] = (dp[i-1]+dp[i-2])%mod
    }
    return dp[n]
}
```
<span id="9"></span>

### [10- II. 青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

其实和上一个题差不多

```go
func numWays(n int) int {
    if n == 1 || n == 2 {
        return n
    }

    dp := make([]int, n+1)

    dp[1] = 1
    dp[2] = 2
    for i := 3; i <= n; i++ {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
```

<span id="10"></span>

### [11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

旋转数字最小数字

首先，创建两个指针 leftleft, rightright 分别指向 numbersnumbers 首尾数字，然后计算出两指针之间的中间索引值 middlemiddle，然后我们会遇到以下三种情况：

middlemiddle > rightright ：代表最小值一定在 middlemiddle 右侧，所以 leftleft 移到 middle+1middle+1 的位置。

middlemiddle < rightright ：代表最小值一定在 middlemiddle 左侧或者就是 middlemiddle，所以 rightright 移到 middlemiddle 的位置。

middlemiddle 既不大于 leftleft 指针的值，也不小于 rightright 指针的值，代表着 middlemiddle 可能等于 leftleft 指针的值，或者 rightright 指针的值，我们这时候只能让 rightright 指针递减，来一个一个找最小值了。

```go
func minArray(numbers []int) int {
    low := 0
    high := len(numbers)-1

    for low < high {
        mid := low + (high-low)/2
        if numbers[mid] < numbers[high] {
            high = mid
        } else if numbers[mid] > numbers[high] {
            low = mid
        } else {
            high--
        }
    }
    return numbers[low]
}
```

<span id="11"></span>

### [12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)

给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

这应该是一个比较典型的回溯算法的题目

```go
func exist(board [][]byte, word string) bool {
    m, n := len(board), len(board[0])
    used := make([][]bool, m)
    for i := range used {
        used[i] = make([]bool, n)
    }

    var canFind func(r, c, i int) bool
    canFind = func(r, c, i int) bool {
        if i == len(word) {
            return true
        }

        if r >= m || r < 0 || c >= n || c < 0 {
            return false
        }

        // used[r][c]是为了避免回溯到自己或者之前的
        if board[r][c] != word[i] || used[r][c] {
            return false
        }

        used[r][c] = true
        if canFind(r-1, c, i+1) || canFind(r+1, c, i+1) || canFind(r, c+1, i+1) || canFind(r, c-1, i+1) {
            return true
        } else {
            used[r][c] = false
            return false
        }
    }
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if board[i][j] == word[0] && canFind(i, j, 0) {
                return true
            }
        }
    }
    return false
}
```

定义一个canFind函数, 

<span id="12"></span>

### [14- I. 剪绳子](https://leetcode.cn/problems/jian-sheng-zi-lcof/)

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
```
示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1

示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

这是一道很明显的动态规划题目

```go
func cuttingRope(n int) int {
    dp := make([]int, n+1)
    dp[1] = 1
	dp[2] = 1

    for i := 3; i <= n; i++ {
        for j := 1; j < i; j++ {
            dp[i] = max(dp[i], max(j*(i-j), j*dp[i-j]))
        }
    }
    return dp[n]
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

<span id="13"></span>


### [14- II. 剪绳子 II](https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/)

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

和上一题差不多...

```
func cuttingRope(n int) int {
if n==2 {
        return 1
    }else if n==3{
        return 2
    }
    var re int64
    re = 1
    for n>4 {
        n=n-3
        re = re*3
        re =re % 1000000007
    }
    return int(int64(n) * re % 1000000007)
}
```

<span id="14"></span>

### [15. 二进制中1的个数](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

这道题设计位运算, 根据 与运算 定义，设二进制数字 n，则有：
  - 若 n&1=0n&1=0 ，则 nn 二进制 最右一位 为 00 ；
  -  若 n&1=1n&1=1 ，则 nn 二进制 最右一位 为 11 。

根据以上特点，考虑以下 循环判断 ：
    判断 n 最右一位是否为 1 ，根据结果计数。
    将 n 右移一位（本题要求把数字 n 看作无符号数，因此使用 无符号右移 操作）。
初始化数量统计变量 res= 。
循环逐位判断： 当 n=0 时跳出。

    res += n & 1 ： 若 n&1=1，则统计数 res 加一。
    n >>= 1 ： 将二进制数字 n 无符号右移一位 。

返回统计数量 res。

```go
func hammingWeight(n uint32) int {
    res := 0
    for n > 0 {
        if n & 1 == 1 {
            res++
        } 
        n >>= 1
    }
    return res
}
```

<span id="15"></span>

### [16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
```
示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000

示例 2：

输入：x = 2.10000, n = 3
输出：9.26100

示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

这道题需要考虑n为负数的情况, 按位运算的问题

```go
func myPow(x float64, n int) float64 {
	if x == 0 {
        return 0
    }

    var res float64 = 1
    if n < 0 {
        x, n = 1/x, -n
    }
    for n > 0 {
        if n&1 == 1 {
            res *= x
        }
        x *= x
        n >>= 1
    }
    return res
}
```
<span id="16"></span>


### [17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```


<span id="17"></span>

### [18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

```
示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

和链表的常规操作一样需要定义虚拟头节点.

```go
func deleteNode(head *ListNode, val int) *ListNode {
    dummyHead := new(ListNode)
    dummyHead.Next = head
    cur := dummyHead

    for cur.Next != nil {
        if cur.Next == val {
            cur.Next = cur.Next.Next
        } else {
            cur = cur.Next
        }
    }

    return dummyHead.Next
}
```

<span id="18"></span>

### [19. 正则表达式匹配](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof) 

请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

```go
func isMatch(s string, p string) bool {
    m, n := len(s), len(p)

    dp := make([][]bool, m+1)
    for i := range dp {
        dp[i] = make([]bool, n+1)
    }

    dp[0][0] = true

    for j := 1; j <= n; j++ {
		if p[j-1] == '*' && dp[0][j-2] {
			dp[0][j] = true
		}
	}

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if s[i-1] == p[j-1] || p[j-1] == '.' {
                dp[i][j] = dp[i-1][j-1]
            } else {
                //
                if p[j-1] == '*' && j >= 2 {
                    if p[j-2] == '.' || p[j-2] == s[i-1] {
                        dp[i][j] = dp[i-1][j] || dp[i-1][j-2] || dp[i][j-2]
                    }else {
						dp[i][j] = dp[i][j-2]
					}
                }
            }
        }
    }

    return dp[m][n]
}
```

<span id="19"></span>


TODO
### [20. 表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/)


```
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

    若干空格
    一个 小数 或者 整数
    （可选）一个 'e' 或 'E' ，后面跟着一个 整数
    若干空格

小数（按顺序）可以分成以下几个部分：

    （可选）一个符号字符（'+' 或 '-'）
    下述格式之一：
        至少一位数字，后面跟着一个点 '.'
        至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
        一个点 '.' ，后面跟着至少一位数字

整数（按顺序）可以分成以下几个部分：

    （可选）一个符号字符（'+' 或 '-'）
    至少一位数字

部分数值列举如下：

    ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]

部分非数值列举如下：

    ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

```

<span id="20"></span>

### [21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

二分法, i, j双指针, 分别指向0, len(nums)-1, 同时当nums[i]为偶数, nums[j] 为奇数时, 交换, 并且当nums[i]为奇数 i++, num[j]为偶数, j--
```go
func exchange(nums []int) []int {
       i,j:=0,len(nums)-1
      for i<j {       //循环条件
          if nums[i]%2==0 && nums[j]%2!=0{   //满足则发生交换
              nums[i],nums[j]=nums[j],nums[i]
          }
          if nums[i]%2!=0{     //i往后走
              i++
          }
          if nums[j]%2==0{     //j往前走
              j--
          }
      }
      return nums
}
```

<span id="21"></span>

### [22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

链表的常规题, 定义一个虚拟头节点, 通过虚拟节点搞事情
```go
func getKthFromEnd(head *ListNode, k int) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head
    pre, cur := dummy, head

    for k>0 {
        cur = cur.Next
        k--
    }

    for cur != nil {
        cur = cur.Next
        pre = pre.Next
    }

    return pre.Next
}
```
当然也可以
```go
func getKthFromEnd(head *ListNode, k int) *ListNode {
    cur := head

    for k > 0 {
        cur = cur.Next
        k--
    }

    for cur != nil {
        cur = cur.Next
        head = head.Next
    }
    return head
}
```

<span id="22"></span>

### [24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

好像没什么解释的, pre相当与虚拟头节点, 但充当一个缓冲的作用

```go
func reverseList(head *ListNode) *ListNode {
    var pre *ListNode
    cur := head

    for cur != nil {
        next := cur.Next
        cur.Next = pre
        pre = cur
        cur = next
    }

    return pre
}

func reverseList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    node := reverseList(head>Next)
    head.Next.Next = head
    head.Next = nil
    return node
}
```

<span id="23"></span>

### [25. 合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
```
示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

可以声明一个虚拟头节点, 然后迭代法不断迭代

```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    head := &ListNode{}
    cur := head

    for l1 != nil && l2 != nil {
        if l1.Val >= l2.Val {
            cur.Next = l2
            l2 = l2.Next
        } else {
            cur.Next = l1
            l1 = l1.Next
        }
        cur = cur.Next
    }
    if l1 == nil {
        cur.Next = l2
    }

    if l2 == nil {
        cur.Next = l1
    }
    return head.Next
}
```

也可以使用递归法

```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    if l1==nil{   //递归终止条件
        return l2
    } 
    if l2==nil{    //递归终止条件
        return l1 
    }
    if l1.Val>l2.Val{  //交换两节点
        l1,l2=l2,l1
    }
    l1.Next=mergeTwoLists(l1.Next,l2)  //递归
    return l1
}
```

<span id="24"></span>

### [26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。
```
示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false

示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

```go

func isSubStructure(A *TreeNode, B *TreeNode) bool {
    // 特例处理： 当 树 AA 为空 或 树 BB 为空 时，直接返回 falsefalse ；
    // 返回值： 若树 BB 是树 AA 的子结构，则必满足以下三种情况之一，因此用或 || 连接；

    // 以 节点 AA 为根节点的子树 包含树 BB ，对应 recur(A, B)；
    // 树 BB 是 树 AA 左子树 的子结构，对应 isSubStructure(A.left, B)；
    // 树 BB 是 树 AA 右子树 的子结构，对应 isSubStructure(A.right, B)；
  
    if A == nil && B == nil {
        return false
    }


    var recue func(A, B *TreeNode) bool
    recue = func(A, B *TreeNode) bool {
        // 1. 递归参数 俩节点
        // 2. 递归判断 当B为nil, 说明递归到了子节点的子节点完成匹配 return true
        //            当 A为nil || A.Val == B.Val 说明匹配失败 返回 return false

        // 3. 递归逻辑
        // 判断 AA 和 BB 的左子节点是否相等，即 recur(A.left, B.left) ；
        // 判断 AA 和 BB 的右子节点是否相等，即 recur(A.right, B.right) ；
        if B == nil {
            return true
        }

        if A == nil || A.Val != B.Val {
            return false
        }

        return recue(A.Left, B.Left) && recue(A.Right, B.Right)
    }

    return recue(A, B) || isSubStructure(A.Left, B), isSubStructure(A.Right, B)
}
```

<span id="25"></span>

### [27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

```go
func mirrorTree(root *TreeNode) *TreeNode {

    var traverse func(node *TreeNode) 
    // 1. 递归参数 node
    traverse = func(node *TreeNode) {
        // 2. 递归终止逻辑 node == nil
        if node == nil {
            return
        }
        // 3. 单层执行逻辑
        node.Left, node.Right = node.Right, node.Left
        traverse(node.Left)
        traverse(node.Right)
    }

    traverse(root)

    return root
}
```
<span id="26"></span>


### [28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
```
示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
```

```go
func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return true
    }
    // 1. 递归参数, 俩节点
    var traverse func(left, right *TreeNode) bool
    traverse = func(left, right *TreeNode) bool {
        // 2. 递归终止逻辑 left == nil && right == nil true
         if left == nil && right == nil {
            return true
        }
        // 2. 递归终止逻辑 left == nil || right == nil false
        if left == nil || right == nil {
            return false
        }

        if left.Val != right.Val {
            return false
        }
        // 3. 单层逻辑
        return traverse(left.Left, right.Right) && traverse(left.Right, right.Left)
    }
    return traverse(root.Left, root.Right)
}
```

<span id="27"></span>

### [29. 顺时针打印矩阵](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

```
示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

```go
func spiralOrder(matrix [][]int) []int {
    if len(matrix)==0{
        return nil
    }
    res:=[]int{}
    top,bottom,left,right :=0,len(matrix)-1,0,len(matrix[0])-1  //初始边界
    for bottom>=top && right>=left{                             //循环条件，下大于等于上，右大于等于左
        for i:=left;i<=right;i++{   //top行的从左到右遍历
            res=append(res,matrix[top][i])
        }
        top++                       //top行遍历完了，top往下移动
        for i:=top;i<=bottom;i++{   //right列的从上到下遍历
            res=append(res,matrix[i][right])
        }
        right--                       //right列遍历完了，right向左移动
        if left>right || top>bottom{  //这里一定要做一个判断，因为如果只剩下一个元素就会出错
            break
        }
        for i:=right;i>=left;i--{      //bottom行的从右往左遍历
            res=append(res,matrix[bottom][i])
        }
        bottom--                         //bottom往上移动
        for i:=bottom;i>=top;i--{        //left列的从下到上遍历
            res=append(res,matrix[i][left])
        }
        left++                             //left向右移动
    }
    return res
}
```


<span id="28"></span>

### [30. 包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/)

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

```
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

定义一个minArr, 放的是最小的数字

```go
type MinStack struct {
    stack []int
    minArr []int
}


/** initialize your data structure here. */
func Constructor() MinStack {
    return MinStack{}
}


func (this *MinStack) Push(x int)  {
    if len(this.minArr)==0 || x < this.minArr[len(this.minArr)-1] {
        this.minArr = append(this.minArr, x)
    } else {
        this.minArr = append(this.minArr, this.minArr[len(this.minArr)-1])
    }
    this.stack = append(this.stack, x)
}


func (this *MinStack) Pop()  {
    this.stack = this.stack[:len(this.stack)-1]
    this.minArr = this.minArr[:len(this.minArr)-1]
}


func (this *MinStack) Top() int {
    return this.stack[len(this.stack)-1]
}


func (this *MinStack) Min() int {
    return this.minArr[len(this.minArr)-1]
}
```

<span id="29"></span>

### [31. 栈的压入、弹出序列](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

```
示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

可以通过辅助stack做

```go
func validateStackSequences(pushed []int, popped []int) bool {
    stack := make([]int, 0)

    i := 0
    for _, v := range pushed {
        stack = append(stack, v)

        for len(stack) > 0 && stack[len(stack)-1] == popped[i] {
            stack = stack[:len(stack)-1]
            i++
        }
    }
    return !(len(stack) > 0)
}
```

<span id="30"></span>

### [32 - I. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

```
例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回：

[3,9,20,15,7]
```

层序遍历没啥好解释的

```go
func levelOrder(root *TreeNode) []int {

    res := make([]int, 0)
    stack := make([]*TreeNode, 0)
    stack = append(stack, root)

    for len(stack) > 0 {
        length := len(stack)
        for i := 0; i < length; i++ {
            node := stack[0]
            stack = stack[1:]
            res = append(res, node.Val)
            if node.Left != nil {
                stack = append(stack, node.Left)
            }
            if node.Right != nil {
                stack = append(stack, node.Right)
            }
        }
    }

    return res
}
```

<span id="31"></span>

### [32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

```


例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
```


```go
func levelOrder(root *TreeNode) [][]int {
    res:=[][]int{}
    if root==nil{//防止为空
        return res
    }

    queue := make([]*TreeNode, 0)
    queue = append(queue, root)
    for len(queue) > 0 {
        length := len(queue)
        tmpArr := make([]int, 0)
        for i := 0; i < length; i++ {
            node := queue[0]
            queue = queue[1:]
            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
            tmpArr = append(tmpArr, node.Val)
        }
        res = append(res, tmpArr)
        tmpArr = []int{}
    }
    return res
}
```

<span id="32"></span>

### [32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

```
例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
```

```go
func levelOrder(root *TreeNode) [][]int {
    res:=[][]int{}
    if root==nil{//防止为空
        return res
    }

    queue := make([]*TreeNode, 0)
    queue = append(queue, root)
    for len(queue) > 0 {
        length := len(queue)
        tmpArr := make([]int, 0)
        for i := 0; i < length; i++ {
            node := queue[0]
            queue = queue[1:]
            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
            tmpArr = append(tmpArr, node.Val)
        }
        res = append(res, tmpArr)
        tmpArr = []int{}
    }

    for i := 0; i < len(res); i++ {
        if i % 2 == 1 {
            reverse(res[i])
        }
    }
    return res
}

func reverse(nums []int) {
    l, r := 0, len(nums)-1
    for l < r {
        nums[l], nums[r] = nums[r], nums[l]
        l++
        r--
    }
}
```

<span id="33"></span>

### [33. 二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

```
参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3

示例 1：

输入: [1,6,3,2,5]
输出: false

示例 2：

输入: [1,3,2,6,5]
输出: true
```

<span id="34"></span>

### [34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

```go
func pathSum(root *TreeNode, targetSum int) [][]int {
    res := [][]int{}
    path := []int{}
    if root == nil {
        return res
    }
    path = append(path, root.Val)
    traverse(root, targetSum-root.Val, path, &res)
    return res
}

func traverse(node *TreeNode, count int, path []int, res *[][]int) {
    if node.Left == nil && node.Right == nil && count == 0 {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
        return
    }

    if node.Left == nil && node.Right == nil {
        return
    }

    if node.Left != nil {
        path = append(path, node.Left.Val)
        count -= node.Left.Val
        traverse(node.Left, count, path, res)
        count += node.Left.Val
        path = path[:len(path)-1]
    }

     if node.Right != nil {
        path = append(path, node.Right.Val)
        count -= node.Right.Val
        traverse(node.Right, count, path, res)
        count += node.Right.Val
        path = path[:len(path)-1]
    }
    return
}
```

<span id="35"></span>

### [35. 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)

请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。



```go
func copyRandomList(head *Node) *Node {
    if head == nil {
        return nil
    }
    // map中存的是（原节点->新节点）的映射关系，此时新节点只有val，指针并没有安排上
    m := make(map[*Node]*Node)
    for cur := head; cur != nil; cur = cur.Next {
        m[cur] = &Node{Val: cur.Val}
    }
    // 将新节点串起来，组成新链表
    for cur := head; cur != nil; cur = cur.Next {
        m[cur].Next = m[cur.Next]
        m[cur].Random = m[cur.Random]
    }
    return m[head]
}
```

<span id="36"></span>

### [36. 二叉搜索树与双向链表](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)

TODO

<span id="37"></span>

### [37. 序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/)

TODO

<span id="38"></span>

### [38. 字符串的排列](https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/)  

输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

```
示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

这个版本不正确,后面有时间再改
# DEBUG

```go
func permutation(s string) []string {
    b := []byte(s)
    used := make([]bool, len(s))
    res := []string{}
    backtracking(b, 0, []byte{}, &res, used)
    return res
}

func backtracking(b []byte, n int, path []byte, res *[]string, used []bool) {
    if n == len(b) {
        temp := make([]byte, n)
        copy(temp, path)
        *res = append(*res, string(temp))
        return
    }

    for i := 0; i < len(b); i++ {
        if used[i] {
            continue
        }
        used[i] = true
        path = append(path, b[i])
        backtracking(b, n+1, path, res, used)
        path = path[:len(path)-1]
        used[i] = false
    }
}
```

<span id="39"></span>

### [39. 数组中出现次数超过一半的数字](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)
```
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

这是一个用map就可以解决的问题

```go
func majorityElement(nums []int) int {
    m := make(map[int]int)
    for i := 0; i < len(nums); i++ {
        m[nums[i]]++
    }
    for k, v := range m {
        if v > len(nums)/2 {
            return k
        }
    }
    return 0
}
```

<span id="40"></span>

### [40. 最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/)

```
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
```

堆排序

```go
func getLeastNumbers(arr []int, k int) []int {
    heap_sort(arr, len(arr))
    return arr[:k]
}


// n 数组长度 i待维持下标
func heapify(arr []int, len, i int) {
	largest := i
	lson := i*2 + 1;
	rson := i*2 + 2;

	if lson < len && arr[largest] < arr[lson] {
		largest = lson
	}

	if rson < len && arr[largest] < arr[rson] {
		largest = rson
	}

	if largest != i {
		arr[largest], arr[i] = arr[i], arr[largest]
		heapify(arr, len, largest)
	}
}

func heap_sort(arr []int, n int) {
	// 建堆
	for i := n/2-1; i >= 0; i-- {
		heapify(arr, n, i)
	}

	// 排序
	for i := n-1; i > 0; i-- {
		arr[i], arr[0] = arr[0], arr[i]
		heapify(arr, i, 0)
	}
}
```
<span id="41"></span>

### [41. 数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

TODO

<span id="42"></span>

### [42. 连续子数组的最大和](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)

```
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

动态规划

```go
func maxSubArray(nums []int) int {
    max := nums[0]

    for i :=1;i<len(nums);i++ {
        if nums[i]+nums[i-1] > nums[i] {
            nums[i] +=nums[i-1]
        }

        if nums[i] > max {
            max = nums[i]
        }
    }

    return max
}
```

<span id="43"></span>

### [43. 1～n 整数中 1 出现的次数](https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/)

```
输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

 

示例 1：

输入：n = 12
输出：5

示例 2：

输入：n = 13
输出：6
```

TODO

<span id="44"></span>

### [44. 数字序列中某一位的数字](https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/)
```
数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

示例 1：

输入：n = 3
输出：3

示例 2：

输入：n = 11
输出：0
```

```go
func findNthDigit(n int) int {
    // digit 是有几位树  
    // digitNum 是 几位树的总个数 比如 10 180 2700
    // count 是减去的树
    digit,digitNum,count := 1,1,9
    for n>count{
        n -= count
        digit++
        digitNum *= 10
        count = 9*digit*digitNum
    }
    // 求出num是多少
    num := digitNum + (n-1)/digit
    // 求出 n-1是多少
    index := (n-1)%digit

    numStr := strconv.Itoa(num)
    return int(numStr[index]-'0')
}
```
 
<span id="45"></span>

### [Offer 46. 把数字翻译成字符串](https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

```
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```


这道题和青蛙上台阶一样

```go
func translateNum(num int) int {
    if num < 10 {
        return 1
    }

    str := strconv.Itoa(num)
    N := len(str)
    dp := make([]int, N+1)
    dp[0] = 1
    dp[1] = 1
    
    for i := 2; i < N+1; i++ {
        temp := string(str[i-2])+string(str[i-1])
        if temp >= "10" && temp <= "25" {
            dp[i] = dp[i-1] + dp[i-2]
        } else {
            dp[i] = dp[i-1]
        }
    }
    fmt.Println(dp)
    return dp[N]
}
```

<span id="46"></span>

### [47. 礼物的最大价值](https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/)

在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

```
示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

这个题挺简单的, 思路只能向右向下
```go
func maxValue(grid [][]int) int {
    if len(grid) == 0 || len(grid[0]) == 0 {
        return 0
    }

    m,n:= len(grid),len(grid[0])
    for i:=1;i<m;i++ {
        grid[i][0] +=  grid[i-1][0]
    }
    for j:=1;j<n;j++ {
        grid[0][j] += grid[0][j-1]
    }

    for i:=1;i<m;i++ {
        for j:=1;j<n;j++ {
            grid[i][j] += max(grid[i-1][j],grid[i][j-1])
        }
    }

    return grid[m-1][n-1]
}

func max(a,b int) int {
    if a > b {
        return a
    }
    return b
}
```

<span id="47"></span>

### [48. 最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
```
示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

滑动窗口做
```go
func lengthOfLongestSubstring(s string) int {
    m := make(map[byte]int)
    n := len(s)
    rk, ans := -1, 0
    for i := 0; i < n; i++ {
        if i  != 0 {
            delete(m, s[i-1])
        }
        for rk+1 < n && m[s[rk+1]] == 0 {
            m[s[rk+1]]++
            rk++
        }
        ans = max(ans, rk-i+1)
    }
    return ans
}

func max(x, y int) int {
    if x < y {
        return y
    }
    return x
}
```

<span id="48"></span>

### [49. 丑数](https://leetcode.cn/problems/chou-shu-lcof/)

[思路](https://leetcode.cn/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/)

```
我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。


示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```

```go
func nthUglyNumber(n int) int {
    a, b, c := 0, 0, 0
    dp := make([]int, n)
    dp[0] = 1
    for i := 1; i < n; i++ {
        n2, n3, n5 := dp[a]*2, dp[b]*3, dp[c]*5
        dp[i] = min(n2, min(n3, n5))
        if dp[i] == n2 {
            a++
        } 
        if dp[i] == n3 {
            b++
        }
        if dp[i] == n5 {
            c++
        }
    }   
    return dp[n-1]
}



func min(a, b int) int {
    if a > b {
        return b
    }
    return a
}
```

<span id="49"></span>

### [50. 第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

```
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = "abaccdeff"
输出：'b'

示例 2:

输入：s = "" 
输出：' '
```

```go
func firstUniqChar(s string) byte {
var res [26]int
    for i:=0;i<len(s);i++{
        res[s[i]-'a']++ 
    }
    for i:=0;i<len(s);i++{
    if res[s[i]-'a']==1{ //这里千万不能写成res[i]==1，因为res前面的元素顺序对应为abcd，他们的值可能为1但是不一定是在s中第一个出现一次的字符
            return s[i]
        }
    }
    return ' '

}
```

<span id="50"></span>

### [51. 数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)
```
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

 

示例 1:

输入: [7,5,6,4]
输出: 5
```

TODO


```go
func reversePairs(nums []int) int {
    return mergeSort(nums, 0, len(nums)-1)
}

func mergeSort(nums []int, start, end int) int {
    if start >= end {
        return 0
    }
    mid := start + (end - start)/2
    cnt := mergeSort(nums, start, mid) + mergeSort(nums, mid + 1, end)
    tmp := []int{}
    i, j := start, mid + 1
    for i <= mid && j <= end {
        if nums[i] <= nums[j] {
            tmp = append(tmp, nums[i])
            cnt += j - (mid + 1)
            i++
        } else {
            tmp = append(tmp, nums[j])
            j++
        }
    }
    for ; i <= mid; i++ {
        tmp = append(tmp, nums[i])
        cnt += end - (mid + 1) + 1
    }
    for ; j <= end; j++ {
        tmp = append(tmp, nums[j])
    }
    for i := start; i <= end; i++ {
        nums[i] = tmp[i - start]
    }
    return cnt
}

```

<span id="51"></span>

### [52. 两个链表的第一个公共节点](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    curA := headA
    curB := headB
    lenA, lenB := 0, 0
    // 求A，B的长度
    for curA != nil {
        curA = curA.Next
        lenA++
    }
    for curB != nil {
        curB = curB.Next
        lenB++
    }
    var step int
    var fast, slow *ListNode
    // 请求长度差，并且让更长的链表先走相差的长度
    if lenA > lenB {
        step = lenA - lenB
        fast, slow = headA, headB
    } else {
        step = lenB - lenA
        fast, slow = headB, headA
    }
    for i:=0; i < step; i++ {
        fast = fast.Next
    }
    // 遍历两个链表遇到相同则跳出遍历
    for fast != slow {
        fast = fast.Next
        slow = slow.Next
    }
    return fast
}
```

<span id="52"></span>

### [53 - I. 在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

```
统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```

```go
func search(nums []int, target int) int {
    m := make(map[int]int)
    for i := 0; i < len(nums); i++ {
        m[nums[i]]++
    }
    return m[target]
}
```
或者用二分法做
```go
func search(nums []int, target int) int {
    
    if len(nums) == 0 {
        return 0 
    }
    if len(nums) ==1 && target == nums[0] {
        return 1
    }

    lo,hi := 0, len(nums)-1
    index :=-1

    for lo <= hi {
        i := (lo+hi) >> 1
        if nums[i] == target {
            index = i
            break
        }  else if nums[i] > target {
            hi = i-1
        } else {
            lo = i+1
        }
    }
    
    if index == -1 {
        return 0
    }
    // 分别向两边扩展
    cnt :=0
    for i:=index;i>=0 && nums[i]== target;i-- {
        cnt++
    }
    for i:= index;i<len(nums) && nums[i]== target;i++ {
        cnt++
    }
    return cnt-1
}
```

<span id="53"></span>

### [53 - II. 0～n-1中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/)
```
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
示例 1:

输入: [0,1,3]
输出: 2

示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```
初始化： 左边界 left = 0 ，右边界 right = len(nums)−1 ；代表闭区间 [left, right] 。
循环二分： 当 left ≤ right 时循环 （即当闭区间 [left, j] 为空时跳出） ；

    计算中点 mid = (left + right)//2 ，其中 "//" 为向下取整除法；
    若 nums[mid] = mid ，说明mid前面的元素肯定都是完整的不少元素所以只需要继续二分右边的数组即可，则 “右子数组的首位元素” 一定在闭区间 [mid+1, right] 中，因此执行 left = mid+1；
    若 nums[mid] != mid ，说明mid前面的元素就有少的所以只要继续二分左边的数组即可，则 “左子数组的末位元素” 一定在闭区间 [left, mid−1] 中，因此执行 right = mid−1；

返回值： 跳出时，变量 i 和 j 分别指向 “右子数组的首元素” 和 “左子数组的末元素” 。因此返回 i 即可。
```go
func missingNumber(nums []int) int {
    l, r := 0, len(nums)-1
    for l <= r {
        mid := l + (r-l)/2
        if nums[mid] == mid {
            l = mid+1
        } else {
            r = mid-1
        }
        fmt.Println(l)
    }
    return l
}
```
<span id="54"></span>

### [54. 二叉搜索树的第k大节点](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

```
给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4

示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

逆中序

```go
func kthLargest(root *TreeNode, k int) int {
     var dfs func(*TreeNode)
    var res = -1
    dfs = func(node *TreeNode){
        if node == nil{
            return 
        }
        dfs(node.Right)
        k--
        if k == 0 {
            res = node.Val
            return 
        }
        dfs(node.Left)
    }
    dfs(root)
    return res
}
```

<span id="55"></span>

### [55 - I. 二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/)

```
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7

返回它的最大深度 3 。
```

```go
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    leftH := maxDepth(root.Left)
    rightH := maxDepth(root.Right)
    return 1 + max(leftH, rightH)
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

<span id="56"></span>

### [55 - II. 平衡二叉树](https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/)
```
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7

返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

```go
func isBalanced(root *TreeNode) bool {
    if root == nil {
        return true
    }
    // 还需要查看是否平衡
    if !isBalanced(root.Left) || !isBalanced(root.Right){
        return false
    }

    lH := getHigh(root.Left)
    rH := getHigh(root.Right)
    if abs(rH - lH) <= 1 {
        return true
    }
    return false
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}

func getHigh(root *TreeNode) int {
    if root == nil {
        return 0
    }
    return max(getHigh(root.Left), getHigh(root.Right)) + 1
}
```

<span id="57"></span>

### [56 - I. 数组中数字出现的次数](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

```
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```

TODO
```go
func singleNumbers(nums []int) []int {
    var xor int
    for _, num := range nums{
        xor ^= num
    }
    var flag = 1
    for xor & 1 == 0 {
        flag <<= 1
        xor >>=1
    }
    var x, y int
    for _, num := range nums{
        if num & flag != 0{
            x ^= num
        }else{
            y ^= num
        }
    }
    return []int{x, y}
}
```



<span id="58"></span>

### [56 - II. 数组中数字出现的次数 II](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

```
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

示例 1：

输入：nums = [3,4,3,3]
输出：4

示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
```


```go
func singleNumber(nums []int) int {
    var bits = make([]int, 32)
    for _, num := range nums{
        for i := 0; i < 32; i++{
            bits[i] += num & 1
            num >>= 1
        }
    }
    var res = 0
    for j := 31; j >= 0; j--{
        res <<= 1
        res |= bits[j] % 3
    }
    return res
}
```

<span id="59"></span>

### [57. 和为s的两个数字](https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/)
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

```
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```
双指针
```go
func twoSum(nums []int, target int) []int {
    lo, hi := 0, len(nums)-1

    for lo < hi {
        s := nums[lo] + nums[hi]
        if s > target {
            hi--
        } else if s < target {
            lo++
        } else {
            return []int{nums[lo],nums[hi]}
        }
    }

    return nil
}
```

<span id="60"></span>

### [58 - I. 翻转单词顺序](https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/)
```
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

示例 1：

输入: "the sky is blue"
输出: "blue is sky the"

示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

<span id="61"></span>

### [58 - I. 翻转单词顺序]()

```
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
示例 1：

输入: "the sky is blue"
输出: "blue is sky the"

示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```


```go
func reverseWords(s string) string {
    var res string
    i, j := len(s)-1, len(s)-1

    for i >= 0 {
        for i >= 0 && s[i] == ' ' {
            i--
        }
        j = i
        for i >= 0 && s[i] != ' ' {
            i--
        }
        res += s[i+1:j+1] + " "
    }
    return strings.TrimRight(res, " ")
}
```

<span id="62"></span>

### [58 - II. 左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

```
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"

示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```

选转前面的, 再转后面的, 最后全转

```go
func reverseLeftWords(s string, n int) string {
    b := []byte(s)
    reverse(b, 0, n-1)
    reverse(b, n, len(b)-1)
    reverse(b, 0, len(b)-1)
    return string(b)
}

func reverse(b []byte, l, r int) {
    for l < r {
        b[l], b[r] = b[r], b[l]
        l++
        r--
    }
}
```

<span id="63"></span>

### [59 - I. 滑动窗口的最大值](https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

```
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

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
```

关键是要自己封装一个优先级队列

```go
// 封装单调队列的方式解题
type MyQueue struct {
    queue []int
}

func NewMyQueue() *MyQueue {
    return &MyQueue{
        queue: make([]int, 0),
    }
}

func (m *MyQueue) Front() int {
    return m.queue[0]
}

func (m *MyQueue) Back() int {
    return m.queue[len(m.queue)-1]
}

func (m *MyQueue) Empty() bool {
    return len(m.queue) == 0
}

func (m *MyQueue) Push(val int) {
    for !m.Empty() && val > m.Back() {
        m.queue = m.queue[:len(m.queue)-1]
    }
    m.queue = append(m.queue, val)
}

func (m *MyQueue) Pop(val int) {
    if !m.Empty() && val == m.Front() {
        m.queue = m.queue[1:]
    }
}

func maxSlidingWindow(nums []int, k int) []int {
    queue := NewMyQueue()
    length := len(nums)
    res := make([]int, 0)
    // 先将前k个元素放入队列
    for i := 0; i < k; i++ {
        queue.Push(nums[i])
    }
    // 记录前k个元素的最大值
    res = append(res, queue.Front())

    for i := k; i < length; i++ {
        // 滑动窗口移除最前面的元素
        queue.Pop(nums[i-k])
        // 滑动窗口添加最后面的元素
        queue.Push(nums[i])
        // 记录最大值
        res = append(res, queue.Front())
    }
    return res
}
```

<span id="64"></span>

### [60. n个骰子的点数](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/)

```
把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

 

示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]

示例 2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]
```



<span id="65"></span>






