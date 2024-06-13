// Imagine I'm working on the project, and get assigned a task.
// My teammates depend on this task for their work,
// so I give them a promise to notify them when I finish.
// There might also be a chance that I'm not able to finish the task for some reason.








/* This is a real-life analogy for things we often have in programming:
 * 1. A “producing code” that does something and takes time
 * 2. A “consuming code” that wants the result of the “producing code” once it’s ready
 * 3. A promise is a special JavaScript object that links the “producing code”
 * and the “consuming code” together
 */

let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "engineer")
});


// consumer ("teammates")
promise.then((result) => {
  // handle successful result
}, (error) => {
  // handle error
});







// Promise resolution:
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);







// Promise rejection:
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);













// Example: loadScript function

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}



let promise = loadScript("/my/script.js");

// One handler
promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

// Another handler
promise.then(script => alert('Another handler...'));
