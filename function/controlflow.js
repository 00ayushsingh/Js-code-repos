const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard){ //both condition to should be true
    //console.log("allow to buy courses");
}
if (loggedinfromemail || loggedinfromgoogle){
    //console.log("user logged in")
}
//switch(key){//key is the value you want to check,key is the lock for all locks like case value
    //case value:
       // break;
    //default:
      //  break;
//}
const month = 3

switch (month) {
    case 1: //checking value is equal to 1 or not
       console.log("jan")
       break;
    case 2: 
       console.log("feb")
       break;
    case 3: 
       console.log("march")
       break; //if not for break every condition will print after matched condition except default`7
    case 4: 
       console.log("april")
       break;
    default:
        console.log("default case")
        break;
}

const useremail  = "hitesh@gmail.com"
if (useremail){
    console.log("got email"); //true condition this will print
} else {
    console.log("no user email");
}

const useremails = []
if (useremails){
    console.log("got email"); //true condition this will print
} else {
    console.log("no user email");
}

//falsy values - false, 0, -0, "", BigInt 0n,null,undefined,NaN except all these all are true values likw even "0", 'false' 
//string ke andar kuch bhi value hai to vo true value hai,[empty array],{empty obj}, function(empty func){}," "

if (useremail.length === 0){
    console.log("array is empty");
    //yahi print hoga
}
const emptyobj = {}
if (Object.keys(emptyobj).length === 0){ //object.keys will return an array ok keys which can be checked by previous method
    console.log("object is empty")//yahi print hoga
}
//false == 0 true
//false == '' true
//0 == '' true

//nullish coalescing operator(??): null undefined ke liye bna hai
let val1;
val1 = 5 ?? 10
console.log(val1);//5 is output