---
icon: edit
date: 2021-12-19
isOriginal: true
category:
  - tutorial
tag:
  - gin
---

# Gin 框架深度剖析

Gin框架是一款高性能的Go Web框架,本文以一个小案例为例,从源码角度分析Gin的启动过程,请求与相应的技术原理.

我们怎么开始Gin呢?很简单,以下代码就可以开始开启Gin的Web服务了

```go
func main() {
	// init gin with default configs
	r := gin.Default()

  r.GET('/hello', func(c *gin.Context) {
    c.JSON(http.StatusOK,   "Hello")
  })

	// run the engine
	r.Run()
}
```

首先是初始化Gin默认的初始化包含两个中间件， Logger 日志中间件将Gin的启动与响应日志输出到控制台和Recovery 将Gin遇到的无法处理的请求按HTTP 500状态码返回.

其次我们给gin定义了一个GET请求方法,之后我们就可以请求这个方法中定义的路由.

最后通过r.Run启动Gin Engine,开始监听请求并提供HTTP服务

源码分析:

### gin的Default函数
```go
// Default returns an Engine instance with the Logger and Recovery middleware already attached.
func Default() *Engine {
	debugPrintWARNINGDefault()
	engine := New()
	engine.Use(Logger(), Recovery())
	return engine
}
```

这个Default函数主要是创建Engine和Recovery两个默认中间件.

### Engine.Use函数
```go
// Use attaches a global middleware to the router. i.e. the middleware attached through Use() will be
// included in the handlers chain for every single request. Even 404, 405, static files...
// For example, this is the right place for a logger or error management middleware.
func (engine *Engine) Use(middleware ...HandlerFunc) IRoutes {
	engine.RouterGroup.Use(middleware...)
	engine.rebuild404Handlers()
	engine.rebuild405Handlers()
	return engine
}
```

engine.RouterGroup是当前的路由,Engine.Use函数用于将中间件添加到当前的路由上.

最后其实是到了engine.RouterGroup.Use()这个函数这里
```go
// Use adds middleware to the group, see example code in GitHub.
func (group *RouterGroup) Use(middleware ...HandlerFunc) IRoutes {
	group.Handlers = append(group.Handlers, middleware...)
	return group.returnObj()
}
```
这个函数其实就是将中间件完成实际的中间件注册工作.这个函数很简短,实际上就是把中间件添加到HandlersChain类型其实就是数组(type HandlersChain []HandlerFunc)的group.Handlers中,换句话说,实际上是以函数数组的方式存储了一个函数序列,然后在之后调用的时候会依次调用.

## 注册事件处理
我们可以通过如下代码给r添加GET方法事件,其实和我们刚刚的代码是一样的
```go
r.Handle("GET", "/hello", "Hello")
```
gin.Engine的r.Handle函数主要用于事件处理函数注册到指定的HTTP方法+相对路径上.

