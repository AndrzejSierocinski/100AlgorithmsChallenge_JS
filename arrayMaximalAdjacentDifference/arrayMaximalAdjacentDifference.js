function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
    console.log(maxDiff);
    for (let i = 0; i < inputArray.length; i++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
              console.log(maxDiff);
        console.log(absoluteDiff);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
              console.log(maxDiff);
        console.log(absoluteDiff);
    }

    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 17, 1, 10]));



