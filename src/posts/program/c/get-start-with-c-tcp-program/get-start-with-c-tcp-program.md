---
icon: edit
date: 2022-07-09
isOriginal: true
category:
  - c 
  - linux
tag:
  - network
---

# TCP/IP Network Program

If you are learn TCP/IP network, you must have heard that CS model with this.

![](/assets/img/tcp.png)

But if you are new with network programing, there are difficult.

This is a tutor try to help you to know network programing simply.

The first of all, you have to gcc env.

Input `gcc --version` on your shell.
```sh
$ gcc --version
gcc (Ubuntu 11.2.0-19ubuntu1) 11.2.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```
Oh... we will to travel will c language.

First at first, we touch a client.c file, to start our client.
```sh
touch client.c server.c
```

```c 
# client.c
#include <netinet/in.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h> 
void error_handling(char *message);

int main(int argc, char* argv[]){
  int sock;
  struct sockaddr_in serv_addr;
  char message[30];
  int str_len;
  if (argc != 3) {
    printf("Useage: %s <IP> <port>\n", argv[0]);
    exit(1);
  }

  sock = socket(PF_INET, SOCK_STREAM, 0);
  if (sock == -1) {
    error_handling("socket() error");
  }

  memset(&serv_addr, 0, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
  serv_addr.sin_port = htons(atoi(argv[2]));
  if(connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr))==-1) {
    error_handling("connect() error!");
  }

  str_len = read(sock, message, sizeof(message)-1);
  if (str_len == -1) {
    error_handling("read() error");
  } 

  printf("Message read from server:%s \n", message);
  close(sock);
  return 0;
}


void error_handling(char *message) {
  fputs(message, stderr);
  fputc('\n', stderr);
  exit(1);
}
```

I know you are confused with all of this. So I will explain all client code.

Let's go to main func.

```C
  // create a sock to save result of socket()
  int sock;
  // create a serv_addr to save sock in our compute addr
  struct sockaddr_in serv_addr;
  // create message to send message to client
  char message[30];
  //  str_len is strlen(message)
  int str_len;
  if (argc != 3) {
    printf("Useage: %s <IP> <port>\n", argv[0]);
    exit(1);
  }
  /* 
   * sock is a file descriptor
   * you can use sock to manipulate serve
   * if sock == -1;  socket() error!
  */ 
  sock = socket(PF_INET, SOCK_STREAM, 0);
  if (sock == -1) {
    error_handling("socket() error");
  }
```
```C
  // memset is a function to init our serv_addr
  memset(&serv_addr, 0, sizeof(serv_addr));
  // init our serv_addr with value
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr(argv[1]);
  serv_addr.sin_port = htons(atoi(argv[2]));
  // connect our serv_addr with sock file descriptor
  if(connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr))==-1) {
    error_handling("connect() error!");
  } 
  // read message
  str_len = read(sock, message, sizeof(message)-1);
  if (str_len == -1) {
    error_handling("read() error");
  } 

  printf("Message read from server:%s \n", message);
  close(sock);
  return 0;
```
So now, our client.c complete!!!

Let us to compile client.c `gcc client.c -o client`.

Run it with `./client 127.0.0.1 8888`
```
connect() error!
```
Oh... connect error, Looks like we haven't written our server side yet.

I almost forgot the server side code here...

```c
# server.c
#include <netinet/in.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h> 
void error_handling(char *message);

int main(int argc, char const *argv[])
{
  int serv_sock;
  int clnt_sock;

  struct sockaddr_in serv_addr;
  struct sockaddr_in clnt_addr;

  socklen_t clnt_addr_size;

  char message[]="Hello world\n";

  if (argc != 2) {
    printf("Usage: %s <port>\n", argv[0]);
    exit(1);
  }

  serv_sock = socket(PF_INET, SOCK_STREAM, 0);
  if (serv_sock == -1) {
    error_handling("socket() error");
  }

  memset(&serv_addr, 0, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
  serv_addr.sin_port=htons(atoi(argv[1]));


  if (bind(serv_sock,(struct sockaddr*)&serv_addr, sizeof(serv_addr))==-1) {
    error_handling("bind() error");
  }

  if (listen(serv_sock, 5) == -1) {
    error_handling("listen() error");
  }

  clnt_addr_size=sizeof(clnt_addr);
  clnt_sock=accept( serv_sock, (struct sockaddr*)&clnt_addr, &clnt_addr_size);
  if (clnt_sock == -1) {
    error_handling("accept() error");
  }

  write(clnt_sock, message, sizeof(message));
  close(clnt_sock);
  close(serv_sock);
  return 0;
}

void error_handling(char *message) {
  fputs(message, stderr);
  fputc('\n', stderr);
  exit(1);
}
```
I will explain all of code.

```c
  // server and client sock...
  int serv_sock;
  int clnt_sock;

  // server and client address file descriptor
  struct sockaddr_in serv_addr;
  struct sockaddr_in clnt_addr;

  socklen_t clnt_addr_size;

  // send message to client  you can change it
  char message[]="Hello world\n";

  if (argc != 2) {
    printf("Usage: %s <port>\n", argv[0]);
    exit(1);
  }
  // sock file descriptor
  serv_sock = socket(PF_INET, SOCK_STREAM, 0);
  if (serv_sock == -1) {
    error_handling("socket() error");
  }
```
```C
  // init serv_addr
  memset(&serv_addr, 0, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
  serv_addr.sin_port=htons(atoi(argv[1]));

  // bind our port
  if (bind(serv_sock,(struct sockaddr*)&serv_addr, sizeof(serv_addr))==-1) {
    error_handling("bind() error");
  }

  // listen
  if (listen(serv_sock, 5) == -1) {
    error_handling("listen() error");
  }

  clnt_addr_size=sizeof(clnt_addr);
  clnt_sock=accept( serv_sock, (struct sockaddr*)&clnt_addr, &clnt_addr_size);
  if (clnt_sock == -1) {
    error_handling("accept() error");
  }
  // write message to client
  write(clnt_sock, message, sizeof(message));
  close(clnt_sock);
  close(serv_sock);
  return 0;
```
Let's run it;
```sh
gcc server.c -o server
gcc client.c -o client
./server 8888
```
Start client to receive message.
```sh
./client 127.0.0.1 8888
Message read from server:Hello world
```
Oh, Message received!!!

Let's change message ...
```c
#server.c
  char message[]="Hello C network program\n";
```
Recompile.
```sh
gcc server.c -o server
./server 8888
```
```
./client 127.0.0.1 8888
server:Hello C network program
```
This tutorial is over, but network programming is just beginning Good luck
