# JavaScript Data Structures and Functional Programming

This directory contains examples and explanations of key JavaScript concepts related to arrays and data structures. 

## Table of Contents

1. [Functional Programming: `map`, `filter`, `reduce`](#functional-programming-map-filter-reduce)
2. [Typed Arrays](#typed-arrays)
3. [Set, Map, WeakSet, and WeakMap](#set-map-weakset-and-weakmap)

## Functional Programming: `map`, `filter`, `reduce`

### `map`

- **Purpose:** Transforms each element of an array based on a function and returns a new array.
- **Example:**
  ```javascript
  const numbers = [1, 2, 3, 4];
  const squares = numbers.map(x => x * x);
  console.log(squares); // Output: [1, 4, 9, 16]
filter
Purpose: Filters elements of an array based on a condition and returns a new array with elements that pass the test.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]
reduce
Purpose: Reduces an array to a single value based on a function applied to an accumulator and each element.
Example:
javascript
Copy code
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10
Typed Arrays
Purpose: Specialized arrays for handling binary data more efficiently.
Examples:
javascript
Copy code
const intArray = new Int16Array(4);
intArray[0] = 1;
intArray[1] = 2;
console.log(intArray); // Output: Int16Array(4) [1, 2, 0, 0]
Set, Map, WeakSet, and WeakMap
Set
Purpose: A collection of unique values.
Example:
javascript
Copy code
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicate, will not be added
console.log(mySet); // Output: Set {1, 2}
Map
Purpose: A collection of key-value pairs with keys of any datatype.
Example:
javascript
Copy code
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap.get('name')); // Output: John
WeakSet
Purpose: Similar to Set but keys must be objects and does not prevent garbage collection.
Example:
javascript
Copy code
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
WeakMap
Purpose: Similar to Map but keys must be objects and does not prevent garbage collection.
Example:
javascript
Copy code
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'some data');
console.log(weakMap.get(obj)); // Output: some data
Summary
Functional Programming: Utilize map, filter, and reduce to efficiently process and transform arrays.
Typed Arrays: Use for handling binary data efficiently.
Set, Map, WeakSet, WeakMap: Different data structures for managing collections of data with unique properties and behaviors.
