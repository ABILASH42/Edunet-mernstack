var numbers = [12, -7, 5, -3, 9, -2, 0, 4, -1, 2]; 

var positiveNumbers = [];
var negativeNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
    } else if (numbers[i] < 0) {
        negativeNumbers.push(numbers[i]);
    }
}

console.log("Positive numbers:", positiveNumbers);
console.log("Negative numbers:", negativeNumbers);