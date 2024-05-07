// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id="123abc";
tinderUser.name="Darsheel";
tinderUser.loggedIn = true;
// console.log(tinderUser);


const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Darsheel",
            lastname:"Chudal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2};

// const obj3= Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2};

console.log(obj3);


const users = [
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[0].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));