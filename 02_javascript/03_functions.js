/*
 * local and outer variables, shadowing
 *
 * variable scope
 *
 * arguments
 *
 * nested functions
 * Example: make counter
 *
 * Closure
 *
 * setTimeout, setInterval
 *
 * Function as object constructor
 *
 * 'this' keyword
 */


// local and outer variables
let userName = 'John';

function showMessage() {
  userName = 'Bob'; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}


// Closure
function makeFunc() {
  const name = 'Henry';
  function displayName() {
    alert(name);
  }
  return displayName;
}

const func = makeFunc();
func();



// setTimeout function
let timerId = setTimeout(function() {
  console.log(1);
}, 2000);

// clears timeout
clearTimeout(timerId);

// setInterval function
timerId = setInterval(function() {
  console.log(1);
}, 1000)




// Task:
// Write a function that outputs
// the next Fibonacci number every second





// We can use function as an object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// We are creating a new person called 'John' aged 30.
let john = new Person('John', 30);

console.log(john);









/**
 * This keyword.
 *
 * 1. If the `new` keyword is used when calling the function, this inside the
 * function refers to new object being constructed.
 *
 * 2. If apply, call, or bind are used to call a function, this inside the
 * function is the object that is passed in as the argument.
 *
 * 3. If a function is called as a method — that is, if dot notation is used to
 * invoke the function — this is the object that the function is a property of.
 *
 * 4. If a function is invoked as a free function invocation, meaning it was
 * invoked without any of the conditions present above, this is the global
 * object. In a browser, it’s window.
 *
 */


// function.call(thisArg, arg1, ... , argN)
