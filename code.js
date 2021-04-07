// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(name) {
    if (typeof name === "string") {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}

// isFive function
function isFive(input){
    return input === 5;
}

// isEven function
function isEven(num){
    if (parseFloat(num) % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

// isVowel function
function isVowel(vowel){
    if (typeof vowel === "number"){
        return false;
    }else if (vowel === "a" || vowel === "A") {
        return true;
    } else {
        return false;
    }
}

// Add function
function add(x,y) {
    var firstNum = parseFloat(x);
    var secondNum = parseFloat(y);
    var totalAdd = firstNum + secondNum;
    var notANumber = x + y;
    if (isNaN(notANumber) === true) {
        return true;
    } else {
        return totalAdd;
    }
}