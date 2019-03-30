function chunkyMonkey(arr, size) {
    const nested = [];
    let count = 0;
    while (count < arr.length) {
        nested.push(arr.slice(count, count += size));
    }
    return nested;
    // let nested = [];
    // nested.push(arr.slice(0,size));
    // nested.push(arr.slice(size, arr.length));
    //
    // console.log(nested);
    // return nested
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
