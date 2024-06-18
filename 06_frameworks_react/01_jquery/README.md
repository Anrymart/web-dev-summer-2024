Selecting elements, modifying elements, adding handlers:

```javascript
$(function () {
  $('#add').click(() => {
    let firstNum = +$('#firstInput').val();
    let secondNum = +$('#secondInput').val();

    $('#answer').text(firstNum + secondNum);
  })
});
```

Sending HTTP requests:

```javascript
// jQuery:
$.ajax({
  url: 'http://quotes.stormconsultancy.co.uk/random.json'
}).done(function (data) {
  // do something with data
});

// Standard fetch API:
fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(response => response.json())
    .then(response => console.log(response));
```

Why jQuery was so popular?

jQuery's motto: Writing Javascript code should be fun.

1. Provides a simple and convenient API to work with DOM
2. Abstracts away differences between browsers

One of the most difficult browsers was IE. Example:

```javascript
const element = document.getElementById('header');

// IE
const classAttributeIE = element.getAttribute('className');
// Firefox
const classAttributeFirefox = element.getAttribute('class');

// jQuery
$('#header').attr('class');
```

A few more words on how jQuery is implemented. In JavaScript function is an
object, hence we can create properties on the function object, like on a regular
object.

```javascript
function fun(arg) {
  if (typeof arg === 'function') {
    // arg is a callback, do something and then invoke it
  } else if (typeof arg === 'string') {
    // arg is a selector, return elements matching it
  }
}

fun.sayHi = function () {
  return "Hi there!";
}
```
