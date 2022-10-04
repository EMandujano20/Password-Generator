var characterLength = 8;
var choiceArr = [];


var specialCharacterArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','<','>','/'];
var lowerCasArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function writePassword(){
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if(correctPrompts){
  var password = generatePassword();
  passwordText.value = password;
} else{
  passwordText.value = "";
}
}function generatePassword(){
  var password = "";
  for(var i =0; i< characterLength; i++){
    var randomLetter = Math.floor(Math.random() * choiceArr);
    password = password
  }
  return password;

}

function getPrompts(){
  choiceArr = [];
 
  characterLength = parseInt(prompt("How many characters do yuo want you password to be? (8-128)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength> 128) {
    alert("Character length not valid. 8-128. Please try again");
    return false;
  }
  if(confirm("Would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowerCasArr);
  }
  if(confirm("Would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(upperCasArr);
  } 
  if(confirm("Would you like special characters in your password")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  if(confirm("Would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

