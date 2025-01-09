var char = 'A,B,C,D,E,F,G';
if (char === char.toUpperCase()) 
    { char = char.toLowerCase(); } 
else {
    char = char.toUpperCase();
}

console.log("Converted character:", char);