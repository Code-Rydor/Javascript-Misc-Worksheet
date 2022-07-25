
let person = {
    name: 'Garrett',
    age: 32
};

console.log(person)
// Dot notation

person.name = 'Harry';
person.age = 29;

console.log(person)

// Bracket Notation
let selection = 'name';

person[selection] = 'Mary';

console.log(person)

// Arrays //

let selectedColors = ['red', 'blue', 'green']
selectedColors[2] = 1;
console.log(selectedColors.length);

// Functions //

function greet() {
    console.log(`Hello ${person.name}!`)
}

greet();

function greet1(name, middleName, lastName) {
    console.log('Hello ' + name + ' ' + middleName + ' ' + lastName);
}

greet1('Genesis', 'Paige', 'Landin');

function square(number) {
   return number * number;
}
let number = 2;
console.log(square(number));

