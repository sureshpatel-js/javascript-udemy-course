

// const names = ["suresh", "tom", "jerry", "oggy"];

//console.log(names[0], names[1], names[2], names[3]);
// console.log(...names);       //  ...names ===>  "suresh", "tom", "jerry", "oggy"

//console.log("suresh", "tom", "jerry", "oggy");

// const cap = ["A", "B", "C"];
// const small = ["a", "b", "c"];

// console.log(cap, small);

// const capAndSmall = small.concat(cap);
// console.log(capAndSmall);
//...cap ===> 'A', 'B', 'C'  ...small===> "a", "b", "c"
// const capAndSmall = [...cap, ...small];
// console.log(capAndSmall);

// const obj1 = { x: 1, y: 2 };  // ...obj1  ===> x : 1, y : 2
// const obj2 = { z: 3 };  // ...obj2 ===> z : 3

// const  obj3 = { 
//     x : 1, 
//     y : 2,
//     z : 3
// }
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//   ...arr ===> a, b, c, d

// function printNumber(a, b, c, d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     // for (var el of arr) {
//     //     console.log(el);
//     // }
// }

// printNumber("one", "two", "three", "four");

function printNumber(...arr) {
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    for (var el of arr) {
        console.log(el);
    }
}

printNumber("one", "two", "three", "four","five");
