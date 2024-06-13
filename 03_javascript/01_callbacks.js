// Imagine we want to load some script onto the page:

function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}


// load and execute the script at the given path
loadScript('/my/script.js');
// the code below loadScript
// doesn't wait for the script loading to finish
newFunction(); // no such function!










// Callback function will be called when script loads:
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback();

  document.head.append(script);
}


loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
});








// How can we load two scripts sequentially?

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});


// What if we need 3 scripts sequentially?









// Handling errors:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}







// If we try to load 3 scripts sequentially and also handle errors, we get
// something known as "pyramid of doom" or "callback hell".
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});

function handleError(error) {
  console.log(error);
}
