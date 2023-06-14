---
icon: edit
date: 2021-11-03
isOriginal: true
category:
  - tutorial
tag:
  - leetcode
  - backtrack
---

# 回溯算法

[学习笔记](https://www.programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98)

- [组合](#组合)
- [切割](#切割)
- [子集](#子集)
- [排列](#排列)
- [棋盘](#棋盘)


回溯算法其实是一个非常低效率的算法，它的本质其实就是穷举，让计算机算出所有的可能。但有些问题能求出解就不错了，压根没办法通过别的方法去试出来。

回溯法，一般可以解决如下几种问题：
- 组合问题：N个数里面按一定规则找出k个数的集合
- 切割问题：一个字符串按一定规则有几种切割方式
- 子集问题：一个N个数的集合里有多少符合条件的子集
- 排列问题：N个数按一定规则全排列，有几种排列方式
- 棋盘问题：N皇后，解数独等等

回溯法解决的问题都可以抽象为树形结构，是的，我指的是所有回溯法的问题都可以抽象为树形结构！

因为回溯法解决的都是在集合中递归查找子集，集合的大小就构成了树的宽度，递归的深度，都构成的树的深度。

递归就要有终止条件，所以必然是一棵高度有限的树（N叉树）。

一般的回溯代码会长成这个样子：
```go
func backtrack(参数) {
  if (终止条件) {
    存放结果
    return;
  }

  for 选择：本层集合中元素（树中节点孩子的数量就是集合的大小 {
    处理节点;
    backtrack(路径，选择列表); // 递归
    回溯，撤销处理结果
  }
}
```
<span id="组合"></span>

## 组合

#### [77. 组合](https://leetcode.cn/problems/combinations/)

依据上述的代码框架很容易得到代码其实应该长这个样子
```go
func combine(n int, k int) [][]int {
    res := [][]int{}
    backtrack(1, n, k, &res, []int{})
    return res
}

func backtrack(startIndex,n, k int, res *[][]int, path []int) {
    if len(path) == k {
        tmp := make([]int, k)
        copy(tmp, path)
        *res = append(*res, tmp)
    }

    for i := startIndex; i <= n; i++ {
        path = append(path, i)
        backtrack(i+1, n, k, res, path)
        path = path[:len(path)-1]
    }
}
```
这个代码放进去其实就可以运行了，但这里其实还有一个更高效的剪枝操作，就是原来有些不需要的递归是可以直接return出去的。

那么我们已经递归到某一个位置，已经选择的元素的个数为`len(path)`, 所需的元素个数就是`k-len(path)`， 接下来我们递归到的地方所剩余元素个数为`(n-i)` 需要 `>= k-len(path)`，所以这里我们的剪枝代码就是`n-i +1 < k-len(path)` 这里为什么要+1呢？因为起始位置是从1开始的而不是0, 所以我们需要在左侧+1

所以之后的回溯代码为
```go

func backtrack(startIndex,n, k int, res *[][]int, path []int) {
    if len(path) == k {
        tmp := make([]int, k)
        copy(tmp, path)
        *res = append(*res, tmp)
    }
    
    if n-startIndex +1 < k-len(path) {
        return
    }

    for i := startIndex; i <= n; i++ {
        path = append(path, i)
        backtrack(i+1, n, k, res, path)
        path = path[:len(path)-1]
    }
}
```
#### [216. 组合总和III](https://leetcode.cn/problems/combination-sum-iii/)

这个代码是这个样子

```go
func combinationSum3(k int, n int) [][]int {
    var res [][]int
    backtraverse(k, n, []int{}, &res, 1, 0)
    return res
}

func backtraverse(k, n int, path []int, res *[][]int, startIndex int, sum int) {
  // 剪枝操作
  if sum > n {
    return
  }

  if len (path) == k {
    // 深拷贝
    tmp := make([]int, k)
    copy(tmp, path)
    *res = append(*res, tmp)
    return
  }

  for i := startIndex; i <= 9; i++ {
      sum += i
      path = append(path, i)
      backtraverse(k, n, path, res, i+1, sum)
      path = path[:len(path)-1]
      sum -= i
  }
}
```
<span id="切割"></span>

#### [17. 电话号码的字母总和](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

这个题的关键是如何将输入的数字转换为字母，其实可以通过map映射或者直接用Map`map[int]string`就可以，当然也可以直接通过一个数组`digitsMap := [...]string{}`进行转换。

```go
func letterCombinations(digits string) []string {
    if len(digits) == 0 {
        return []string{}
    }

    digitsMap := map[int]string{
        0: "",
        1: "",
        2: "abc", 
        3: "def", 
        4: "ghi", 
        5: "jkl", 
        6: "mno", 
        7: "pqrs",
        8: "tuv", 
        9: "wxyz",
    }

    res := make([]string, 0)
    backtarcing("", digits, 0, digitsMap, &res) 
    return res
}


func backtarcing(tmpString string, digits string, Index int, digitsMap map[int]string, res *[]string) {
    if len(tmpString) == len(digits) {
        // 字符串不用考虑深拷贝问题 
        *res = append(*res, tmpString)
        return
    }

    // 关键 1. 通过tmpK找到相对应的字符串
    tmpK := digits[Index]-'0'
    letter := digitsMap[int(tmpK)]
    for i := 0; i < len(letter); i++ {
        tmpString = tmpString + string(letter[i])
        // 关键 2. 这里的startIndex 没有用i+1, 是因为这里回溯的其实是digits第二个数字， 所以不需要startIndex去回溯
        backtarcing(tmpString, digits, Index+1, digitsMap, res)
        tmpString = tmpString[:len(tmpString)-1]
    }
}
```

#### [39. 组合总和](https://leetcode.cn/problems/combination-sum/submissions/)

需要注意上一个是不需要startIndex控制递归的，其实是因为电话号码的每个集合都不相互影响，但本题是需要startIndex的，不同是递归传入的i+1变成i了，因为i是可以被重复选取的。

不难写出如下代码

```go
func combinationSum(candidates []int, target int) [][]int {
    var res [][]int
    backtracing(0, &res, []int{}, target, 0, candidates)
    return res
}

func backtracing(sum int, res *[][]int, path []int, target int, startIndex int, candidates []int) {
    // 剪枝
    if sum > target {
        return
    } 

    if sum == target {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
        return
    }

    for i := startIndex; i < len(candidates); i++ {
        sum += candidates[i]
        path = append(path, candidates[i])
        backtracing(sum, res, path, target, i, candidates)
        path = path[:len(path)-1]
        sum -= candidates[i]
    }
}
```

#### [40. 组合总和II](https://leetcode.cn/problems/combination-sum-ii/)

这道题目和39.组合总和有如下区别：

1. 本题candidates 中的每个数字在每个组合中只能使用一次。
2. 本题数组candidates的元素是有重复的，而39.组合总和是无重复元素的数组candidates

对于排除重复元素的一定要排序好

本题的难点在于区别2中：集合（数组candidates）有重复元素，但还不能有重复的组合。

排除的元素应该是同层的相同的元素

```go
func combinationSum2(candidates []int, target int) [][]int {
    sort.Ints(candidates)
    used := make([]bool, len(candidates))
    res := [][]int{}
    backtracking([]int{}, candidates, 0, &res, 0, target, used)
    return res
}

func backtracking(path, candidates []int, startIndex int, res *[][]int, sum, target int, used []bool) {
    if sum > target {
        return
    }

    if sum == target {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
        return
    }

    for i := startIndex; i < len(candidates); i++ {
        if i > 0 && candidates[i] == candidates[i-1] && !used[i-1] {
            continue
        }
        used[i] = true
        sum += candidates[i]
        path = append(path,candidates[i])
        backtracking(path, candidates, i+1, res, sum, target, used)
        path = path[:len(path)-1]
        sum -= candidates[i]
        used[i] = false
    }
}
```

```go
func combinationSum2(candidates []int, target int) [][]int {
    var res [][]int
    quickSort(candidates)
    fmt.Println(candidates)
    backtracing(target, 0, 0, candidates, &res, []int{})
    return res
}

func backtracing(target, sum, startIndex int, candidates []int, res *[][]int, path []int) {
    if sum > target {
        return
    }

    if sum == target {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
    }

    for i := startIndex; i < len(candidates); i++ {
         if i > startIndex && candidates[i] == candidates[i-1] {
            continue
        }
        sum += candidates[i]
        path = append(path, candidates[i])
        backtracing(target, sum, i+1, candidates, res, path)
        path = path[:len(path)-1]
        sum -= candidates[i]
    }
}
```

<span id="切割"></span>

#### [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

本题有两个关键问题：

1. 切割问题
2. 判断回文

我们来分析一下切割，其实切割问题类似组合问题。

例如对于字符串abcdef：
- 组合问题：选取一个a之后，在bcdef中再去选取第二个，选取b之后在cdef中在选组第三个.....。
   
- 切割问题：切割一个a之后，在bcdef中再去切割第二段，切割b之后在cdef中在切割第三段.....。

所以代码应该是下面这个样子

```go
func partition(s string) [][]string {
    var res [][]string//结果集合
    backtracking(0, []string{},&res, s)
    return res
}

func backtracking(startIndex int, path []string, res *[][]string, s string) {
    if startIndex == len(s) {
        t := make([]string, len(path))
		copy(t, path)
        *res=append(*res,t)
    }

    for i := startIndex; i < len(s); i++ {
        if Ispartion(s, startIndex, i) {
            path = append(path, s[startIndex:i+1])
        } else {
            continue
        }
        backtracking(i+1, path, res, s)
        path = path[:len(path)-1]
    }

}

func Ispartion(s string, start, end int) bool {
    for start < end {
        if s[start] != s[end] {
            return false
        }
        start++
        end--
    }
    return true
}
```

#### [93.复原IP地址](https://leetcode.cn/problems/restore-ip-addresses/)

```go
func restoreIpAddresses(s string) []string {
    res := []string{}
    backtrack(0, s, &res, []string{})
    return res
}

func backtrack(startIndex int, s string, res *[]string, path []string) {
    if len(path) == 4 && startIndex == len(s) {
        tempString := path[0]+"."+path[1]+"."+path[2]+"."+path[3]
        *res = append(*res, tempString)
    }

    for i := startIndex; i < len(s); i++ {
        if isNormalIp(s, startIndex, i) {
            path = append(path, s[startIndex:i+1])
        } else {
            continue
        }
        backtrack(i+1, s, res, path)
        path = path[:len(path)-1]
    }
}

func isNormalIp(s string, start, end int) bool {
    checkInt, _ := strconv.Atoi(s[start:end+1])
    if checkInt > 255 {
        return false
    }

    if end-start+1>1 && s[start] == '0' {
        return false
    }
    return true
}
```
<span id="子集"></span>

#### [78. 子集](https://leetcode.cn/problems/subsets/)

这个子集问题好像不需要判断结束递归条件，直接COPY就可以
```go
func subsets(nums []int) [][]int {
    res := [][]int{}
    backtrace(0, &res, []int{}, nums)
    return res
}

func backtrace(startIndex int, res *[][]int, track []int, nums []int) {
    tmp := make([]int, len(track))
    copy(tmp, track)
    *res = append(*res, tmp)

    for i := startIndex; i < len(nums); i++ {
        track = append(track, nums[i])
        backtrace(i+1, res, track, nums)
        track = track[:len(track)-1]
    }
}
```

#### [13. 子集II](https://www.programmercarl.com/0090.%E5%AD%90%E9%9B%86II.html#%E6%80%9D%E8%B7%AF)

这个问题和前面提到过的组合总和II是一样的，第一步先将数组排序，再接着进行去重。

去重的逻辑，**就是遇到同层使用过的元素就过滤掉**，但如果是同一个树枝取到就可以接着递归。

```go
func subsetsWithDup(nums []int) [][]int {
    quickSort(nums)
    res := make([][]int, 0)
    used := make([]bool, len(nums))
    backtrack(0, []int{}, nums, &res, used)
    return res
}

func backtrack(startIndex int, track, nums []int, res *[][]int, used []bool) {
    temp := make([]int, len(track))
    copy(temp, track)
    *res = append(*res, temp)

    for i := startIndex; i < len(nums); i++ {
        if i>0 && nums[i] == nums[i-1] && used[i-1] == false {
            continue
        }
        used[i] = true
        track = append(track, nums[i])
        backtrack(i+1, track, nums, res, used)
        track = track[:len(track)-1]
        used[i] = false
    }
}

func quickSort(nums []int) {
    separateSort(nums, 0, len(nums)-1)
}

func separateSort(nums []int, start, end int) {
    if start >= end {
        return
    }
    i := paration(nums, start, end)
    separateSort(nums, start, i-1)
    separateSort(nums, i+1, end)
}

func paration(nums []int, start, end int) int {
    pivot := nums[end]

    i := start
    for j := start; j < len(nums); j++ {
        if nums[j] < pivot {
            nums[i], nums[j] = nums[j], nums[i]
            i++
        }
    }
    nums[i], nums[end] = nums[end], nums[i]
    return i
}
```

#### [491. 递增子序列](https://leetcode.cn/problems/increasing-subsequences/)

乍一看和上一个子集差不多但其实差别还是很大的，第一个是结束递条件，第二个是本题不可以直接排序。

而本题求自增子序列，是不能对原数组经行排序的，排完序的数组都是自增子序列了。

所以不能使用之前的去重逻辑！

而且本题的去重去除的其实是同一树层下相同的元素。

所以不需要在递归函数中传used属性，直接在函数体中定义一个history数组就可以。

```go
func findSubsequences(nums []int) [][]int {
    var res [][]int
    backtracking(0, []int{}, nums, &res)
    return res
}

func backtracking(startIndex int, subPath, nums []int, res *[][]int) {
    if len(subPath) > 1 {
        tmp := make([]int, len(subPath))
        copy(tmp, subPath)
        *res = append(*res, tmp)
    }
    history := [201]bool{}
    for i := startIndex; i < len(nums); i++ {
        if len(subPath) > 0 && nums[i] < subPath[len(subPath)-1] || history[nums[i]+100] {
            continue
        }
        history[100+nums[i]] = true
        subPath = append(subPath, nums[i])
        backtracking(i+1, subPath, nums, res)
        subPath = subPath[:len(subPath)-1]
    }
}
```
<span id="排列"></span>

#### [46. 全排列](https://leetcode.cn/problems/permutations/)
排列问题和组合问题不一样的地方在于对于排列而言`{1, 2}， {2, 1}`是两个不一样的集合，对于组合而言`{1, 2} {2, 1}`其实是一样的。

但同一树枝下相同的元素就不可以重复用了，所以还需要定义一个used数组去重。

比如{1, 2，3}  如果第一次取了1 那么之后就不能再取1了， 所以需要used数组去重。

```go
func permute(nums []int) [][]int {
    used := make([]bool, len(nums))
    res := make([][]int, 0)
    backtracing(nums, &res, []int{}, used)
    return res
}

func backtracing(nums []int, res *[][]int, track []int, used []bool) {
    if len(track) == len(nums) {
        tmp := make([]int, len(nums))
        copy(tmp, track)
        *res = append(*res, tmp)
    }

    for i := 0; i < len(nums); i++ {
        if used[i] == true {
            continue
        }
        used[i] = true
        track = append(track, nums[i])
        backtracing(nums, res, track, used)
        used[i] = false
        track = track[:len(track)-1]
    }
}
```

#### [47. 全排列II](https://leetcode.cn/problems/permutations-ii/)

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

本题一个关键点是可包含重复数字的序列，并且任意顺序返回不重复的全排列。

涉及到去重。

所以其实和组合总和II的去重逻辑差不多，都一样一开始需要排序一下。

```go
func permuteUnique(nums []int) [][]int {
    res := make([][]int, 0)    
    used := make([]bool, len(nums))
    sort.Ints(nums)
    backtracing(nums, []int{}, used, &res)
    return res
}

func backtracing(nums, track []int, used []bool, res *[][]int) {
    if len(track) == len(nums) {
        tmp := make([]int, len(nums))
        copy(tmp, track)
        *res = append(*res, tmp)
    }

    for i := 0; i < len(nums); i++ {
        if i > 0 && nums[i] == nums[i-1] && used[i-1] == false {
            continue
        }
        if (used[i] == false) {
            used[i] = true
            track = append(track, nums[i])
            backtracing(nums, track, used, res)
            track = track[:len(track)-1]
            used[i] = false
        }
    }
}
```
<span id="棋盘"></span>

#### [51. N皇后](https://leetcode.cn/problems/n-queens/submissions/)

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。


