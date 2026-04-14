// Smallest and Largest of all

// Given an array, 'arr' which has 'N' integers.

// You need to print the smallest and largest element present in the array each on new lines.

let arr = [1, 2, 3, 4, 5];

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
        max = arr[i];
    }
}

console.log(min);
console.log(max);