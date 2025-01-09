var str = "madama";

function isPalindrome(s) {
    var reversedStr = s.split('').reverse().join('');
    return s === reversedStr;
}

if (isPalindrome(str)) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}