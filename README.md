[Click me to visit my work 🚀](https://mdsifat-dev.github.io/Green-Earth/)

**1) What is the difference between var, let, and const?**

- var → Old way. Function-scoped. Can redeclare and reassign. Hoisted to the top.

- let → Modern. Block-scoped. Can reassign but not redeclare in the same scope.

- const → Modern. Block-scoped. Cannot redeclare or reassign, but objects/arrays can still be modified inside.

```js
// var
var x = 1;
var x = 2; // ✅ redeclare allowed
console.log(x); // 2

// let
let y = 1;
// let y = 2; ❌ redeclare not allowed
y = 3; // ✅ reassign allowed
console.log(y); // 3

// const
const z = 1;
// z = 2; ❌ reassign not allowed
// const z = 3; ❌ redeclare not allowed
const arr = [1, 2];
arr.push(3); // ✅ can modify array
console.log(arr); // [1, 2, 3]
```

**2) What is the difference between map(), forEach(), and filter()?**

1. forEach()
   → Used to run a function for every item in an array.
   → It does not return a new array; it just executes code (like logging, updating, etc.).

2. map()
   → Also runs a function for every item.
   → But it returns a new array with the transformed values.
   → Original array is unchanged.

3. filter()
   → Runs a function to test each item.
   → Returns a new array with only items that pass the condition.
   → Useful for selecting specific data.

```js
// forEach → just does something
[1, 2, 3].forEach((n) => console.log(n * 2));
// Output: 2, 4, 6

// map → returns a new array
const doubled = [1, 2, 3].map((n) => n * 2);
console.log(doubled); // [2, 4, 6]

// filter → returns a new array with condition
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
```

**first give explained answer then give short coding example**

_3) What are arrow functions in ES6?_

- Shorter syntax → No need to write function keyword.

- Implicit return → If it’s a one-liner, you don’t need return or {}.

- 'this' binding → Unlike normal functions, arrow functions don’t have their own 'this'. They use 'this' from the surrounding scope (very useful in callbacks).

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (same thing)
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5

// One parameter (no need for parentheses)
const square = (n) => n * n;
console.log(square(4)); // 16

// Arrow with no parameters
const greet = () => console.log("Hello!");
greet(); // Hello!
```

**4) How does destructuring assignment work in ES6?**

_Destructuring assignment in ES6 is a way to extract values from arrays or objects into separate variables in a clean and readable way._

- Array destructuring → Assigns array elements to variables by position.

- Object destructuring → Assigns object properties to variables by name.

- Can set default values if the value is undefined.

- Makes code shorter and avoids repetitive access like obj.prop or arr[0].

```js
// Array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25

// Default values
const [x = 10, y = 20] = [5];
console.log(x, y); // 5 20

// Renaming variables
const { name: personName } = person;
console.log(personName); // Alice
```

**5) Explain template literals in ES6. How are they different from string concatenation?**

_Template literals are a new way to write strings in ES6 using backticks ` instead of quotes._

- Embed variables easily using ${} instead of breaking strings and using +.

- Multi-line strings are easy; no need for \n.

- Expressions can be used inside ${} (not just variables).

_Difference from string concatenation:_

- Old way: "Hello " + name + ", you are " + age + " years old."

- Template literal: `Hello ${name}, you are ${age} years old.` → cleaner and readable.

```js
const name = "Alice";
const age = 25;

// Old way (concatenation)
const message1 = "Hello " + name + ", you are " + age + " years old.";
console.log(message1); // Hello Alice, you are 25 years old.

// Template literal
const message2 = `Hello ${name}, you are ${age} years old.`;
console.log(message2); // Hello Alice, you are 25 years old.

// Multi-line string
const multiline = `This is line 1
This is line 2`;
console.log(multiline);
/*
This is line 1
This is line 2
*/
```
