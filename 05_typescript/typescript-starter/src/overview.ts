/* Types by Inference */

let helloWorld = "Hello World";

helloWorld.forEach((item) => {
  console.log(item);
});


/* Defining Types */

// To create an object with an inferred type which includes `name: string` and `id: number`,
// you can write:
const user = {
  name: "Hayes",
  id: 0,
};

// You can explicitly describe this object’s shape using an interface declaration:
interface User {
  name: string;
  id: number;
}

// And then you can explicitly declare that user conforms to the shape of User interface:
const user: User = {
  name: "Hayes",
  id: 0,
};



// If you provide an object that doesn’t match the interface you have provided,
// TypeScript will warn you:

interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
  id: 0,
};





// You can use an interface declaration with classes:

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);






// You can use interfaces to annotate parameters and return values to functions:

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  //...
}




/* Composing Types */

type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number literals
// that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type ZeroOrOne = 0 | 1;


// Unions provide a way to handle different types too.
// For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
  return obj.length;
}





/* Generics */

// Generics provide variables to types.

type StringArray = Array<string>;

// You can declare your own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}





/* Structural Type System */

// One of TypeScript’s core principles is that type checking focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural typing”.
// In a structural type system, if two objects have the same shape,
// they are considered to be of the same type.


interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// Not declared as Point type
const point = { x: 12, y: 26 };
logPoint(point);


// The shape-matching only requires a subset of the object’s fields to match
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"





