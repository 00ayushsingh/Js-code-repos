
const score = 400
// console.log(score); output is 400

const balance = new Number(100)
// console.log(balance); output is [number: 100] with obj

// console.log(balance.toString().length); // converts to string and finds length
// console.log(balance.toFixed(2)); 100.00 used in e commerce website when you want not too precised

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); - 124// returns a string, for 23.8966 precision(3) returns 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // t

// Maths 

// console.log(Math);
// console.log(Math.abs(-4)); // output is 4
// console.log(Math.round(4.6)); // 4
// console.log(Math.ceil(4.2)); // 5 , if just greater than 4 it will return 5
// console.log(Math.floor(4.9)); // 4 lowest number here
// console.log(Math.min(4, 3, 6, 8)); // it also has sqrt, power calculate function
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //always value between 0 to 1
console.log((Math.random()*10) + 1); //to obtain value between 1 to 10 and +1 is done in case value is 0.004
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// above way and formula is used to find random numbers between two constraints that is between a max and min range