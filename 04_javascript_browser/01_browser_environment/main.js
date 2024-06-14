/**
 * https://javascript.info/browser-environment
 *
 * There’s a “root” object called window. It has two roles:
 *
 *  1. It is a global object for JavaScript code.
 *  1. It represents the “browser window” and provides methods to control it.
 */

function sayHi() {
    console.log("Hello");
}

// global functions are methods of the global object:
window.sayHi();




// DOM (Document Object Model)
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);





// BOM (Browser Object Model)

console.log(navigator.userAgent); // current browser
console.log(navigator.platform); // current platform

console.log(location.href);

if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
