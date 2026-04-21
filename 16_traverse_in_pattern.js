// Traverse the matrix in a given patter
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12

// Output = 4 3 2 1 5 6 7 8 12 11 10 9

let matrix = [
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];

let ans = "";
for (let col = 0; col < matrix[0].length; col++) {
    for (let row = matrix.length - 1; row >= 0; row--) {
        ans += matrix[row][col] + " ";
    }
}

console.log(ans);