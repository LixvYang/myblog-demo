---
icon: edit
date: 2023-04-28
isOriginal: true
category:
  - tutorial
tag:
  - golang
  - mock
---

# GoMock 教程

::: info
GoMock是go官方提供的一款Mock工具，方便开发人员模拟接口行为做测试的工具。

比如我们有一个Person接口下的Eat方法，我们就可以模拟这个接口
:::

```go
ctrl := gomock.NewController(t)

mockPerson := mocks.NewMockPerson(ctrl)

mockPerson. EXPECT(). Eat().Return("lixin is sleep")
```

在这里我们就使用gomock创建一个mockPerson，去模拟person接口的行为 后续方便去做单测

::: info 安装
打开[https://github.com/golang/mock](https://github.com/golang/mock)
```sh
go install github.com/golang/mock/mockgen@v1.6.0
```
:::

输入mockgen查看是否下载在$GOPATH/bin 目录下

## 基本用法步骤

首先选定一个mock的demo目录

比如说叫gomock-learn,然后在此目录下创建对应的mod，然后引入对应的gomock包

```go
go mod init gomock-learn
go get github.com/golang/mock 
```

接下来创建两个目录person和student分别用来放对应的接口和代码。

```go
// person.go
package person

type Person interface {
	Eat(food string) string
	Sleep(name string) string
}
```

```go
// student.go
package student

import "gomock-learn/person"

type Student struct {
	p    person.Person
	Name string
}

func (p *Student) Eat(food string) string {
	return p.p.Eat(food)
}

func (p *Student) Sleep() string {
	return p.p.Sleep(p.Name)
}
```

接着你要创建一个mocks目录，不然如果没有mock目录的话用mockgen命令行会失败

使用方法，直接在相应的目录下执行以下命令

```
mockgen -destination mocks/mock_person.go -package=mocks gomock-learn/person Person
```
这里需要注意的是我们必须自己创建mocks目录因为GoMock不会自动帮我们创建，当它发现mocks目录不存在时会返回一个错误。以下是对mockgen命令参数的说明：

````
 -destination=mocks/mock_person.go：将自动生成的mock代码存储到文件mocks/mock_person.go中。-

package=mocks：将生成的mock代码放置到mocks包中。

gomock-learn/person：为这个包生成mock代码。

Person：为这个接口生成mock代码。这个参数是个必填参数，我们需要显式地指定要生成mock代码的接口。如果需要指定多个接口，可以将接口通过逗号连接起来，比如：Person1,Person2。
````

## 结合go-generate使用GoMock
在对应的借口前加入注释

```go
//go:generate mockgen -destination mocks/mock_person.go -package=mocks gomock-learn/person Person

type Person interface {
	Eat(food string) string
	Sleep(name string) string
}
```

然后在对应的目录下输入
```go
go generate ./ 
```

可以发现就在对应的mocks目录下里有一个mock_xx.go函数，这个函数里面就是我们可以Mock的数据。

此时的目录是这样的

```shell
├── go.mod
├── go.sum
├── mocks
│   └── mock_person.go
├── person
│   └── person.go
└── student
    ├── student.go
    └── student_test.go
```

## 使用参数匹配

有时候你可能不太确定调用mock时指定的参数，所以有一个对应的Matcher来代表一个mock方法可以接受的参数范围，比如gomock.Eq(x)指定传入值必须等于x。

以下是GoMock中一些预定义的matcher：
```go
    gomock.Any()：匹配任何类型的任何值
    gomock.Eq(x)：匹配使用反射reflect.DeepEqual与x相等的值gomock.Nil()：匹配等于nil的值
    gomock.Not(m)：（这里的m是一个Matcher）匹配同m不匹配的值
    gomock.Not(x)：（这里的x不是Matcher）匹配使用反射reflect.DeepEqual与x不相等的值
```

如果我们希望第一个参数必须是x，那么我们就用
```go
mockDoer.EXPECT().DoSomething(gomock.Eq(x), "Hello GoMock")
```

具体例子
```go
func Test_Eat(t *testing.T) {
	ctrl := gomock.NewController(t)
	mockPerson := mocks.NewMockPerson(ctrl)

	mockPerson.
		EXPECT().
		Eat("Apple").Times(1)

	testStudent := Student{Name: "lixin", p: mockPerson}
	testStudent.Eat("Apple")
}
```

```go
func Test_Sleep(t *testing.T) {
	ctrl := gomock.NewController(t)
	mockPerson := mocks.NewMockPerson(ctrl)
	testStudent := Student{Name: "lixin", p: mockPerson}

	mockPerson.
		EXPECT().
		Sleep("lixin").Return("lixin is sleep").Do(func(name string) {
		fmt.Printf("%s is sleep!\n", name)
	})

	if testStudent.Sleep() != "lixin is sleep" {
		t.Error("Error!!!!!")
	}
}
```

## 断言调用顺序

有时候我们期望控制一些mock流程的顺序，这里有一个例子调用After的方法
```go
func Test_Eat(t *testing.T) {
	ctrl := gomock.NewController(t)
	mockPerson := mocks.NewMockPerson(ctrl)

	first := mockPerson.EXPECT().Eat("xxx")

	mockPerson.
		EXPECT().
		Eat("Apple").
		After(first)

	testStudent := Student{Name: "lixin", p: mockPerson}
	testStudent.Eat("xxx")
	testStudent.Eat("Apple")
}
```

## 指定mock行为

比如说可以在执行完毕后加一个Do函数去做一些事情。

## 总结
```card
安装
基本用法步骤
结合go-generate使用GoMock
使用参数匹配
断言调用顺序
指定mock的行为
```