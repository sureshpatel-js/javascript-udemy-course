//==>AND
// var result = ture && true;
// console.log(result);

// var x = 5;
// var y = 1;

// var result = x == 5 && y == 10;
// console.log(result);

// var userObj = {
//     user_name: "suresh",
//     email: "suresh@gmail.com",
//     password: "tom000"
// }

// var email = "sures@gmail.com";
// var pass = "tom000";

// var result = userObj.email === email && userObj.password === pass;

// if (result) {
//     console.log("You are logged in");
// } else {
//     console.log("Invalid email or password");
// }

//==>OR

// var result = false || false;
// console.log(result);

//NOT

// var x = true;
// console.log(x);
// x = !x;
// console.log(false);

//==>TASK
var userObj = {
    user_name: "suresh",
    email: "suresh@gmail.com",
    password: "tom000"
}

var loginButtonEl = document.getElementById("loginButton");
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");

loginButtonEl.addEventListener("click", function () {
    var email = emailEl.value;
    var pass = passwordEl.value;
    var result = userObj.email === email && userObj.password === pass;
    if (result) {
        //console.log("You are logged in");
        alert("You are logged in")
    } else {
        //console.log("Invalid email or password");
        alert("Invalid email or password");
    }
});

