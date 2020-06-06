// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet?");
// }

// alert("YAY, We made it!");


//Version 2 - uses indexOf to check if the word "yes" is used in the answer
var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}

alert("YAY, We made it!");
