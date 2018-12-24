---
title: What is libuv?
date: "2018-12-20"
tags: nodejs
spoiler: 
---

libuv is C++ open source library that gives Node.js access to OS internals, Networking and Concurrency. It was primarily developed for use by Node.js, but it's also used by Luvit, Julia, pyuv, and others.

## What is libuv?

libuv is built on top of epoll/kequeue/event ports/etc on Unix and IOCP on Windows systems providing a consistent API on top of them.

### Features of libuv
- Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
- Asynchronous TCP and UDP sockets
- Asynchronous DNS resolution
- Asynchronous file and file system operations
- File system events
- ANSI escape code controlled TTY
- IPC with socket sharing, using Unix domain sockets or named pipes (Windows)
- Child processes
- Thread pool
- Signal handling
- High resolution clock
- Threading and synchronization primitives

## Architecture Diagram
![libuv architecture diagram](node-architecture.png "libuv architecture diagram")
*Image Source: http://docs.libuv.org/en/v1.x/design.html*