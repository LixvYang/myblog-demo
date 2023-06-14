---
icon: edit
date: 2021-11-06
isOriginal: true
category:
  - tutorial
tag:
  - leetcode
  - dynamic-programming
---

# 动态规划

[学习笔记](https://www.programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98)

- [基础题目](#基础题目)
- [背包问题](#背包问题)
- [打家劫舍](#打家劫舍)
- [股票问题](#股票问题)
- [子序列问题](#子序列问题)

### 动态规划基础：
动态规划，英文：Dynamic Programming，简称DP，如果某一问题有很多重叠子问题，使用动态规划是最有效的。

状态转移公式（递推公式）是很重要，但动规不仅仅只有递推公式。

动态规划问题拆解为如下五步曲，这五步都搞清楚了，才能说把动态规划真的掌握了！

1. 确定dp数组（dp table）以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组

<span id="基础题目"></span>

### 基础题目
#### [509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/submissions/)

这道题目非常简单，使用一个dp数组就可以解决。

```go
func fib(n int) int {
    if n < 2 {
        return n
    }

    dp := make([]int, n+1)
    dp[0] = 0
    dp[1] = 1
    for i := 2; i <= n; i++ {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n]
}
```

#### [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

本题需要注意，爬楼梯每爬一次楼梯， 最终的dp公式是`dp[i] = dp[i-1] + dp[i-2]`

```go
func climbStairs(n int) int {
    if n < 2 {
        return 1
    }

    dp := make([]int, n+1)
    dp[1] = 1
    dp[0] = 1
    for i := 2; i <= n; i++ {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}
```

#### [746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)
给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

这里需要注意的是，cost[i] 是从楼梯第i个台阶向上爬所需支付的费用，即从2楼向上爬需要花费cost[2]，所以不难推出`dp[i] = min(cost[i-1]+dp[i-1], cost[i-2]+dp[i-2]`

同时可以选择从下标为1或0的台阶开始爬，也就是`dp[1] = 0 dp[0] = 0`

```go
func minCostClimbingStairs(cost []int) int {

    dp := make([]int, len(cost)+1)
    dp[0] = 0
    dp[1] = 0

    for i := 2; i <= len(cost); i++ {
        dp[i] = min(cost[i-1]+dp[i-1], cost[i-2]+dp[i-2])
    }
    return dp[len(cost)]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

#### [62. 不同路径](https://leetcode.cn/problems/unique-paths/)

首先第一步确定dp数组， `dp[i][j]`即是到达第`dp[i][]j`的总路径有几条。

确定递推公式，`dp[i][j]的求和方式`只可以通过dp[i][j-1] 和 dp[i-1][j]来取得。

`dp[i][j] = dp[i][j-1] + dp[i-1][j]`

```go
func uniquePaths(m int, n int) int {
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
    }

    for i := 0; i < m; i++ {
        dp[i][0] = 1
    }

    for i := 0; i < n; i++ {
        dp[0][i] = 1
    }

    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
}
```

#### [63. 不同路径II](https://leetcode.cn/problems/unique-paths-ii/)
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

本题其实大致和上一题差不多，但有一个障碍物问题，所以需要考虑当dp[i][j]为障碍物的情况。

```go
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    dp := make([][]int, len(obstacleGrid))

    for i := range dp {
        dp[i] = make([]int, len(obstacleGrid[0]))
    }
    // 1. dp[i][0] == 1  stop
    for i := 0; i < len(obstacleGrid) && obstacleGrid[i][0] != 1; i++ {
        dp[i][0] = 1
    }

    // 2. dp[0][i] == 1  stop
    for i := 0; i < len(obstacleGrid[0]) && obstacleGrid[0][i] != 1; i++ {
        dp[0][i] = 1
    }

    // 2. dp[i][j] == 1  continue
    for i := 1; i < len(obstacleGrid); i++ {
        for j := 1; j < len(obstacleGrid[0]); j++ {
            if obstacleGrid[i][j] == 1 {
                continue
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[len(obstacleGrid)-1][len(obstacleGrid[0])-1]
}
```

#### [343. 整数拆分](https://leetcode.cn/problems/integer-break/)

给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

1. 确定dp数组的定义 ----------> dp[i]：分拆数字i，可以得到的最大乘积为dp[i]。
2. 确定递推公式 `dp[i] = max(dp[i], max(j*(i-j), j * dp[i-j]))` 

可以这么理解，j * (i - j) 是单纯的把整数拆分为两个数相乘，而j * dp[i - j]是拆分成两个以及两个以上的个数相乘。

如果定义dp[i - j] * dp[j] 也是默认将一个数强制拆成4份以及4份以上了。

所以递推公式：dp[i] = max(dp[i], (i - j) * j, dp[i - j] * j);

那么在取最大值的时候，为什么还要比较dp[i]呢？

因为在递推公式推导的过程中，每次计算dp[i]，取最大的而已。

```go
func integerBreak(n int) int {
    dp := make([]int, n+1)
    dp[2] = 1

    for i := 3; i <= n; i++ {
        for j := 1; j < i-1; j++ {
            dp[i] = max(dp[i], max(j*(i-j), j * dp[i-j]))
        }
    }
    return dp[n]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
#### [96.不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)

给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

1. 确定dp数组（dp table）以及下标的含义

dp[i] ： 1到i为节点组成的二叉搜索树的个数为dp[i]

也可以理解是i的不同元素节点组成的二叉搜索树的个数为dp[i] ，都是一样的。

以下分析如果想不清楚，就来回想一下dp[i]的定义

2. 确定递推公式

dp[i] += dp[以j为头结点左子树节点数量] * dp[以j为头结点右子树节点数量]

所以递推公式：dp[i] += dp[j - 1] * dp[i - j]; ，j-1 为j为头结点左子树节点数量，i-j 为以j为头结点右子树节点数量

```go
func numTrees(n int) int {
    dp := make([]int, n+1)
    dp[0] = 1

    for i := 1; i <= n; i++ {
        for j := 1; j <= i; j++ {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
}
```

<span id="背包问题"></span>

### 背包问题

#### 01-背包基础
##### 二维数组
有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。

这是一个标准的背包问题

在下面的讲解中，我举一个例子：

背包最大重量为4。

物品为：

|  | 重量 | 价值 |
| - | --- | --- |
| 物品1 |  1   |  15 |
| 物品2 |  3   |  20 |
| 物品3 |  4   |  30 |

问背包能背的物品最大价值是多少？

以下讲解和图示中出现的数字都是以这个例子为例。


二维dp数组01背包问题

1. 确定dp数组以及下标的含义
对于背包问题有一种写法是用二维数组`dp[i][j]`即dp[i][j]表示从下标为[0-i]的物品里任意取,放进容量为j的背包价值最大为多少.

![](https://img-blog.csdnimg.cn/20210110103003361.png)

2. 确定递推公式

再回顾一下dp[i][j]的含义：从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。

那么可以有两个方向推出来dp[i][j]

- 不放物品i：由dp[i - 1][j]推出，即背包容量为j，里面不放物品i的最大价值，此时dp[i][j]就是dp[i - 1][j]。(其实就是当物品i的重量大于背包j的重量时，物品i无法放进背包中，所以被背包内的价值依然和前面相同。)
- 放物品i：由dp[i - 1][j - weight[i]]推出，dp[i - 1][j - weight[i]] 为背包容量为j - weight[i]的时候不放物品i的最大价值，那么dp[i - 1][j - weight[i]] + value[i] （物品i的价值），就是背包放物品i得到的最大价值

所以递归公式： dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

3. dp数组如何初始化

关于初始化，一定要和dp数组的定义吻合，否则到递推公式的时候就会越来越乱。

首先从dp[i][j]的定义出发，如果背包容量j为0的话，即dp[i][0]，无论是选取哪些物品，背包价值总和一定为0。如图：

![](https://img-blog.csdnimg.cn/2021011010304192.png)

在看其他情况。

状态转移方程 dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]); 可以看出i 是由 i-1 推导出来，那么i为0的时候就一定要初始化。

dp[0][j]，即：i为0，存放编号0的物品的时候，各个容量的背包所能存放的最大价值。

那么很明显当 j < weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号0的物品重量还小。

当j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品。

代码初始化如下：

```cpp
for (int j = 0 ; j < weight[0]; j++) {  // 当然这一步，如果把dp数组预先初始化为0了，这一步就可以省略，但很多同学应该没有想清楚这一点。
    dp[0][j] = 0;
}
// 正序遍历
for (int j = weight[0]; j <= bagweight; j++) {
    dp[0][j] = value[0];
}
```

此时dp数组初始化情况如图所示：

![](https://img-blog.csdnimg.cn/20210110103109140.png)

dp[0][j] 和 dp[i][0] 都已经初始化了，那么其他下标应该初始化多少呢？

其实从递归公式： dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]); 可以看出dp[i][j] 是由左上方数值推导出来了，那么 其他下标初始为什么数值都可以，因为都会被覆盖。

4. 确定遍历顺序

在如下图中，可以看出，有两个遍历的维度：物品与背包重量

![](https://img-blog.csdnimg.cn/2021011010314055.png)

那么问题来了，先遍历 物品还是先遍历背包重量呢？

其实都可以！！ 但是先遍历物品更好理解。

那么我先给出先遍历物品，然后遍历背包重量的代码。

```cpp
// weight数组的大小 就是物品个数
for(int i = 1; i < weight.size(); i++) { // 遍历物品
    for(int j = 0; j <= bagweight; j++) { // 遍历背包容量
        if (j < weight[i]) dp[i][j] = dp[i - 1][j]; 
        else dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
}
```
先遍历背包，再遍历物品，也是可以的

5. 举例推导dp数组

来看一下对应的dp数组的数值，如图：

![](https://img-blog.csdnimg.cn/20210118163425129.jpg)

最终结果就是dp[2][4]。

##### 一维数组

一维滚动数组

今天我们就来说一说滚动数组，其实在前面的题目中我们已经用到过滚动数组了，就是把二维dp降为一维dp.

对于背包问题其实状态都是可以压缩的。

在使用二维数组的时候，递推公式：dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

其实可以发现如果把dp[i - 1]那一层拷贝到dp[i]上，表达式完全可以是：dp[i][j] = max(dp[i][j], dp[i][j - weight[i]] + value[i]);

与其把dp[i - 1]这一层拷贝到dp[i]上，不如只用一个一维数组了，只用dp[j]（一维数组，也可以理解是一个滚动数组）。

这就是滚动数组的由来，需要满足的条件是上一层可以重复利用，直接拷贝到当前层。

读到这里估计大家都忘了 dp[i][j]里的i和j表达的是什么了，i是物品，j是背包容量。

dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。

一定要时刻记住这里i和j的含义，要不然很容易看懵了。

动规五部曲分析如下：

1. 确定dp数组的定义

dp[j]表示容量为j的背包所背的价值最大为dp[j]

2. 一维dp数组的递推公式

dp[j]为 容量为j的背包所背的最大价值，那么如何推导dp[j]呢？

dp[j]可以通过dp[j - weight[i]]推导出来，dp[j - weight[i]]表示容量为j - weight[i]的背包所背的最大价值。

dp[j - weight[i]] + value[i] 表示 容量为 j - 物品i重量 的背包 加上 物品i的价值。（也就是容量为j的背包，放入物品i了之后的价值即：dp[j]）

此时dp[j]有两个选择，一个是取自己dp[j] 相当于 二维dp数组中的dp[i-1][j]，即不放物品i，一个是取dp[j - weight[i]] + value[i]，即放物品i，指定是取最大的，毕竟是求最大价值，

所以递归公式为：

`dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);`

可以看出相对于二维dp数组的写法，就是把dp[i][j]中i的维度去掉了。

3. 一维dp数组如何初始化

关于初始化，一定要和dp数组的定义吻合，否则到递推公式的时候就会越来越乱。

dp[j]表示：容量为j的背包，所背的物品价值可以最大为dp[j]，那么dp[0]就应该是0，因为背包容量为0所背的物品的最大价值就是0。

那么dp数组除了下标0的位置，初始为0，其他下标应该初始化多少呢？

看一下递归公式：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

dp数组在推导的时候一定是取价值最大的数，如果题目给的价值都是正整数那么非0下标都初始化为0就可以了。

这样才能让dp数组在递归公式的过程中取的最大的价值，而不是被初始值覆盖了。

那么我假设物品价值都是大于0的，所以dp数组初始化的时候，都初始为0就可以了。

4. 一维dp数组遍历顺序

代码如下：

```cpp
for i := 0; i < len(weight); i++ {
    for j := bagweight; j >= weight[i]; j-- {
        dp[j] = max(dp[j], dp[j-weight[i]]+value[i])
    }
}
```

#### [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

给你一个只包含正整数的非空数组nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

- 背包的体积为sum / 2
- 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
- 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
- 背包中每一个元素是不可重复放入。

套到本题，dp[j]表示 背包总容量是j，最大可以凑成j的子集总和为dp[j]。

01背包的递推公式为：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

确定遍历顺序,如果使用一维dp数组，物品遍历的for循环放在外层，遍历背包的for循环放在内层，且内层for循环倒序遍历！

```go
func canPartition(nums []int) bool {
    sum := 0
    for _, num := range nums {
        sum += num
    }

    if sum % 2 == 1 {
        return false
    }
    
    target := sum/2

    dp := make([]int, target+1)
    for i := 0; i < len(nums); i++ {
        for j := target; j >= nums[i]; j-- {
            dp[j] = max(dp[j], dp[j-nums[i]]+nums[i])
        }
    }
    return dp[target] == target
}
```

#### [1049. 最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)

这个题和上个题几乎一点区别都没有

甚至可以一点代码都不用改

```go
func lastStoneWeightII(stones []int) int {
    sum := 0
    for i := 0; i < len(stones); i++ {
        sum += stones[i]
    }
    target := sum / 2

    dp := make([]int, target+1)

    for i := 0; i < len(stones); i++ {
        for j := target; j >= stones[i]; j-- {
            dp[j] = max(dp[j], dp[j-stones[i]]+stones[i])
        }
    }
    return sum-2*dp[target]
}
```

#### [494. 目标和](https://leetcode.cn/problems/target-sum/)

这个题如何转换成01背包问题呢?

假设加法总和为x,那么减法总和为sum-x.

所以我们要求`x-(sum-x) = S`, `x = (S + sum) / 2`

此时问题就转化为，装满容量为x背包，有几种方法。

大家看到(S + sum) / 2 应该担心计算的过程中向下取整有没有影响。

这么担心就对了，例如sum 是5，S是2的话其实就是无解的，所以：`if ((S + sum) % 2 == 1) return 0; // 此时没有方案`

同时如果 S的绝对值已经大于sum，那么也是没有方案的。`if (abs(S) > sum) return 0; // 此时没有方案`

再回归到01背包问题，为什么是01背包呢？

因为每个物品（题目中的1）只用一次！

这次和之前遇到的背包问题不一样了，之前都是求容量为j的背包，最多能装多少。

本题则是装满有几种方法。其实这就是一个组合问题了。

**dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法**

求组合类问题的公式，都是类似这种：

`dp[j] += dp[j - nums[i]]`

```go
func findTargetSumWays(nums []int, target int) int {
    sum := 0
    for i := 0; i < len(nums); i++ {
        sum += nums[i]
    }

    if (target + sum) %2 == 1 {
        return 0
    }

    if abs(target) > sum {
       return 0
    }

    bag := (sum+target)/2
    dp := make([]int, bag+1)
    dp[0] = 1
    for i := 0; i < len(nums); i++ {
        for j := bag; j >= nums[i]; j-- {
            // 遍历到了nums[i]已经有一个nums[i]  所以有dp[j-nums[i]] 种方法变成dp[j]
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[bag]
}


func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```


#### [474.一和零](https://leetcode.cn/problems/ones-and-zeroes/)
1. 确定dp数组（dp table）以及下标的含义

dp[i][j]：最多有i个0和j个1的strs的最大子集的大小为dp[i][j]。

2.     确定递推公式

dp[i][j] 可以由前一个strs里的字符串推导出来，strs里的字符串有zeroNum个0，oneNum个1。

dp[i][j] 就可以是 dp[i - zeroNum][j - oneNum] + 1。

dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)

此时大家可以回想一下01背包的递推公式：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

对比一下就会发现，字符串的zeroNum和oneNum相当于物品的重量（weight[i]），字符串本身的个数相当于物品的价值（value[i]）。

这就是一个典型的01背包！ 只不过物品的重量有了两个维度而已。

3. dp数组如何初始化

因为物品价值不会是负数，初始为0，保证递推的时候dp[i][j]不会被初始值覆盖。

```go
func findMaxForm(strs []string, m int, n int) int {

    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for _, str := range strs {
        zeroNum, oneNum := 0, 0
        for _, v := range str {
            if v == '0' {
                zeroNum++
            } else {
                oneNum++
            }
        }
        for j := m; j >= zeroNum; j-- {
            for k := n; k >= oneNum; k-- {
                dp[j][k] = max(dp[j][k], dp[j-zeroNum][k-oneNum]+1)
            }
        }
    }
    return dp[m][n]
}
```

#### **完全背包问题**

有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。

**完全背包和01背包问题唯一不同的地方就是，每种物品有无限件。**


同样leetcode上没有纯完全背包问题，都是需要完全背包的各种应用，需要转化成完全背包问题，所以我这里还是以纯完全背包问题进行讲解理论和原理。

背包最大重量为4。

物品为：
| | 重量 | 价值 |
| - | - | - |
|物品0 |	1 |	15|
|物品1 |	3 |	20|
|物品2 |	4 |	30|

每件商品都有无限个！

问背包能背的物品最大价值是多少？

首先在回顾一下01背包的核心代码

```cpp
for(int i = 0; i < weight.size(); i++) { // 遍历物品
    for(int j = bagWeight; j >= weight[i]; j--) { // 遍历背包容量
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
    }
}
```

我们知道01背包内嵌的循环是从大到小遍历，为了保证每个物品仅被添加一次。

而完全背包的物品是可以添加多次的，所以要从小到大去遍历，即：

```cpp
for (int i = 0; i < weight.size(); i++) {
    for (int j = weight[i]; j <= bagweight; j++) {
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
    }
}
```
#### [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)

这是一道典型的背包问题，一看到钱币数量不限，就知道这是一个完全背包。

注意题目描述中是凑成总金额的硬币组合数，为什么强调是组合数呢？

例如示例一：

5 = 2 + 2 + 1

5 = 2 + 1 + 2

这是一种组合，都是 2 2 1。

如果问的是排列数，那么上面就是两种排列了。

组合不强调元素之间的顺序，排列强调元素之间的顺序。

1. 确定dp数组以及下标的含义

dp[j]：凑成总金额j的货币组合数为dp[j]

2. 确定递推公式

dp[j] （考虑coins[i]的组合总和） 就是所有的dp[j - coins[i]]（不考虑coins[i]）相加。

所以递推公式：dp[j] += dp[j - coins[i]];

3. dp数组如何初始化
dp[0] = 1

4. 确定遍历顺序

本题中我们是外层for循环遍历物品（钱币），内层for遍历背包（金钱总额），还是外层for遍历背包（金钱总额），内层for循环遍历物品（钱币）呢？

> 如果先遍历物品,后遍历背包就是组合问题.

> 如果先遍历背包,后遍历物品就是排列问题.

所以本题是

```go
func change(amount int, coins []int) int {
    dp := make([]int, amount+1)

    dp[0] = 1

    for i := 0; i < len(coins); i++ {
        for j := coins[i]; j <= amount; j++ {
            dp[j] += dp[j-coins[i]]
        }
    }
    return dp[amount]
}
```

#### [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

改为：一步一个台阶，两个台阶，三个台阶，.......，直到 m个台阶。问有多少种不同的方法可以爬到楼顶呢？

1. dp[i]：爬到有i个台阶的楼顶，有dp[i]种方法。

2. dp[i]有几种来源，dp[i - 1]，dp[i - 2]，dp[i - 3] 等等，即：dp[i - j], 那么递推公式为：dp[i] += dp[i - j]

3. dp数组如何初始化

既然递归公式是 dp[i] += dp[i - j]，那么dp[0] 一定为1，dp[0]是递归中一切数值的基础所在，如果dp[0]是0的话，其他数值都是0了。

本题要求的其实是排列数.

```go
func climbStairs(n int) int {
    dp := make([]int, n+1)

    dp[0] = 1

    // 背包
    for i := 1; i < n; i++ {
        // 物品
        for j := 1; j <= m; j++ {
            if (i-j >= 0) dp[i] += dp[i-j]
        }
    }

    return dp[n]
}
```

#### [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)

1. dp[j]：凑足总额为j所需钱币的最少个数为dp[j]

2. 确定递推公式

得到dp[j]（考虑coins[i]），只有一个来源，dp[j - coins[i]]（没有考虑coins[i]）。

凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]（考虑coins[i]）

所以dp[j] 要取所有 dp[j - coins[i]] + 1 中最小的。

递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);

3. 首先凑足总金额为0所需钱币的个数一定是0，那么dp[0] = 0;

其他下标对应的数值呢？

考虑到递推公式的特性，dp[j]必须初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。

所以下标非0的元素都是应该是最大值。

代码

```go
func coinChange(coins []int, amount int) int {
    dp := make([]int, amount+1)
    
    for i := 1 ; i <= amount; i++ {
        dp[i] = math.MaxInt32
    }

    dp[0] = 0

    for i := 1; i < len(coins); i++ {
        for j := coins[i]; j <= amount; j++ {
            if dp[j-coins[i]] != math.MaxInt32 {
                dp[j] = min(dp[j], dp[j-coins[i]]+1)
            }
        }
    }

    if dp[amount] == math.MaxInt32 {
		return -1
	}
    // fmt.Println(dp)
    return dp[amount]
}


func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

#### [279. 完全平方数](https://www.programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html)

给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

其实和上一个题差不多哈哈

```go
func numSquares(n int) int {
    dp := make([]int, n+1)

    dp[0] = 0
    for i := 1; i <= n; i++ {
        dp[i] = math.MaxInt32
    }

    for i := 1; i <= n; i++ {
        for j := i*i; j <= n; j++ {
            dp[j] = min(dp[j], dp[j-i*i]+1)
        }
    }
    fmt.Println(dp)

    if dp[n] == math.MaxInt32 {
        return -1
    }
    return dp[n]
}

func min(a, b int) int {
    if a < b {
        return a 
    }
    return b
}
```

#### [139. 单词拆分](https://leetcode.cn/problems/word-break/submissions/)



```go
func wordBreak(s string, wordDict []string) bool {
    wordDictSet := make(map[string]bool)
    for _, w := range wordDict {
        wordDictSet[w] = true
    }

    dp := make([]bool, len(s)+1)
    dp[0] = true

    for i := 0; i <= len(s); i++ {
        for j := 0; j < i; j++ {
            if dp[j] && wordDictSet[s[j:i]] {
                dp[i] = true
                break
            }
        }
    }
    return dp[len(s)]
}
```
<span id="打家劫舍"></span>

### 打家劫舍

#### [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

1. dp[i]：考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]。

2. 决定dp[i]的因素就是第i房间偷还是不偷。决定dp[i]的因素就是第i房间偷还是不偷。

如果偷第i房间，那么dp[i] = dp[i - 2] + nums[i] ，即：第i-1房一定是不考虑的，找出 下标i-2（包括i-2）以内的房屋，最多可以偷窃的金额为dp[i-2] 加上第i房间偷到的钱。

如果不偷第i房间，那么dp[i] = dp[i - 1]，即考虑i-1房，（注意这里是考虑，并不是一定要偷i-1房，这是很多同学容易混淆的点）

然后dp[i]取最大值，即dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);


3. dp数组如何初始化

从递推公式dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);可以看出，递推公式的基础就是dp[0] 和 dp[1]

从dp[i]的定义上来讲，dp[0] 一定是 nums[0]，dp[1]就是nums[0]和nums[1]的最大值即：dp[1] = max(nums[0], nums[1]);

```go
dp[0] = nums[0]
dp[1] = max(nums[0], nums[1])
```

#### [213. 打家劫舍II](https://leetcode.cn/problems/house-robber-ii/)

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

```go
func rob(nums []int) int {
    if len(nums) == 1 {
        return nums[0]
    }

    if len(nums) == 2 {
        return max(nums[0], nums[1])
    }

    nums1 := robRange(nums, 0)
    nums2 := robRange(nums, 1)
    return max(nums1, nums2)
}

func robRange(nums []int, start int) int {
    dp := make([]int, len(nums))
    dp[1] = nums[start]
    
    for i := 2; i < len(nums); i++ {
        dp[i] = max(dp[i-2]+nums[i-1+start], dp[i-1])
    }
    return dp[len(nums)-1]
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```


#### [337.打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/)

```go
func rob(root *TreeNode) int {
    dp := traversal(root)
    
    return max(dp[0], dp[1]) 
}

func traversal(root *TreeNode) []int {
    if root == nil {
        return []int{0, 0}
    }

    dpL := traversal(root.Left)
    dpR := traversal(root.Right)

    val1 := root.Val + dpL[0] + dpR[0]
    val2 := max(dpL[0], dpL[1]) + max(dpR[0], dpR[1])

    return []int{val2, val1}
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

<span id="股票问题"></span>

### 股票问题
#### [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

```
示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

贪心, 向左取最小值, 向右边取最大利润

```go
func maxProfit(prices []int) int {
    low := math.MaxInt32
    rlt := 0
    for i := range prices{
        low = min(low, prices[i])
        rlt = max(rlt, prices[i]-low)
    }

    return rlt
}
func min(a, b int) int {
    if a < b{
        return a
    }

    return b
}

func max(a, b int) int {
    if a > b{
        return a
    }

    return b
}
```

动态规划

1. 确定dp数组

dp[i][0] 表示第i天持有股票所得最多现金 ，这里可能有同学疑惑，本题中只能买卖一次，持有股票之后哪还有现金呢？

其实一开始现金是0，那么加入第i天买入股票现金就是 -prices[i]， 这是一个负数。

dp[i][1] 表示第i天不持有股票所得最多现金

注意这里说的是“持有”，“持有”不代表就是当天“买入”！也有可能是昨天就买入了，今天保持持有的状态

2. 确定递推公式
> 如果第i天持有股票即dp[i][0], 可以由两个状态推出来
> 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
> 第i天买入股票，所得现金就是买入今天的股票后所得现金即：-prices[i]
> 那么dp[i][0]应该选所得现金最大的，所以dp[i][0] = max(dp[i - 1][0], -prices[i])

> 如果第i天不持有股票即dp[i][1]， 也可以由两个状态推出来
> 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
> 第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
> 同样dp[i][1]取最大的，dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])

3. dp数组如何初始化

由递推公式 dp[i][0] = max(dp[i - 1][0], -prices[i]); 和 dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0]);可以看出

需要初始化dp[0][0], dp[0][1]

那么dp[0][0]表示第0天持有股票，此时的持有股票就一定是买入股票了，因为不可能有前一天推出来，所以dp[0][0] -= prices[0];

dp[0][1]表示第0天不持有股票，不持有股票那么现金就是0，所以dp[0][1] = 0;

代码:
```go
func maxProfit(prices []int) int {
	length:=len(prices)
	if length==0{return 0}
	dp:=make([][]int,length)
	for i:=0;i<length;i++{
		dp[i]=make([]int,2)
	}
	
	dp[0][0]=-prices[0]
	dp[0][1]=0
	for i:=1;i<length;i++{
		dp[i][0]=max(dp[i-1][0],-prices[i])
		dp[i][1]=max(dp[i-1][1],dp[i-1][0]+prices[i])
	}
	return dp[length-1][1]
}
```

#### [122.买卖股票的最佳时机II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
```go

示例 1:
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4。随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

示例 2:
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

示例 3:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

1. 和上一题是一样的dp[i][0]持有股票的最大现金, dp[i][1]是不持有股票的最大现金

```go
func maxProfit(prices []int) int {
    dp := make([][]int, len(prices))
    status := make([]int, len(prices) * 2)
    for i := range dp {
        dp[i] = status[:2]
        status = status[2:]
    }
    dp[0][0] = -prices[0]
    
    for i := 1; i < len(prices); i++ {
        dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]) // 唯一不同的一点
        dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    
    return dp[len(prices) - 1][1]
}
```

### [123.买卖股票的最佳时机III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)

给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1: 输入：prices = [3,3,5,0,0,3,1,4] 输出：6 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3。

关键在于至多买卖两次，这意味着可以买卖一次，可以买卖两次，也可以不买卖。

1.     确定dp数组以及下标的含义

一天一共就有五个状态，
- 没有操作
- 第一次买入
- 第一次卖出
- 第二次买入
- 第二次卖出

dp[i][j]中 i表示第i天，j为 [0 - 4] 五个状态，dp[i][j]表示第i天状态j所剩最大现金。

2. 确定递推公式

需要注意：dp[i][1]，表示的是第i天，买入股票的状态，并不是说一定要第i天买入股票，这是很多同学容易陷入的误区。

达到dp[i][1]状态，有两个具体操作：
- 操作一：第i天买入股票了，那么dp[i][1] = dp[i-1][0] - prices[i]
- 操作二：第i天没有操作，而是沿用前一天买入的状态，即：dp[i][1] = dp[i - 1][1]

那么dp[i][1]究竟选 dp[i-1][0] - prices[i]，还是dp[i - 1][1]呢？

一定是选最大的，所以 dp[i][1] = max(dp[i-1][0] - prices[i], dp[i - 1][1]);

同理dp[i][2]也有两个操作：
- 操作一：第i天卖出股票了，那么dp[i][2] = dp[i - 1][1] + prices[i]
- 操作二：第i天没有操作，沿用前一天卖出股票的状态，即：dp[i][2] = dp[i - 1][2]

所以dp[i][2] = max(dp[i - 1][1] + prices[i], dp[i - 1][2])

同理可推出剩下状态部分：

dp[i][3] = max(dp[i - 1][3], dp[i - 1][2] - prices[i]);

dp[i][4] = max(dp[i - 1][4], dp[i - 1][3] + prices[i]);

第0天做第一次买入的操作，dp[0][1] = -prices[0], dp[0][3] = -prices[0];

```go
func maxProfit(prices []int) int {
    dp:=make([][]int,len(prices))
    for i:=0;i<len(prices);i++{
        dp[i]=make([]int,5)
    }
    dp[0][0]=0
    dp[0][1]=-prices[0]
    dp[0][2]=0
    dp[0][3]=-prices[0]
    dp[0][4]=0
    for i:=1;i<len(prices);i++{
        dp[i][0]=dp[i-1][0]
        dp[i][1]=max(dp[i-1][1],dp[i-1][0]-prices[i])
        dp[i][2]=max(dp[i-1][2],dp[i-1][1]+prices[i])
        dp[i][3]=max(dp[i-1][3],dp[i-1][2]-prices[i])
        dp[i][4]=max(dp[i-1][4],dp[i-1][3]+prices[i])
    }
    return dp[len(prices)-1][4]
}
```

#### [188.买卖股票的最佳时机IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

```go
func maxProfit(k int, prices []int) int {
    if k == 0 || len(prices) == 0 {
        return 0
    }
    
    dp := make([][]int, len(prices))
    for i := range dp {
        dp[i] = make([]int, 2*k+1)
    }
    for j := 1; j < 2 * k; j += 2 {
        dp[0][j] = -prices[0]
    }
    
    for i := 1; i < len(prices); i++ {
        for j := 0; j < 2 * k; j += 2 {
            dp[i][j + 1] = max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i])
            dp[i][j + 2] = max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i])
        }
    }
    return dp[len(prices) - 1][2 * k]
}
```

#### [309.最佳买卖股票时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

    你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
    卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

示例: 输入: [1,2,3,0,2] 输出: 3 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]







<span id="子序列问题"></span>

### [300.最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

思路:

最长上升子序列是动规的经典题目，这里dp[i]是可以根据dp[j] （j < i）推导出来的，那么依然用动规五部曲来分析详细一波：

1. dp[i]的定义
dp[i]表示i之前包括i的以nums[i]结尾最长上升子序列的长度.
2. 状态转移方程
位置i的最长上升子序列的长度等于j从0到i-1各个位置的最长升序子序列 + 1 的最大值。

所以表达式是这样的`if nums[j] < nums[i] {dp[i] = max(dp[i], dp[j]+1)}`, 这里的j是dp数组索引从0到i-1的各个值,所以dp[i]就是j从0到i-1各个位置的最长升序子序列 + 1 的最大值.

注意这里不是要dp[i] 与 dp[j] + 1进行比较，而是我们要取dp[j] + 1的最大值。

3. dp[i]的初始化

对于每一个dp[i],起始大小都必须是1

4. 确定遍历顺序

dp[i] 是有0到i-1各个位置的最长升序子序列 推导而来，那么遍历i一定是从前向后遍历。

所以代码如下
```go
func lengthOfLIS(nums []int) int {
    dp := make([]int, len(nums))
    for i := range dp {
        dp[i] = 1
    }
    res := 1
    for i := 1; i < len(nums); i++ {
        // 要dp[i]与dp[0]...dp[i-1]比较, dp[i]是dp[j]的最大值+1
        for j := 0; j < i; j++ {
            if nums[j] < nums[i] {
                dp[i] = max(dp[i], dp[j]+1)
            }
            res = max(res, dp[i])
        }
    }
    return res
}

func max(a ...int) int {
    b := a[0]
    if len(a) == 1 {
        return b
    }
    for i := 1; i < len(a); i++ {
        if a[i] > b {
            b = a[i]
        }
    }
    return b
}
```

### [674. 最长连续递增序列](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/)

给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

```输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
```

这个题有一个不一样的地方,就是它要求**连续的递增序列**

我们继续:
1. 确定dp数组的下标含义
dp[i]是以dp[i]为结尾的数组的连续递增的子序列的长度
2. 确定递推公式
如果nums[i]>nums[i-1],那么dp[i]=dp[i-1]+1
3. dp数组如何初始化
其实和上一题一样都初始化为1就可以了

那么代码其实是这样的

```go
func findLengthOfLCIS(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    result := 1
    dp := make([]int, len(nums))
    for i := 0; i < len(dp); i++ {
        dp[i] = 1
    }

    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            dp[i] = dp[i-1]+1
        }
        if dp[i] > result {
            result = dp[i]
        }
    }
    return result
}
```

### [718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1] 。

这个题有两个数组所以需要二维dp数组了

1. 确定dp数组下标含义
dp[i][j]是以下标i-1为结尾的nums1,和以j-1为结尾的nums2,最长重复子数组的长度为dp[i][j]

那么dp[0][0]的含义是什么呢?总不能是以下标-1吧

所以这样的定义也就意味着我们需要从1开始遍历

2. 确定递推公式

根据dp[i][j]的定义，dp[i][j]的状态只能由dp[i - 1][j - 1]推导出来。

如果nums`[i-1] == nums2[j-1]`,那么`dp[i][j] = dp[i-1][j-1]+1`根据递推公式可以看出，遍历i 和 j 要从1开始！

3. dp数组如何初始化?

根据dp[i][j]的定义，dp[i][0] 和dp[0][j]其实都是没有意义的！

但dp[i][0] 和dp[0][j]要初始值，因为 为了方便递归公式dp[i][j] = dp[i - 1][j - 1] + 1;所以dp[i][0] 和dp[0][j]初始化为0。举个例子A[0]如果和B[0]相同的话，dp[1][1] = dp[0][0] + 1，只有dp[0][0]初始为0，正好符合递推公式逐步累加起来。

4. 确定遍历顺序

外层for循环遍历A，内层for循环遍历B。

那又有同学问了，外层for循环遍历B，内层for循环遍历A。不行么？

也行，一样的，我这里就用外层for循环遍历A，内层for循环遍历B了。

同时题目要求长度最长的子数组的长度。所以在遍历的时候顺便把dp[i][j]的最大值记录下来。

所以代码是这样的
```cpp
for (int i = 1; i <= A.size(); i++) {
    for (int j = 1; j <= B.size(); j++) {
        if (A[i - 1] == B[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        if (dp[i][j] > result) result = dp[i][j];
    }
}
```

```go
func findLength(nums1 []int, nums2 []int) int {
    dp := make([][]int, len(nums1)+1)
    for i := range dp {
        dp[i] = make([]int, len(nums2)+1)
    }
    res := 0
    for i := 1; i <= len(nums1); i++ {
        for j := 1; j <= len(nums2); j++ {
            if nums1[i-1] == nums[j-1] {
                dp[i][j] = dp[i-1][j-1]+1
            } 
            res = max(res, dp[i][j])
        }
    }
    return res
}
```

### [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)

给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

    例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。

两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
本题和动态规划：718. 最长重复子数组 (opens new window)区别在于这里不要求是连续的了，但要有相对顺序，即："ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。

1. 确定dp数组（dp table）以及下标的含义
dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
2. 确定递推公式
主要就是两大情况： text1[i - 1] 与 text2[j - 1]相同，text1[i - 1] 与 text2[j - 1]不相同
如果text1[i - 1] 与 text2[j - 1]相同，那么找到了一个公共元素，所以dp[i][j] = dp[i - 1][j - 1] + 1;

如果text1[i - 1] 与 text2[j - 1]不相同，那就看看text1[0, i - 2]与text2[0, j - 1]的最长公共子序列 和 text1[0, i - 1]与text2[0, j - 2]的最长公共子序列，取最大的。

即：dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
```cpp
if (text1[i - 1] == text2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1] + 1;
} else {
    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
}
```
3.     dp数组如何初始化

先看看dp[i][0]应该是多少呢？

test1[0, i-1]和空串的最长公共子序列自然是0，所以dp[i][0] = 0;

同理dp[0][j]也是0。

其他下标都是随着递推公式逐步覆盖，初始为多少都可以，那么就统一初始为0。

所以最后的代码是这样的
```go
func longestCommonSubsequence(text1 string, text2 string) int {
    dp := make([][]int, len(text1)+1)
    for i := range dp {
        dp[i] = make([]int, len(text2)+1)
    }
    for i := 1; i <= len(text1); i++ {
        for j := 1; j <= len(text2); j++ {
            if text1[i-1] == text2[j-1] {
                dp[i][j] = dp[i-1][j-1]+1
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[len(text1)][len(text2)]
}
```

### [1035. 不相交的线](https://leetcode.cn/problems/uncrossed-lines/)

这道题本质上和上一道题是一样的,甚至代码都一样...
```go
func longestCommonSubsequence(text1 string, text2 string) int {
	t1 := len(text1)
	t2 := len(text2)
	dp:=make([][]int,t1+1)
	for i:=range dp{
		dp[i]=make([]int,t2+1)
	}

	for i := 1; i <= t1; i++ {
		for j := 1; j <=t2; j++ {
			if text1[i-1]==text2[j-1]{
				dp[i][j]=dp[i-1][j-1]+1
			}else{
				dp[i][j]=max(dp[i-1][j],dp[i][j-1])
			}
		}
	}
	return dp[t1][t2]
}
```

### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```
1.     确定dp数组（dp table）以及下标的含义
dp[i]：包括下标i之前的最大连续子序列和为dp[i]。
2. 确定递推公式
dp[i]只有两个方向可以推出来：

    dp[i - 1] + nums[i]，即：nums[i]加入当前连续子序列和
    nums[i]，即：从头开始计算当前连续子序列和

一定是取最大的，所以dp[i] = max(dp[i - 1] + nums[i], nums[i]);

3. dp数组如何初始化

从递推公式可以看出来dp[i]是依赖于dp[i - 1]的状态，dp[0]就是递推公式的基础。

dp[0]应该是多少呢?

根据dp[i]的定义，很明显dp[0]应为nums[0]即dp[0] = nums[0]。

所以代码应该是这样的
```go
func maxSubArray(nums []int) int {
    dp := make([]int, len(nums))
    dp[0] = nums[0]
    res := nums[0]

    for i := 1; i < len(nums); i++ {
        dp[i] = max(nums[i], dp[i-1]+nums[i])
        res = max(res, dp[i])
    }
    return res
}
```

### [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/)

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

```
输入：s = "abc", t = "ahbgdc"
输出：true
```
1.     确定dp数组（dp table）以及下标的含义

dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]。

2.     确定递推公式

在确定递推公式的时候，首先要考虑如下两种操作，整理如下：

    if (s[i - 1] == t[j - 1])
        t中找到了一个字符在s中也出现了
    if (s[i - 1] != t[j - 1])
        相当于t要删除元素，继续匹配

if (s[i - 1] == t[j - 1])，那么dp[i][j] = dp[i - 1][j - 1] + 1;，因为找到了一个相同的字符，相同子序列长度自然要在dp[i-1][j-1]的基础上加1（如果不理解，在回看一下dp[i][j]的定义）

if (s[i - 1] != t[j - 1])，此时相当于t要删除元素，t如果把当前元素t[j - 1]删除，那么dp[i][j] 的数值就是 看s[i - 1]与 t[j - 2]的比较结果了，即：dp[i][j] = dp[i][j - 1];

3.     dp数组如何初始化

从递推公式可以看出dp[i][j]都是依赖于dp[i - 1][j - 1] 和 dp[i][j - 1]，所以dp[0][0]和dp[i][0]是一定要初始化的。

这里大家已经可以发现，在定义dp[i][j]含义的时候为什么要表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]。

所以代码是这样的
```go
func isSubsequence(s string, t string) bool {
    dp := make([][]int, len(s)+1)
    for i := range dp {
        dp[i] = make([]int, len(t)+1)
    }

    for i := 1; i <= len(s); i++ {
        for j := 1; j <= len(t); j++ {
            if s[i-1] == t[j-1] {
                dp[i][j] = dp[i-1][j-1]+1
            } else {
                dp[i][j] = dp[i][j-1]
            }
        }
    }
    return dp[len(s)][len(t)] == len(s)
}
```

### [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)

给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

```
输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
rabbbit
rabbbit
rabbbit
```

1.     确定dp数组（dp table）以及下标的含义

这一类问题，基本是要分析两种情况

    s[i - 1] 与 t[j - 1]相等
    s[i - 1] 与 t[j - 1] 不相等

当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成。

一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。

一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]。

这里可能有同学不明白了，为什么还要考虑 不用s[i - 1]来匹配，都相同了指定要匹配啊。

例如： s：bagg 和 t：bag ，s[3] 和 t[2]是相同的，但是字符串s也可以不用s[3]来匹配，即用s[0]s[1]s[2]组成的bag。

当然也可以用s[3]来匹配，即：s[0]s[1]s[3]组成的bag。

所以当s[i - 1] 与 t[j - 1]相等时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];

当s[i - 1] 与 t[j - 1]不相等时，dp[i][j]只有一部分组成，不用s[i - 1]来匹配，即：dp[i - 1][j]

所以递推公式为：dp[i][j] = dp[i - 1][j];

2.     确定递推公式

从递推公式dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]; 和 dp[i][j] = dp[i - 1][j]; 中可以看出dp[i][0] 和dp[0][j]是一定要初始化的。

每次当初始化的时候，都要回顾一下dp[i][j]的定义，不要凭感觉初始化。

dp[i][0]表示什么呢？

dp[i][0] 表示：以i-1为结尾的s可以随便删除元素，出现空字符串的个数。

那么dp[i][0]一定都是1，因为也就是把以i-1为结尾的s，删除所有元素，出现空字符串的个数就是1。

再来看dp[0][j]，dp[0][j]：空字符串s可以随便删除元素，出现以j-1为结尾的字符串t的个数。

那么dp[0][j]一定都是0，s如论如何也变成不了t。

最后就要看一个特殊位置了，即：dp[0][0] 应该是多少。

dp[0][0]应该是1，空字符串s，可以删除0个元素，变成空字符串t。

初始化分析完毕，代码如下：
```cpp
vector<vector<long long>> dp(s.size() + 1, vector<long long>(t.size() + 1));
for (int i = 0; i <= s.size(); i++) dp[i][0] = 1;
for (int j = 1; j <= t.size(); j++) dp[0][j] = 0; // 其实这行代码可以和dp数组初始化的时候放在一起，但我为了凸显初始化的逻辑，所以还是加上了。
```

4. 确定遍历顺序

从递推公式dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]; 和 dp[i][j] = dp[i - 1][j]; 中可以看出dp[i][j]都是根据左上方和正上方推出来的。

所以遍历的时候一定是从上到下，从左到右，这样保证dp[i][j]可以根据之前计算出来的数值进行计算。


所以代码应该是这样
```go
func numDistinct(s string, t string) int {
    m, n := len(s), len(t)
    // dp 一当[i-1]结尾s序列 t[j-1]结尾t出现的次数
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for i := 0; i <= m; i++ {
        dp[i][0] = 1
    } 
    for j := 1; j <= n; j++ {
        dp[0][j] = 0
    }
    
    for i := 1; i <= m; i++ {
        for j := 1; j<= n; j++ {
            if s[i-1] == t[j-1] {
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[m][n]
}
```

### [583. 两个字符串的删除操作](https://leetcode.cn/problems/delete-operation-for-two-strings/)
给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

每步 可以删除任意一个字符串中的一个字符。
```
输入: word1 = "sea", word2 = "eat"
输出: 2
解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
```
1.     确定dp数组（dp table）以及下标的含义

dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数。

这里dp数组的定义有点点绕，大家要撸清思路。
2.     确定递推公式

    当word1[i - 1] 与 word2[j - 1]相同的时候
    当word1[i - 1] 与 word2[j - 1]不相同的时候

当word1[i - 1] 与 word2[j - 1]相同的时候，dp[i][j] = dp[i - 1][j - 1];

当word1[i - 1] 与 word2[j - 1]不相同的时候，有三种情况：

情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1

情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1

情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2

那最后当然是取最小值，所以当word1[i - 1] 与 word2[j - 1]不相同的时候，递推公式：dp[i][j] = min({dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1});

因为dp[i - 1][j - 1] + 1等于 dp[i - 1][j] 或 dp[i][j - 1]，所以递推公式可简化为：dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);

