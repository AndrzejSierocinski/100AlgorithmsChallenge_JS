function alternatingSums() {
    let evenSum = 0;
    let oddSum = 0;
    let a = [50, 60, 60, 45, 70];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            evenSum += a[i];
        } else {
            oddSum += a[i];
        }
    }
    return [evenSum, oddSum]
}

console.log(alternatingSums());
