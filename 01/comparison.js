// console.log(2 > 1); if conversion do it between same datatype, typescript doesn't allow us to do this
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); true auto conversion of 2 into number
// console.log("02" > 1); true js has inconsistency while conversion sometimes it convert null to nan and sometimes to 0

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true unpredictable result as comparisons convert null to a number treating it as 0, 

console.log(undefined == 0); // false in all case
console.log(undefined > 0); 
console.log(undefined < 0); 

// ===  strict check not only checks the value but also its datatype
console.log("2" == 2); // true in this case
console.log("2" === 2);

// premitive and non premitive datatypes classified on the basis of how they are stored in memory and how they are accessed
// premitive has 7 categories they are call by value means when they are called , their refernce of memory where original data is are not given but
// a copy of them is given and all the changes you do is done in acopy
//string,number,boolean,null,undefined,symbol(to make a value unique, number is wrapped in a symbol), bigint(to handle big values scientific values)
// refrence type ya non premitive , a refernce of them in memory is directly allocated to you arrays,objects,functions
//js is either statically or dynamically typed lang so js is dynamically tyoes because we dont need to define type of variables before initialising thme
// but in typecript you have to is doesn't have special type for float values

const outside_temperature = null // its dataype is object
let usermail;
// boolean datatype is boolean number is number sting is string and symbol is symbol
const id = symbol('123')
const anotherid = symbol('123')
console.log(id === anotherid) // false
// const big_number = 4343785375487689576895n // it become bigint after using n at end its datatype is undefined

const heros = ["cap", "falcon", "superman"] 
//objects in key value pairs u can also store it in any var like my obj or not it can contain any datatype like string, array, number, even another object


let myobj = {
    name: "hello",
    age: 22,
}

// how to know datatype of any value console.log(typeof), datatype of function s function  but called as "object function"
// return type of non premitive is object 