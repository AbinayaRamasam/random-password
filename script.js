let passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghjklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/ "
const allChar = upperCase + lowerCase + number + symbols;

function createPassword(){
    let passWord = "";
    passWord += upperCase[Math.floor(Math.random() * upperCase.length)];
    passWord += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passWord += number[Math.floor(Math.random() * number.length)];
    passWord += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > passWord.length){
        passWord += allChar[Math.floor(Math.random() * allChar.length)];

    }
        passwordBox.value = passWord;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")

}