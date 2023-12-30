const secureModule = require("../secure/secure.js");
const userModule = require("../user/user.js");

const email = "suresh@gmail.com";
const password = "JerryPatel";

//Check User Email And Password
var result = secureModule.checkEmailAndPassword(email, password);          //checkEmailAndPassword(email, password);
//If Email And Password is correct
if (result) {
    //Get User Function

    const user = userModule.getUser();  // getUser();
    //Get Token Function
    const token = secureModule.getToken(user.email, user.phone);  // getToken(user.email, user.phone);
    console.log("=USER=>", user);
    console.log("=TOKEN=>", token);
} else {
    //When Email And Password Is Wrong
    console.log("Please provide valid Email and Password");
}




