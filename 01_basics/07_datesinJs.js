//Dates
 let myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
// //  console.log(myDate.toISOString());
// //  console.log(myDate.toJSON());

 console.log(typeof myDate);

//  let myCreatedDate = new Date(2023, 11, 23);
// let myCreatedDate = new Date(2023, 11, 23,5,3,34);
// let myCreatedDate = new Date("2023-01-14");

let myCreatedDate = new Date("01-14-2023");
//  console.log(myCreatedDate);
//  console.log(myCreatedDate.toDateString());
//  console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //milisecond from 1970 to now
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000)); //millisecond to second

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`The year is ${newDate.getFullYear()} and the month is ${newDate.getMonth() + 1} , similarly the day is ${newDate.getDay()}`);


newDate.toLocaleString('default',{
 weekday:"long"


});



