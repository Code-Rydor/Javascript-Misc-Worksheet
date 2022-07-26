
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

// Push adds to array
var pushArray = ["Landin", "Jay", 23];
pushArray.push(["Garrett", 23]);

console.log(pushArray)

// Pop removes last element in array
myArray = [1, 2, 3];
console.log(myArray);
var removeFromArray = myArray.pop()
console.log(myArray)
console.log(removeFromArray)

// Shift removes first element in array
myArray = ["Garrett", 2, 3, "Landin"];
console.log(myArray);
removeFromArray = myArray.shift();
console.log(myArray);
console.log(removeFromArray);

//Unshift adds element to beginning of array
myArray = ["Garrett", "Bryce", "Landin"];
console.log(myArray);
addToBeginningOfArray = myArray.unshift("My wife loves");
console.log(myArray);

//Shopping List (Nested Arrays)
var myList = [["Cereal, 2"], ["Milk", 1], ["Juice", 3], ["Bacon, 10"], ["Eggs", 12]];

// Functions //

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

// Scope //

// Global Scope
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

// Local Scope
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

// Return value from function with Return keyword //

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(15));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Undefined value returned
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

console.log(addFive());

//Assignment with a returned value

var changed = 0;
console.log(changed);

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

// Stand in Line //

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Booleans //

function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans());

// If Statements //

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

// Equality Operators //

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

// Strict Equality Operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("7"));
console.log(testStrict(7));

// Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Inequality operator says Not Equal";
    }
    return "Inequality operator says Equal";
}
console.log(testNotEqual(10))

// Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

// Greater Than
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

// Less Than
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

// And Or Operators
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

// Else Statements //

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

//Else if
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

// --- Golf Code --- //

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