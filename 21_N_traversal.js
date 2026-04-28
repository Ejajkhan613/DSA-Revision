// Traverse in N Pattern

// [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ];

// output: 21 16 11 6 1 7 13 19 25 20 15 10 5

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let M = matrix.length;
let N = matrix[0].length;

let ans = "";

let col = 0;
let row = M - 1;

while (row >= 0) {
    ans += matrix[row][col] + " ";
    row--;
}

col = 1;
row = 1;

while (row < M) {
    ans += matrix[row][col] + " ";
    row++;
    col++;
}

col = N - 1;
row = M - 2;

while (row >= 0) {
    ans += matrix[row][col] + " ";
    row--;
}

console.log(ans);
