---
icon: edit
date: 2023-05-27
isOriginal: true
category:
  - tutorial
tag:
  - golang
---


# Go strconv包详解

::: info
Strconv包也是我们在Go语言中经常会使用到的包，通常用于在字符串与基本数据类型之间进行转换。它提供了一系列函数来处理字符串的解析（parsing）和格式化（formatting）操作。
:::

### 简要介绍

strconv 包是 Go 标准库中的一个包，用于进行字符串和基本数据类型之间的相互转换。它提供了一系列的函数，包括将基本类型转换为字符串的函数，以及将字符串转换为基本类型的函数。

该包的常用函数和功能包括：

1. **Parse 系列函数**：用于将字符串解析为基本类型的值，例如 `ParseBool`、`ParseInt`、`ParseFloat` 等函数。

2. **Format 系列函数**：用于将基本类型的值格式化为字符串的表示形式，例如 `FormatBool`、`FormatInt`、`FormatFloat` 等函数。

3. **Append 系列函数**：用于将基本类型的值追加到字节切片中，例如 `AppendBool`、`AppendInt`、`AppendFloat` 等函数。

4. **Quote 系列函数**：用于将基本类型的值转换为其在 Go 语言中的源代码表示形式的字符串，例如 `Quote`、`QuoteRune`、`QuoteRuneToASCII` 等函数。

5. **字符串转换函数**：包括 `Atoi`、`Itoa`、`ParseUint`、`FormatUint` 等函数，用于处理字符串和整数类型之间的转换。

6. **字符串和浮点数类型之间的转换**：包括 `Atof`、`FormatFloat`、`ParseFloat` 等函数，用于处理字符串和浮点数类型之间的转换。


下面是strconv包中一些常用的函数和其功能的简要介绍：

1. **strconv.Itoa**：将整数转换为字符串。它接受一个整数值，并返回表示该整数的字符串形式。

   示例：
   ```go
   import (
       "fmt"
       "strconv"
   )
   
   func main() {
       num := 42
       str := strconv.Itoa(num)
       fmt.Println(str) // 输出: "42"
   }
   ```

2. **strconv.Atoi**：将字符串转换为整数。它接受一个表示整数的字符串，并返回对应的整数值。如果转换失败，它会返回错误信息。

   示例：
   ```go
   import (
       "fmt"
       "strconv"
   )
   
   func main() {
       str := "42"
       num, err := strconv.Atoi(str)
       if err != nil {
           fmt.Println("转换失败:", err)
           return
       }
       fmt.Println(num) // 输出: 42
   }
   ```

3. **strconv.ParseFloat**：将字符串转换为浮点数。接受一个表示浮点数的字符串、指定的位数（32或64）以及对应位数的浮点数类型，并返回对应的浮点数值。如果转换失败，它会返回错误信息。

   示例：
   ```go
   import (
       "fmt"
       "strconv"
   )
   
   func main() {
       str := "3.14"
       num, err := strconv.ParseFloat(str, 64)
       if err != nil {
           fmt.Println("转换失败:", err)
           return
       }
       fmt.Println(num) // 输出: 3.14
   }
   ```

4. **strconv.FormatInt / strconv.FormatFloat**：将整数或浮点数转换为字符串。接受一个整数或浮点数值，以及指定的基数（如10进制、16进制等），并返回对应的字符串形式。

   示例：
   ```go
   import (
       "fmt"
       "strconv"
   )
   
   func main() {
       num := 42
       str := strconv.FormatInt(int64(num), 10)
       fmt.Println(str) // 输出: "42"
   
       pi := 3.14159
       str = strconv.FormatFloat(pi, 'f', 2, 64)
       fmt.Println(str) // 输出: "3.14"
   }
   ```

这些只是strconv包提供的一些常用函数，它还提供了其他函数用于更复杂的转换操作，比如处理布尔值、Unicode字符等。

### AppendXXX 简要介绍

`AppendXXX` 函数用于将基本类型的值追加到字节切片（`[]byte`）中。

1. **`AppendBool` 函数**

   `func AppendBool(dst []byte, b bool) []byte`

   `AppendBool` 函数将布尔值 `b` 转换为字符串表示形式，并将结果追加到字节切片 `dst` 中。返回值是追加后的字节切片。

   示例：
   ```go
   var dst []byte
   dst = strconv.AppendBool(dst, true)
   fmt.Println(string(dst)) // 输出: "true"
   ```

2. **`AppendFloat` 函数**

   `func AppendFloat(dst []byte, f float64, fmt byte, prec, bitSize int) []byte`

   `AppendFloat` 函数将浮点数 `f` 转换为字符串表示形式，并将结果追加到字节切片 `dst` 中。`fmt` 参数指定格式，`prec` 参数指定精度，`bitSize` 参数指定浮点数位数。

   示例：
   ```go
   var dst []byte
   dst = strconv.AppendFloat(dst, 3.14159, 'f', 4, 64)
   fmt.Println(string(dst)) // 输出: "3.1416"
   ```

请注意，这些 `AppendXXX` 函数用于将字符串形式的基本类型值追加到字节切片中，而不是在现有的字节切片中修改值。这些函数通常在需要将基本类型值转换为字符串并将其添加到字节切片中的情况下使用。

### QuoteXXX 简要介绍`QuoteXXX` 函数是 `strconv` 包中的一组函数，用于将基本类型的值转换为其在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。

以下是 `QuoteXXX` 函数的作用和示例：

1. **`Quote` 函数**

   `func Quote(s string) string`

   `Quote` 函数将字符串 `s` 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。它将特殊字符进行转义，使字符串可以直接在源代码中使用。

   示例用法：
   ```go
   str := `Hello, "Gopher"`
   quoted := strconv.Quote(str)
   fmt.Println(quoted) // 输出: "Hello, \"Gopher\""
   ```

2. **`QuoteRune` 函数**

   `func QuoteRune(r rune) string`

   `QuoteRune` 函数将 Unicode 字符 `r` 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。

   示例用法：
   ```go
   rune := '♥'
   quoted := strconv.QuoteRune(rune)
   fmt.Println(quoted) // 输出: "'♥'"
   ```

3. **`QuoteRuneToASCII` 函数**

   `func QuoteRuneToASCII(r rune) string`

   `QuoteRuneToASCII` 函数将 Unicode 字符 `r` 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的 ASCII 字符串。它将非 ASCII 字符进行转义。

   示例用法：
   ```go
   rune := '♥'
   quoted := strconv.QuoteRuneToASCII(rune)
   fmt.Println(quoted) // 输出: "'\\u2665'"
   ```

4. **`QuoteRuneToGraphic` 函数**

   `func QuoteRuneToGraphic(r rune) string`

   `QuoteRuneToGraphic` 函数将 Unicode 字符 `r` 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的可打印字符的字符串。它将非图形字符进行转义。

   示例用法：
   ```go
   rune := '\u2022' // 中文的"点"字符
   quoted := strconv.QuoteRuneToGraphic(rune)
   fmt.Println(quoted) // 输出: "'•'"
   ```

这些 `QuoteXXX` 函数可以用于生成源代码字符串的表示形式，特别是在需要将字符串或字符嵌入到源代码中时，可以确保它们的表示形式是正确的，并且不会导致语法错误。

## 总结

::: info
strconv 包提供了灵活且简便的方法来处理字符串和基本数据类型之间的转换，使得我们可以方便地进行数据格式转换和处理。
:::
