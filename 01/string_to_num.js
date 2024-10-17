let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber); // it will become string


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3); we can do all this 

let str1 = "hello"
let str2 = "ayush"

let str3 = str1 + str2 // output will be hello ayush

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32
console.log(true); //true
console.log(+true); //1
console.log(+""); //0


let gamecounter = 100
gamecounter++;
console.log(gamecounter);//101, ++gamecounter will also give 101 for now but it is very different
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


