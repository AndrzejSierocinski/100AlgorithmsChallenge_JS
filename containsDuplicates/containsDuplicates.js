// function containsDuplicates(a ) {
//     a = a.sort((a, b) => a - b);
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === a[i + 1]) {
//             return true;
//         }
//     }
//     return false
// }
//
// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));

function containsDuplicates(arr) {
    let map = {};

    for (let i = 0 ; i < arr.length; i++) {
        if (map[arr[i]]) {
            return false;
        }
        map[arr[i]] = true;
    }
    return true;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

// function containsDuplicates(myArray) {
//     return myArray.length === new Set(myArray).size;
// }

// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));
