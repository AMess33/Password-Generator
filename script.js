// Assignment code here

// make id=generate button call function to generate password prompt X
// add textbox to prompt
// create prompt to ask user if include upper/lower/num/special characters 
// when user has selected all criteria, a password is generated 
// generated password is visible on page

function promptLength(){
  prompt("How many characters do you want to use in your password? Please enter a number between 8-128");
}
var btn = document.getElementById("generate");
btn.addEventListener('click', Event => {
  promptLength();
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);