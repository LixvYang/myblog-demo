---
icon: edit
date: 2023-05-21
isOriginal: true
category:
  - tutorial
tag:
  - golang
---

# Go time 包详解

```card
time 包是 Go 语言中用于处理时间和日期的标准库。
它提供了许多函数和类型，用于表示和操作时间、计时器、持续时间和时区等。

本文的顺序按照Go time官方包的顺序编写
详细信息请看 https://pkg.go.dev/time@go1.20.4
```

## 简要介绍

常用的函数和类型包括：

```card
时间表示和创建函数：Date()、Now()、Parse()、Unix() 等函数用于创建和获取时间对象，以不同的方式表示时间。

时间格式化和解析：Format() 和 Parse() 函数用于时间对象与字符串之间的相互转换。通过定义特定的格式模板，可以按照需要格式化或解析时间。

时间计算和比较：Add()、AddDate()、Sub() 等函数用于进行时间的加减运算，例如增加一定的时间量、计算两个时间之间的间隔，并支持时间之间的比较。

持续时间处理：Duration 类型用于表示时间间隔或持续时间，可以用于表示以纳秒、微秒、毫秒、秒、分钟、小时为单位的时间段，并提供了一系列的方法用于操作和转换持续时间。

时区处理：Location 类型用于表示时区信息，可以加载系统预定义的时区或自定义的时区。可以使用 LoadLocation() 函数加载时区信息，并使用 In() 和 UTC() 方法将时间转换为特定时区或 UTC 时间。

计时器：Timer 和 Ticker 类型用于定时触发事件。Timer 用于在指定的时间后触发单个事件，Ticker 用于以固定时间间隔触发重复事件。
```

time 包中还包含了其他一些用于时间操作和格式化的函数，以及表示月份、星期几的类型等。

Time包下的内容比较多，我觉得通过示例来学习time包比较好，下面我就按照在go官方的time包下的类型，依次介绍 time 包中常用函数的示例：

### 函数

```go
func After(d Duration) <-chan Time // After 函数返回一个通道，指定时间过后，通道会接收到一个时间值 
func Sleep(d Duration) // Sleep 函数使程序暂停指定的时间
func Tick(d Duration) <-chan Time 	// Tick 函数返回一个通道，每隔指定的时间间隔，通道会接收到一个时间值
```

