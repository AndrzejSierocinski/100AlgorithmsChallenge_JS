function commonCharacterCount(s1: string, s2: string): number {
    const s1Chars: string[] = s1.split('');
    const s2Chars: string[] = s2.split('');
    const s1CharCount = getCharList(s1Chars);
    const s2CharCount = getCharList(s2Chars);
    let total = 0;

    for (const prop in s1CharCount) {
        if (s2CharCount.hasOwnProperty(prop)) {
            if (s2CharCount[prop] < s1CharCount[prop]) {
                total += s2CharCount[prop]
            } else {
                total += s1CharCount[prop]
            }
        }
    }
    return total;
}

function getCharList(chars: string[]): object {
    const wordCount = {};

    for (let i = 0; i < chars.length; i++) {
        if (wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
    }
    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));



/*
function commonCharacterCount(s1, s2) {
    let string1 = s1.split('');
    let string2 = s2.split('');
    let common = 0;
    console.log(string1);
    console.log(string2);

    for (let i = 0; i < string1.length; i++) {
        //console.log(string2.indexOf(string1[i]));
        if (string2.indexOf(string1[i]) >= 0) {
            common++;
            string2.splice(string2.indexOf(string1[i]), 1);
            //console.log(string2);
        }
    }
    return common;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));*/
