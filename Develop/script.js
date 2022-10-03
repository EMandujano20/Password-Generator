var generateBtn = document.querySelector("#generate");
function generatePassword() {
const length = prompt("How many characters in your pass word?(8-128 characters)");
if (length >= 8 && length <=128);
const lconfirm=confirm("Include Lowcase Characters?");
const uconfirm=confirm("Include Uppercase Characters?");
const nuconfirm=confirm("Include Numeric characters?");
const speconfirm=confirm("Incude Special Characters?")

if (lconfirm||uconfirm||nuconfirm||speconfirm){
  const lconfirm =(
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
    "z",);
    
}


}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
