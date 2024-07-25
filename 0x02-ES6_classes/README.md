# ES6 Classes and Metaprogramming

## Table of Contents
1. [Introduction](#introduction)
2. [Defining a Class](#defining-a-class)
3. [Adding Methods to a Class](#adding-methods-to-a-class)
4. [Static Methods](#static-methods)
5. [Extending a Class](#extending-a-class)
6. [Metaprogramming and Symbols](#metaprogramming-and-symbols)

## Introduction
This project covers the basics of ES6 classes in JavaScript, including how to define classes, add methods, use static methods, extend classes, and utilize metaprogramming techniques such as symbols. By the end of this project, you should be able to explain these concepts clearly without needing to refer to external resources.

## Defining a Class
In ES6, classes provide a more intuitive and structured way to create objects and handle inheritance. A class is defined using the `class` keyword followed by the class name.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Adding Methods to a Class
Methods can be added to a class by defining them within the class body. These methods will be available on instances of the class.

javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person('Alice', 30);
console.log(person.greet());
Static Methods
Static methods are functions that belong to the class itself rather than any instance of the class. They are defined using the static keyword.

javascript
Copy code
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3)); // Outputs: 5
Extending a Class
Classes can be extended to create a new class that inherits properties and methods from the parent class using the extends keyword.

javascript
Copy code
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Outputs: Rex barks.
Metaprogramming and Symbols
Metaprogramming is a programming technique where programs have the ability to treat other programs as their data. This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running.

Symbols are a new primitive type introduced in ES6, primarily used to create unique property keys.

javascript
Copy code
const sym = Symbol('unique');

class UniqueID {
  constructor(id) {
    this[sym] = id;
  }

  getID() {
    return this[sym];
  }
}

const uniqueID = new UniqueID(12345);
console.log(uniqueID.getID()); // Outputs: 12345
Conclusion
By understanding and using classes, methods, static methods, inheritance, and metaprogramming techniques such as symbols, you can write more organized and efficient code. These concepts form the foundation of modern JavaScript programming and are essential for any developer to master.
