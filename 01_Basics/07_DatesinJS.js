// Dates 

let myDate = new Date() 
console.log(myDate.toString()); 
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleString()); 
console.log(typeof myDate); 
 
let myCreated = new Date(2023,0,23,5,3) 
console.log(myCreated.toLocaleString()); 

let myCreatedDate = new Date("01-14-2023")
console.log(myCreated); 

let myTimeStamp = (Date.now()/1000)

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getTime());

  
