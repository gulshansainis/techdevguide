---
title: What is module in Node.js?
date: '2018-12-27'
tags: nodejs
spoiler: Deep dive into creating and exporting functions and objects from modules
---

## Module in Node.js?

In Node.js each file is treated as separate module. For example, consider below code

```jsx
// ES5 syntax - file math.js
// highlight-next-line
module.exports.add = () => a + b
```

## What is <u>module.exports</u> in above code?

Each module is wrapped in function by Node.js before execution as shown below

```jsx
;(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
})
```

During execution our code will look like the following:

```jsx
// highlight-start
// ES5 syntax - file math.js
;(function(exports, require, module, __filename, __dirname) {
  module.exports.add = () => a + b
})
// highlight-end
```

### Now you might be thinking why Node.js wraps our code inside function

By wrapping our module inside function, Node.js achieves a few things:

- Top level variables are kept private that are defined using `var`, `let`, `const`. Any variable defined inside module is not exposed to outer world accidentally
- Node.js exposes `require` function which can be used to import other modules
- Variables `__filename` and `__dirname` give access to current module filename and absolute path respectively
- Node.js exposes few variables like `exports` and `module` which can be used to expose methods to outer world from module

> using `module.exports` we are actually making our `add` function publically available to other modules

Lets look at couple of other **ways to export functions or objects** from module

#### Approach 1 - module.exports

It is the same approach that we discussed eariler however mentioning it again so that its easy to compare everything at same place instead of scrolling up and down on page

```jsx
// ES5 syntax - file math.js
// highlight-next-line
module.exports.add = () => a + b

// ES5 syntax - file index.js
const add = require('./math')
console.log(add(1, 9)) // Output - 10
```

#### Approach 2 - exports

In second approach we can omit the `module` keyword and just keep `exports` - its a shortcut

```jsx
// ES5 syntax - file math.js
// highlight-next-line
exports.add = () => a + b

// ES5 syntax - file index.js
const add = require('./math')
console.log(add(1, 9)) // Output - 10
```

#### Approach 3 - assign module.exports to function/class or object

Assigning `module.exports` to **function**

```jsx
// ES5 syntax - file math.js
// highlight-next-line
module.exports = (a, b) => a + b

// ES5 syntax - file index.js
const add = require('./math')
console.log(add(1, 9)) // Output - 10
```

Assigning `module.exports` to **class**

```jsx
// ES5 syntax - file square.js
// highlight-start
module.exports = class Square {
  constructor(width) {
    this.width = width
  }

  area() {
    return this.width ** 2
  }
}
// highlight-end

// ES5 syntax - file index.js
const Square = require('./square.js')
const mySquare = new Square(2)
console.log(mySquare.area()) // Output - 4
```

Assigning `module.exports` to **object**

```jsx
// ES5 syntax - file user.js
// highlight-next-line
module.exports = { name: 'Gulshan Saini', age: '36' }

// ES5 syntax - file index.js
const user = require('./users')
console.log(users) // Output - { name: 'Gulshan Saini', age: '36' }
```

#### Approach 4 - exporting multiple functions

We can even export multiple function from module which again can be achieved using various approaches shown below

1. In first approach we export the function separately

```jsx
// ES5 syntax - file math.js
// highlight-start
module.exports.add = (a, b) => a + b
module.exports.subtract = (a, b) => a - b
module.exports.multiply = (a, b) => a * b
// highlight-end

// ES6 syntax - file index.js
const { add, subtract, multiply } = require('./math')
console.log(add(1, 9)) // Output - 10
console.log(subtract(9, 1)) // Output - 8
console.log(multiply(2, 2)) // Output - 4
```

2. In second approach we export as object

```jsx
// ES5 syntax - file math.js
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b

// ES5 way
// module.exports = { add: add, subtract: subtract, multiply: multiply }

// OR ES6 way
// highlight-next-line
module.exports = { add, subtract, multiply }

// ES6 syntax - file index.js
const { add, subtract, multiply } = require('./math')

console.log(add(1, 9)) // Output - 10
console.log(subtract(9, 1)) // Output - 8
console.log(multiply(2, 2)) // Output - 4
```

You may even rename the exported function as follows

```jsx
// ES5 syntax - file math.js
const add = (a, b) => a + b
// highlight-next-line
module.exports = { addition: add }

// ES6 syntax - file index.js
const { addition } = require('./math')
console.log(addition(1, 9)) // Output - 10
```

See, how we renamed `add` to `addition` while exporting.

**Renaming** can also be achieved using `as` keyword

```jsx
// ES5 syntax - file math.js
const add = (a, b) => a + b
// highlight-next-line
module.exports = { add as addition }

// ES6 syntax - file index.js
const { addition } = require('./math')
console.log(addition(1, 9)) // Output - 10
```

I hope this article helps you to understand modules in Node.js.

**Please note** we are using `ES5` syntax here to keep it simple. In future article we will explore `ES6 export` and `import` keywords.
