// Assignment code here

// make id=generate button call function to generate password prompt X
// create prompts to ask user if include upper/lower/num/special characters X
// save prompt returns into variable X
// build function to generate password based on user inputs
// generated password is visible on page
var characterCount = 0;
var includeLower = '';
var includeUpper = '';
var includeNumber = '';
var includeSpecial = '';
var passwordCharacters = '';
var password = '';

function passwordLength(){
  characterCount = prompt("How many characters do you want to use in your password? Please enter a number between 8-128", 12);
}

function lowerCaseCharacter(){
  includeLower = prompt("Do you want to include lower case letters in your password? Type 'yes' or 'no'", 'yes')
  if(includeLower == 'yes'){
    includeLower = 'abcdefghijklmnopqrstuvwxyz';
  }
  else {
    includeLower = '';
  }
}

function upperCaseCharacter(){
  includeUpper = prompt("Do you want to include Upper case letters in your password? Type 'yes' or 'no'", 'yes')
  if(includeUpper == 'yes'){
    includeUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  else {
    includeUpper = '';
  }
}

function numberCharacter(){
  includeNumber = prompt("Do you want to include numbers in your password? Type 'yes' or 'no'", 'yes')
  if(includeNumber == 'yes'){
    includeNumber = '0123456789';
  }
  else {
    includeNumber = '';
  }
}

function specialCharacter(){
  includeSpecial = prompt("Do you want to include spcecial characters in your password? Type 'yes' or 'no'", 'yes')
  if(includeSpecial == 'yes'){
    includeSpecial = "!@#$%^&*()";
  }
  else {
    includeSpecial = '';
  }
}

function generatePassword(){
  passwordCharacters = includeLower + includeNumber + includeUpper + includeSpecial;
  for (var i=0; i <= characterCount; i++){
    var randomNumber = Math.floor(Math.random() * characterCount.length);
    password += passwordCharacters.substring(randomNumber, randomNumber +1);
  }
}
// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var btn = document.getElementById("generate");
btn.addEventListener('click', Event => {
  passwordLength();
  lowerCaseCharacter();
  upperCaseCharacter();
  numberCharacter();
  specialCharacter();
  generatePassword();
  writePassword();
});