RouterGroup.Handle函数, 这个函数就是注册事件的作用
```go
func (group *RouterGroup) Handle(httpMethod, relativePath string, handlers ...HandlerFunc) IRoutes {
	if matched := regEnLetter.MatchString(httpMethod); !matched {
		panic("http method " + httpMethod + " is not valid")
	}
	return group.handle(httpMethod, relativePath, handlers)
}
```
到后面会到group.handle这个函数,这个函数的作用就是将handlers添加对应的HTTP方法到绝对路径上去:
```go
func (group *RouterGroup) handle(httpMethod, relativePath string, handlers HandlersChain) IRoutes {
	absolutePath := group.calculateAbsolutePath(relativePath)
	handlers = group.combineHandlers(handlers)
	group.engine.addRoute(httpMethod, absolutePath, handlers)
	return group.returnObj()
}
```
如果继续下去我们可以看到最后其实是到了group.engine.addRoute()函数里,这个函数最后的作用就是将handlers方法添加到当前的HTTP方法上:
```go
func (engine *Engine) addRoute(method, path string, handlers HandlersChain) {
	assert1(path[0] == '/', "path must begin with '/'")
	assert1(method != "", "HTTP method can not be empty")
	assert1(len(handlers) > 0, "there must be at least one handler")

	debugPrintRoute(method, path, handlers)

	root := engine.trees.get(method)
	if root == nil {
		root = new(node)
		root.fullPath = "/"
		engine.trees = append(engine.trees, methodTree{method: method, root: root})
	}
	root.addRoute(path, handlers)

	// Update maxParams
	if paramsCount := countParams(path); paramsCount > engine.maxParams {
		engine.maxParams = paramsCount
	}

	if sectionsCount := countSections(path); sectionsCount > engine.maxSections {
		engine.maxSections = sectionsCount
	}
}
```
gin里面还有一颗路由树,其中每一种HTTP方法,分别有一颗树, 用来保存对应的路由节点(node),其中node里面有各种属性,里面就有我们上面提到的handlerFunc
```go
// 这里是最核心的添加方法
  root := engine.trees.get(method)
	if root == nil {
		root = new(node)
		root.fullPath = "/"
		engine.trees = append(engine.trees, methodTree{method: method, root: root})
	}
	root.addRoute(path, handlers)
```

## 启动 r.Run

r.Run函数里面是这样的:
```go
func (engine *Engine) Run(addr ...string) (err error) {
	defer func() { debugPrintError(err) }()

	if engine.isUnsafeTrustedProxies() {
		debugPrint("[WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\n" +
			"Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.")
	}

	address := resolveAddress(addr)
	debugPrint("Listening and serving HTTP on %s\n", address)
	err = http.ListenAndServe(address, engine.Handler())
	return
}
```
1. 解析监听的地址(就是resolveAddress函数这个函数解析我们的addr地址,如果我们不传值,就是默认的8080端口)
2. 通过http.ListenAndServe服务监听我们的engine.Handler

在这里我们先分析http.ListenAndServe方法, 因为我们只要知道http.ListenAndServe方法底层我们就知道了gin的核心的监听和服务.

## http.ListenAndServe方法

Gin的最底层的监听服务其实是通过Go语言官方的net/http包来实现的, 我们先来看ListenAndServe函数.

```go
// net/http
func ListenAndServe(addr string, handler Handler) error {
	server := &Server{Addr: addr, Handler: handler}
	return server.ListenAndServe()
}
```

该函数实例化Sever，并调用Server.ListenAndServe函数实现监听与服务功能。

我们刚刚Gin里面的engine.Handler()其实就是实现了Handler接口方法,作为后续Serve对象处理网络请求时调用的函数.

net/http的Handler接口

net/http的Server结构体类型中有一个Handler接口类型的Handler。
```go
// A Server defines parameters for running an HTTP server.
// The zero value for Server is a valid configuration.
type Server struct {
	// Addr optionally specifies the TCP address for the server to listen on,
	// in the form "host:port". If empty, ":http" (port 80) is used.
	// The service names are defined in RFC 6335 and assigned by IANA.
	// See net.Dial for details of the address format.
	Addr string

	Handler Handler // handler to invoke, http.DefaultServeMux if nil
    
  // ...
}
```
而Handler接口只有一个ServeHTTP方法,这就意味着,任何类型只要我们实现了ServeHTTP方法,我们就实现了Handler接口,并且就可以将此类型作为Server.Handler,供HTTP处理时调用.

显然gin.Engine实现了net/http的Handler接口的ServeHTTP函数.

我们继续深入net/http包, net/http的Server.ListenAndServe函数
```go
// ListenAndServe listens on the TCP network address srv.Addr and then
// calls Serve to handle requests on incoming connections.
// Accepted connections are configured to enable TCP keep-alives.
//
// If srv.Addr is blank, ":http" is used.
//
// ListenAndServe always returns a non-nil error. After Shutdown or Close,
// the returned error is ErrServerClosed.
func (srv *Server) ListenAndServe() error {
	if srv.shuttingDown() {
		return ErrServerClosed
	}
	addr := srv.Addr
	if addr == "" {
		addr = ":http"
	}
	ln, err := net.Listen("tcp", addr)
	if err != nil {
		return err
	}
	return srv.Serve(ln)
}
```
我们可以看到Server.ListenAndServe其实就是完成了两个工作:
1. 设置监听,`net.Listen("tcp", addr)`负责设置监听地址
2. 接受网络请求并处理:`srv.Serve(ln)`, 负责在监听位置上接受网络请求并作出响应

