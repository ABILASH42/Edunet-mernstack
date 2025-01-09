var inputString = "1,2,3,4,5,6,7,8,9,1,0,1,1,1,2";

var numbers = inputString.match(/\d+/g);

var evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);
