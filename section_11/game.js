//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");

//convert to number
var guess = Number(stringGuess);


//check if guess is right
if (guess === secretNumber) {
    alert("Good job!");
}

//check if guess is to high
else if (guess > secretNumber) {
    alert("Too high");
}

//check if guess is too low
else {
    alert("Too low");
}