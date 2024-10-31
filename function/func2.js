function calculatecartprice(...num1){
 return num1
}
console.log(calculatecartprice(200, 400,6000,787))// by use of reat operator we can pass multiple arguments even if we defined one parametr only
//an array will return
const user = {
    username: "atul",
    price: 199
}
 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }
 //handleobject(user) // all good username is atul and price is 199 but problem will occur when one of key of object is changed 
 //like price became prices undefined will be there in place of price, it can be checked through if else type and availability also
 //typecscript do it automatically

 handleobject({ // directly an object can be passed
    username: "aryan",
    price: 677
 })

 const newarray = [200,600,789,89]
 function returnsecondvalue(getarray){
    return getarray[1]
 }
 console.log(returnsecondvalue(newarray));//func to extract second ele from array
 console.log(returnsecondvalue([34,67,89,89]))//like objects arrays can be passed directly

 