//----var--- vas let

//=====> var allows to redeclare variables.
// var x = 5;
// var x = 10;
// console.log(x);
//=====>let does not allow to redeclare variables.
// let a = 10;
// let a = 20;


//*******************************************************
//=====>var is function scoped.

//var nameOne = "TomOne";
// function displayNameOne() {
//     var nameOne = "JerryOne";
//     console.log("==>18", nameOne);
// }
// displayNameOne();
// console.log("==>21", nameOne);

// if (true) {
//     var a = 5;
//     console.log("==>25", a);
// }
// console.log("==>27", a);

//=====>let is block-scoped.

// let nameTwo = "TomTwo";
// function displayNameTwo() {
//     let nameTwo = "JerryTwo";
//     console.log("==>34", nameTwo);
// }
// displayNameTwo();
// console.log("==>37", nameTwo);

// if (true) {
//     let b = 5;
//     console.log("==>41", b);
// }
// console.log("==>43", b);

//*******************************************************

// var a = 5;
// if (true) {
//     var a = 7;
//     console.log("==>50", a);
// }
// console.log("==>52", a);

// let b = 5;
// if (true) {
//     let b = 7;
//     console.log("==>57", b);
// }
// console.log("==>59", b);


//*******************************************************

//=====>Hoisting occurs in var.

// console.log(firstName);
// var firstName;

//=====>Hoisting does not occur in let.

// console.log(firstName);
// let firstName;

// var x = 5;
// let y =6;

// x= "suresh";
// y = "patel";

// const x = 5;
// if(true){
//     const x = "suresh";
//     console.log(x);
// }

// console.log(x);














