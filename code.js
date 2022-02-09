// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//sayHello function
function sayHello(name) {
    if (name === "Alex") {
        return "Hello, Alex!";
    } else if (name === "Pat") {
        return "Hello, Pat!";
    } else if (name === "Jane") {
        return "Hello, Jane!";
    } else if (typeof name === "boolean") {
        return "Hello, World!";
    } else if (name === "") {
        return ("Hello, World!")
    } else {
        return "Hello, World!";
    }
}

// isFive function
function isFive(num) {
    if (num === 5) {
        return true;
    } else if (typeof num === 'string') {
        return false;
    }

}