3.     dp数组如何初始化

从递推公式中，可以看出来，dp[i][0] 和 dp[0][j]是一定要初始化的。

dp[i][0]：word2为空字符串，以i-1为结尾的字符串word1要删除多少个元素，才能和word2相同呢，很明显dp[i][0] = i。

dp[0][j]的话同理，所以代码如下：
```cpp
vector<vector<int>> dp(word1.size() + 1, vector<int>(word2.size() + 1));
for (int i = 0; i <= word1.size(); i++) dp[i][0] = i;
for (int j = 0; j <= word2.size(); j++) dp[0][j] = j;
```
所以代码是这样的
```go
func minDistance(word1 string, word2 string) int {
    m, n := len(word1), len(word2)
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for i := 0; i <= len(word1); i++ {
        dp[i][0] = i
    }

    for i := 0; i <= len(word2); i++ {
        dp[0][i] = i
    }

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if word1[i-1] == word2[j-1] {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+2)
            }
        }
    }
    return dp[m][n]
}
```
当然这个题也可以求出最长公共子序列,然后最后再减一下长度也可以求出来
```go
// 求最长公共自序列
    m, n := len(text1), len(text2)
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if text1[i-1] == text2[j-1] {
                dp[i][j] = dp[i-1][j-1]+1
            } else {
                dp[i][j] = max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    return m+n-2*dp[m][n]
```

