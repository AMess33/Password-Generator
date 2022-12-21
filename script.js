// Assignment code here

// make id=generate button call function to generate password 
// create prompt for password length 8-128 
// create prompt to ask user if include upper/lower/num/special characters 
// when user has selected all criteria, a password is generated 
// generated password is visible on page

function promptLength(){
  alert("How many characters in your password?");
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