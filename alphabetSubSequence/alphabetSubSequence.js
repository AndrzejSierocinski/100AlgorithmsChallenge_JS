function alphabetSubsequence(s) {
    const chars = s.split('');
    const charValues = [];

    chars.forEach(function (char) {
        // charValues.push(char.charCodeAt(0));
        console.log(charValues.push(char.charCodeAt(0)));
        console.log(charValues);
        }
    );
    if (new Set(charValues).size !== charValues.length) {
        return false;
    }
    for (let i = 0; i < charValues.length - 1; i++) {
        if (charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }
    return true;
}

 console.log(alphabetSubsequence('bgkp'));

// console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));
