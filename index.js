
let person = {
    name: 'Garrett',
    age: 32
};

console.log(person)

//? Dot notation

person.name = 'Harry';
person.age = 29;

console.log(person)

//? Bracket Notation
let selection = 'name';

person[selection] = 'Mary';

console.log(person)

//? Arrays //

let selectedColors = ['red', 'blue', 'green']
selectedColors[2] = 1;
console.log(selectedColors.length);

//? Functions //

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

//? MadLib Function//

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bird", "slow", "flew", "quietly"));

//? Arrays //

var ourArray = [["the universe", 42], ["red", 3]];
console.log(ourArray)

var yourArray = [14, 25, 37];
console.log(yourArray);
yourArray[1] = 28;
console.log(yourArray);

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]

var myData = [0][0];

//? Select the value 8
myData = myArray[2][1];
console.log(myData)
console.log(myArray[2][1]);
//? Select the value 12
console.log(myArray[3][0][2])

//? Push adds to array
var pushArray = ["Landin", "Jay", 23];
pushArray.push(["Garrett", 23]);

console.log(pushArray)

//? Pop removes last element in array
myArray = [1, 2, 3];
console.log(myArray);
var removeFromArray = myArray.pop()
console.log(myArray)
console.log(removeFromArray)

//? Shift removes first element in array
myArray = ["Garrett", 2, 3, "Landin"];
console.log(myArray);
removeFromArray = myArray.shift();
console.log(myArray);
console.log(removeFromArray);

//? Unshift adds element to beginning of array
myArray = ["Garrett", "Bryce", "Landin"];
console.log(myArray);
addToBeginningOfArray = myArray.unshift("My wife loves");
console.log(myArray);

//? Shopping List (Nested Arrays)
var myList = [["Cereal, 2"], ["Milk", 1], ["Juice", 3], ["Bacon, 10"], ["Eggs", 12]];

//? Functions //

function greeting() {
    console.log("Hello! How are you?");
}
greeting();

function greeting(name) {
    console.log(`Hello ${name}!`);
}
let name = "Garrett";
greeting(name);

function functionWithArgs(a, b) {
    console.log(a - b);
}
functionWithArgs(10, 5);

function myFunctionWithArgs(a, b) {
    console.log(a + b);
}
myFunctionWithArgs(10, 5);

//? Scope //

//? Global Scope
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//? Local Scope
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// console.log(myVar);// myVar is now outside the scope of the function

var outerWear = "T-Shirt";

function myOutFit() { // Local scope takes precedents over global scope
    var outerWear = "sweater";
    
    return outerWear;
}

console.log(myOutFit());
console.log(outerWear);

//? Return value from function with Return keyword //

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(15));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

//? Undefined value returned
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

console.log(addFive());

//? Assignment with a returned value

var changed = 0;
console.log(changed);

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

//? Stand in Line //

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//? Booleans //

function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans());

//? If Statements //

function ourTrueOrFalse() {
    if (isItTrue) {
        return "Yes, its true";
    }
    return "No, its false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

//? Equality Operators //

function testEqual(val) {
    if (val == 12) {
        //return "Equal";
        console.log("Equal")
    } else
    //return "Not equal";
    console.log("Not equal")
}
//console.log(testEqual(10));
testEqual(12);

//? Strict Equality Operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("7"));
console.log(testStrict(7));

//? Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Inequality operator says Not Equal";
    }
    return "Inequality operator says Equal";
}
console.log(testNotEqual(10))

//? Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

//? Greater Than
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));

//? Less Than
function testLessOrEqual(val) {
    if (val <= 12) {
        return "12 or less";
    }
    if (val <= 20) {
        return "24 or less";
    }
    return "More than 24";
}
console.log(testLessOrEqual(16));

//? And Or Operators
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(30));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(17));

//? Else Statements //

function testElse(val) {
    var result = "";
    if (val < 5) {
        result = "Bigger than 5";
    } else {
        result = "Smaller than or equal to 5";
    }
    return result;
}
console.log(testElse(6));

//? Else if
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(8));

function testChainedIfElse(val) {
    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
    } else if (val < 15) {
        return "Medium";
    } else if (val < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testChainedIfElse(21));

//? --- Golf Code --- //

var names = ["Hole-In-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Very Not Good!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 8));

//? Switch Statements //

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(2));

//? Default Answer
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff(2));

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(8));

//? Returning Booleans Values//