### [72. 编辑距离](https://leetcode.cn/problems/edit-distance/)
给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

    插入一个字符
    删除一个字符
    替换一个字符

```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

1. 确定dp数组（dp table）以及下标的含义

dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]。

2. 确定递推公式

```
if (word1[i - 1] == word2[j - 1])
    不操作
if (word1[i - 1] != word2[j - 1])
    增
    删
    换
```
也就是如上4种情况。

if (word1[i - 1] == word2[j - 1]) 那么说明不用任何编辑，dp[i][j] 就应该是 dp[i - 1][j - 1]，即dp[i][j] = dp[i - 1][j - 1];

此时可能有同学有点不明白，为啥要即dp[i][j] = dp[i - 1][j - 1]呢？

那么就在回顾上面讲过的dp[i][j]的定义，word1[i - 1] 与 word2[j - 1]相等了，那么就不用编辑了，以下标i-2为结尾的字符串word1和以下标j-2为结尾的字符串word2的最近编辑距离dp[i - 1][j - 1]就是 dp[i][j]了。

在下面的讲解中，如果哪里看不懂，就回想一下dp[i][j]的定义，就明白了。

在整个动规的过程中，最为关键就是正确理解dp[i][j]的定义！

if (word1[i - 1] != word2[j - 1])，此时就需要编辑了，如何编辑呢？

    操作一：word1删除一个元素，那么就是以下标i - 2为结尾的word1 与 j-1为结尾的word2的最近编辑距离 再加上一个操作。

即 dp[i][j] = dp[i - 1][j] + 1;

    操作二：word2删除一个元素，那么就是以下标i - 1为结尾的word1 与 j-2为结尾的word2的最近编辑距离 再加上一个操作。

即 dp[i][j] = dp[i][j - 1] + 1;

这里有同学发现了，怎么都是删除元素，添加元素去哪了。

word2添加一个元素，相当于word1删除一个元素，例如 word1 = "ad" ，word2 = "a"，word1删除元素'd' 和 word2添加一个元素'd'，变成word1="a", word2="ad"， 最终的操作数是一样！ dp数组如下图所示意的：

操作三：替换元素，word1替换word1[i - 1]，使其与word2[j - 1]相同，此时不用增加元素，那么以下标i-2为结尾的word1 与 j-2为结尾的word2的最近编辑距离 加上一个替换元素的操作。

即 dp[i][j] = dp[i - 1][j - 1] + 1;

综上，当 if (word1[i - 1] != word2[j - 1]) 时取最小的，即：dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;

递归公式代码如下：

```cpp
if (word1[i - 1] == word2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1];
}
else {
    dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;
}
```

3. dp数组如何初始化
再回顾一下dp[i][j]的定义：

dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]。

那么dp[i][0] 和 dp[0][j] 表示什么呢？

dp[i][0] ：以下标i-1为结尾的字符串word1，和空字符串word2，最近编辑距离为dp[i][0]。

那么dp[i][0]就应该是i，对word1里的元素全部做删除操作，即：dp[i][0] = i;

同理dp[0][j] = j;

所以C++代码如下：

```cpp
for (int i = 0; i <= word1.size(); i++) dp[i][0] = i;
for (int j = 0; j <= word2.size(); j++) dp[0][j] = j;
```

所以最后的代码是这样的
```go
m, n := len(word1), len(word2)
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for i := 0; i <= m; i++ {
        dp[i][0] = i
    }

    for j := 0; j <= n; j++ {
        dp[0][j] = j
    }

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if word1[i-1] == word2[j-1] {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = min(dp[i-1][j-1]+1, dp[i-1][j]+1, dp[i][j-1]+1)
            }
        }
    }
    return dp[m][n]