我们再来看`srv.Serve(ln)`函数:
```go
// Serve accepts incoming connections on the Listener l, creating a
// new service goroutine for each. The service goroutines read requests and
// then call srv.Handler to reply to them.
//
// HTTP/2 support is only enabled if the Listener returns *tls.Conn
// connections and they were configured with "h2" in the TLS
// Config.NextProtos.
//
// Serve always returns a non-nil error and closes l.
// After Shutdown or Close, the returned error is ErrServerClosed.
func (srv *Server) Serve(l net.Listener) error {
	if fn := testHookServerServe; fn != nil {
		fn(srv, l) // call hook with unwrapped listener
	}

	origListener := l
	l = &onceCloseListener{Listener: l}
	defer l.Close()

	if err := srv.setupHTTP2_Serve(); err != nil {
		return err
	}

	if !srv.trackListener(&l, true) {
		return ErrServerClosed
	}
	defer srv.trackListener(&l, false)

	baseCtx := context.Background()
	if srv.BaseContext != nil {
		baseCtx = srv.BaseContext(origListener)
		if baseCtx == nil {
			panic("BaseContext returned a nil context")
		}
	}

	var tempDelay time.Duration // how long to sleep on accept failure

	ctx := context.WithValue(baseCtx, ServerContextKey, srv)
	for {
		rw, err := l.Accept()
		if err != nil {
			select {
			case <-srv.getDoneChan():
				return ErrServerClosed
			default:
			}
			if ne, ok := err.(net.Error); ok && ne.Temporary() {
				if tempDelay == 0 {
					tempDelay = 5 * time.Millisecond
				} else {
					tempDelay *= 2
				}
				if max := 1 * time.Second; tempDelay > max {
					tempDelay = max
				}
				srv.logf("http: Accept error: %v; retrying in %v", err, tempDelay)
				time.Sleep(tempDelay)
				continue
			}
			return err
		}
		connCtx := ctx
		if cc := srv.ConnContext; cc != nil {
			connCtx = cc(connCtx, rw)
			if connCtx == nil {
				panic("ConnContext returned nil")
			}
		}
		tempDelay = 0
		c := srv.newConn(rw)
		c.setState(c.rwc, StateNew, runHooks) // before Serve can return
		go c.serve(connCtx)
	}
}
```
在Server.Serve函数的实现中，启动了一个无条件的for循环以便持续监听、接受和处理网络请求，主要流程为：

1. 接受请求：l.Accept()调用在无请求时保持阻塞，直到接收到请求时，接受请求并返回建立的连接
2. 处理请求：启动一个goroutine，使用conn的serve函数进行处理（go c.serve(connCtx)）

