const user  = {
    username: "atul",
    price: 999,

    welcomemessage : function() {
        console.log(`${this.username} , welcome to the website`); //this here refers to current context of username  iss scope ka username hi access ho
        console.log(this)//obj ki sabhi current context value print karega
    }


}
//user.welcomemessage()
//user.username = "sam"//and here we are changing the current context value to sam
//user.welcomemessage() //sam , welcome to the website happened because we didn't hard coded the username value we are fetching the current
//context value
console.log(this) //current context is empty because we are in a node environment not within some context like user 

function one(){
    console.log(this);
}
one()//when 'this' is printed in a function in a node env give multiple values lke global value,microtask,structured clone and many performance evaluation,fetch ati hai

const chai = () => {
    let username = "hitesh"
    console.log(this.username)//undefined like copy notes
    console.log(this)//empty {}
}
chai()

//const addtwo = (num1, num2) => {
  //return num1 + num2
//}



  //const addtwo = (num1, num2) => num1 + num2 //implicit return
  const addtwo = (num1, num2) => (num1 + num2) //curly brace used then return is mandatory and is used because you can't return
  //objs without ()

  const twoo = (num1,num2) => ({username: "hitesh"})
 // console.log(twoo(3, 4)) //{ username: 'hitesh' }