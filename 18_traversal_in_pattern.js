// Traverse the matrix in a given patter
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12

// Output = 12 5 4 11 6 3 10 7 2 9 8 1

let matrix = [
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];

let ans = "";
for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = matrix[0].length - 1; col >= 0; col--) {
        ans += matrix[row][col] + " ";
    }
}
console.log(ans)