而c.serve函数是什么呢?
```go
// Serve a new connection.
func (c *conn) serve(ctx context.Context) {
	c.remoteAddr = c.rwc.RemoteAddr().String()
	ctx = context.WithValue(ctx, LocalAddrContextKey, c.rwc.LocalAddr())
	defer func() {
		if err := recover(); err != nil && err != ErrAbortHandler {
			const size = 64 << 10
			buf := make([]byte, size)
			buf = buf[:runtime.Stack(buf, false)]
			c.server.logf("http: panic serving %v: %v\n%s", c.remoteAddr, err, buf)
		}
		if !c.hijacked() {
			c.close()
			c.setState(c.rwc, StateClosed, runHooks)
		}
	}()

	if tlsConn, ok := c.rwc.(*tls.Conn); ok {
		if d := c.server.ReadTimeout; d > 0 {
			c.rwc.SetReadDeadline(time.Now().Add(d))
		}
		if d := c.server.WriteTimeout; d > 0 {
			c.rwc.SetWriteDeadline(time.Now().Add(d))
		}
		if err := tlsConn.HandshakeContext(ctx); err != nil {
			// If the handshake failed due to the client not speaking
			// TLS, assume they're speaking plaintext HTTP and write a
			// 400 response on the TLS conn's underlying net.Conn.
			if re, ok := err.(tls.RecordHeaderError); ok && re.Conn != nil && tlsRecordHeaderLooksLikeHTTP(re.RecordHeader) {
				io.WriteString(re.Conn, "HTTP/1.0 400 Bad Request\r\n\r\nClient sent an HTTP request to an HTTPS server.\n")
				re.Conn.Close()
				return
			}
			c.server.logf("http: TLS handshake error from %s: %v", c.rwc.RemoteAddr(), err)
			return
		}
		c.tlsState = new(tls.ConnectionState)
		*c.tlsState = tlsConn.ConnectionState()
		if proto := c.tlsState.NegotiatedProtocol; validNextProto(proto) {
			if fn := c.server.TLSNextProto[proto]; fn != nil {
				h := initALPNRequest{ctx, tlsConn, serverHandler{c.server}}
				// Mark freshly created HTTP/2 as active and prevent any server state hooks
				// from being run on these connections. This prevents closeIdleConns from
				// closing such connections. See issue https://golang.org/issue/39776.
				c.setState(c.rwc, StateActive, skipHooks)
				fn(c.server, tlsConn, h)
			}
			return
		}
	}

	// HTTP/1.x from here on.

	ctx, cancelCtx := context.WithCancel(ctx)
	c.cancelCtx = cancelCtx
	defer cancelCtx()

	c.r = &connReader{conn: c}
	c.bufr = newBufioReader(c.r)
	c.bufw = newBufioWriterSize(checkConnErrorWriter{c}, 4<<10)

	for {
		w, err := c.readRequest(ctx)
		if c.r.remain != c.server.initialReadLimitSize() {
			// If we read any bytes off the wire, we're active.
			c.setState(c.rwc, StateActive, runHooks)
		}
		if err != nil {
			const errorHeaders = "\r\nContent-Type: text/plain; charset=utf-8\r\nConnection: close\r\n\r\n"

			switch {
			case err == errTooLarge:
				// Their HTTP client may or may not be
				// able to read this if we're
				// responding to them and hanging up
				// while they're still writing their
				// request. Undefined behavior.
				const publicErr = "431 Request Header Fields Too Large"
				fmt.Fprintf(c.rwc, "HTTP/1.1 "+publicErr+errorHeaders+publicErr)
				c.closeWriteAndWait()
				return

			case isUnsupportedTEError(err):
				// Respond as per RFC 7230 Section 3.3.1 which says,
				//      A server that receives a request message with a
				//      transfer coding it does not understand SHOULD
				//      respond with 501 (Unimplemented).
				code := StatusNotImplemented

				// We purposefully aren't echoing back the transfer-encoding's value,
				// so as to mitigate the risk of cross side scripting by an attacker.
				fmt.Fprintf(c.rwc, "HTTP/1.1 %d %s%sUnsupported transfer encoding", code, StatusText(code), errorHeaders)
				return

			case isCommonNetReadError(err):
				return // don't reply

			default:
				if v, ok := err.(statusError); ok {
					fmt.Fprintf(c.rwc, "HTTP/1.1 %d %s: %s%s%d %s: %s", v.code, StatusText(v.code), v.text, errorHeaders, v.code, StatusText(v.code), v.text)
					return
				}
				publicErr := "400 Bad Request"
				fmt.Fprintf(c.rwc, "HTTP/1.1 "+publicErr+errorHeaders+publicErr)
				return
			}
		}

		// Expect 100 Continue support
		req := w.req
		if req.expectsContinue() {
			if req.ProtoAtLeast(1, 1) && req.ContentLength != 0 {
				// Wrap the Body reader with one that replies on the connection
				req.Body = &expectContinueReader{readCloser: req.Body, resp: w}
				w.canWriteContinue.setTrue()
			}
		} else if req.Header.get("Expect") != "" {
			w.sendExpectationFailed()
			return
		}

		c.curReq.Store(w)

		if requestBodyRemains(req.Body) {
			registerOnHitEOF(req.Body, w.conn.r.startBackgroundRead)
		} else {
			w.conn.r.startBackgroundRead()
		}

		// HTTP cannot have multiple simultaneous active requests.[*]
		// Until the server replies to this request, it can't read another,
		// so we might as well run the handler in this goroutine.
		// [*] Not strictly true: HTTP pipelining. We could let them all process
		// in parallel even if their responses need to be serialized.
		// But we're not going to implement HTTP pipelining because it
		// was never deployed in the wild and the answer is HTTP/2.
		serverHandler{c.server}.ServeHTTP(w, w.req)
		w.cancelCtx()
		if c.hijacked() {
			return
		}
		w.finishRequest()
		if !w.shouldReuseConnection() {
			if w.requestBodyLimitHit || w.closedRequestBodyEarly() {
				c.closeWriteAndWait()
			}
			return
		}
		c.setState(c.rwc, StateIdle, runHooks)
		c.curReq.Store((*response)(nil))

		if !w.conn.server.doKeepAlives() {
			// We're in shutdown mode. We might've replied
			// to the user without "Connection: close" and
			// they might think they can send another
			// request, but such is life with HTTP/1.1.
			return
		}

		if d := c.server.idleTimeout(); d != 0 {
			c.rwc.SetReadDeadline(time.Now().Add(d))
			if _, err := c.bufr.Peek(4); err != nil {
				return
			}
		}
		c.rwc.SetReadDeadline(time.Time{})
	}
}
```
这个函数非常长,但其实最主要的逻辑是这里`serverHandler{c.server}.ServeHTTP(w, w.req)`,发现了没有,其实就是我们刚刚Handler实现的ServeHTTP方法,这也就是为什么刚刚说任何类型实现了ServeHTTP方法,就可以处理http请求.

