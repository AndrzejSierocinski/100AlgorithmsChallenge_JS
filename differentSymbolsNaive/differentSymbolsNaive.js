function differentSymbolsNaive(s) {

    const uniqueChars = new Set();
    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars.add(char)
    });
    return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));


// const nonUnique = "cabca";
// const unique = nonUnique.split('').filter(function (item, i, ar) {
//     console.log(item);
//     console.log(i);
//     console.log(ar);
//     console.log(ar.indexOf(item));
//     return ar.indexOf(item) === i;
// });
// console.log(unique.length);

// function makeUnique(str) {
//     return String.prototype.concat(...new Set(str))
//
// }
//
// console.log(makeUnique('cabca').length);
// console.log(makeUnique('abc'));    // "abc"
