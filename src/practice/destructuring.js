const person = {
    name: 'Daniel', 
    age: 32,
    location: {
        city: 'Kingsport',
        temp: 70
    }
}

// Adding default value as that's useful when desired
const { name = 'Anonymous', age } = person;
// Simplifies syntax a lot -- otherwise, would have to do "person.location.city"
const { city, temp: temperature } = person.location;
// We could also rename a variable if desired (i.e. temp: temperature)
console.log(`${name} took a walk in ${city} where it is ${temperature}`);

const book = {
    author: 'Dean Koontz',
    title: 'Strangers',
    publishDate: '1977'
}

const { author = 'Anonymous', title, publishDate: date } = book;
console.log(`${author} published ${title} in ${date}`);

// Array Destructuring

const address = ['102 Mocking Bird Lane', 'Fleetwood', 'VA', 90210];
const [street, town, state] = address;
console.log(`I live on ${street} in ${town}, ${state}`)

// To isolate one element:
const [, , , zip] = address;
console.log(zip);