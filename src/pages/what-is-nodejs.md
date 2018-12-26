---
title: What is Node.js?
date: '2018-12-05'
tags: nodejs
spoiler: Simplified and quick intro to Node.js
---

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Its nonblocking event-driven architecture makes it suitable for intensive I/O applications. Before we look at Node.js we should get familiar with V8.

## What is V8?

V8 is JavaScript Engine that uses the same JavaScript [interpreter](/what-is-interpreter) as Google Chrome. V8 compiles javascript to native machine code and executes it. It also, optimises the code to run it faster. Similar to V8 we have other JavaScript engines mentioned below for popular web browsers

- **JavascriptCore** - Safari
- **SpiderMonkey** - Firefox
- **Chakra** - Internet Explorer

Web browsers embed JavaScript engines in order to execute JavaScript. When web browser encounter Javascript on web page browsers, it send them down to embeded Javascript engines for execution.

For complete list of JavaScript engines please refer to [wikipedia](https://en.wikipedia.org/wiki/JavaScript_engine#JavaScript_engines) article.

## What is Node.js?

Node.js is a server-side JavaScript runtime environment written in C++. Similar to web browsers, Node.js embed V8 engine in order to execute JavaScript.
