---
title: How to track folder or file changes in Node.js?
date: "2018-12-13"
tags: nodejs
spoiler: 
---

## Problem
How to observe/watch the folders OR files that gets changed using Node.js

## Solution
Node.js comes with builtin method ```fs.watch()``` method that will emit 'change' event whenver specific directory or file is modified

## Example
```javascript
fs.watch('./folder/or/file/path/to/watch', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...>
  }
});
```

Save above code in ```watch.js``` file and run the program ```node watch.js```. Make sure you change folder or file name.

Once you run the program, it will continuosly watch for any changes in specific folder or file and prints buffer once the changes are found.

### Let's test our code

Make some changes in folder or file being watched and check the console. You should see buffer on your terminal as shown below - _contents of buffer may differ_

```
<Buffer 66 69 6c 65 2e 6a 73>
```