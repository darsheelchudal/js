//Oject literals
const mySymbol = Symbol("key1");
const Juser = {
    name:"Hitesh",
    age:20,
    [mySymbol]:"key1",
    location:"kathmandu",
    email:"darsheelchudal11@gmail.com",
    isLoggedIn:false
};

// console.log(Juser.name);
// console.log(Juser["email"]);
// console.log(typeof Juser[mySymbol]);

Juser.email = "chatgpt@gmail.com";
// Object.freeze(Juser);
Juser.email = "microsoft@gmail.com";
// console.log(Juser.email);



Juser.greeting = function(){
    console.log("Hello js user");
}

console.log(Juser.greeting());