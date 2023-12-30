var names = ["suresh", "tom", "jerry", "oggy"];

var find = "tom";

for (var i = 0; i < names.length; i = i + 1) {
    if (names[i] === find) {
        console.log(names[i]);
        break;
    }
    console.log(i);
}
console.log(i)
console.log("finally done");