//arrays

const myArr = [0,1,2,3,4,5];
const myHeroes = ["Shaktiman","Naagraj"];   
//0,1,2,3 are elements
//contains mix of different data types
const myArr2 = new Array(1,2,3,4);
// console.log(myArr[2]);

//Array Methods

myHeroes.push("Power Rangers");
// myArr.push(6);
// myArr.push(7);
// myArr.pop(); //removes last element from array; no arguments

// myArr.unshift(9); //inserts element in first element of array 
// myArr.shift(); //removes first element from array ; no arguments
// console.log(myArr)
// console.log(myHeroes);


// console.log(myArr.includes(1));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// // console.log(typeof myArr);

// console.log(newArr); //prints in string form
// console.log(typeof newArr); //prints in string form


//slice , splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);//doesnt include last range
console.log("B ",myArr); //slice doesnt brings changes in elements in original array

const myn2 = myArr.splice(1,3);
console.log(myn2);  //includes last range 

console.log("C",myArr); //splice brings changes in elements in original array