这就是`net/http`包中的http的路径.

gin在gin.go中实现了ServeHTTP函数，代码如下：

```go
// ServeHTTP conforms to the http.Handler interface.
func (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	c := engine.pool.Get().(*Context)
	c.writermem.reset(w)
	c.Request = req
	c.reset()

	engine.handleHTTPRequest(c)

	engine.pool.Put(c)
}
```
主要步骤是:  从engine.pool中取出来一个上下文对象,填入当前的w和req,并且调用当前engine.handleHTTPRequest(c), 最后释放资源engine.pool(这个engine.pool对象其实就是sync.Pool,好处是可以作为goroutine池子用的时候拿,不用的时候放回去, 可以缓解资源分配和释放的代价)

最主要的其实是gin的Engine.handleHTTPRequest函数
```go
func (engine *Engine) handleHTTPRequest(c *Context) {
	httpMethod := c.Request.Method
	rPath := c.Request.URL.Path
	unescape := false
	if engine.UseRawPath && len(c.Request.URL.RawPath) > 0 {
		rPath = c.Request.URL.RawPath
		unescape = engine.UnescapePathValues
	}

	if engine.RemoveExtraSlash {
		rPath = cleanPath(rPath)
	}

	// Find root of the tree for the given HTTP method
	t := engine.trees
	for i, tl := 0, len(t); i < tl; i++ {
		if t[i].method != httpMethod {
			continue
		}
		root := t[i].root
		// Find route in tree
		value := root.getValue(rPath, c.params, unescape)
		if value.params != nil {
			c.Params = *value.params
		}
		if value.handlers != nil {
			c.handlers = value.handlers
			c.fullPath = value.fullPath
			c.Next()
			c.writermem.WriteHeaderNow()
			return
		}
		if httpMethod != "CONNECT" && rPath != "/" {
			if value.tsr && engine.RedirectTrailingSlash {
				redirectTrailingSlash(c)
				return
			}
			if engine.RedirectFixedPath && redirectFixedPath(c, root, engine.RedirectFixedPath) {
				return
			}
		}
		break
	}

	if engine.HandleMethodNotAllowed {
		for _, tree := range engine.trees {
			if tree.method == httpMethod {
				continue
			}
			if value := tree.root.getValue(rPath, nil, unescape); value.handlers != nil {
				c.handlers = engine.allNoMethod
				serveError(c, http.StatusMethodNotAllowed, default405Body)
				return
			}
		}
	}
	c.handlers = engine.allNoRoute
	serveError(c, http.StatusNotFound, default404Body)
}
```

