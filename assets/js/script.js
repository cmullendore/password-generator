// Assignment code here
const absLength = 8;
const absLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const absNumbers = "0123456789";
const absSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const absMinLength = 8;
const absMaxLength = 128;


var password = {
  length: 8,
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: " !\"#$%&'()*+,-./:;&lt;=>?@[\\]^_`{|}~",

  generate: function() {
    var charsArray = (this.letters + this.numbers + this.special).split("");
    if (charsArray.length < 10) {
      return 'Insufficient number of possible characters provided.';
    }
    
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

  password.length = document.getElementById("allowed-length").value;
  password.letters = document.getElementById("allowed-letters").value;
  password.numbers = document.getElementById("allowed-numbers").value;
  password.special = document.getElementById("allowed-special").value;

  var passwordText = document.querySelector("#password");

  passwordText.value = password.generate();

}

var advancedForm = document.getElementById("advancedForm");
advancedForm.onsubmit = function(e) { e.preventDefault(); }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetAdvancedFields);

