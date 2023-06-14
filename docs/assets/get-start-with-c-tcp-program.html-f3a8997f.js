import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-9b617fb4.js";const t="/assets/images/tcp/tcp.png",p={},c=e('<h1 id="tcp-ip-network-program" tabindex="-1"><a class="header-anchor" href="#tcp-ip-network-program" aria-hidden="true">#</a> TCP/IP Network Program</h1><p>If you are learn TCP/IP network, you must have heard that CS model with this.</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>But if you are new with network programing, there are difficult.</p><p>This is a tutor try to help you to know network programing simply.</p><p>The first of all, you have to gcc env.</p><p>Input <code>gcc --version</code> on your shell.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">--version</span>
gcc <span class="token punctuation">(</span>Ubuntu <span class="token number">11.2</span>.0-19ubuntu1<span class="token punctuation">)</span> <span class="token number">11.2</span>.0
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2021</span> Free Software Foundation, Inc.
This is <span class="token function">free</span> software<span class="token punctuation">;</span> see the <span class="token builtin class-name">source</span> <span class="token keyword">for</span> copying conditions.  There is NO
warranty<span class="token punctuation">;</span> not even <span class="token keyword">for</span> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Oh... we will to travel will c language.</p><p>First at first, we touch a client.c file, to start our client.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> client.c server.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">client</span><span class="token expression"><span class="token punctuation">.</span>c</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;netinet/in.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span> </span>
<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> sock<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_addr<span class="token punctuation">;</span>
  <span class="token keyword">char</span> message<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> str_len<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Useage: %s &lt;IP&gt; &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;socket() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">inet_addr</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">connect</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;connect() error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  str_len <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>str_len <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;read() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Message read from server:%s \\n&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">close</span><span class="token punctuation">(</span>sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I know you are confused with all of this. So I will explain all client code.</p><p>Let&#39;s go to main func.</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>  // create a sock to save result of socket()
  int sock;
  // create a serv_addr to save sock in our compute addr
  struct sockaddr_in serv_addr;
  // create message to send message to client
  char message[30];
  //  str_len is strlen(message)
  int str_len;
  if (argc != 3) {
    printf(&quot;Useage: %s &lt;IP&gt; &lt;port&gt;\\n&quot;, argv[0]);
    exit(1);
  }
  /* 
   * sock is a file descriptor
   * you can use sock to manipulate serve
   * if sock == -1;  socket() error!
  */ 
  sock = socket(PF_INET, SOCK_STREAM, 0);
  if (sock == -1) {
    error_handling(&quot;socket() error&quot;);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>  // memset is a function to init our serv_addr
  memset(&amp;serv_addr, 0, sizeof(serv_addr));
  // init our serv_addr with value
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
  serv_addr.sin_port = htons(atoi(argv[2]));
  // connect our serv_addr with sock file descriptor
  if(connect(sock, (struct sockaddr*)&amp;serv_addr, sizeof(serv_addr))==-1) {
    error_handling(&quot;connect() error!&quot;);
  } 
  // read message
  str_len = read(sock, message, sizeof(message)-1);
  if (str_len == -1) {
    error_handling(&quot;read() error&quot;);
  } 

  printf(&quot;Message read from server:%s \\n&quot;, message);
  close(sock);
  return 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So now, our client.c complete!!!</p><p>Let us to compile client.c <code>gcc client.c -o client</code>.</p><p>Run it with <code>./client 127.0.0.1 8888</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>connect() error!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Oh... connect error, Looks like we haven&#39;t written our server side yet.</p><p>I almost forgot the server side code here...</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">server</span><span class="token expression"><span class="token punctuation">.</span>c</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;netinet/in.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span> </span>
<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> serv_sock<span class="token punctuation">;</span>
  <span class="token keyword">int</span> clnt_sock<span class="token punctuation">;</span>

  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_addr<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> clnt_addr<span class="token punctuation">;</span>

  <span class="token class-name">socklen_t</span> clnt_addr_size<span class="token punctuation">;</span>

  <span class="token keyword">char</span> message<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Hello world\\n&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>serv_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;socket() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">htonl</span><span class="token punctuation">(</span>INADDR_ANY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  serv_addr<span class="token punctuation">.</span>sin_port<span class="token operator">=</span><span class="token function">htons</span><span class="token punctuation">(</span><span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;bind() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">listen</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;listen() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  clnt_addr_size<span class="token operator">=</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>clnt_addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  clnt_sock<span class="token operator">=</span><span class="token function">accept</span><span class="token punctuation">(</span> serv_sock<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>clnt_addr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>clnt_addr_size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>clnt_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;accept() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">write</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">close</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fputs</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">fputc</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token constant">stderr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I will explain all of code.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token comment">// server and client sock...</span>
  <span class="token keyword">int</span> serv_sock<span class="token punctuation">;</span>
  <span class="token keyword">int</span> clnt_sock<span class="token punctuation">;</span>

  <span class="token comment">// server and client address file descriptor</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_addr<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> clnt_addr<span class="token punctuation">;</span>

  <span class="token class-name">socklen_t</span> clnt_addr_size<span class="token punctuation">;</span>

  <span class="token comment">// send message to client  you can change it</span>
  <span class="token keyword">char</span> message<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Hello world\\n&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s &lt;port&gt;\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// sock file descriptor</span>
  serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>PF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>serv_sock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">error_handling</span><span class="token punctuation">(</span><span class="token string">&quot;socket() error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>  // init serv_addr
  memset(&amp;serv_addr, 0, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
  serv_addr.sin_port=htons(atoi(argv[1]));

  // bind our port
  if (bind(serv_sock,(struct sockaddr*)&amp;serv_addr, sizeof(serv_addr))==-1) {
    error_handling(&quot;bind() error&quot;);
  }

  // listen
  if (listen(serv_sock, 5) == -1) {
    error_handling(&quot;listen() error&quot;);
  }

  clnt_addr_size=sizeof(clnt_addr);
  clnt_sock=accept( serv_sock, (struct sockaddr*)&amp;clnt_addr, &amp;clnt_addr_size);
  if (clnt_sock == -1) {
    error_handling(&quot;accept() error&quot;);
  }
  // write message to client
  write(clnt_sock, message, sizeof(message));
  close(clnt_sock);
  close(serv_sock);
  return 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s run it;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc server.c <span class="token parameter variable">-o</span> server
gcc client.c <span class="token parameter variable">-o</span> client
./server <span class="token number">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start client to receive message.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./client <span class="token number">127.0</span>.0.1 <span class="token number">8888</span>
Message <span class="token builtin class-name">read</span> from server:Hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Oh, Message received!!!</p><p>Let&#39;s change message ...</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">server</span><span class="token expression"><span class="token punctuation">.</span>c</span></span>
  <span class="token keyword">char</span> message<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;Hello C network program\\n&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Recompile.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc server.c <span class="token parameter variable">-o</span> server
./server <span class="token number">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./client 127.0.0.1 8888
server:Hello C network program
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This tutorial is over, but network programming is just beginning Good luck</p>`,37),o=[c];function i(l,r){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","get-start-with-c-tcp-program.html.vue"]]);export{k as default};
