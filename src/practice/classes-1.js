class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Yo, I am ' + this.name + '!'
        return `Yo, I am ${this.name}!`
    }
    getDescription() {
        `${this.name} is ${this.age} years old.`
    }
}

class Traveler extends Person {
    constructor(name, age, hometown) {
        super(name, age);
        this.hometown = hometown;
    }

    // hasHometown() {
    //     return !!this.hometown;
    // } ---- this is a more indirect way of checking for truthy value on hometown

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hometown) {
            greeting += ` And I am from ${this.hometown}.`
        }
        return greeting;
    }
}

const me = new Traveler('Daniel Wallen', 33, 'Kingsport');
console.log(me.getGreeting());

const anon = new Person();
console.log(anon);

const her = new Traveler('Alexia', 33, 'Bristol');
console.log(her.getGreeting());