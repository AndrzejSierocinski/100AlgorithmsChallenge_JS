function minimalNumberOfCoins(coins, change) {

    const minChange = [[0]];
    if (coins.indexOf(change) >= 0) {
        return [change];
    }
    for (let i = 1; i <= change; i += 1) {
        for (let j = 0; j < coins.length && coins[j] <= change; j += 1) {
            for (let k = 0; k < minChange.length; k += 1) {
                if (k + coins[j] === i) {
                    minChange[i] = minChange[k].concat([coins[j]]);
                }
            }
        }
    }
    const result = minChange[change];
    if (!result) {
        return undefined;
    }
    return result.slice(1);
}

console.log(minimalNumberOfCoins([1, 2, 10], 28).length);
