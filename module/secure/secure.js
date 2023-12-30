// function checkEmailAndPassword(pEmail, pPassword) {
//     if (pEmail === "suresh@gmail.com" && pPassword === "JerryPatel") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function getToken(pEmail, pPhone) {
//     return pEmail + pPhone;
// }

// module.exports = {
//     checkEmailAndPassword: checkEmailAndPassword,
//     getToken: getToken
// }

exports.checkEmailAndPassword = function (pEmail, pPassword) {
    if (pEmail === "suresh@gmail.com" && pPassword === "JerryPatel") {
        return true;
    } else {
        return false;
    }
}

exports.getToken = function (pEmail, pPhone) {
    return pEmail + pPhone;
}

// module.exports = {
//     checkEmailAndPassword: checkEmailAndPassword,
//     getToken: getToken
// }