示例：

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// After 函数返回一个通道，指定时间过后，通道会接收到一个时间值
	select {
	case <-time.After(2 * time.Second):
		fmt.Println("After")
	}

	// Sleep 函数使程序暂停指定的时间
	fmt.Println("Start")
	time.Sleep(2 * time.Second)
	fmt.Println("End")

	// Tick 函数返回一个通道，每隔指定的时间间隔，通道会接收到一个时间值
	ticker := time.Tick(1 * time.Second)
	for tick := range ticker {
		fmt.Println("Tick:", tick)
	}
}
```

```shell
# 输出
After
Start
End
Tick: 2023-05-28 19:52:59.051953 +0800 CST m=+5.002580117
Tick: 2023-05-28 19:53:00.051654 +0800 CST m=+6.002592024
Tick: 2023-05-28 19:53:01.050407 +0800 CST m=+7.001636794
Tick: 2023-05-28 19:53:02.050139 +0800 CST m=+8.001642844
```

### Duration

`Duration`表示一段时间间隔。

```go
func ParseDuration(s string) (Duration, error)
func Since(t Time) Duration
func Until(t Time) Duration
func (d Duration) Abs() Duration
func (d Duration) Hours() float64
func (d Duration) Microseconds() int64
func (d Duration) Milliseconds() int64
func (d Duration) Minutes() float64
func (d Duration) Nanoseconds() int64
func (d Duration) Round(m Duration) Duration
func (d Duration) Seconds() float64
func (d Duration) String() string
func (d Duration) Truncate(m Duration) Duration
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// ParseDuration 函数将字符串解析为 Duration 类型
	d, _ := time.ParseDuration("1h30m")
	fmt.Println("Parsed Duration:", d)

	// Since 函数返回当前时间和指定时间之间的时间差，作为 Duration 类型
	t := time.Date(2023, time.May, 7, 12, 0, 0, 0, time.UTC)
	duration := time.Since(t)
	fmt.Println("Time Since:", duration)

	// Until 函数返回指定时间和当前时间之间的时间差，作为 Duration 类型
	duration = time.Until(t)
	fmt.Println("Time Until:", duration)

	// Duration 类型的常用方法示例
	duration = 2 * time.Hour + 30 * time.Minute
	fmt.Println("Hours:", duration.Hours())
	fmt.Println("Minutes:", duration.Minutes())
	fmt.Println("Seconds:", duration.Seconds())
	fmt.Println("Milliseconds:", duration.Milliseconds())
	fmt.Println("Microseconds:", duration.Microseconds())
	fmt.Println("Nanoseconds:", duration.Nanoseconds())

	// 格式化输出 Duration 类型的时间间隔
	fmt.Println("Duration String:", duration.String())
}
```

```shell
# 返回值
Parsed Duration: 1h30m0s
Time Since: 504h21m51.536756s
Time Until: -504h21m51.536761s
Hours: 2.5
Minutes: 150
Seconds: 9000
Milliseconds: 9000000
Microseconds: 9000000000
Nanoseconds: 9000000000000
Duration String: 2h30m0s
```

### Location

`Location` 类型表示地点的意思，我们可以通过LoadLocation设置我们的时间地点。

**type Location:**

```go
func FixedZone(name string, offset int) *Location
func LoadLocation(name string) (*Location, error)
func LoadLocationFromTZData(name string, data []byte) (*Location, error)
func (l *Location) String() string
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// FixedZone 函数创建一个固定偏移量的时区
	zone := time.FixedZone("CST", int(8*time.Hour.Seconds()))
	fmt.Println("Fixed Zone:", zone)

	// LoadLocation 函数加载指定名称的时区
	shanghai, err := time.LoadLocation("Asia/Shanghai") // UTC+08:00
	if err != nil {
		fmt.Println("Failed to load Asia/Shanghai location:", err)
		return
	}
	timeInShanghai := time.Date(2023, 5, 28, 20, 0, 0, 0, shanghai)
	fmt.Println("Time in Shanghai:", sameTimeInShanghai)

	newYork, err := time.LoadLocation("America/New_York")
	if err != nil {
		fmt.Println("Failed to load America/New_York location:", err)
		return
	}
	timeInNewYork := sameTimeInShanghai.In(newYork)
	fmt.Println("Time in New York:", sameTimeInNewYork)

	timesAreEqual := sameTimeInShanghai.Equal(sameTimeInNewYork)
	fmt.Println(timesAreEqual)
}
```

现在，timeInShanghai被转换为纽约时区，所以它与timeInNewYork表示相同的时间点，Equal方法将返回true。


###  Month

Month类型

```go
func (m Month) String() string
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// String 方法返回 Month 类型的字符串表示形式
	month := time.May
	fmt.Println("Month String:", month.String())
}
```

### ParseError

```go
func (e *ParseError) Error() string
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// Parse 函数解析时间字符串时可能返回 ParseError 类型的错误
	_, err := time.Parse("2006-01-02", "invalid")
	if err != nil {
		parseError := err.(*time.ParseError)
		fmt.Println("Parse Error:", parseError.Error())
	}
}
```

### Ticker

Ticker主要是一个定时器

```go
func NewTicker(d Duration) *Ticker
func (t *Ticker) Reset(d Duration)
func (t *Ticker) Stop()
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// NewTicker 函数创建一个定时触发的 Ticker 对象
	ticker := time.NewTicker(1 * time.Second)

	go func() {
		for tick := range ticker.C {
			fmt.Println("Tick:", tick)
		}
	}()

	// 停止 Ticker
	time.Sleep(5 * time.Second)
	ticker.Stop()
	fmt.Println("Ticker Stopped")
}
```

### Time类型

Time类型是time包下最常使用到的类型

```go
func Date(year int, month Month, day, hour, min, sec, nsec int, loc *Location) Time
func Now() Time
func Parse(layout, value string) (Time, error)
func ParseInLocation(layout, value string, loc *Location) (Time, error)
func Unix(sec int64, nsec int64) Time
func UnixMicro(usec int64) Time
func UnixMilli(msec int64) Time
func (t Time) Add(d Duration) Time
func (t Time) AddDate(years int, months int, days int) Time
func (t Time) After(u Time) bool
func (t Time) AppendFormat(b []byte, layout string) []byte
func (t Time) Before(u Time) bool
func (t Time) Clock() (hour, min, sec int)
func (t Time) Compare(u Time) int
func (t Time) Date() (year int, month Month, day int)
func (t Time) Day() int
func (t Time) Equal(u Time) bool
func (t Time) Format(layout string) string
func (t Time) GoString() string
func (t *Time) GobDecode(data []byte) error
func (t Time) GobEncode() ([]byte, error)
func (t Time) Hour() int
func (t Time) ISOWeek() (year, week int)
func (t Time) In(loc *Location) Time
func (t Time) IsDST() bool
func (t Time) IsZero() bool


