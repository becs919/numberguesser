var randomNumber = Math.floor(Math.random() * 100 + 1)
var lastGuess = document.querySelector(".last-guess");
var tooHighLow = document.querySelector(".too");
var guessSubmit = document.querySelector(".submit-guess");
var guessedNumber = document.getElementById("number-guesser");
var clearFieldButton = document.querySelector(".clear-field");
var resetButton = document.querySelector(".reset-button");
var newMinValue = document.getElementById("min");
var newMaxValue = document.getElementById("max");
var newValueButton = document.querySelector(".new-value-button");
var max = 100;
var min = 0;


// Submit Button Event Listener
guessSubmit.addEventListener('click', function() {
  lastGuess.innerText = guessedNumber.value;
  compareGuess();
  alertMessage();
  document.querySelector(".reset-button").disabled = false;
 });
// Empty All fields function
 function emptyAllFields(){
   guessedNumber.value = "";
   lastGuess.innerText = "";
   tooHighLow.innerText = "";
 };
// Boom, too high, too low function
function compareGuess () {
  var guessed = parseInt(guessedNumber.value);

  if (guessed === randomNumber) {
    tooHighLow.innerText = "BOOM!";
    max = (max+10);
    alert ("Congratulations! Now your maximum range is increased by 10. New maximum is max.value");
    randomNumber = newRandomNumber();
  } else if (guessed > randomNumber) {
    tooHighLow.innerText = "Too high! Try again!";
  } else if (guessed < randomNumber) {
    tooHighLow.innerText = "Too low! Try again!";
  } else  {
    alert ("ERROR: Enter a number between 0-100");
    emptyAllFields();
  }
};
// Clear button event listener
clearFieldButton.addEventListener('click', function() {
  guessedNumber.value = "";
  newMaxValue.value = "";
  newMinValue.value = "";
  document.querySelector(".clear-field").disabled = true;
 });
 guessedNumber.addEventListener('keyup', function() {
   clearButtonDisable();
  });
//Reset Button event listener
 resetButton.addEventListener('click' , function() {
   emptyAllFields();
   randomNumber = newRandomNumber();
   max = 100;
   document.querySelector(".reset-button").disabled = true;
 });
//Assign new random number function
function newRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100 + 1)
  return randomNumber;
};
// Alert Message function
function alertMessage () {
  var guessed = parseInt(guessedNumber.value);
  if (guessed < 0) {
    alert ("ERROR: Enter a number between 0 to 100");
    emptyAllFields();
  } else if (guessed > 100) {
    alert ("ERROR: Enter a number between 0 to 100");
    emptyAllFields();
  }
};
// Disable clear button
function clearButtonDisable() {
  if (guessedNumber.value === "") {
    document.querySelector(".clear-field").disabled = true;
  } else {
    document.querySelector(".clear-field").disabled = false;
  }
};
// Assign new min/max with user input
newValueButton.addEventListener("click", function(){
  min = parseInt(newMinValue.value);
  max = parseInt(newMaxValue.value);
  randomNumber = changeRange(min, max);
});
// Console log new min and max
function changeRange (min,max) {
  console.log(min, max);
  return Math.floor(Math.random() * (max - min)) + min;
}
