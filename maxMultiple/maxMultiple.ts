function maxMultiple(divisor: number, bound: number): number  {

    let remainder = bound % divisor;
    console.log(remainder);
    return bound - remainder;
}

console.log(maxMultiple(3,10));
