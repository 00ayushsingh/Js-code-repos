const myArr = [0, 1, 2, 3, 4, "hello"] //in js array copy option creates shallow copy changes in copy of a array means changes in original array
// in deep copy properties do not share the same refrences
const heroes = ["batman", "superheroes"]
const myarr2 = new Array(1,2,3,4)
// array methids

myArr.push(6)
//console.log(myArr)
myArr.pop() //last value remove

myarr2.unshift(0) //loads specified ele to start of array by shifting all eles to right
myarr2.shift() // remove the value put through shift

//console.log(myArr.includes(9)); //false
//console.log(myArr.indexOf(9)); // -1 as 9 doesn't exists
//const newArr = myArr.join()
//console.log(myArr); //[ 0, 1, 2, 3, 4, 'hello' ]
//console.log(newArr); // 0,1,2,3,4,hello    type is changed to string even if value not

// slice and splice

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 'hello' ] orignal array
const myn1 = myArr.slice(1, 3)
console.log(myn1) // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 'hello' ] orignal array after slice

const myn2 = myArr.splice(1, 3) //
console.log(myn2) // [ 1, 2, 3 ] includes last range but not only this 
console.log("C", myArr); //orignal array after splice C [ 0, 4, 'hello' ], orignal array gets manipulated splice portion is totally cuted off from array