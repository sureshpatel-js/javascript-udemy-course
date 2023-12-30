// var firstName = "suresh";
// console.log("==>4", firstName);
// var firstNameTwo = firstName;
// firstName = "SRESH";
// console.log("==>9", firstName,firstNameTwo);



var personObj = {
    firstName: "Suresh",
    lastName: "Patel",
    books: ["Book 1", "Book 2", "Book 3"]
}

var newPersonTwoObj = {
    firstName: "Suresh",
    lastName: "Patel",
    books: ["Book 1", "Book 2", "Book 3"]
}

// console.log("==>14", personObj);

// var personTwoObj = personObj;
// personObj.firstName = "Tome";
// console.log("==>17", personObj);
// console.log("==>18", personTwoObj);

var newBooksArray = personObj.books;
newBooksArray[0] = " Book 100";
// var newFirstName = personObj.firstName;
// newFirstName = "Tome";
console.log("==>25", personObj, newBooksArray);









