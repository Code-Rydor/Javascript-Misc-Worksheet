
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

// MadLib Function//

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bird", "slow", "flew", "quietly"));

// Arrays //

var ourArray = [["the universe", 42], ["red", 3]];
console.log(ourArray)

var yourArray = [14, 25, 37];
console.log(yourArray);
yourArray[1] = 28;
console.log(yourArray);

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]

var myData = [0][0];

// Select the value 8
myData = myArray[2][1];
console.log(myData)
console.log(myArray[2][1]);
// Select the value 12
console.log(myArray[3][0][2])
