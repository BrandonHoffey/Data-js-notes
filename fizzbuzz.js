/* 
    ! FizzBuzz
    * count from 0 to a 100
    * if a number is divisble by 3, print Fizz
    * if a number is divisible by 5, print Buzz
    * if a number is divisble by 3 & 5, print FizzBuzz
    * if it's neither, print the number
    ! Spicey Mode
    * wrap your FizzBuzz in a fx which will take two params start and stop
    * it will execute your FizzBuzz based on that start and stop value
*/



function fizzBuzz(start, stop) {
    for (let i = start; i <= stop; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
}
}

fizzBuzz(18, 500)