```

### [647. 回文子串](https://leetcode.cn/problems/palindromic-substrings/)
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

1. 确定dp数组（dp table）以及下标的含义

布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false。

2.     确定递推公式
在确定递推公式时，就要分析如下几种情况。

整体上是两种，就是s[i]与s[j]相等，s[i]与s[j]不相等这两种。

当s[i]与s[j]不相等，那没啥好说的了，dp[i][j]一定是false。

当s[i]与s[j]相等时，这就复杂一些了，有如下三种情况

    情况一：下标i 与 j相同，同一个字符例如a，当然是回文子串
    情况二：下标i 与 j相差为1，例如aa，也是回文子串
    情况三：下标：i 与 j相差大于1的时候，例如cabac，此时s[i]与s[j]已经相同了，我们看i到j区间是不是回文子串就看aba是不是回文就可以了，那么aba的区间就是 i+1 与 j-1区间，这个区间是不是回文就看dp[i + 1][j - 1]是否为true。

```cpp
if (s[i] == s[j]) {
    if (j - i <= 1) { // 情况一 和 情况二
        result++;
        dp[i][j] = true;
    } else if (dp[i + 1][j - 1]) { // 情况三
        result++;
        dp[i][j] = true;
    }
}
```
result就是统计回文子串的数量。

注意这里我没有列出当s[i]与s[j]不相等的时候，因为在下面dp[i][j]初始化的时候，就初始为false。

3.     dp数组如何初始化

dp[i][j]可以初始化为true么？ 当然不行，怎能刚开始就全都匹配上了。

所以dp[i][j]初始化为false。

所以代码是像这样的
```go
func countSubstrings(s string) int {
    dp := make([][]bool, len(s))
    for i := range dp {
        dp[i] = make([]bool, len(s))
    }
    res := 0
    for i := len(s); i >= 0; i-- {
        for j := i; j < len(s); j++ {
            if s[i] == s[j] {
                if j - i <= 1 {
                    res++
                    dp[i][j] = true
                } else if dp[i+1][j-1] {
                    res++
                    dp[i+1][j-1] = true
                }
            }
        }
    }
    return res
}
```

### [516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)

给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

```
输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 
```

我们刚刚做过了 动态规划：回文子串，求的是回文子串，而本题要求的是回文子序列， 要搞清楚这两者之间的区别。

回文子串是要连续的，回文子序列可不是连续的！ 回文子串，回文子序列都是动态规划经典题目。

回文子串，可以做这两题：

    647.回文子串
    5.最长回文子串

    思路其实是差不多的，但本题要比求回文子串简单一点，因为情况少了一点。

动规五部曲分析如下：

1. 确定dp数组（dp table）以及下标的含义
dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]。

2.     确定递推公式
在判断回文子串的题目中，关键逻辑就是看s[i]与s[j]是否相同。

如果s[i]与s[j]相同，那么dp[i][j] = dp[i + 1][j - 1] + 2;

![](https://img-blog.csdnimg.cn/20210127151350563.jpg)

如果s[i]与s[j]不相同，说明s[i]和s[j]的同时加入 并不能增加[i,j]区间回文子串的长度，那么分别加入s[i]、s[j]看看哪一个可以组成最长的回文子序列。

加入s[j]的回文子序列长度为dp[i + 1][j]。

加入s[i]的回文子序列长度为dp[i][j - 1]。

那么dp[i][j]一定是取最大的，即：dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);

```cpp
if (s[i] == s[j]) {
    dp[i][j] = dp[i + 1][j - 1] + 2;
} else {
    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
}
```

代码就像这样
```go
func longestPalindromeSubseq(s string) int {
	size := len(s)
	max := func(a, b int) int {
		if a > b {
			return a
		}
		return b
	}
	dp := make([][]int, size)
	for i := 0; i < size; i++ {
		dp[i] = make([]int, size)
		dp[i][i] = 1
	}
	for i := size - 1; i >= 0; i-- {
		for j := i + 1; j < size; j++ {
			if s[i] == s[j] {
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = max(dp[i][j-1], dp[i+1][j])
			}
		}
	}
	return dp[0][size-1]
}
```