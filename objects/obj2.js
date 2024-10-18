// obj to be declared with the help of constructor and singelton
//const tinderuser = new Object()//singelton
const tinderuser = {} // non singelton
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
const regularuser = {
    email: "some@gamil.com",
    fullname: {
      userfullname: {
        firstname: "hitesh",
        lastname: "singh"
      }
    }
    
}

console.log(regularuser.fullname); // full nesting will print { userfullname: { firstname: 'hitesh', lastname: 'singh' } }
console.log(regularuser.fullname.userfullname.firstname); //only hitesh the firstname will print 
//optional chaining consider the fullname doesn't exist so we put a question mark fullname? protection deta hai jab api
//se response ata hai or ye value hai to access it otherwise if else condition, complex thing

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}