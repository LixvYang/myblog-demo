---
icon: edit
date: 2023-05-27
isOriginal: true
category:
  - tutorial
tag:
  - golang
---

# Go reflect 反射包详解

```card
当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。
```

首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。

你现在知道定义了，接下来就需要适应这个新名词出现在自己的世界里，然后尽快适应它。

如何尽快适应呢？就是通过大量练习，尽可能让自己在实践中使用到。

```card
ps: 本文最后的反射示例是我们公司内部使用框架的一个小demo，可以通过方法名自动注册HTTP方法。
```

## 反射怎么用

在Go语言中每个字段都有：

```card
1. 类型
2. 值
```

比如

```go
A := 10 // a 的类型就是int，值就是10，这是go语言的语法糖帮助我们简单创建的类型
var a int = 10 // 实际上应该是这样创建, 在声明值的时候标注类型
```

Reflect的两个主要类型是`reflect.Type`和`reflect.Value `，可以让我们获取任意对象的Type和Value。

## Type

当我们想要获取一个变量的类型信息时，可以使用reflect.TypeOf函数来实现。下面是一个使用reflect.TypeOf的示例：

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var num int = 42
	var str string = "Hello, Reflect!"

	fmt.Println(reflect.TypeOf(num))  // 输出: int
	fmt.Println(reflect.TypeOf(str))  // 输出: string
}
```

实际上reflect不仅仅只有Type还有一个Kind。Kind你可以理解为字段的底层类型。比如下面这个例子

```go
	var a myFloat64 // 自定义类型
	var b *float64  // 指针

	reflectType(a) // 输出：TypeOf: main.myFloat64, 类型：myFloat64，种类：float64
	reflectType(b) // 输出：TypeOf: TypeOf: *float64, 类型：，种类：ptr

	type Person struct {
		Name string
		Age  int
	}
	var p = Person{
		Name: "Lixin",
		Age:  21,
	}
	reflectType(p) // TypeOf: TypeOf: main.Person, 类型：Person，种类：struct
```
你可以注意到，像==slice，map，指针等变量的`.Name`返回都是空==，它们在Go语言中都被视为类型的底层实现或衍生类型，而不是具体的命名类型。

为什么要这样做呢呢？

```card
对于数组和切片类型，它们的名称在Go语言中是以表达式形式表示的，例如[5]int表示长度为5的整型数组，[]string表示字符串切片。由于这些类型是通过表达式定义的，而不是具体的命名类型，所以它们的.Name()方法返回空。

对于map类型，它的名称是map，而不包含具体的键类型和值类型信息。因为映射类型在Go语言中是一种内置类型，并且可以使用不同的键类型和值类型进行实例化，所以它的.Name()方法返回空。

对于指针类型，它的名称是加上指针指向的类型的名称。例如，对于int类型的指针变量，它的名称是*int。然而，由于指针类型本身没有具体的命名，只是指向其他类型的引用，所以它的.Name()方法返回空。
```

这样设计的目的是为了遵循Go语言的类型系统和语法约定。

类型里不仅仅有Type，通过反射，我们可以进一步使用.Kind()方法获取这些类型的种类信息，以便进一步判断和处理。
比如下面的示例：

```go
package main

import (
	"fmt"
	"reflect"
)

type student struct {
	Name  string `json:"name"`
	Score int    `json:"score"`
}

func main() {
	stu1 := student{
		Name:  "Lixin",
		Score: 90,
	}

	t := reflect.TypeOf(stu1)
	fmt.Println(t.Name(), t.Kind()) // student struct

	switch t.Kind() {
	case reflect.Struct:
		fmt.Println("Type is a struct")
		for i := 0; i < t.NumField(); i++ {
			field := t.Field(i)
			fmt.Printf("name:%s index:%d type:%v json tag:%v\n", field.Name, field.Index, field.Type, field.Tag.Get("json"))
		}
	case reflect.Int:
		fmt.Println("Type is an int")
		// Handle int type accordingly
	case reflect.Bool:
		fmt.Println("Type is a bool")
		// Handle bool type accordingly
	default:
		fmt.Println("Unknown type")
	}
}

```

```go
student struct
Type is a struct
name:Name index:[0] type:string json tag:name
name:Score index:[1] type:int json tag:score
```

在这里，你可以可以进一步在reflect包中得知go的真正的Kind的定义

```go
// go reflect标准库源码
// A Kind represents the specific kind of type that a Type represents.
// The zero Kind is not a valid kind.
type Kind uint

