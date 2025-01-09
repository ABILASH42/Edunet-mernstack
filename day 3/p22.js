function areAnagrams(str1, str2) {
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

var a = "listen";
var b = "silent";

if (areAnagrams(a, b)) {
    console.log(a + " and " + b + " are anagrams.");
} else {
    console.log(a + " and " + b + " are not anagrams.");
}
