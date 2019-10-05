alert("Time to create a password!");
var charNum = prompt("How many characters do you want? (8-128)");
function generate(){
    var values = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var password;
    for (var i=0;i<charNum.length;i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;
}
function copyPassword(){
    document.getElementById("display").querySelector();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
}