func (t Time) Local() Time
func (t Time) Location() *Location
func (t Time) MarshalBinary() ([]byte, error)
func (t Time) MarshalJSON() ([]byte, error)
func (t Time) MarshalText() ([]byte, error)
func (t Time) Minute() int
func (t Time) Month() Month
func (t Time) Nanosecond() int
func (t Time) Round(d Duration) Time
func (t Time) Second() int
func (t Time) String() string
func (t Time) Sub(u Time) Duration
func (t Time) Truncate(d Duration) Time
func (t Time) UTC() Time
func (t Time) Unix() int64
func (t Time) UnixMicro() int64
func (t Time) UnixMilli() int64
func (t Time) UnixNano() int64
func (t *Time) UnmarshalBinary(data []byte) error
func (t *Time) UnmarshalJSON(data []byte) error
func (t *Time) UnmarshalText(data []byte) error
func (t Time) Weekday() Weekday
func (t Time) Year() int
func (t Time) YearDay() int
func (t Time) Zone() (name string, offset int)
func (t Time) ZoneBounds() (start, end Time)
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// Date 函数根据指定的年、月、日、时、分、秒、纳秒和时区创建一个 Time 对象
	date := time.Date(2023, time.May, 7, 12, 0, 0, 0, time.UTC)
	fmt.Println("Date:", date)

	// Now 函数返回当前时间的 Time 对象
	now := time.Now()
	fmt.Println("Now:", now)

	// Parse 函数将指定的时间字符串解析为 Time 对象
	// 这里第一个参数只能是 2006-01-02 15:04:05
	parsedTime, _ := time.Parse("2006-01-02 15:04:05", "2023-05-07 12:00:00")
	fmt.Println("Parsed Time:", parsedTime)

	// Unix 函数根据 Unix 时间戳创建一个 Time 对象
	unixTime := time.Unix(1670140800, 0)
	fmt.Println("Unix Time:", unixTime)

	// Time 类型的常用方法示例
	fmt.Println("Year:", now.Year())
	fmt.Println("Month:", now.Month())
	fmt.Println("Day:", now.Day())
	fmt.Println("Hour:", now.Hour())
	fmt.Println("Minute:", now.Minute())
	fmt.Println("Second:", now.Second())
	fmt.Println("Nanosecond:", now.Nanosecond())
	fmt.Println("Weekday:", now.Weekday())

	// 格式化输出 Time 对象的字符串表示
	fmt.Println("Formatted Time:", now.Format("2006-01-02 15:04:05"))

	// 时间比较
	otherTime := time.Date(2023, time.May, 7, 10, 0, 0, 0, time.UTC)
	fmt.Println("Before:", now.Before(otherTime))
	fmt.Println("After:", now.After(otherTime))
	fmt.Println("Equal:", now.Equal(otherTime))

	// 时间计算
	afterTime := now.Add(2 * time.Hour)
	fmt.Println("After 2 Hours:", afterTime)

	addedDate := now.AddDate(1, 0, 0) // 增加一年
	fmt.Println("Added Date:", addedDate)

	// 时区相关操作
	loc, _ := time.LoadLocation("America/New_York")
	localTime := now.In(loc)
	fmt.Println("Local Time:", localTime)

	utcTime := localTime.UTC()
	fmt.Println("UTC Time:", utcTime)

	// 时间戳
	unix := now.Unix()
	unixMicro := now.UnixMicro()
	unixMilli := now.UnixMilli()
	unixNano := now.UnixNano()
	fmt.Println("Unix:", unix)
	fmt.Println("Unix Micro:", unixMicro)
	fmt.Println("Unix Milli:", unixMilli)
	fmt.Println("Unix Nano:", unixNano)
}
```

```shell
// 输出
Date: 2023-05-07 12:00:00 +0000 UTC
Now: 2023-05-28 20:37:21.055316 +0800 CST m=+0.000293065
Parsed Time: 2023-05-07 12:00:00 +0000 UTC
Unix Time: 2022-12-04 16:00:00 +0800 CST
Year: 2023
Month: May
Day: 28
Hour: 20
Minute: 37
Second: 21
Nanosecond: 55316000
Weekday: Sunday
Formatted Time: 2023-05-28 20:37:21
Before: false
After: true
Equal: false
After 2 Hours: 2023-05-28 22:37:21.055316 +0800 CST m=+7200.000293065
Added Date: 2024-05-28 20:37:21.055316 +0800 CST
Local Time: 2023-05-28 08:37:21.055316 -0400 EDT
UTC Time: 2023-05-28 12:37:21.055316 +0000 UTC
Unix: 1685277441
Unix Micro: 1685277441055316
Unix Milli: 1685277441055
Unix Nano: 1685277441055316000
```

以上是 `time` 包中一些常用函数和类型的示例，你可以根据需要进行参考和使用。

## 总结

time 包的常用操作总结：

- 创建和表示时间：使用 Date()、Now()、Parse()、Unix() 等函数创建和获取时间对象。
- 格式化和解析时间：使用 Format() 和 Parse() 函数将时间对象与字符串进行转换。
- 时间计算和比较：使用 Add()、AddDate()、Sub() 等函数对时间进行加减运算，比较时间的先后顺序。
- 持续时间处理：使用 Duration 类型表示时间间隔，进行时间单位的转换和操作。
- 时区处理：使用 Location 类型表示时区，加载预定义的时区信息，转换时间到特定时区。
- 定时器和计时器：使用 Timer 和 Ticker 类型进行定时触发事件。

以上是对 time 包的详细总结，它是处理时间和日期相关操作的重要工具，可根据实际需求使用其中的函数和类型。