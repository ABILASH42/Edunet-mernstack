var numbers = [1,5,2,3,10,9,8,7,6];

for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            var temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers);