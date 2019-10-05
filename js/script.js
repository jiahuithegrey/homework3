var numberString = "0123456789";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialString = "!#$%&()*+,-./:;<=>?@[\]^_`{|}'~";
var password = "";
var random = "";
var result = document.getElementById("password");

function generate(){
    var totalNum = prompt("How many characters do you want? (8-128)");
    var numChar = confirm("Do you want numeric characters?");
    var lowerChar = confirm("Do you want lower characters?");
    var upperChar = confirm("Do you want upper characters?");
    var specialChar = confirm("Do you want special characters?");

    if (numChar === true) {
        password=password + numberString;
    }
    if (lowerChar === true) {
        password=password + lowerString;
    }
    if (upperChar === true) {
        password=password + upperString;
    }
    if (specialChar === true) {
        password=password + specialString;
    }
    for (var i=0;i<totalNum;i++){
        random += password.charAt(Math.floor(Math.random() * password.length));
        }
        console.log(random);
        result.textContent = random;
}
function copyPassword(){
    var copyText = document.getElementById("password");
        
        copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the password " + copyText.value + "!");
}
