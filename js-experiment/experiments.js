const timeToRepeat = 10;
const character = '🐶';

let newCharacter = '';

for (let i = 1; i < timeToRepeat; i++) {
    newCharacter = character + newCharacter ;
}
console.log(newCharacter);

// OBJECTS

const obj = {
    firstName: 'Andrew',
    lastName: 'Bello',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    age: 29,
    dob: '11th April 1996'
}

const name = 'firstName';

console.log(obj);
console.log(obj.fullName())
console.log(name);
console.log(obj[name]);

const me = {
    name: {
        first: 'Andrew',
        last: 'Bello',
    },
    location: {
        doorNumber: 123,
        street: 'Volvic Street',
        city: 'Hackney',
        town: 'London',
        postcode: 'E7 2FR',
        country: 'United Kingdom',
    },
    getAddress() {
        return `
        ${this.name.first} ${this.name.last}
        ${this.location.doorNumber} ${this.location.street}
        ${this.location.town}, ${this.location.city}
        ${this.location.postcode}
        ${this.location.country}`
    }
}

console.log(me.getAddress())

// ARRAYS

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];

console.log(primeNumbers.length);
console.log(primeNumbers.join(' '))

const endNumber = primeNumbers.pop();

console.log(endNumber);

// LOOPING ARRAYS

const cities = [
    'London',
    'Manchester',
    'Birmingham',
    'Norwich',
    'Brighton',
]

//Method 1

for(let i = 0; i < cities.length; i++)
    console.log(i, cities[i]);


//Method 2

let timesCalled = 0 

// function logCity(city) {
//     console.log(timesCalled, city);
//     timesCalled++
// }

// cities.forEach(logCity);

cities.forEach(function (city) {
    console.log(timesCalled, city);
    timesCalled++;
})