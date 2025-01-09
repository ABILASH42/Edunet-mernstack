function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

var number = 5;
var result = factorial(number);

console.log("Factorial of " + number + " is " + result);