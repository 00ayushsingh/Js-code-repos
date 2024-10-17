let score = 33

console.log(typeof score);

let score1 = "33"
console.log(typeof score1);

let valinNumber = Number(score1)
console.log(typeof valinNumber);

let score2 = "33abc" //let valinNumber2 = Number(score2) --> console.log(typeof valinNumber2); it will also convert 33abc into number but it should not have
let valinNumber2 = Number(score2);
console.log(valinNumber2); // nan - not a number, string value will surely convert but in reality it will remain nan
//nan is special type
// in case of null type is object and it will convert to number upon converting but the value printed upon that conversion will be 0
//for undefined its also nan upon printing the value after conversion to number  and if we are converting string "hello" into number
//upon conversion it will also show type as number but upon printing it will print value nan


let isloggedin = 1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin) // true ans, if 0 then false, if empty string conversion then false if something in string then true


let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber); // it will become string