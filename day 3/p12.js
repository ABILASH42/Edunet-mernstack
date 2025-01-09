var n = 20;
var fibseries = [];

if (n >= 1) fibseries.push(0);
if (n >= 2) fibseries.push(1);

for (var i = 2; i < n; i++) {
    fibseries.push(fibseries[i - 1] + fibseries[i - 2]);
}

console.log("Fibonacci series up to " + n + " terms:", fibseries);