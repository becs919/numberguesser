var randomNumber = Math.floor(Math.random() * 100 + 1)

var lastGuess = document.querySelector(".last-guess");
var tooHighLow = document.querySelector(".too");

var guessSubmit = document.querySelector(".submit-guess");
var guessedNumber = document.getElementById("number-guesser");

var clearFieldButton = document.querySelector(".clear-field");
var resetButton = document.querySelector(".reset-button");

// Submit Button Event Listener
guessSubmit.addEventListener('click', function() {
  lastGuess.innerText = guessedNumber.value;
  compareGuess();
  alertMessage();
 });

// Empty All fields function
 function empltyAllFields(){
   guessedNumber.value = "";
   lastGuess.innerText = "";
   tooHighLow.innerText = "";
 };

// Boom, too high, too low function
function compareGuess () {
  var guessed = parseInt(guessedNumber.value);

  if (guessed === randomNumber) {
    tooHighLow.innerText = "BOOM!";
  } else if (guessed > randomNumber) {
    tooHighLow.innerText = "Too high! Try again!";
  } else if (guessed < randomNumber) {
    tooHighLow.innerText = "Too low! Try again!";
  }
};

// Clear button event listener
clearFieldButton.addEventListener('click', function() {
  guessedNumber.value = "";
 });

//Reset Button event listener
 resetButton.addEventListener('click' , function() {
   empltyAllFields();
   randomNumber = randoNumber();
 });

// Create a new random number function
function randoNumber() {
  var randomNumber = Math.floor(Math.random() * 100 + 1)
  return randomNumber;
};

function alertMessage () {
  var guessed = parseInt(guessedNumber.value);
  if (guessed < 0) {
    alert ("ERROR: Enter a number between 0-100");
    empltyAllFields();
  } else if (guessed > 100) {
    alert ("ERROR: Enter a number between 0-100");
    empltyAllFields();
  }
};
