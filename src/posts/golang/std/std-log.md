---
icon: edit
title: Go log 包详解
date: 2023-05-20
isOriginal: true
category:
  - tutorial
tag:
  - golang
---

# Log包详解

::: info 
之前不知道在哪看到过一句话，一个程序员开始重视日志的时候才是这个程序员从程序员迈向工程师的时候。

在程序开发中，日志是一个非常重要的工具，它可以帮助我们记录和追踪程序的运行状态和错误信息。在Go语言中，log 包是一个基础的标准库，提供了许多日志相关的功能。本文将介绍 log 包的常用函数以及如何配置和使用日志。
::: 

## 常用函数

log 包提供了一些常用的函数，可以方便地打印日志信息。这些函数包括 Print、Printf、Println、Fatal、Fatalf、Fatalln、Panic、Panicf 和 Panicln。它们的功能类似，区别在于添加换行符(ln)和是否触发程序的退出或崩溃。

```go
func Print(v ...interface{})
func Printf(format string, v ...interface{})
func Println(v ...interface{})

func Fatal(v ...interface{})
func Fatalf(format string, v ...interface{})
func Fatalln(v ...interface{})

func Panic(v ...interface{})
func Panicf(format string, v ...interface{})
func Panicln(v ...interface{})
```

```go
// demo

func printDemo() {
	log.Print("Test Print")
	log.Println("Test Print")
	log.Printf("Test Print")
}

// 输出
2023/05/25 17:37:06 Test Print
2023/05/25 17:37:06 Test Print
2023/05/25 17:37:06 Test Print
```


## Logger类型配置日志


其实整个log包内的这些函数都是由一个Logger类型配置的，默认情况下logger只会返回对应的日志的时间信息，如果我们想设置更多的信息，log包下有一些类型可以让我们自行配置：

```go
const (
	Ldate         = 1 << iota     // the date in the local time zone: 2009/01/23
	Ltime                         // the time in the local time zone: 01:23:23
	Lmicroseconds                 // microsecond resolution: 01:23:23.123123.  assumes Ltime.
	Llongfile                     // full file name and line number: /a/b/c/d.go:23
	Lshortfile                    // final file name element and line number: d.go:23. overrides Llongfile
	LUTC                          // if Ldate or Ltime is set, use UTC rather than the local time zone
	Lmsgprefix                    // move the "prefix" from the beginning of the line to before the message
	LstdFlags     = Ldate | Ltime // initial values for the standard logger
)
```

默认是LstdFlags，如果我们想配置别的类型只需要，使用SetFlags函数即可，比如Llongfile可以看到整个文件在系统中的位置。

```go
func Flags() int 
func SetFlags(flag int)
```

### 配置日志前缀

和flag一样，`log`标准库,也支持我们自行配置每行日志的前缀信息

```
func Prefix() string
func SetPrefix(prefix string)
```

Prefix函数可以让我们的到前缀是什么，比如下面这样:

```go
func prefixDemo() {
	log.SetPrefix("TestPrefix: ")

	log.Print("Test Print")
	log.Println("Test Print")
	log.Printf("Test Print")
	log.Println(log.Prefix())
}

// 输出

TestPrefix: 2023/05/25 17:43:57 Test Print
TestPrefix: 2023/05/25 17:43:57 Test Print
TestPrefix: 2023/05/25 17:43:57 Test Print
TestPrefix: 2023/05/25 17:43:57 TestPrefix: 
```

### 配置日志输出位置

我们还可以通过log配置日志输出位置

```go
func SetOutput(w io.Writer)
```

比如我们可以打开一个`log.txt`文件来保存所有的日志信息，

```
logFile, err := os.OpenFile("./log.txt", os.O_CREATE|os.O_RDWR|os.O_APPEND, 0644)
	if err != nil {
		panic(err)
	}

	fmt.Println(log.Prefix())
	log.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)
	log.SetOutput(logFile)
	log.Println("Test")

// 输出在文件里的详细信息
2023/05/25 17:47:13.688674 /Users/lixin/xxx/test-std/test-log/log.go:24: Test
```

其实你打开具体的SetOutput、SetPrefix、SetFlag这些函数，其实都是配置一个已经在log包下创建好的logger结构体。

```go
// SetOutput函数
// SetOutput sets the output destination for the standard logger.
  // std 其实只是使用log包下New出来的一个 Logger实例
func SetOutput(w io.Writer) {
	std.SetOutput(w)
}

var std = New(os.Stderr, "", LstdFlags)
```

所以理论上我们也可以自己New出来一个Logger实例，然后让我们自己New出来的实例去打印日志，实际上许多项目就是这么做的，比如mixin的logger就是自己封装一个log，总共才70行的代码https://github.com/MixinNetwork/mixin/blob/master/logger/log.go。

## 创建自己的logger

示例： 

```go
func newLogger() {
	logger := log.New(os.Stdout, "<Test Prefix>", log.LstdFlags)
	logger.Println("Test logger")
}

// 输出
<Test Prefix>2023/05/25 17:58:35 Test logger
```

## 总结

::: info 总结
log 包是Go语言官方提供的基础日志库，它提供了一些常用的函数和配置选项，可以方便地记录和输出日志信息。然而，它的功能相对简单，如果有更复杂的需求，我们可以选择使用其他成熟的日志库，例如 zap 等。无论使用何种日志库，重视日志的记录和分析对于程序开发和维护都是至关重要的。
:::
