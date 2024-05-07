

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName();

// function addTwoNumbers(num1,num2){
//       console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    let result = num1 + num2;
    return result;

}

const result = addTwoNumbers(2,3);

// console.log(result);

function loginUserMessage(username){
    return `${username} just logged in `;
}
// console.log(loginUserMessage("Darsheel"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,600,2000));

const user = {
    username:"darsheel",
    prices:199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    username:"Shyam",
    price:399
});

const myNewArray = [200,400,600];
function returnSecondValue(getArray){
      return getArray[1];
}
console.log(returnSecondValue(myNewArray));