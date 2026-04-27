// Traverse the matrix in zig-zag pattern

// [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 1],
//     [3, 2, 5, 4, 6],
//     [7, 8, 9, 1, 2]
// ]

// output = 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

let ans = "";
for (let row = 0; row < matrix.length; row++) {
    if (row % 2 == 0) {
        for (let col = matrix[0].length - 1; col >= 0; col--) {
            ans += matrix[row][col] + " ";
        }
    } else {
        for (let col = 0; col < matrix[0].length; col++) {
            ans += matrix[row][col] + " ";
        }
    }
}

console.log(ans);
