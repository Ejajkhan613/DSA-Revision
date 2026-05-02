// Traverse in Circular Pattern

// [
//     [1,  2,  3,  4,   5],
//     [6,  7,  8,  9,  10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ];

// output: 21 16 11 6 1 2 3 4 5 10 15 20 25 24 23 22

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let N = matrix.length;
let M = matrix[0].length;

let ans = "";

let col = 0;
let row = N - 1;

while (row >= 0) {
    ans += matrix[row][col] + " ";
    row--;
}

col = 1;
row = 0;

while (col < M) {
    ans += matrix[row][col] + " ";
    col++;
}

col = M - 1;
row = 1;

while (row < N) {
    ans += matrix[row][col] + " ";
    row++;
}

row = N - 1;
col = M - 1;

while (col >= 1) {
    ans += matrix[row][col] + " ";
    col--;
}

console.log(ans);
