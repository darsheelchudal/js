//Primitive and Non primitive data types
//BAsed on how data is stored in the memory

//Primitive (CALL BY VALUE)
//7 categories 
//String
//Number
//Bigint
//Boolean
//Null
//undefined
//Symbol

// const score = 100;
// const scoreValue  = 100.3;

// const isLoggedIn =false;
// const outside = null;
// let userEmail; //undefined  

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 388748238723322398823932n;



// //Reference Type (Non Primitive) (Call by Reference)
// //Array
// //Object
// //Functions

// //arrays
// const heroes = ["shaktiman","naagraj","doga"];
// //objects
// let myObj = 
// {
//     name:"darsheel",
//     age:21
// };

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof id);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack and Heap Memory

// Stack (Primitive) ,Heap (Non primitive)

let myName = "Darsheel"; //goes in stack

let anotherName = myName;

anotherName = "Darshan";

console.log(myName);
console.log(anotherName);

let userOne = {
    email:"darsheelchudal11@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "chudalkharudev@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);


