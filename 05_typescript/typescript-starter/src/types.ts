/* The primitives: string, number, and boolean */

let a: string;
let b: number;
let c: boolean;



/* Arrays */

let arr: number[];

arr = [1, 2, 3];



/* Any */

// Any is a special type that you can use whenever you don’t want a particular value to cause
// typechecking errors.

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


/* Functions */

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
greet(42);


// Return type annotation
function getFavoriteNumber(): number {
  return 26;
}

// You usually don’t need a return type annotation because TypeScript will infer the function’s
// return type based on its return statements.
// Return type annotations are useful for interface declarations.




/* Object types */


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


// Optional properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


/* Interfaces and Classes */

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


// You can define an interface with methods:
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

// Will throw an error:
class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}


/* Enums */

// This is not a type-level addition to JavaScript but something added to the language and runtime

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Right;