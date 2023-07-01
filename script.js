// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()-_=+";

const confirmLength = "";

function generatePassword() {
  var confirmLength = (prompt("How many charaters would you like to use in your password?"));
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Your password length needs to be between 8-128 characters. Click 'Generate Password' again.");
    var confirmLenth = (prompt("How many characters would you like to use in your password?"));
    alert("Your password will have the correct number of characters.")
  }

var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
var confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");
var confirmSymbol = confirm("Click OK to confirm if you would like to include symbols.");

while(confirmUpperCase === false && confirmLowerCase === false && confirmNumber === false && confirmSymbol === false) {
  alert("You must click OK for each type of character to continue.")
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
  var confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");
  var confirmSymbol = confirm("Click OK to confirm if you would like to include symbols.");

}

  // 1. need to create prompts (prompt the user)
  //  a. password length (8 - 128 characters)
  //  b. lowercase, uppercase, number, symbol
  // 2. validate input, at least one character type is selected
  // 3. show generated password

  var randomPassword = ""
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + characters[Math.floor(Math.random() * characters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



