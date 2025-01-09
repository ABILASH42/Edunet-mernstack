var numbers = [5,3,8,3,1,5,7,8,2,1,4,5,7,8,9,2,1,2,124123,12,234,41,]; 
var uniqueNumbers = Array.from(new Set(numbers));

// Sort the array in ascending order
for (var i = 0; i < uniqueNumbers.length; i++) {
    for (var j = i + 1; j < uniqueNumbers.length; j++) {
        if (uniqueNumbers[i] > uniqueNumbers[j]) {
            var temp = uniqueNumbers[i];
            uniqueNumbers[i] = uniqueNumbers[j];
            uniqueNumbers[j] = temp;
        }
        }
    }
    console.log(uniqueNumbers);