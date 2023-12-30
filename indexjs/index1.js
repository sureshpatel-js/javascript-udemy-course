// var userArray = [];
// var userObjOne = {
//     name: "suresh",
//     email: "suresh@gamil.com"
// };
// var userObjTwo = {
//     name: "Tome",
//     email: "tome@gamil.com"
// };
// userArray.push(userObjOne,userObjTwo);
// console.log(userArray);

var userArray = [];
function User(pname, pemail) {
    this.name = pname;
    this.email = pemail;
}
var userOne = new User("suresh", "suresh@gmail.com");
var userTwo = new User("tom", "tom@gmail.com");
userArray.push(userOne,userTwo);
console.log(userArray);