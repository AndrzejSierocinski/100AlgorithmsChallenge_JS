function characterParity(symbol) {
    const result = parseInt(symbol)
    console.log(result);
    return isNaN(symbol) ? 'not a dihit' : result % 2 === 0 ? 'odd' : 'even'

}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
