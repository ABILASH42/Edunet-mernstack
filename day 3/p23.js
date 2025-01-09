var str = "missisipi";
var charCount = {};


for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);