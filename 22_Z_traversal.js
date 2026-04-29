// Traverse in Z Pattern

// [
//     [1,  2,  3,  4,   5],
//     [6,  7,  8,  9,  10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ];

// output: 1 2 3 4 5 9 13 17 21 22 23 24 25

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
let row = 0;

while (col < N) {
    ans += matrix[row][col] + " ";
    col++;
}

col = M-2;
row = 1;

while (row < N) {
    ans += matrix[row][col] + " ";
    row++;
    col--;
}

col = 1;
row = M - 1;

while (col < N) {
    ans += matrix[row][col] + " ";
    col++;
}

console.log(ans);
