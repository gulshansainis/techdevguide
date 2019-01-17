---
title: How to create constants in JavaScript?
date: '2019-01-17'
tags: javascript
spoiler: Immutable in JavaScript is not necessarily constant.
---

**`ES5`** is not having built in support for constants. If you want to declare constant you need to write variable name in **ALL_CAPS** so that anyone should not accidentally update the variable - that is the convention developers have followed for long time.

```javascript
// Declaring constant in ES5
// highlight-next-line
var NAME = 'Gulshan Saini'

console.log(NAME)
// Output: Gulshan Saini
```

**Assigning new value to constant in ES5**

```javascript
// Declaring constant in ES5
var NAME = 'Gulshan Saini'

// assign new value
// highlight-next-line
NAME = 'Aditi Saini'

console.log(NAME)
// Output: Aditi Saini
```

Since, `NAME` is normal variable defined with keyword `var` we are allowed to assign new value wihout any errors.

## Declaring contstant with `const` keyword in ES6

**`ES6`** introduced keyword `const` to mark variables as constant. After prefixing variable with `const` keyword if you try to assign new value to variable - JavaScript would throw error

```javascript
// Declaring constant in ES6
const NAME = 'Gulshan Saini'

// assign new value
// highlight-next-line
NAME = 'Aditi Saini'

// TypeError: Assignment to constant variable.
```

## How do I make object immutable in JavaScript?

Using `const` keyword we made sure nobody else would be able to reassign new value to our variables however that only protect a variable assigned a primitive value.

Lets look at problem where variable is assigned value of `type object`

```javascript
// Declaring constant in ES6
const person = {
  name: 'Gulshan Saini',
}
```

Lets assign new value to `person.name`

```javascript
// declaring constant object in es6
const person = {
  name: 'Gulshan Saini',
}

// assign new value
// highlight-next-line
person.name = 'Aditi Saini'

console.log(person)
// Output: { name: 'Aditi Saini' }
```

As we can see in above code even though we prefixed variable `person` with `const` keyword, we were still able to change inner properties.

**_So, how do we tackle this scenario?_**

In `ES5`, JavaScript introduced new method called `Object.freeze()` that freezes an object.

Lets use method `Object.freeze()` to freeze `person` object

```javascript
// if we do not add 'use strict'
// JavaScript will fail silently
// highlight-next-line
'use strict'

// declaring constant object in es6
const person = {
  name: 'Gulshan Saini',
}

// Freeze object to restrict addition, deletion
// and modification of immediate properties
// of object
// highlight-next-line
Object.freeze(person)

// assign new value
person.name = 'Aditi Saini'
// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

As we can see above, when we attempted to reassign new value to `person.name` JavaScript throws error. Similar is case when we try to add new property or delete existing property - **example below**

```javascript
'use strict'

// declaring constant object in es6
const person = {
  name: 'Gulshan Saini',
}

Object.freeze(person)

// add new property
// highlight-next-line
person.age = 36
//TypeError: Cannot add property age, object is not extensible

// delete existing property
// highlight-next-line
delete person.name
// TypeError: Cannot delete property 'name' of #<Object></Object>
```

Now you know how to make objects _immutable_ in JavaScript however **remember** it is not necessarily constant.

Few important points that you should remember before using `Object.freeze()`

1. Always add `use strict` if you do not want JavaScript to fail silently
2. `Object.freeze()` only freezes top level properties. If object contains nested object you need to freeze it using recursion
3. Even if object is frozen, you can still replace it with completely new object if, it is defined with `var` keyword as shown below

```javascript
'use strict'

// declaring constant object in es5
var PERSON1 = {
  name: 'Gulshan Saini',
}

// freeze PERSON1 object
Object.freeze(PERSON1)

var PERSON2 = {
  name: 'Aditi Saini',
}

// over write value of PERSON1
// highlight-next-line
PERSON1 = PERSON2

console.log(PERSON1)
// Output: { name: 'Aditi Saini' }
```
