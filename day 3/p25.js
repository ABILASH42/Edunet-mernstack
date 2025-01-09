var str1 = "aflah";
var str2 = "ali";
var vowels = "aeiouAEIOU";
var concatenatedVowels = "";
var concatenatedConsonants = "";


for (var i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i])) {
        concatenatedVowels += str1[i];
    }
}


for (var j = 0; j < str2.length; j++) {
    if (!vowels.includes(str2[j])) {
        concatenatedConsonants += str2[j];
    }
}

console.log("Concatenated Vowels from str1:", concatenatedVowels);
console.log("Concatenated Consonants from str2:", concatenatedConsonants);