function isLess(a, b) {
    return a < b;
    // if (a < b) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(isLess(20, 15));

//? Return Early Pattern For Functions //

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(4, 2));

//? Counting Cards //

var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
        

}
cc(2); cc("K"); cc(10); cc('K'); cc('A');
console.log(cc(4));

//? Build Javascript Objects //

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Tex",
    "legs": 3,
    "tails": 2,
    "friends": []
};

//? Object Properties - Dot Notation //

var testObj = {
    "hat": "ballcap", // Quotes around object property?
    shirt: "jersey",
    shoes: "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

//? Bracket notation (is required when accessing object property that has a space in the name)
var testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj1["an entree"];
var drinkValue = testObj1['the drink'];

console.log(entreeValue);
console.log(drinkValue);

//? Bracket notation using variables
var testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 19;
var player = testObj2[playerNumber]
console.log(player);

//? Update object properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happy Camper"
console.log(ourDog.name);

var myDog = {
    "name": "Tex",
    "legs": 4,
    "tails": 1,
    "friends": ["DevCodeCamp Campers"]
};
myDog.name = "Happy Coder"
console.log(myDog.name);

//? Add object property
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "Bow wow"
console.log(ourDog.bark);

var myDog = {
    "name": "Tex",
    "legs": 4,
    "tails": 1,
    "friends": ["DevCodeCamp Campers"]
};
myDog['bark'] = "Woof"
console.log(myDog['bark']);

//? Delete property
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "Bow wow"
};
delete ourDog.bark;
console.log(ourDog);

//? Objects for lookups
function phoneticLookup(val) {

    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("echo"));

//? Testing Object For Properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("pet"));

//? Manipulating Complex Objects
var myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: [
            "CD",
            "8T",
            "LP"
        ],
        gold: true
    },
    {
        artist: "Beau Carnes",
        title: "Cereal Man",
        release_year: 2003,
        formats: [
            "YouTube Video",
        ]
    }
];
console.log(myMusic[0].artist)

//? Nested Objects
var myStorage = {
    car: {
        inside: {
            gloveBox: "maps",
            passengerSeat: "crumbs"
        },
        outside: {
            trunk: "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside.gloveBox;
console.log(gloveBoxContents);

// Record Collection - Coding Challenge //

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

//? WHILE LOOPS //

var myArray1 = [];

var i = 0
while (i < 5) {
    myArray1.push(i);
    i++;
}

console.log(myArray1);

//? FOR LOOPS //

var ourArray1 = [];

for (var i = 0; i < 5; i++) {
    ourArray1.push(i);
}

var myArray2 = [];

for (var i = 1; i < 6; i++){
    myArray2.push(i);
}
console.log(myArray2);

//? Odd numbers with a For Loop
var ourArray2 = [];

for (var i = 0; i < 10; i += 2){
    ourArray2.push(i);
}
console.log(ourArray2);

var myArray3 = [];

for (var i = 1; i < 10; i += 2){
    myArray3.push(i);
}
console.log(myArray3);

//? Count backwards with For Loops

var ourArray3 = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray3.push(i);
}
console.log(ourArray3);

var myArray4 = [];

for (var i = 10; i > 0; i--){
    myArray4.push(i);
}
console.log(myArray4);

//? Iterate through an Array with a For Loop //

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
}
console.log(myTotal);

//? Nested For Loops //

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product); // 5040

//? *** DO-WHILE LOOPS *** //

var myArray5 = []; // While loops first check the condition before it runs any code with the loop
var i = 10;        // Do-While loops always runs the code at least one time before it checks the condition

//! WHILE LOOP //
// while (i < 5) {
//     myArray5.push(i);
//     i++;
// }

//! DO-WHILE LOOP //
 do {
    myArray5.push(i); // Code to execute
    i++;
    } while (i < 5) // Condition

console.log(i, myArray5);

//? Profile Lookup Coding Challenge //

var contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"]
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unkown",
        likes: ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No such contact";
};

var data = lookUpProfile("Sherlock", "hello");

console.log(data);

//? Random Fractions and Whole Numbers //

function randomFraction() { 

    return Math.random();// Math.random will generate a random decimal number, cannot be 1 but can be 0
};
console.log(randomFraction());

var randomNumberBetween0And19 = Math.floor(Math.random() * 20); 

function randomWholeNum() {


    return Math.floor(Math.random() * 10);// Math.floor will round DOWN to nearest whole number
}
console.log(randomWholeNum());