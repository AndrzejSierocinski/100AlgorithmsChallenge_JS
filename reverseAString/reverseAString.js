function reverseAString(str) {
    let reversedWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
        console.log(reversedWord);
    }
    return reversedWord;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));

/*
function reverseAString(str) {
    let reversedStr = str.toString().split('');
    return reversedStr.reverse().join('')
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));*/

