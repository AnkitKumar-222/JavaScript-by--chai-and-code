// primitive

// 7 types : String , Number , Boolearn, null , underfined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// Reference (no primitive)
// array, objects , functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof   myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudhardotcoml"

let myYoutubename = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userone

useerTwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(userTwo.email);
 
