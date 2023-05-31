---
icon: edit
date: 2023-05-16
isOriginal: true
title: Go fmt 包详解
category:
  - tutorial
tag:
  - golang
---

# Go fmt 包详解

::: info
相信很多人入坑Go语言都是从官网的`fmt.Println("Hello World")`入门的

这篇文章带你好好了解一下`fmt`包还可以做哪些事情。
:::

::: info
在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。
:::

# fmt 包概述

fmt 包实现了类似于C语言的格式化==输入输出==函数。

## Print 系列函数

```
func Print(a ...interface{}) (n int, err error)
func Printf(format string, a ...interface{}) (n int, err error)
func Println(a ...interface{}) (n int, err error)
```

Print 系列函数会将内容输出到标准输出，Print 函数直接输出内容，Printf 支持格式化输出，Println 每次输出的内容都会加一个换行符。

例如：

```go
fmt.Print("123")
fmt.Printf("%d", 456)
fmt.Print("789")
fmt.Printf("%d\n", 123)
fmt.Println("123")
fmt.Println("456")
```

输出：

```
123456789123
123
456
```

## Sprint 系列函数

```
func Sprint(a ...interface{}) string
func Sprintf(format string, a ...interface{}) string
func Sprintln(a ...interface{}) string
```

Sprint 系列函数会将内容输出为字符串，区别在于 Sprint 直接输出内容，Sprintf 将后面的内容映射到对应的占位符，Sprintln 会在内容后面添加一个换行符。

例如：

```go
s1 := fmt.Sprint("123")
s2 := fmt.Sprintf("name:%s,age:%d", "Lixin", 21)
s3 := fmt.Sprintln("456")
fmt.Println(s1, s2, s3)
```

输出：

```
123 name:Lixin,age:21 456
```

## Fprint 系列函数

```go
func Fprint(w io.Writer, a ...interface{}) (n int, err error)
func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error)
func Fprintln(w io.Writer, a ...interface{}) (n int, err error)
```

Fprint 系列函数会将内容输出到实现了 io.Writer 接口的变量，常见用法是向文件中写入内容，也可以向终端输出内容（很少见）。

例如，向标准输出写入内容：

```go
fmt.Fprintln(os.Stdout, "向标准输出写入内容")
fileObj, err := os.OpenFile("./output.txt", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
if err != nil {
    panic(err)
}
name := "Lixin"
// 向打开的文件句柄中写入内容
fmt.Fprintf(fileObj, "往文件中写入信息\nname: %s\nage: %d", name, 21)
```

输出的内容为：

```
向标准输出写入内容
```

文件 `output.txt` 的内容为：

```
往文件中写入信息
name: Lixin
age: 21
```

## Errors

Errorf 类似于 Printf，但返回一个包含该字符串的错误。

通常我们

会返回这样的错误：

```go
var err error
// ...
return fmt.Errorf("Error: %v", err)
```

## Scan 系列函数

```go
func Scan(a ...interface{}) (n int, err error)
func Scanf(format string, a ...interface{}) (n int, err error)
func Scanln(a ...interface{}) (n int, err error)
```

Scan 系列函数用于从标准输入中扫描文本，并根据 format 参数指定的格式将对应的值映射到 a... 的参数中。

Scan 函数根据空格来区分输入的值，Scanf 根据 format 来区分值，Scanln 根据回车来停止扫描。

例如：

```go
var name string
var age int
fmt.Scanln(&name, &age)
fmt.Printf("name: %s, age: %d", name, age)
```

输入 `Lixin 21`，输出：

```
name: Lixin, age: 21
```

Scanf 的示例：

```go
var name string
var age int
fmt.Scanf("name:%s age:%d", &name, &age)
fmt.Printf("name: %s, age: %d", name, age)
```

输入 `name:Lixin age:21`，输出：

```
name: Lixin, age: 21
```

## Fscan 系列函数

```go
func Fscan(r io.Reader, a ...interface{}) (n int, err error)
func Fscanln(r io.Reader, a ...interface{}) (n int, err error)
func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err error)
```

Fscan 系列函数可以从标准输入中读取数据，例如文件或命令行中的输入。

如果想从文件中读取内容：

```go
var s string
f, _ := os.OpenFile("./output.txt", os.O_CREATE|os.O_RDWR, 0644)

reader := bufio.NewReader(f)
fmt.Fscan(reader, &s)
fmt.Printf("读取的字符串是：%s", s)
```