const (
	Invalid Kind = iota
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
)
```

## Value

Reflect的Value类型就是Go中每个字段的值信息，我们可以通过`ValueOf()`来获得原始值信息。

以下是其中一些常用的方法：

- Interface()：返回一个interface{}类型的值，表示reflect.Value持有的原始值。可以通过类型断言将其转换为具体类型。
- Bool()：返回bool类型的原始值。
- Int()：返回int类型的原始值。
- Float()：返回float64类型的原始值。
- String()：返回string类型的原始值。
- Type()：返回reflect.Type类型，表示reflect.Value持有的值的类型。

下面这个例子，你就应该明白怎么用了：

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	// 使用 reflect.ValueOf 获取 reflect.Value
	v := reflect.ValueOf(42)

	// 获取原始值
	value := v.Interface()
	fmt.Println(value) // 输出: 42

	// 使用类型断言将原始值转换为具体类型
	if i, ok := value.(int); ok {
		fmt.Println(i * 2) // 输出: 84
	}

	// 使用其他方法获取原始值
	b := reflect.ValueOf(true).Bool()
	fmt.Println(b) // 输出: true

	f := reflect.ValueOf(3.14).Float()
	fmt.Println(f) // 输出: 3.14

	s := reflect.ValueOf("hello").String()
	fmt.Println(s) // 输出: hello

	t := reflect.ValueOf(42).Type()
	fmt.Println(t) // 输出: int
}
```

### 通过反射来更改变量的底层值

你还可以通过反射来修改其底层的值。

```go
package main

import (
	"fmt"
	"reflect"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	p := Person{Name: "Alice", Age: 25}

	// 使用反射获取变量的指针值
	// 这里必须是指针，因为我们是通过底层指针去更改值的
	v := reflect.ValueOf(&p)

	// 检查是否是指针类型并且可寻址
	if v.Kind() == reflect.Ptr && v.Elem().CanSet() {
		// 获取指针指向的值
		elem := v.Elem()

		// 获取字段的值并修改
		nameField := elem.FieldByName("Name")
		if nameField.IsValid() && nameField.Kind() == reflect.String {
			nameField.SetString("Bob")
		}

		ageField := elem.FieldByName("Age")
		if ageField.IsValid() && ageField.Kind() == reflect.Int {
			ageField.SetInt(30)
		}
	}

	fmt.Printf("%+v", p) // 输出: {Name:Bob Age:30}
}
```

### isVaild

你可能注意到了我们上个例子中有个没有提到的方法`IsValid()`

`func (v Value) IsValid() bool`返回v是否持有一个值。如果v是Value零值会返回假，此时v除了IsValid、String、Kind之外的方法都会导致panic。

`func (v Value) IsNil() bool` IsNil()报告v持有的值是否为nil。v持有的值的分类必须是通道、函数、接口、映射、指针、切片之一；否则IsNil函数会导致panic。

```go
package main

import (
	"fmt"
	"reflect"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	// *int类型空指针
	var a *int
	fmt.Println("var a *int IsNil:", reflect.ValueOf(a).IsNil()) //var a *int IsNil: true
	// nil值
	fmt.Println("nil IsValid:", reflect.ValueOf(nil).IsValid()) // nil IsValid: false
	// 实例化一个匿名结构体
	b := struct{}{}
	// 尝试从结构体中查找"abc"字段
	fmt.Println("不存在的结构体成员:", reflect.ValueOf(b).FieldByName("abc").IsValid()) // 不存在的结构体成员: false
	// 尝试从结构体中查找"abc"方法
	fmt.Println("不存在的结构体方法:", reflect.ValueOf(b).MethodByName("abc").IsValid()) // 不存在的结构体方法: false
	// map
	c := map[string]int{}
	// 尝试从map中查找一个不存在的键
	fmt.Println("map中不存在的键：", reflect.ValueOf(c).MapIndex(reflect.ValueOf("娜扎")).IsValid()) // map中不存在的键： false
}
```

## 结构体反射

当我们从reflect获得类型信息后，如果类型是结构体的话，那我们可以将通过NumField()和Field()方法获得结构体成员的详细信息，甚至通过类型的实例来获得类型的方法。

比如下面这个例子：

```go
package main

import (
	"fmt"
	"reflect"
)

type Person struct {
	Name   string
	Age    int
	Height float64
}

func (p Person) SayHello() {
	fmt.Println("Hello, my name is", p.Name)
}

func main() {
	p := Person{
		Name:   "John",
		Age:    30,
		Height: 1.75,
	}

	// 获取结构体字段信息
	t := reflect.TypeOf(p)
	fmt.Println("Struct fields:")
	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		fmt.Printf("Name: %s, Type: %s\n", field.Name, field.Type)
	}

	// 根据字段名获取结构体字段信息
	field, ok := t.FieldByName("Age")
	if ok {
		fmt.Println("\nField by name:")
		fmt.Printf("Name: %s, Type: %s\n", field.Name, field.Type)
	}

	// 获取结构体方法信息
	v := reflect.ValueOf(p)
	fmt.Println("\nMethods:")
	for i := 0; i < t.NumMethod(); i++ {
		method := t.Method(i)
		fmt.Printf("Name: %s, Type: %s\n", method.Name, method.Type)
	}

	// 根据方法名获取结构体方法信息
	method, ok := t.MethodByName("SayHello")
	if ok {
		fmt.Println("\nMethod by name:")
		fmt.Printf("Name: %s, Type: %s\n", method.Name, method.Type)
	}
}
```


