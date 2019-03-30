function checkPalindrome(inputString) {
    const originalString = inputString.toLocaleLowerCase();
    const reverseString = originalString.split('').reverse().join('');
    console.log(reverseString);
    return originalString===reverseString
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
