var count = 0;
var num = 1;
var results = [];

while (count < 5) {
    if (num % 5 === 0) {
        results.push(num);
        count++;
    } else {
        results.push((num + 3) * 5);
    }
    num++;
}

console.log(results);