// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()-_=+";

var confirmLength = "";

function generatePassword() {
  var confirmLength = (prompt("How many charaters would you like to use in your password?"));
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Your password length needs to be between 8-128 characters. Click 'Generate Password' and try again.");
    var confirmLenth = (prompt("How many characters would you like to use in your password?"));
    alert("Your password will have the correct number of characters.");
    continue;
  }

var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
var confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");
var confirmSymbol = confirm("Click OK to confirm if you would like to include symbols.");

while(confirmUpperCase === false) {
  alert("You must click OK and add uppercase characters to continue.")
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");
}

while(confirmLowerCase === false) {
  alert("You must click OK and add lowercase characters to continue.")
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
}

while(confirmNumber === false) {
  alert("You must click OK and add numbers to continue.")
  var confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");
}

while(confirmSymbol === false) {
  alert("You must click OK and add symbols to continue.")
  var confirmSymbol = confirm("Click OK to confirm if you would like to include symbols.");
}


  // 1. need to create prompts (prompt the user)
  //  a. password length (8 - 128 characters)
  //  b. lowercase, uppercase, number, symbol
  // 2. validate input, at least one character type is selected
  // 3. show generated password

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var symbol = "!@#$%^&*()-_=+";

var passwordCharacters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()-_=+"
}

  let randomPassword = "";
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.confirmLength)];
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



