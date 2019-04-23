function sumOddFibonacciNums(num) {
    let result = 0;
    let previous = 0;
    let current = 1;

    while (current <= num) {
        if (current % 2 !== 0) {
            result += current;
        }
        const nextCurrent = current + previous;
        previous = current;
        current = nextCurrent;
    }
    return result;
}

console.log(sumOddFibonacciNums(13));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
//1,3,5,7,9



function sumFibs(num) {
    let start = 0;
    let next = 1;
    let current;
    let sumOdd = 0;
    for (let i = 0; i <= num; i++){
        current = start + next;
        start = next;
        next = current;
        console.log(current);
        if (current % 2 !== 0 && current <= num){
            sumOdd = current + sumOdd;
        }
    }
    return sumOdd + 1;
}

console.log(sumFibs(10));
