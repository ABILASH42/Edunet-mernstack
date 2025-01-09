var perfectSquares = [];

for (var i = 1; i <= 100; i++) {
    var sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) {
        perfectSquares.push(i);
    }
}

console.log(perfectSquares);