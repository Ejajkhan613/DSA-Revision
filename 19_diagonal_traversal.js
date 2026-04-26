// Traverse the matrix in a given patter
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12

// if k = 6
// Output
// 2 6 12
// 10 6 4

let matrix = [
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];

let k = 6;

let row, col;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == k) {
            row = i;
            col = j;
        }
    }
}
let d1_formula = row-col;
let d2_formula = row+col;

let d1 = "";
let d2 = "";

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (i-j == d1_formula) {
            d1 += matrix[i][j] + " ";
        }

        if (i+j == d2_formula) {
            d2 += matrix[i][j] + " ";
        }
    }
}

console.log(d1, d2)