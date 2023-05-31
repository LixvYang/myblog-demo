---
icon: edit
title: Go flag 包详解
date: 2023-05-25
isOriginal: true
category:
  - tutorial
tag:
  - golang
---

# Go flag 包详解

## 介绍

::: info
`flag` 包是 Go 语言标准库中的一个包，用于解析命令行参数。它提供了一种方便的方式来定义和解析命令行参数，使得开发命令行工具和应用程序更加简单和灵活。
:::

::: info
`flag` 包的主要功能包括：
- 定义命令行参数的类型和默认值
- 解析命令行参数，并将其赋值给对应的变量
- 提供帮助信息和用法说明

:::
### 简单例子

下面是一个示例，假设我们要编写一个简单的命令行工具，用于计算两个整数的和。我们可以使用 `flag` 包来定义并解析命令行参数。

```go
package main

import (
	"flag"
	"fmt"
)

func main() {
	// 定义命令行参数
	num1 := flag.Int("num1", 0, "第一个整数")
	num2 := flag.Int("num2", 0, "第二个整数")

	// 解析命令行参数
	flag.Parse()

	// 计算和
	sum := *num1 + *num2

	// 输出结果
	fmt.Println("和:", sum)
}
```

在上面的示例中，我们首先使用 `flag.Int` 函数定义了两个命令行参数 `num1` 和 `num2`，分别表示两个整数。这些参数的默认值为 0，而第三个参数是用于帮助信息的描述。

接下来，我们调用 `flag.Parse()` 函数来解析命令行参数。它会在命令行中查找定义的参数，并将相应的值赋给对应的变量。

最后，我们将两个整数相加，并输出结果。

现在我们可以在命令行中运行该程序，并指定命令行参数：

```shell
$ go run main.go -num1=10 -num2=20
和: 30
```

以上示例演示了如何使用 `flag` 包来定义和解析命令行参数，使得我们可以灵活地通过命令行来控制程序的行为。我们可以通过`flag`包进一步开发自己的命令行工具和应用程序。

`flag` 包还支持以下几种常用的命令行参数类型：

1. 布尔类型（`bool`）：
   - 用法：`flag.Bool(name string, value bool, usage string) *bool`
   - 示例：`verbose := flag.Bool("verbose", false, "显示详细信息")`
   - 描述：布尔类型的命令行参数用于表示某个选项是否开启或关闭。如果命令行中指定了该选项，则对应的布尔变量会被设置为 `true`，否则为 `false`。

2. 整数类型（`int`）：
   - 用法：`flag.Int(name string, value int, usage string) *int`
   - 示例：`count := flag.Int("count", 0, "重试次数")`
   - 描述：整数类型的命令行参数用于表示整数值。通过命令行指定的整数值会被解析并赋值给对应的整数变量。

3. 字符串类型（`string`）：
   - 用法：`flag.String(name string, value string, usage string) *string`
   - 示例：`name := flag.String("name", "", "姓名")`
   - 描述：字符串类型的命令行参数用于表示文本字符串。命令行中指定的字符串值会被解析并赋值给对应的字符串变量。

4. 浮点数类型（`float64`）：
   - 用法：`flag.Float64(name string, value float64, usage string) *float64`
   - 示例：`price := flag.Float64("price", 0.0, "价格")`
   - 描述：浮点数类型的命令行参数用于表示浮点数值。命令行中指定的浮点数值会被解析并赋值给对应的浮点数变量。

5. 其他类型：
   - `Int64`、`Uint`、`Uint64`：类似于整数类型，但是支持更大的整数范围。
   - `Duration`：用于表示时间段的类型，可以解析包含时间单位的字符串，如 `"10s"`、`"1h30m"`。
   - `IP`、`IPMask`：用于表示 IP 地址和 IP 子网掩码的类型。
   - `Var`：用于自定义类型的命令行参数，需要实现 `flag.Value` 接口。

通过使用这些不同类型的命令行参数，可以满足各种不同类型数据的需求，并且 `flag` 包提供了简单易用的方法来解析和处理这些命令行参数。

以下是一个示例，展示了 `flag` 包中常用的命令行参数类型：

```go
package main

import (
	"flag"
	"fmt"
)

func main() {
	// 定义命令行参数
	verbose := flag.Bool("verbose", false, "显示详细信息")
	count := flag.Int("count", 0, "重试次数")
	name := flag.String("name", "", "姓名")
	price := flag.Float64("price", 0.0, "价格")

	// 解析命令行参数
	flag.Parse()

	// 输出解析后的命令行参数
	fmt.Println("Verbose:", *verbose)
	fmt.Println("Count:", *count)
	fmt.Println("Name:", *name)
	fmt.Println("Price:", *price)
}
```

在上述示例中，我们定义了四个不同类型的命令行参数：
- `verbose` 是一个布尔类型的参数，用于表示是否显示详细信息。
- `count` 是一个整数类型的参数，用于表示重试次数。
- `name` 是一个字符串类型的参数，用于表示姓名。
- `price` 是一个浮点数类型的参数，用于表示价格。

通过使用 `flag.Bool`、`flag.Int`、`flag.String` 和 `flag.Float64` 函数，我们定义了这些不同类型的命令行参数，并为每个参数指定了名称、默认值和帮助信息。

接下来，我们调用 `flag.Parse()` 函数来解析命令行参数。然后，我们使用指针解引用的方式获取每个命令行参数的值，并将其打印出来。

现在我们可以在命令行中运行该程序，并指定不同的命令行参数：

```shell
$ go run main.go -verbose -count=3 -name=John -price=9.99
Verbose: true
Count: 3
Name: John
Price: 9.99
```

