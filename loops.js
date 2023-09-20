/* 
    ? Loops
    * allows us to execute a block of code repeatedly until an exit condition has been met
*/

/* 
    ? Traditional For Loop

    ? Syntax
    * for (start; stop; step) {
        code block to execute
    }

    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - ("ex: longWord") value we can iterate/loop over
*/

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}

// ? Infinite Loop - a loop without a stop condition
// for (let i = 0;; i++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticecpialidocious"
console.log(longWordEN.length)

for (let index = 0; index < longWordEN.length; index = index + 1) {
    console.log(`Index: ${index} Letter: ${longWordEN[index]}`)
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an iterable against a condition
    * do not require and index number
    * do not require a stop statement
*/

let longWordDE = "kraftfahrzeughaftplichtversicherung"

for (i in longWordEN) {
    console.log(`index: ${i} Letter: ${longWordEN[i]}`)
}

/* 
    ? For-Of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    ? for-of & for-in difference
    * for in allows to loop over items that are not an array
    * for of works on indexed items only
*/

console.log("--------------------------------------------------")

let sentence = "The only thing looping here is my brain"

let count = 0
for (ltr of sentence) {
    if (ltr === "a" || ltr === "e" || ltr === "i" || ltr === "o" || ltr === "u") {
        console.log(ltr)
        count += 1
    }
}
console.log(`Total amount of vowels is: ${count}`)

// ! reversing a string with loops
let name = "Brandon"

for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i])
}

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true

    ? Syntax
    while(true) {
        do this until false
    }
*/

let loopCount = 0

while (loopCount <= 100) {
    console.log(loopCount)
    loopCount += 1
}

/* 
    ? Do While Loop
    * Executes code in the do section while a condition remains true
*/

let doCount = 0

do {
    console.log(doCount)
    doCount += 1
} while (doCount <= 100)

// function potatoPoem

console.log("--------------------------------------------")

let potatoCount = 0

while (potatoCount < 15) {
    potatoCount += 1
    // console.log(potatoCount)
    if (potatoCount == 8) {
        console.log("More!")
    } else if (potatoCount == 4) {
        console.log("4!")
    } else if (potatoCount == 10) {
        console.log("Okay that's enough potatoes...")
    } else if (potatoCount == 15) {
        console.log("I said that's enough!")
    } else console.log(potatoCount + " potato")
}