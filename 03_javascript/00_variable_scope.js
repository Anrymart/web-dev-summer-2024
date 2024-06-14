// The scope of variables declared with let and const is {}
// The scope of variables declared with var is function


// “var” has no block scope:

if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if


// If we used let test instead of var test,
// then the variable would only be visible inside if:

if (true) {
  let test = true; // use "let"
}
alert(test); // ReferenceError: test is not defined



// The same thing for loops: var cannot be block- or loop-local:

for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}
alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable


// IIFE - immediately-invoked function expressions
(function() {

  var message = "Hello";

  alert(message); // Hello

})();