Engine.handleHTTPRequest函数的主要处理位于中间的for循环中，主要为：

- 遍历查找engine.trees以找出当前请求的HTTP Method对应的处理树；
- 从该处理树中，根据当前请求的路径与参数查询出对应的处理函数value；
- 将查询出的处理函数链（gin.HandlerChain）写入当前连接上下文的c.handlers中；
- 执行c.Next()，调用handlers链上的下一个函数（中间件/业务处理函数），开始形成LIFO的函数调用栈；
- 待函数调用栈全部返回后，c.writermem.WriteHeaderNow()根据上下文信息，将HTTP状态码写入响应头。

## 中间件与handler

请求发来时，被中间件与业务逻辑的handler处理，Gin的中间件与业务逻辑函数实质上都是gin.HandlerFunc函数。

例如为gin.Engine添加了两款中间件（MiddeWareA与MiddleWareB）并为GET方法的/hello路径注册了一个 Hello函数作为路由处理函数，那么执行过程为：

- 上述handleHTTPRequest函数执行到c.Next()，调用MiddleWareA；
- MiddleWareA执行到c.Next()，调用MiddleWareB；
- MiddleWareB执行到c.Next()，调用Hello；
- Hello函数返回，MiddleWareB继续执行至函数返回；
- MiddleWareA函数继续执行至函数返回。

gin的Context.Next函数

中间件中屡屡调用的c.Next()函数时gin提供的中间件流程控制函数之一，位于gin/context.go中，代码如下：
```go
/************************************/
/*********** FLOW CONTROL ***********/
/************************************/

// Next should be used only inside middleware.
// It executes the pending handlers in the chain inside the calling handler.
// See example in GitHub.
func (c *Context) Next() {
	c.index++
	for c.index < int8(len(c.handlers)) {
		c.handlers[c.index](c)
		c.index++
	}
}
```

不难理解，Next函数起到的作用是，在当前中间件函数中，调用下一个HandlerFunc。依序调用HandlerChain中的HandlerFunc的过程中，形成了一个函数调用栈，调用时函数依序入栈，至最后一个函数调用返回，此后按LIFO的顺序出栈，自然就形成了上述中间件的LIFO的执行顺序。

## 总结

结合对Gin框架主干代码以及其调用的部分Go源码的阅读，可以体会到：

- Gin框架实质上实现的网络通信层以上的框架搭建，而网络通信功能完全采用Go语言的net/http库实现；
- Gin通过实现Go语言提供的接口快捷地接入Go的内置库功能，使得上层应用与底层实现之间互不依赖，充分体现了SOLID中的依赖倒置原则；
- Gin在性能上针对HTTP Web框架常见的高并发问题进行了优化，例如：通过上下文对象的缓存池节省连接高并发时内存频繁申请与释放的代价；
- Gin在设计上将中间件与业务逻辑都抽象为gin.HandleFunc函数，中间件与业务逻辑的执行过程实际上就是函数序列依序调用形成的函数调用栈的执行过程。

[参考](https://heary.cn/posts/%E4%BB%8E%E6%BA%90%E7%A0%81%E7%90%86%E8%A7%A3Gin%E6%A1%86%E6%9E%B6%E5%8E%9F%E7%90%86/#gin%E7%9A%84engine.handlehttprequest%E5%87%BD%E6%95%B0)
