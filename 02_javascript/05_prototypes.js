
// animal has methods
let animal = {
    walk() {
        if (this.isSleeping) {
            alert('Go away, I am sleeping!')
        } else {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    },
    printName() {
        console.log(this.name);
    },
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};


rabbit.walk();

// modifies rabbit.isSleeping
rabbit.sleep();

rabbit.walk();
