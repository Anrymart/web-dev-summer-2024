let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); // ?
console.log(rabbit.jumps); // ?


// with 'for...in' loop we can iterate over all properties, including inherited:


for (let prop in rabbit) {
    console.log(prop);

    // checking if property belongs directly to object:
    console.log(rabbit.hasOwnProperty(prop));
}