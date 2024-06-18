import {Square} from './modules/square.js';
import {Circle} from './modules/circle.js';
import * as sayLib from './modules/say.js';

const square = new Square(3, 5);
const circle = new Circle(4);

sayLib.sayHi('John');
sayLib.sayBye('John');

console.log(square.area());
console.log(circle.area());

// Multiple imports/exports
// export default

/*
 * Exports:
 *
 * Before declaration of a class/function/...:
 * export [default] class/function/variable ...
 *
 * Standalone export:
 * export {x [as y], ...}.
 *
 * Re-export:
 * export {x [as y], ...} from "module"
 * export * from "module" (doesn't re-export default).
 * export {default [as y]} from "module" (re-export default).
 *
 *
 * Imports:
 *
 * Importing named exports:
 * import {x [as y], ...} from "module"
 *
 * Importing the default export:
 * import x from "module"
 * import {default as x} from "module"
 *
 * Import all:
 * import * as obj from "module"
 *
 * Import the module (its code runs), but do not assign any of its exports to variables:
 * import "module"
 */