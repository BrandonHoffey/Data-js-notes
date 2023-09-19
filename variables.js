/* 
    ? variables
    * containers that store data in memory
    * decloration 
        * allows memory space to be reserved by using an identifier
        * starts with let, var, or const keyword
        * cannot start with a number or character other than $ or _
        * if no value is assigned, it's undefined
    * Initilization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable decleration
let firstName;
console.log(firstName);

// Variables decleration and variable initilization
let lastName = "Hoffey";
console.log(lastName);

// Reassignment
firstName = "Brandon";
console.log(firstName);

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// ? Var is hoisted whereas let is not
// ! DO NOT USE !
var age = 29;
console.log(age);

// ? Const variable CANNOT have a reassigned value
const ssn = "123-45-6789";
console.log(ssn);

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstBornBlondeHairedName)
    * be specific (ex: item instead of i)
    * utilize camelCase (most popolar in JS)
    * *snake_case
    * PascalCase
    * skewer-case
    * nocase
    * SCREAMING_CASE (used for any variables etc.)
*/

let houseNumber = "6859";

let street = "Lionshead pkwy";

let city = "Highlands Ranch";

let state = "co";

let zip = "80124";

let addressStamp = `${firstName} ${lastName} ${houseNumber} ${street} ${city} ${state.toUpperCase()} ${zip}`;
console.log(addressStamp);
