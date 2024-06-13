new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  console.log(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  console.log(result); // 2
  return result * 2;
}).then(function(result) {
  console.log(result); // 4
  return result * 2;
});







// We can also return a promise from then function:

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  console.log(result); // 1
  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) { // (**)
  console.log(result); // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  console.log(result); // 4
});









// A loadScript example:
loadScript("/promise-chaining/one.js")
.then(function (script) {
  return loadScript("/promise-chaining/two.js");
})
.then(function (script) {
  return loadScript("/promise-chaining/three.js");
})
.then(function (script) {
  // use functions declared in scripts
  // to show that they indeed loaded
  one();
  two();
  three();
});
