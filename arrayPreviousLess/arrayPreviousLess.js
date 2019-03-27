function arrayPreviousLess(items) {
    const lessThanList= [];

    for (let i = items.length - 1; i >= 0; i--) {
        console.log(i);
        for (let j = i; j >= 0; j--) {
            console.log(i);
            console.log(j);
            if (items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                break;
            } else if (j === 0) {
                lessThanList.unshift(-1);
            }
        }
    }

    return lessThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
