// Primitive Data types 

// 7 types :String , Number, Boolean , null ,undefined, Symbol ,bigInt , 

const score =100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123') 
const anotherId= Symbol('123') 

// console.log(id === anotherId)

const bigNumber = 3456234567890n



// Reference (Non primitive) 
 
// Array , Objects , Function     

const heros = ["Shaktiman","nagraj",'Doga'];
let myObj = {
    name:"Tushar",
    age:22,
}


const myFunction = function(){
    console.log("Hello World");

}

console.log(typeof anotherId);  


// ++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap(Non - Primitive) 

let myYoutubename = "Tusharhulle.com" 
let anothername = myYoutubename 
anothername = "chaiorcode" 

console.log(myYoutubename); 
console.log(anothername);


let userone= { 
    email : "user@google.com",
    upi: "user@ybl" 
    } 

let userTwo = userone 

userTwo.email = "tushar.hull@google.com" 

console.log(userone.email);
console.log(userTwo.email);

