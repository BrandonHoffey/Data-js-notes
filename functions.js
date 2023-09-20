/* 
    ? fUNCTIONS
    * A block of reusable code. It can:
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * need to be invoked (or called) to run
    * can have non, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are two types of functions
        * function declaration
            * are hoisted
        * function expression
            * are not hoisted

    ? Syntax:

    function indentifier(parameter, parameter, ...) {
        function code block
        return statement
    }
*/

function sayHello() {
    return "Hello Sep Cohort"
}

console.log(sayHello())

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    ? SYNTAX:

    let identifier = function(params) {
        code block
        return statement
    }
*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old.`
}

console.log(nameAge("brandon", 29))

let quadForm = function(b, a, c) {
    Number.isInteger(b, a, c)
    if (a, b, c == false) {
        return`"Please us whole numbers."`
    }
    return `(-${b} +- sqrt(${b}**2 - 4*${a}*${c}))/2${a}`
}

console.log(quadForm(2, 7, 2))

/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of the fx expression family
    * do not bind to .this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Functions
    * can only have no or one parameter
    * code block must not have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello everyone`
console.log(greetEveryone())

let greetMD = drName => `Hello, Dr. ${drName}`
console.log(greetMD("Hoffey"))

/* 
    ? Block Body Arrow Functions
    * allows the use of explicit return statements
    * can have as many params as you want
*/

let concatenateStr = (str1, str2) => {
    if (typeof str1 === "string" && typeof str2 === "string") {
        return str1 + str2
    } else {
        return "You can only pass string values as arguments"
    }
}

console.log(concatenateStr("Brandon", "Hoffey"));

/* 
    ? Immediately Invoked Function Expression (IIFE)
*/

// (function() {
//     console.log("IIFE")
// })()

const triangleMath = (a, b) => {
    const result = typeof a != "number" || typeof b != "number"
        ? `Please enter a valid number`
        : Math.sqrt(a ** 2 + b ** 2)
        return result
}

console.log(triangleMath(5, 7))

let capitalize = function(someWord) {
    let firstLetter = someWord.slice(0, 1).toUpperCase();
    let restOfWord = someWord.slice(1).toLowerCase();
    let fullWord = firstLetter + restOfWord;
    return fullWord
}

console.log(capitalize("bRandON"))

let divisible = function(dividend, divisor) {
    let remainder = dividend % divisor
    console.log(remainder)
}

divisible(10, 5)