const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234 

let passcode = prompt('Please enter pincode:')

if(passcode == 1234){
    console.log("Success")
}
else if(passcode = String){
    console.log("failure")
}
else if ( passcode > 1234 || passcode < 1234){
    console.log("Failure")
}

