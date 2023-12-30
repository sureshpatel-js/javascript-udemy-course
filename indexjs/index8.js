// function demoFunction(x, y) {
//     return x + y
// };

// var res = demoFunction(2, 4);
// console.log(res);


// var demoFunctionOne = function (x, y) { return x + y };

// var res = demoFunctionOne(2, 4);
// console.log("==>res-14", res);



// // var demoFunctionTwo = (x, y) =>  x + y

// var demoFunctionTwo = (x, y) => {
//     return x + y
// }

// var res = demoFunctionTwo(2, 4);
// console.log("==>res-23", res);


// var demoFunctionOne = function (...arr) {
//     console.log(arr);
// };

// demoFunctionOne(2, 4, 5, 6);


// var demoFunctionOne = function () {
//     console.log(arguments);
// };

// demoFunctionOne(2, 4, 5, 6);



// var demoFunctionTwo = (...arr) => {
//     console.log(arr);
// }

//  demoFunctionTwo(2, 4);

//==>Things You Should Avoid With Arrow Functions
//1. You should not use arrow functions to create methods inside objects.

let person = {
    name: 'Jack',
    age: 25,
    sayName: function () {

        console.log(this.age);
    }
}

//2. You cannot use an arrow function as a constructor. For example,

function Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

var suresh = new Person("suresh", 27);
console.log(suresh);







