let a = 300;
 if(true){
    let a = 10;
    const b = 20;
    // console.log(`Inner A ${a}`);
 }
//  console.log(a);
//  console.log(b);


//Nested scope
function one(){
    const username = "darsheel";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two();
}

one();


if(true)

    {
           const username = "darsheel";
           if(username==="darsheel"){
            const website = " youtube";
            // console.log(username + website);
           }
        //    console.log(website);
    }
    // console.log(username);  


//++++++++++++++++++++++++==interesting ++++++++++++++++++++++++++++++++
function addone(num){
    return num + 1;
}
console.log(addone(5));

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));
