// Assignment code here

// make id=generate button call function to generate password prompt X
// create prompts to ask user if include upper/lower/num/special characters X
// save prompt returns into variables
// when user has selected all criteria, a password is generated 
// generated password is visible on page

function passwordLength(){
  prompt("How many characters do you want to use in your password? Please enter a number between 8-128", 12);
}

function lowerCaseCharacter(){
  prompt("Do you want to include lower case letters in your password? Type 'yes' or 'no'", 'yes')
}

function upperCaseCharacter(){
  prompt("Do you want to include Upper case letters in your password? Type 'yes' or 'no'", 'yes')
}

function numberCharacter(){
  prompt("Do you want to include numbers in your password? Type 'yes' or 'no'", 'yes')
}

function specialCharacter(){
  prompt("Do you want to include spcecial characters in your password? Type 'yes' or 'no'", 'yes')
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
});