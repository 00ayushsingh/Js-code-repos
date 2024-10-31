function one(){
    const username = "atul"
    //console.log("hgh") if no

    function two(){
        const website = "google"
        console.log(username);
    }
    //console.log(website); //reference errpr website not defined
    two() //it is called an atul is printed if two inner fun is not called then by only calling one func two func will not execute
}
one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " google"
        console.log(username + website);
    }
    //console.log(website); cant be accesed reference error
}

//console.log(username) cant be accesed reference error
// output will be hitesh google only

console.log(addone(5))//can be written before declaration can give correct value
function addone(num){
    return num + 1
}



//addtwo(5) cannot access 'addtwo' before initilisation can'tbe wriiten can't be accessed because earlier there was only declaration here we are holding it in a variable
const addtwo = function(num){ // variables are very powerful in js can hold funcs also also called expression
   return num + 2
}
addtwo(5)