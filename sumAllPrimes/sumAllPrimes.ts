function sumAllPrimes(num: number): number {
    let primesTotal = 0;

    for (let i = 2; i < num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                primesTotal += i;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return primesTotal
}
//2,3,5,7,11,13,17
console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
