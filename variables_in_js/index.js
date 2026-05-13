//variables

// var
// scope of var is global 

var age = 25
var num = 1 
var name = "ihtesham"
// we can re initialize age if using var
age = 22
// we can even re declare it when using var 
var age = 23

console.log(`my name is ${name} and my age is ${age} + ${num}`)

// let is local scoped 

let age2 = 25
let num2 = 1
let name2 = "ihtehsam" 

// we can re initialize age if using let
age2 = 24

// we cannot re declare age if using let thats why let is better
// let age2 = 24

// naming convention : pascal case : FirstName used for classes, Camel case : firstName used for majorly variables and functions  snake snakecase: first_name


console.log(`my name is ${name2} and my age is ${age2} + ${num2}`)

// ---------------------------------------------------------------------------

// if(name == "ihtesham"){
//     var naam = "ihtehsam yoo"
//     console.log(naam)
// }

// console.log(naam)


if(name == "ihtesham"){
    let naam = "ihtehsam yoo"
    console.log(naam)
}

console.log(naam)

// similarly like let  const is also local scoped but cant be redeclared and reassigned

// local scope means block scope lke this {} this is a block 