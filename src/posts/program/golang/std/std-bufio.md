---
icon: edit
date: 2023-05-28
isOriginal: true
category:
  - tutorial
tag:
  - golang
---

# Bufio 包详解

::: info
`bufio` 包是 Go 标准库中的一个包，提供了带缓冲的 I/O 操作，用于提高 I/O 的效率。它封装了 `io.Reader` 和 `io.Writer`，并提供了缓冲功能，可以减少系统调用次数，提高读写性能。
:::

下面是对 `bufio` 包的详细介绍以及一些示例：

**创建缓冲读取器（`Scanner`）：**
   - `NewScanner()` 函数用于创建一个缓冲读取器，它从指定的 `io.Reader` 中读取数据。
   - `Scanner` 类型提供了方便的方法来逐行或逐个词读取数据。
   - 示例：
     ```go
     file, _ := os.Open("data.txt")
     scanner := bufio.NewScanner(file)

     for scanner.Scan() {
         line := scanner.Text()
         fmt.Println(line)
     }

     if err := scanner.Err(); err != nil {
         fmt.Println("Error:", err)
     }
     ```

 **创建缓冲写入器（`Writer`）：**
   - `NewWriter()` 函数用于创建一个缓冲写入器，它将数据写入指定的 `io.Writer`。
   - `Writer` 类型提供了 `Write()` 方法，用于将数据写入缓冲区，并在缓冲区满或显式刷新时将数据写入底层的 `io.Writer`。
   - 示例：
     ```go
     file, _ := os.Create("output.txt")
     writer := bufio.NewWriter(file)

     text := "Hello, World!"
     writer.WriteString(text)
     writer.Flush() // 刷新缓冲区，确保所有数据被写入底层的文件

     file.Close()
     ```

 **创建带缓冲的读取器（`Reader`）：**
   - `NewReader()` 函数用于创建一个带缓冲的读取器，它从指定的 `io.Reader` 中读取数据并提供缓冲机制。
   - `Reader` 类型提供了 `Read()` 方法，用于从缓冲区读取数据，并在缓冲区为空时填充缓冲区。
   - 示例：
     ```go
     data := []byte("Hello, World!")
     reader := bufio.NewReader(bytes.NewReader(data))

     buffer := make([]byte, 5)
     for {
         n, err := reader.Read(buffer)
         if err != nil && err != io.EOF {
             fmt.Println("Error:", err)
             break
         }

         if n == 0 {
             break
         }

         fmt.Println(string(buffer[:n]))
     }
     ```

`bufio` 包还提供了其他一些函数和类型，例如 `ReadString()`、`WriteString()`、`Scanner` 的定界符设定、更高级的缓冲写入器等。这些功能都可以帮助你更高效地进行 I/O 操作。

请注意，在使用完缓冲读取器或缓冲写入器后，务必调用 `Scanner`、`Writer` 或 `Reader` 的 `Flush()` 方法，以确保所有数据被写入或读取。

这是对 `bufio` 包的简要介绍和示例。使用 `bufio` 包可以提高 I/O 操作的效率，并简化对输入输出的处理。

