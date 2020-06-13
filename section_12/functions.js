//alert("hello");

// function isEven() which takes a single numberic argument and 
// returns true if the number is even, and false otherwise

var num = Number(prompt("Give me a number between 1 and 10?"))
//console.log(num);

// function isEven(num) {
//     if(num % 2 === 0) {
//         //return true if even
//         return "true";
//     } 
//     //return false if not even
//     else {
//         return "false";
//     }
// }

//refactored above code
function isEven(num) {
    //var num = Number(prompt("Give me a number between 1 and 10?"))
    return num % 2 === 0;
}


// Write a function factorial() which takes a single numeric argument and returns
// the factorial of that number
function factorial(num) {
    //define a results variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 1; i <= num; i++) {
        result *=  i;
    }
    //return the results variable
    return result;
}

//Write a function kebabToSnake which takes a single kebab-cased string argument
// and retuns the snake_cased version
function kebabToSnake(str) {
    //repalce all dashes with underscores
    var newStr = str.replace(/-/g , '_');
    //return string
    return newStr;

}
