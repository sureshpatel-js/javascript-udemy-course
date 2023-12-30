var http = require("http");
//Port 0 - 65535
var usersArray = [
    { id: 1, name: "suresh", email: "suresh@gmail.com" },
    { id: 2, name: "tom", email: "tom@gmail.com" },
    { id: 3, name: "jerry", email: "jerry@gmail.com" },
    { id: 4, name: "oggy", email: "oggy@gmail.com" }
]

var server = http.createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    var url = request.url;
    console.log(request.method);
    //===>/users/1
    var urlArray = url.split("/");
    var id = urlArray[2];

    if (id) {

        for (var i = 0; i < usersArray.length; i = i + 1) {
            if (usersArray[i].id === parseInt(id)) {
                break;
            }
        }
        if (i === usersArray.length) {
            response.write("User with given id not found");
            response.end();
        } else {
            var user = usersArray[i];
            var jsonStr = JSON.stringify(user);
            response.write(jsonStr);
            response.end();
        }

        //Filter and send user of given id
    } else {
        //send all users
        var jsonStr = JSON.stringify(usersArray);
        response.write(jsonStr);
        response.end();
    }
});

server.listen(3000, function () {
    console.log("Server is running on 3000");
});

//http://localhost:3000
