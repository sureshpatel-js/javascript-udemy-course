


const email = "suresh@gmail.com";
const password = "JerryPatel";

//Check User Email And Password
function checkEmailAndPassword(pEmail, pPassword) {
    if (pEmail === "suresh@gmail.com" && pPassword === "JerryPatel") {
        return true;
    } else {
        return false;
    }
}

var result = checkEmailAndPassword(email, password);

//If Email And Password is correct
if (result) {
    //Get User Function
    function getUser() {
        const userObj = {
            email: "suresh@gmail.com",
            name: "suresh",
            age: 27,
            phone: 1234567890,
            country: "INDIA"
        }
        return userObj;
    }
    const user = getUser();
    //Get Token Function
    function getToken(pEmail, pPhone) {
        return pEmail + pPhone;
    }
    const token = getToken(user.email, user.phone);

    console.log("=USER=>", user);
    console.log("=TOKEN=>", token);

} else {
    //When Email And Password Is Wrong
    console.log("Please provide valid Email and Password");
}




