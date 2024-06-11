/*
 * https://javascript.info/object
 */

// Constructing an object
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax


// inline object initialization:
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};


// get property values of the object:
alert(user.name); // John
alert(user.age); // 30


// Adding new property
user.isAdmin = true;


// Deleting a property
delete user.age;


let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


/* this would give a syntax error:
 * user.likes birds = true
 */

// Use square brackets notation:
user["likes birds"] = true;
alert(user["likes birds"]);
delete user["likes birds"];


// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};


// Property existence test:
let user = {name: "John", age: 30};

alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist


// for...in loop

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
}

// Function as a property:
let user = {
    name: "John",
    sayHi: function () {
        return "Hi!";
    }
};

// Using `this` to refer to object properties from function
let user = {
    name: "John",
    sayHi: function () {
        return "Hi, I am " + this.name;
    }
}

user.sayHi();
