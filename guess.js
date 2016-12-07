var randomNumber = Math.floor(Math.random() * 100 + 1)

var lastGuess = document.querySelector(".last-guess");
var tooHighLow = document.querySelector(".too");

var guessSubmit = document.querySelector(".submit-guess");
var guessedNumber = document.getElementById("number-guesser");

var clearFieldButton = document.querySelector(".clear-field");
var resetButton = document.querySelector(".reset-button");

guessSubmit.addEventListener('click', function() {
  lastGuess.innerText = guessedNumber.value;
  compareGuess();
  alertMessage();
 });


function compareGuess () {
  var guessed = parseInt(guessedNumber.value);

  if (guessed === randomNumber) {
    tooHighLow.innerText = "BOOM!";
    tooHighLow.innerHTML = "";
  } else if (guessed > randomNumber) {
    tooHighLow.innerText = "Too high! Try again!";
  } else if (guessed < randomNumber) {
    tooHighLow.innerText = "Too low! Try again!";
  }
};

clearFieldButton.addEventListener('click', function() {
  guessedNumber.value = "";
 });


 resetButton.addEventListener('click' , function() {
   guessedNumber.value = "";
   lastGuess.innerText = "";
   tooHighLow.innerText = "";
   randomNumber = randoNumber();
 });


function randoNumber() {
  var randomNumber = Math.floor(Math.random() * 100 + 1)
  return randomNumber;
};


function alertMessage () {
  var guessed = parseInt(guessedNumber.value);
  if (guessed < 0) {
    alert ("ERROR: Enter a number between 0-100");
  } else if (guessed > 100) {
    alert ("ERROR: Enter a number between 0-100");
  }
};
