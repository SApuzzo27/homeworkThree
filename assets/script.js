// Assignment Code
var generateBtn = document.querySelector("#generate");

//character arrays
var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z",];
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];
var numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var totalCharacters = [];

//confirm variables
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacters;
var confirmNumbers;
var characterCount;

//confirm criteria
function confirmCriteria() {
  characterCount = prompt("How long would you like your password to be?  *Must be between 8 & 128 *");
  // confirm count is atleast 8 and no more than 128 characters or alert user
    if (characterCount < 8 || characterCount > 128 ) {
    alert("Password must be between 8 & 128 characters.");
    characterCount = prompt( "How long would you like your password to be?  *Must be between 8 & 128 *");
    };
  confirmUppercase = confirm("Would you like to include UPPERCASE letters? Select OK if yes, CANCEL if no");
  confirmLowercase = confirm("Would you like to include lowercase letters? Select OK if yes, CANCEL if no");
  confirmNumbers = confirm("Would you like to include numbers? Select OK if yes, CANCEL if no");
  confirmSpecialCharacters = confirm("Would you like to include special characters? Select OK if yes, CANCEL if no");  
    // check that at least one is true or alert user
    if (confirmLowercase || confirmUppercase || confirmNumbers || confirmSpecialCharacters ) {
    }
    else  { 
    alert("You must include ATLEAST one of the following lowercase, uppercase, number, or special charater.");
    confirmUppercase = confirm("Would you like to include UPPERCASE letters? Select OK if yes, CANCEL if no");
    confirmLowercase = confirm("Would you like to include lowercase letters? Select OK if yes, CANCEL if no");
    confirmNumbers = confirm("Would you like to include numbers? Select OK if yes, CANCEL if no");
    confirmSpecialCharacters = confirm("Would you like to include special characters? Select OK if yes, CANCEL if no");  
    }
}

//create final array for password variables
function createFinalArray() {
  if (confirmUppercase) {
    Array.prototype.push.apply(totalCharacters, upperCaseCharacters);
  };
  if (confirmLowercase) {
    Array.prototype.push.apply(totalCharacters, lowerCaseCharacters);
  };   
  if (confirmNumbers) {
    Array.prototype.push.apply(totalCharacters, numbers);
  };
  if (confirmSpecialCharacters) {
    Array.prototype.push.apply(totalCharacters, specialCharacters)
  };
};


//generate password 
function generatePassword(){
  confirmCriteria();
  createFinalArray();
  var password = "";
for (var i = 0; i < characterCount; i++) {
    var character = totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
    password +=character;
  };
totalCharacters = [];
return password
};


//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('password');
  passwordText.textContent = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);