// Assignment code here
const absLength = 8;
const absLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const absNumbers = "0123456789";
const absSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const absMinLength = 8;
const absMaxLength = 128;

var advancedForm = document.getElementById("advancedForm");
advancedForm.onsubmit = function(e) { e.preventDefault(); }

var password = {
  length: 8,
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: " !\"#$%&'()*+,-./:;&lt;=>?@[\\]^_`{|}~",

  generate: function(allowedChars) {
    var charsArray = allowedChars.split("");
    var generatedPassword = [];
    for (i = 0; i < this.length; i++) {
      var nextChar = charsArray[Math.floor(Math.random() * charsArray.length)]
      //debugger;
      generatedPassword.push(nextChar);
    }
    var repCommas = /\,/gi;
    return generatedPassword.toString().replace(repCommas, "");
  }
}

function resetAdvancedFields() {
  document.getElementById("allowed-length").value = absLength;
  document.getElementById("allowed-letters").value = absLetters;
  document.getElementById("allowed-numbers").value = absNumbers;
  document.getElementById("allowed-special").value = absSpecial;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

// Write password to the #password input
function writePassword() {

  length = document.getElementById("allowed-length").value;
  letters = document.getElementById("allowed-letters").value;
  numbers = document.getElementById("allowed-numbers").value;
  special = document.getElementById("allowed-special").value;

  var allowedChars = letters + numbers + special;

  var passwordText = document.querySelector("#password");

  passwordText.value = password.generate(allowedChars);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetAdvancedFields);

