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