// object literal
//The object literal is the simplest and most common way to create an object. 
//It involves defining the object directly using curly braces {} and specifying its properties.
// const jsuser = {} // empty object created literal way
Object.create // constructor way

const mySym = Symbol("key1")

const jsuser = {
    name: 'hari', // we can give as well as index like 0,1,2 and here name here is processes as a sring 
    age: 23,
    "full name": "ayush singh", // it can not be accessed by dot operator
    location: "jaipur" ,
    email: "hello@gmail.com" ,
    isloggedin: false,
    lastlogindays: ["monday", "tuesday"], //array in aobject
    //mySym: "key1"
    [mySym]: "mykey1" // correct way to write output =  [Symbol(key1)]: 'mykey1'
}

//can be accessed like jsuser.email, ya dot locaion but there are good ways 
// console.log(jsuser["email"]) // as of now output is same
// console.log(jsuser.email)

//console.log(jsuser["full name"])
//console.log(typeof jsuser.mySym) // string type

jsuser.email = "atl@gmail.com" // to change thevalue of email in object
//Object.freeze(jsuser)
jsuser.email = "atul@gmail.com" //freezed any changes before so not possible
//console.log(jsuser);


jsuser.greetings = function(){
    console.log("hellojs user")
}

jsuser.greetingstwo = function(){
    console.log(`hellojs user, ${this.name}`)//usinfg reference to access the name
}
// console.log(jsuser.greetings); undefined

console.log(jsuser.greetings()); //hellojs user undefined
//console.log(jsuser.greetings); //[Function (anonymous)] only function reference1

console.log(jsuser.greetingstwo()); //undefined will also come
