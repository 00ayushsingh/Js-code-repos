//array specific value
// for of loop, for objects in array[{},{},{}]
const arr = [1,2,3,4,5]

for (const num of arr) {  //const iterator of objects , not js objects
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings){
    console.log(`each char is ${greet}`) //each char is h...
}
//map maintains order and uniqueness no two key value pair but map is not iterable thats why for in loop will not print map values
const map = new Map()
map.set('IN', 'India')
map.set('fr', 'France')


for (const [key, value] of map){ // [key, value]  syntax of destructuring array that was geting printed whrn we wrote only key in its place
    console.log(key, ":-", value); //IN :- India and fr :- France
}

//obj is not iterable through for of loop, so for in loop
const myobject ={
   game1 : 'nfs',
   game2 : 'spidy'
} 
for (const key in myobject){ //(const key in object)
   console.log(`${key} is called ${myobject[key]}`);
}//game1 is called nfs game2 is called spidy

const programming = ["js","cpp","css","py"]

for (const key in programming){//for in loop is used in array to print their keys that is their index, value nahi print karta like for of loop
    //console.log(key);
    console.log(programming[key]); //this will print the values

}

//for each loop
const coding = ["js","ruby","cpp","c","python"]

//coding.forEach(function (item) {
    //console.log(item);
//} )  //callback fun doesnot have names and item is parameter which will go to all values of array and be called item

coding.forEach( (item) => {
    console.log(item); // same result as above normal function
} ) //arrow callback fun


function printme(item){
    console.log(item);
}
coding.forEach(printme) //we can also give a whole predefined function as parameter by just giving func as a refernce not 
//executing the fun thats why no paranthesis

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);  // js 0 [ 'js', 'ruby', 'cpp', 'c', 'python' ], ruby 1 [ 'js', 'ruby', 'cpp', 'c', 'python' ] etc 
}) //more parameters can be given

const mycoding = [  //array of objects and applying loop in it using for each
    {
        langname: "javascript",
        langfile: "js"
    },
    {
        langname: "java",
        langfile: "java"
    },
    {
        langname: "python",
        langfile: "py"
    }
]


mycoding.forEach( (item)=> {
    console.log(item.langname); // javascript java python
} )