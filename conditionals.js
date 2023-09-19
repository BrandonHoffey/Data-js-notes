/* 
    ? Conditionals and Logic Gates
    * conditional statement checks if an expression is truthy
    * the expression must always resolve to true
    * if truthy, a code within a statement executes
    * if it is falsey, nothing happens unless we specify otherwise

    ? Expression vs Statement
    * Expression
        * unprocessed value grouped using the ( )
        * evaluated to be truthy
        * can be empty
        TODO: Expressions evaluate
    * Statements
        * keyword
        * expression
        * and code block
        TODO: Statements evaluate and execute code block when invoked
        ! Conditional is an example of a statement
*/

/* 
    ? If Statement
    * checks if something is true and executes the code
*/

let lightswitch = "on";
if (lightswitch === "on") {
    console.log("The Light is on");
}

/* 
    ? Else If Statement
    * allows us to add additional condition(s) if prior one has not been satisfied
*/

let temp = 72;

if (temp >= 80) {
    console.log("It's very hot out");
} else if (temp >= 70) {
    console.log("A very nice day");
}

/* 
    ? Else Statement
    * if all else fails, execute this code
*/

if (temp >= 100) {
    console.log("Inferno");
} else {
    console.log("It's some other temperature");
}

/* 
    ? SYNTAX:

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I go to the movies OR eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner and no movies = true)
        * (no dinner and no movies = false)
    * AND Operator ( && )
        * only true if both conditions are true
        * ex: I will be happy if I go to the movies and have dinner
        * (dinner and movies = true)
        * (dinner and no movies = false)
        * (no dinner and movies = false)
        * (no dinner and no movies = false)
    * NOT Operator ( ! or in expression by =/ )
        * flips the logical expression
*/

// ? NOT Example
lightswitch = 0

if (!lightswitch) {
    console.log("The light switch is off");
}

lightswitch = "off"

if (lightswitch /= "on") {
    console.log("This light switch is off");
}

// ? AND OR Example

let sensor = "active";
let alarm = false;

// if (censor == "active" || alarm) {
    // console.log("The alarm may be on");
// } else if (censor == "inactive" && alarm) {
    // console.log("The alarm is likely broken");
// } else if (censor == "inactive" && !alarm) {
    // console.log("The alarm is likely off");
// }

let age = 20

if (age < 16) {
    console.log("You cannot drive");
} else if (age >= 16 && age <= 18) {
    console.log("You can drive, but you cannot drink");
} else if (age >= 18 && age <= 20) {
    console.log("You can vote, but not drink");
} else if (age >= 21) {
    console.log("You may drink now");
}  else {
    console.log("That's not a number");
}

/* 
    ! Important Thought
    * if you want your condition to display any possibel match, create seperate IF statements
    * if you want your condition to display ONE EXACT match, chain your conditional statments
*/