```go
// 输出
Struct fields:
Name: Name, Type: string
Name: Age, Type: int
Name: Height, Type: float64

Field by name:
Name: Age, Type: int

Methods:
Name: SayHello, Type: func(main.Person)

Method by name:
Name: SayHello, Type: func(main.Person)
```

通过上面这个例子，你可以看出reflect的威力。

## 通过reflect自动注册HTTP路由

甚至比如我可以通过构建一个结构体，给这个结构体写几个方法，只要将方法名称写成一定的格式，就可以帮我自动注册HTTP方法，比如我有个结构体Service，只要在这个结构体下写Get_XXX,就可以注册路径为`/xxx的get`服务，下面就是一个示例：

```go
package main

import (
	"fmt"
	"net/http"
	"reflect"
	"strings"
)

type Service struct{}

func (s *Service) Get_Hubs(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handling GET request for /hubs")
}

func (s *Service) Post_Name(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handling POST request for /name")
}

func RegisterHTTPHandlers(service interface{}) {
	svcType := reflect.TypeOf(service)
	svcValue := reflect.ValueOf(service)

	for i := 0; i < svcType.NumMethod(); i++ {
		method := svcType.Method(i)
		methodName := method.Name

		if strings.HasPrefix(methodName, "Get_") || strings.HasPrefix(methodName, "Post_") {
			parts := strings.Split(methodName, "_")
			if len(parts) < 2 {
				continue
			}

			path := "/" + strings.ToLower(strings.Join(parts[1:], "/"))
			handler := svcValue.MethodByName(methodName).Interface().(func(http.ResponseWriter, *http.Request))
			http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
				switch r.Method {
				case http.MethodGet:
					if strings.HasPrefix(methodName, "Get_") {
						handler(w, r)
					} else {
						http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
					}
				case http.MethodPost:
					if strings.HasPrefix(methodName, "Post_") {
						handler(w, r)
					} else {
						http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
					}
				default:
					http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
				}
			})
		}
	}
}

func main() {
	service := &Service{}
	RegisterHTTPHandlers(service)

	fmt.Println("Listening on http://localhost:8889")
	http.ListenAndServe(":8889", nil)
}
```

在这个示例中，我们定义了一个 Service 结构体，其中包含了 Get_Hubs() 和 Post_Name() 两个方法。然后，我们编写了 RegisterHTTPHandlers() 函数来根据方法的名称自动注册 HTTP 处理程序。

然后这个程序就注册了`get hubs` 和 `post name`的方法，你可以使用`curl`或者`postman`工具来不断向8889分别发送对应的请求，会发现终端打印了这些。

```go
Listening on http://localhost:8889
Handling POST request for /name
Handling GET request for /hubs
```

再接着继续想想，既然可以注册Get和Post请求方法，那是不是我们还可以进一步操作比如动态绑定参数等等。通过反射，我们都可以做到。


## 总结

本文章介绍了Go语言中的反射包（reflect）的使用。反射允许程序在运行时检查和操作其结构、变量、方法等信息。通过反射，可以动态地获取类型信息、操作对象的字段和方法。

我们首先解释了反射的定义和作用，并提到了反射包中的两个主要类型：`reflect.Type`和`reflect.Value`。`reflect.TypeOf`函数用于获取变量的类型信息，而`reflect.ValueOf`函数用于获取变量的值信息。

介绍了如何使用反射来获取变量的类型信息和值信息。通过示例代码展示了如何使用`reflect.TypeOf`和`reflect.ValueOf`函数，并介绍了`reflect.Type`和`reflect.Value`类型的常用方法，如`Interface()`、`Bool()`、`Int()`、`Float()`和`String()`等。

还提到了`IsValid()`和`IsNil()`方法的使用，用于判断反射值是否有效或为nil。

然后介绍了如何使用反射来更改变量的底层值。通过示例代码演示了如何通过反射获取变量的指针值，并使用`SetString()`和`SetInt()`等方法修改结构体的字段值。

接着，我们详细介绍了结构体反射。通过示例代码展示了如何使用反射获取结构体的字段信息和方法信息，包括使用`NumField()`、`Field()`、`Method()`和`MethodByName()`等方法。

最后，我给出了一个应用示例，通过反射自动注册HTTP方法的功能。通过解析结构体的方法名称，将满足特定命名格式的方法自动注册为相应的HTTP服务。

总的来说，我详细介绍了Go语言中反射包的使用方法，包括获取类型信息、值信息，修改变量值以及结构体的反射等操作。

::: warning
反射是一项强大的功能，可以在某些场景下提供灵活性和便利性。但需要注意，由于反射使用了运行时信息，会带来一定的性能损耗，因此在性能敏感的场景中需要谨慎使用。
:::
参考：
https://www.liwenzhou.com/posts/Go/reflect/ 李文周博客