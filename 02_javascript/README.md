## Problems

1. Factorize a number
2. Write a function that calculates n-th Fibonacci number
3. Write a function that calculates the average of the numbers in an array of
   numbers. What if we pass arguments separated by comma?
4. Reverse a string
5. Merge two arrays and return the result in a new array
6. Create a function that accepts an array of numbers as argument and returns a
   new array with distinct elements
7. Write a function sum(x)(y) = x + y
8. Write a function printNumbers(from, to) that outputs a number every second,
   starting from and ending with to. More complex version: print Fibonacci
   series in the same manner.

## Home Task

Implement a JavaScript library for 2D-vectors. User should be able to create vector, add, subtract,
multiply (scalar product), find length, find unit vectors, find direction angle. Operations should
not modify current vector.

An example how the library might be used:

```javascript

// Constructing a vector
const a = new Vector(1, 2);

// Another possible way to construct a vector
const b = Vector.of(2, 0.5);

// Adding vectors
const sum = a.add(b);

// Calculating vector length
const abs = sum.abs();
```

Please also document all the public methods/classes using JSDoc.

## Resources

* JavaScript tutorial - https://javascript.info/
* JavaScript advanced - https://github.com/getify/You-Dont-Know-JS

* https://caniuse.com/ – shows the current state of support for various features.
