/** @format */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// password object
var passwordOptions = {
  // Arrays for password options
  // 0 to 9 numbers
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  // 0 to 10 special characters
  specialChars: ["!", "@", "#", "$", "%", "^", "&", "*", "/", "~"],
  // 0 to 25 lowercase characters
  lowerLetterChars: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  // 0 to 25 uppercase characters
  upperLetterChars: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
};

function generatePassword() {
  // get password parameters from user and check if valid
  var howManyChar = prompt("How many characters for the password?");
  var password = Array(howManyChar);
  // if out of range
  if (howManyChar < 8 || howManyChar > 128) {
    alert("Invalid: must be between 8 and 128 characters");
    return null;
  }
  var isSpecialChar = confirm("Use special characters?");
  var isNumber = confirm("Use numbers?");
  var isLowerCase = confirm("Use lowercase letters?");
  var isUpperCase = confirm("Use uppercase letters?");
  // if no conditions are choosen
  if (!isSpecialChar && !isNumber && !isLowerCase && !isUpperCase) {
    alert("Invalid: no password parameters choosen.");
    return null;
  }

  // loop for random character generation
  for (var i = 0; i < howManyChar; i++) {
    var randPasswordType = Math.floor(Math.random() * 4);
    // OPTION 1: add a special character
    if (randPasswordType === 0 && isSpecialChar) {
      // password gets 1 random special character
      password[i] = passwordOptions.specialChars[Math.floor(Math.random() * 10)];
    }
    // OPTION 2: add a number
    else if (randPasswordType === 1 && isNumber) {
      password[i] = passwordOptions.numbers[Math.floor(Math.random() * 9)];
    }
    // OPTION 3: add a lowercase character
    else if (randPasswordType === 2 && isLowerCase) {
      password[i] = passwordOptions.lowerLetterChars[Math.floor(Math.random() * 25)];
    }
    // OPTION 4: add a uppercase character
    else if (randPasswordType === 3 && isUpperCase) {
      password[i] = passwordOptions.lowerLetterChars[Math.floor(Math.random() * 25)];
    }
    // IF broken somehow
    else {
      alert("The random password generator ran into a fatal error!");
    }
  }
  alert(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