通过修改命令行参数的值，你可以尝试不同类型的参数并观察输出结果。

### Var形式

`flag`不仅仅支持直接类型的形式解析，还支持直接解析覆盖值的形式来解析命令行数据，比如`BoolVar`。

示例

```go
package main

import (
	"flag"
	"fmt"
)

func main() {
	// 定义命令行参数
	var verbose bool
	flag.BoolVar(&verbose, "verbose", false, "显示详细信息")

	var count int
	flag.IntVar(&count, "count", 0, "重试次数")

	// 解析命令行参数
	flag.Parse()

	// 输出解析后的命令行参数
	fmt.Println("Verbose:", verbose)
	fmt.Println("Count:", count)
}
```

在上述示例中，我们使用 `BoolVar` 和 `IntVar` 函数创建了布尔类型和整数类型的命令行参数。

`BoolVar` 函数用于创建一个布尔类型的命令行参数，并将解析后的值存储在对应的布尔变量中。它的参数包括一个布尔变量的指针，命令行参数的名称，命令行参数的默认值以及对该命令行参数的简短描述。

`IntVar` 函数用于创建一个整数类型的命令行参数，并将解析后的值存储在对应的整数变量中。它的参数包括一个整数变量的指针，命令行参数的名称，命令行参数的默认值以及对该命令行参数的简短描述。

通过调用 `flag.Parse()` 函数，我们可以解析命令行参数并将其赋值给相应的变量。

下面是在命令行中运行该程序并指定不同的命令行参数的示例：

```shell
$ go run main.go -verbose -count=3
Verbose: true
Count: 3
```

通过修改命令行参数的值，您可以尝试不同的布尔值和整数值，并观察输出结果。这将帮助您更好地理解和使用 `flag` 包中的 `BoolVar` 和 `IntVar` 函数。

### 自定义类型解析

flag.TypeVar 是 flag 包中用于自定义类型的命令行参数的函数。通过实现 flag.Value 接口，我们可以创建自己的类型，并在命令行参数中使用。

`flag.Value`接口：

```
type Value interface {
	String() string
	Set(string) error
}
```

以下是一个示例，展示了如何使用 flag.TypeVar 创建自定义类型的命令行参数：

`flag.TypeVar` 是 `flag` 包中用于自定义类型的命令行参数的函数。通过实现 `flag.Value` 接口，我们可以创建自己的类型，并在命令行参数中使用。

```go
package main

import (
	"flag"
	"fmt"
	"strconv"
)

// CustomType 是自定义的类型
type CustomType int

// String 返回 CustomType 的字符串表示
func (c CustomType) String() string {
	return strconv.Itoa(int(c))
}

// Set 解析命令行参数并设置 CustomType 的值
func (c *CustomType) Set(value string) error {
	// 在这里可以进行自定义类型的解析和处理
	// 这里简单地将命令行参数转换为整数并赋值给 CustomType
	num, err := strconv.Atoi(value)
	if err != nil {
		return err
	}
	*c = CustomType(num)
	return nil
}

func main() {
	// 定义命令行参数
	var custom CustomType
	flag.Var(&custom, "custom", "自定义参数")

	// 解析命令行参数
	flag.Parse()

	// 输出解析后的命令行参数
	fmt.Println("Custom:", custom)
}
```

在上面的示例中，我们定义了一个名为 `CustomType` 的自定义类型，并实现了 `flag.Value` 接口的两个方法：`String` 和 `Set`。

`String` 方法用于返回自定义类型 `CustomType` 的字符串表示，这里我们将其转换为整数类型的字符串。

`Set` 方法用于解析命令行参数并设置自定义类型 `CustomType` 的值。在这个示例中，我们将命令行参数转换为整数，并将其赋值给 `CustomType` 变量。

接下来，我们使用 `flag.Var` 函数注册自定义类型的命令行参数。通过传入一个实现了 `flag.Value` 接口的变量的指针，我们告诉 `flag` 包应该如何解析和处理该类型的命令行参数。

最后，我们调用 `flag.Parse()` 函数来解析命令行参数。在解析完成后，我们可以通过直接访问自定义类型的变量来获取解析后的值，并将其打印出来。

现在我们可以在命令行中运行该程序，并指定自定义类型的命令行参数：

```shell
$ go run main.go -custom=42
Custom: 42
```

当然如果你只是想获得命令行参数，就不需要`flag`包了，`os.Args`就可以解决：

`os.Args` 是一个字符串切片，用于访问命令行参数。它存储了程序启动时传递给程序的所有命令行参数，包括程序名称本身。

以下是一个示例，展示了如何使用 `os.Args` 来获取和遍历命令行参数：

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	// 获取命令行参数
	args := os.Args

	// 遍历命令行参数
	for index, arg := range args {
		fmt.Printf("参数 %d: %s\n", index, arg)
	}
}
```

在上述示例中，我们使用 `os.Args` 获取了所有的命令行参数，并将它们存储在 `args` 变量中。

然后，我们使用 `range` 循环遍历 `args` 切片，获取每个命令行参数的索引和值。通过 `%d` 和 `%s` 占位符，我们将参数的索引和值打印出来。

现在我们可以在命令行中运行该程序，并指定不同的命令行参数：

```shell
$ go run main.go arg1 arg2 arg3
参数 0: main.go
参数 1: arg1
参数 2: arg2
参数 3: arg3
```

在上面的示例中，`main.go` 是程序的名称，`arg1`、`arg2` 和 `arg3` 是用户传递给程序的自定义命令行参数。通过遍历 `os.Args` 切片，我们可以获取和处理这些命令行参数。

使用 `os.Args` 可以访问和处理命令行参数，从而根据程序的需求来执行相应的逻辑操作。



