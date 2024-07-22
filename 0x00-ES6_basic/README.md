# ES6 Overview

ES6, also known as ECMAScript 2015, introduced a wide range of new features to JavaScript, making the language more powerful and expressive. This document provides an overview of some of the key features introduced in ES6.

## Table of Contents

- [What is ES6](#what-is-es6)
- [New Features Introduced in ES6](#new-features-introduced-in-es6)
  - [Constants and Variables](#constants-and-variables)
  - [Block-Scoped Variables](#block-scoped-variables)
  - [Arrow Functions](#arrow-functions)
  - [Rest and Spread Parameters](#rest-and-spread-parameters)
  - [String Templating](#string-templating)
  - [Object Creation and Properties](#object-creation-and-properties)
  - [Iterators and for-of Loops](#iterators-and-for-of-loops)

## What is ES6

ES6, or ECMAScript 2015, is the sixth edition of the ECMAScript language specification standard. It significantly improved JavaScript by adding new syntax and features for writing complex applications more efficiently.

## New Features Introduced in ES6

### Constants and Variables

- **Constants (`const`)**: Used to declare variables whose values cannot be reassigned.
- **Variables (`let`)**: Similar to `var`, but with block scope.

```javascript
const PI = 3.14;
let radius = 5;
Block-Scoped Variables
Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined.

javascript
Copy code
if (true) {
  let x = 10;
  const y = 20;
  console.log(x); // 10
  console.log(y); // 20
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
Arrow Functions
Arrow functions provide a concise syntax for writing function expressions and lexically bind the this value.

javascript
Copy code
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const obj = {
  value: 42,
  arrowFunc: () => {
    console.log(this.value); // `this` refers to the outer context
  }
};
obj.arrowFunc(); // undefined or global object's value
Rest and Spread Parameters
Rest Parameters: Collects all remaining arguments into an array.
Spread Operator: Expands elements of an iterable (like an array) into individual elements.
javascript
Copy code
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 6

const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
String Templating
Template literals allow for easier string interpolation and multi-line strings.

javascript
Copy code
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!

const multiLine = `This is
a multi-line
string.`;
console.log(multiLine);
Object Creation and Properties
ES6 introduced shorthand properties and methods, and computed property names.

javascript
Copy code
const x = 10;
const y = 20;

const obj = {
  x, // Shorthand property
  y,
  sum() { // Shorthand method
    return x + y;
  },
  ['computed' + 'Property']: 30 // Computed property name
};

console.log(obj.sum()); // 30
console.log(obj.computedProperty); // 30
Iterators and for-of Loops
ES6 introduced iterators and the for-of loop for iterating over iterable objects like arrays, strings, and more.

javascript
Copy code
const array = [1, 2, 3];
for (const value of array) {
  console.log(value); // 1, 2, 3
}

const str = "Hello";
for (const char of str) {
  console.log(char); // H, e, l, l, o
}
This overview provides a glimpse into some of the powerful features introduced in ES6, which collectively enhance JavaScript's functionality and developer experience.
