// Primitive datatype => they allocate as copy

// 7 types : String, number, null, boolean, undefined, symbol, bigint

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// has uique identity for each

const bigNum = 5844626

// Reference (or) non-primitive ---allocates as reference

// Arrays, Object, funtions

const heros = ["shaktiman", "Naagraj", "doga"]

let obj = {
    name: 'Hitesh',
    age : 22
}

const myFunction = function() {
    console.log("Hello world !");
}

console.log(typeof myFunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// memory - Stack (primitive), heap (non - primitive)

let myYoutubename = "hiteshchowdaryddotcom"
let anothername = myYoutubename
myYoutubename = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    name : "Lahari",
    Email : "Lahari@Gmail.com",
    age : 22 
}

let usertwo = userOne
userOne.Email= "J@gmail.com"

console.log(usertwo);






