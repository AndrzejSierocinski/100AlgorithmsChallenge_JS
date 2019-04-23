function uniqueDigitProducts(a) {
    const products = [];

    a.forEach((num) => {
        const product = getDigitProduct(num);
        if (!products.includes(product)) {
            products.push(product);
        }
    });
    return products.length
}

function getDigitProduct(num) {
    const digits = num.toString().split('');
    let product = 1;
    // console.log(digits);
    digits.forEach((digit) => {
        product *= parseInt(digit);
    });
    console.log(product);
    return product
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
