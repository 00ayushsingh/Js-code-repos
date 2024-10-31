//function numberss(num1, num2){
    ///console.log(num1 + num2);

//}
//numberss(3, 5) //normal result 8
//const result = numberss(3, 5)
//console.log("result", result); // undefined

function numberss(num1, num2){
    //let result = num1 + num2;
    //return result
    return num1 + num2

}

const result = numberss(3, 5)
//console.log("result", result); //result 8

function loginusermessage(username) {
    return `${username} just logged in`
}

//console.log(loginusermessage("atul"))
//console.log(loginusermessage()) undefined just logged in imp for interview

function loginusermessage(username) { // if don want to use if statenments just simply pass some default values like username="sam" so if any value is not passes sam logged in will be there otherwise if value passed sam will be overwritted
    if(username === undefined){ // username === undefined can also be written has !username
        console.log("pls enter the username");
        return // return used here because if code enters if block it only prints the if block msg and doesn't go printing just logged in
        // message whuch was happening before return - pls enter username undefined just logged in

    }
    return `${username} just logged in`
}