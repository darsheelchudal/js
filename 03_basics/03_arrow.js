const user = {
    username:"Darsheel",
    price: 999,
    welcomeMessage:function(){
        // console.log(`${this.username} Welcome to website`); //this keyword means current context i.e inside the braces
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.username ="sam";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username = "darsheel";
//     console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "darsheel";
    //  console.log(this);

}
chai();


//Arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2,3));

// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2)=>(
    {username: "Darsheel"}
    );

console.log(addTwo(2,3));


const myArray = [2,5,3,7,8];

myArray.forEach