如果文件 `output.txt` 的内容是 `file.Outputn ame: Lixinage: 21`，则输出为 `读取的字符串是：file.Outputn`，因为 Fscan 默认使用空格作为分隔符，无法识别空格后的内容。

如果想从标准输入中读取内容，可以使用以下代码：

```go
var s string
reader := bufio.NewReader(os.Stdin)
fmt.Fscan(reader, &s)
fmt.Printf("你的输入内容是：%s", s)
```

输入 `Hello, Lixin`，输出 `你的输入内容是：Hello`，同样因为该函数无法识别空格。

Fscanln 函数是根据换行符来停止扫描的，Fscanf 类似于 Scanf，用于映射对应的换行符，这两个函数用法类似。

另外，这里提一下 bufio 包中的 ReadString 函数，用于从指定的 io.Reader 中读取一行字符串，直到遇到指定的分隔符为止。函数签名如下：

```go
func (b *Reader) ReadString(delim byte) (string, error)
```



例如，如果想读取文件 `output.txt` 的第一行，并以空格作为分隔符，可以这样写：

```go
f, _ := os.OpenFile("./output.txt", os.O_RDWR, 0644)
reader := bufio.NewReader(f)
line, err := reader.ReadString(' ')
if err != nil {
    fmt.Println(err)
    return
}
fmt.Printf("读取的字符串是：%s", line)
```

如果文件 `output.txt` 的内容是 `file.Outputn ame: Lixinage: 21`，则输出为 `读取的字符串是：file.Outputn`，因为 ReadString 在遇到空格时停止读取。

## Sscan 系列函数

```go
func Sscan(str string, a ...interface{}) (n int, err error)
func Sscanln(str string, a ...interface{}) (n int, err error)
func Sscanf(str string, format string, a ...interface{}) (n int, err error)
```

Sscan 是用于从字符串中读取数据并格式化到指定变量中的函数。

例如：

```go
str := "1 2 3"
var a, b, c int
n, err := fmt.Sscan(str, &a, &b, &c)
if err != nil {
    fmt.Println(err)
    return
}
fmt.Printf("读取了 %d 个数，分别是：%d,%d,%d", n, a, b, c)
```

运行该函数，输出：

```
读取了 3 个数，分别是：1,2,3
```

在 Go 语言的 `fmt` 包中，有一些常见的占位符可以用于格式化输出。以下是一些常用的占位符及其使用方式：

- `%v`：通用的占位符，可以用于格式化任意类型的值。它会根据值的类型自动选择适当的格式。
- `%d`：用于格式化整数类型（包括有符号整数和无符号整数）。
- `%f`：用于格式化浮点数类型。
- `%s`：用于格式化字符串类型。
- `%t`：用于格式化布尔类型。
- `%c`：用于格式化字符类型。
- `%p`：用于格式化指针类型。

以下是一些示例说明如何使用这些占位符：

```go
name := "Lixin"
age := 21
pi := 3.14159
isStudent := true

fmt.Printf("Name: %s, Age: %d\n", name, age)  // 输出：Name: Lixin, Age: 21
fmt.Printf("Pi: %.2f\n", pi)                  // 输出：Pi: 3.14
fmt.Printf("Is student: %t\n", isStudent)     // 输出：Is student: true
```

在格式化字符串中，占位符用百分号 `%` 后跟一个字母表示。在 `%d` 和 `%f` 等占位符后可以加上一些附加参数来控制格式化的方式。例如，`%f` 占位符可以使用 `.2` 来限制浮点数只保留两位小数。

除了 `Printf` 函数，还有其他的函数如 `Sprintf` 和 `Fprintf` 也可以使用这些占位符。`Sprintf` 函数将格式化的结果作为字符串返回，而 `Fprintf` 函数将格式化的结果写入一个指定的 `io.Writer`。

```go
result := fmt.Sprintf("Name: %s, Age: %d", name, age)
fmt.Println(result)  // 输出：Name: Lixin, Age: 21

file, _ := os.Create("output.txt")
fmt.Fprintf(file, "Name: %s, Age: %d", name, age)
file.Close()
```

## 总结

这些是 `fmt` 包中常见的函数和使用方式。具体可以去看官网页面，里面写的很详细