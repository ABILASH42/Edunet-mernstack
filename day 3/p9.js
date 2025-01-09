var numbers = [123, 456, 789, 234, 567, 890, 345, 678, 901];

var max = -1;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 100 && numbers[i] <= 999) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
}

console.log("Biggest 3-digit number:", max);