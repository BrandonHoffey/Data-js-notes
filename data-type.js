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










