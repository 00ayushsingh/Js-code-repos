const heroes = ["thor", "iron", "cap"]
const dc_heroes = ["flash", "green", "batman"]

//heroes.push(dc_heroes)
//console.log(heroes); // [ 'thor', 'iron', 'cap', [ 'flash', 'green', 'batman' ] ] array in an array, array can take any data even an array itself
//console.log(heroes[3][1]) // to access ele within a ele here green

const all_arr = heroes.concat(dc_heroes)
//console.log(all_arr); //  [ 'thor', 'iron', 'cap', 'flash', 'green', 'batman' ]

const all_new_heroes  = [...heroes, ...dc_heroes]// spread operator it has no limitation in no.s of array that can be added unlike concat operator

//console.log(all_new_heroes); // [ 'thor', 'iron', 'cap', 'flash', 'green', 'batman' ] spreads the value of all arrays
const another_array = [1,2,3, [4,5,6],7, [6,7, [4,5]]]
const real_another_array = another_array.flat(3)
console.log(real_another_array); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,] 

console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh")) // convert it into array [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"})) //interesting case empty array [] array ko samajh nahi aya ki kya kare isse object of array me convert 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //returns a new set of array from given element 

// to study about isarray, from and of
