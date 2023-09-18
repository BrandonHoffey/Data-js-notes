console.log("Hello World!");

// ? Javascript
    // founded in 1996 by Brandon Eich
    // client-side language (runs in the browser)
    // interpreted language, not compiled
    // first-class-function -- functions are treated like any other variable
    // functional language
    // object-oriented language
    // prototype-based
    // weakly typed (dynamic)
    // imperative
    // multi-paradigm language
    // ECMAScripts -- organization setting language standards

// ? comments
    // blocks of code that are not being interpreted
    // denoted by // for single-line
    // denoted by /* */ for multi-line
    // comments are read but not executed
    // as learners, it helps us with taking notes
    // as devs, it documents our code making it more maintainable

// ? Console object
    // gives us access to the browser or node's debugging console
    // allows dev to view output from their program

2 + 2; // runs but doesn't show in the console
console.log(2 + 2); // shows in the console

// ? JS Data Types:
    // Primitive
    // String
    // number
    // boolean
    // null
    // undefined
    // Not a Number (NaN)
    // Reference
        // Array
        // object
        // Map
        // Set

/* 
    ? Strings
    * primitive data type representing characters
    * enclosed in '', "", or ``

    Examples:
*/

console.log("This is a text");
console.log("This is also a text");
console.log('This is a text using string interpolation backticks');
//  String representation of a number
console.log("2023");

// We can concatenate different strings (add them together)
console.log("I'm Brandon," + " and I'm 29 years old");

// Strings are indexed starting from zero (0)
//  Index value goes between [ ]
// ! Strings are immutable (cannot be changed)
console.log("Porschedoppelkupplungsgetriebe"[5]);

/* 
    ? String Interpolation (' ')
    * a process of including space for an expression
    *Syntax:
        'string ${ expression } string'
*/

console.log(`My name is Brandon and I am ${30 - 1} years old.`);
console.log("My name is Brandon and I am " + (30 - 1) + " years old.");

/* 
    ? String Methods
    .length
    slice()
    .toUpperCase()
    .toLowerCase()
*/

console.log("Kraftfahrzeughapsflichverersirscherung".length);

console.log("Hoffey".toUpperCase());
console.log("Brandon Hoffey".slice(8, 14));

// Multi-line strings - using escape character  "\n"
console.log("Brandon Hoffey, \n 123 Main St \n 312 555 0808");

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1998");

/* 
    ? Numbers
    any integer or decimal point
*/

console.log(25);
console.log(3.14);

/* 
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * *Examples of falsey values:
        *0
        *undefined
        *null
        *NaN
        *""
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolean() interface retursn whether value is truthy or falsey
console.log(Boolean(1)); // returned true
console.log(Boolean(0)); // returned false
console.log(Boolean(" ")); // returned false
console.log(Boolean(null)); // returned false
console.log(Boolean(undefined)); // returned false

/* 
    ? Type Coercion
    * JS is a weakly typed programming language (duck typed)
    * doesn't require data type definition
    * comparison operator (==) performs type coercion before resolving expression
        * will check values but NOT data types
    * we can use strict equality (===) to avoid type coercion
        * will check values AND data types
*/

/* 
    ? Not a Number (NaN)
    * triggered when performing operations with numbers and non-numbers
    * used when performing mathmatical computations that don't make sense
    ! know what type coercion is but DO NOT USE IT!
*/

console.log(undefined + 5); // returns NaN

/* 
    ? Null and Undefined
    * null - placeholder for something
    * undefinec - lack of existence
    * 0 - ran out of stuff?
*/

/* 
    ? Operators
    * addition (+)
    * subtraction (-)
    * multiply (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * modula (%)
    * assignment (=) <-- single
    * comparison (==) <-- double
    * strict comparison (===) <-- triple
    * is not equal to or is strictly not equal to (!= OR !==)
*/

// Dot or Member Access Operator

console.log("Brandon Hoffey".length);
console.log("brandon hoffey".toUpperCase());

// Modula --> remainder of long division

console.log(10 / 2);
console.log(10 % 2);

// Assignment

let name = "Brandon"; // assigns value of "brandon" (str) to the variable name
console.log(name);

// comparison
console.log(name == "Brandon");

// strict comparison
console.log(525 === "525");

// Is not equal to --> flips values

console.log(2 != 2); // returns false (even though it is true)
console.log(!true); // returns false (even though it is true)

// Real life example

