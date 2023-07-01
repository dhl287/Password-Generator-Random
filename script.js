// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  var password = "";

for (var i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * charaters.length);
  password += characters[randomIndex];
}

return password;
}

const password = generatePassword(10);
console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



