var number = 370;
var sum = 0;
var temp = number;
var numofdigits = number.toString().length;

while (temp > 0) {
    var digit = temp % 10;
    sum += Math.pow(digit, numofdigits);
    temp = Math.floor(temp / 10);
}

if (sum === number) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}