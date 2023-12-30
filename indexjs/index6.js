//==> Object Destructuring
// const personObj = {
//     firstName: "suresh",
//     lastName: "patel",
//     age: 27,
//     hobbies: {
//         read: true,
//         playGame: true
//     }
// }

// let firstName = personObj.firstName;
// let lastName = personObj.lastName;
// let age = personObj.age;
// let { firstName = "Not In Object",
//     lastName = "Not In Object",
//     age = "Not In Object",
//     hobbies: { read, playGame },

// } = personObj;
// let { firstName: fName, lastName: lName, age } = personObj;
// console.log(firstName, lastName, age, read, playGame);




//==> Array Destructuring

 //const names = ["suresh", "tom", "jerry", "oggy"];

 const names = ["suresh",[ "tom", "jerry", "oggy"]];

// let elZero = names[0];
// let elOne = names[1];
// let elTwo = names[2];
// let elThree = names[3];

// let [elZero, elOne, elTwo, elThree] = names;
let [elZero,[ elOne, elTwo, elThree]] = names;

console.log(elZero);
console.log(elOne);
console.log(elTwo);
console.log(elThree);

// console.log(elZero, elOne, elTwo, elThree);



